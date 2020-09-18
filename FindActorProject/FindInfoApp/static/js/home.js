let contentsBox = document.querySelector('.contents');
let count = 0;

const clickedSearchBtn = async () => {
  await giveActorObject()
    .then((data) => {
      let actor = data.peopleListResult.peopleList[0].peopleNm;
      let actorName = document.createTextNode(`${actor}님`);
      let nameBox = document.createElement('h1');
      let createDiv = document.createElement('div');
      createDiv.classList.add('actorInfoPackage');
      contentsBox
        .appendChild(createDiv)
        .appendChild(nameBox)
        .appendChild(actorName);

      let text = document.createTextNode('🔍영화 찾아보기');
      let textBox = document.createElement('button');

      contentsBox.appendChild(createDiv).appendChild(textBox).appendChild(text);

      textBox.setAttribute(
        'value',
        `${data.peopleListResult.peopleList[0].peopleCd}`
      );
      textBox.setAttribute('onClick', 'ClickedMoreBtn(this);');

      let actorEngName = document.createTextNode(
        data.peopleListResult.peopleList[0].peopleNmEn
      );
      let RoleNm = document.createTextNode(
        data.peopleListResult.peopleList[0].repRoleNm
      );

      let actorInfo = document.createElement('div');
      actorInfo.classList.add('actorInfo');

      let actorInfoBox1 = document.createElement('h4');
      let actorInfoBox2 = document.createElement('h4');

      contentsBox
        .appendChild(createDiv)
        .appendChild(actorInfo)
        .appendChild(actorInfoBox1)
        .appendChild(actorEngName);

      contentsBox
        .appendChild(createDiv)
        .appendChild(actorInfo)
        .appendChild(actorInfoBox2)
        .appendChild(RoleNm);
    })
    .catch((error) => {
      console.log(`에러 발생 ${error.name}:${error.message}`);
      alert('제대로된 이름을 입력해주세요');
    });
};

const giveActorObject = async () => {
  let actorName = document.actorNameForm.actorNameInput.value;
  const key = '?key=6c0c06137f3cf333d4bde6dbc28d7bdc';
  let peopleNm = `&peopleNm=${actorName}`;
  const url =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json' +
    key +
    peopleNm;

  const response = await fetch(url);
  return await response.json();
};

const ClickedMoreBtn = async (clickedValue) => {
  console.log(clickedValue);
  await showMeTheActorCode(clickedValue).then((info) => {
    console.log(info);
  });
};

const showMeTheActorCode = async (clickedValue) => {
  let peopleCd = clickedValue.value;
  console.log(peopleCd);
  await searchMoreInfo(peopleCd)
    .then((data) => {
      for (const movie of data.peopleInfoResult.peopleInfo.filmos) {
        let movieNm = movie.movieNm;
        let movieCd = movie.movieCd;
        let moviePartNm = movie.moviePartNm;
        let sendInfo = movieNm + '  |  ' + moviePartNm + '  |  ' + movieCd;

        let movieText = document.createElement('h4');

        let actorInfopackage = document.querySelectorAll('.actorInfoPackage');

        actorInfopackage[count]
          .appendChild(movieText)
          .appendChild(document.createTextNode(sendInfo));
      }
      count++;
    })
    .catch((error) => console.log(`에러 발생 ${error.name}:${error.message}`));
};

const searchMoreInfo = async (peopleCd) => {
  let UsingPeopleCd = `&peopleCd=${peopleCd}`;
  const key = '?key=6c0c06137f3cf333d4bde6dbc28d7bdc';
  const infoUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json' +
    key +
    UsingPeopleCd;
  console.log(infoUrl);
  const responseInfo = await fetch(infoUrl);
  return await responseInfo.json();
};
