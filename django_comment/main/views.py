from django.views import generic
from .models import Post, Comment
from .forms import CommentForm
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages
from django.shortcuts import render, get_object_or_404, redirect

class IndexView(generic.ListView):
    template_name = 'home.html'
    context_object_name = 'post'
    def get_queryset(self): #ListView에서 사용-표시 하려는 개체 목록을 결정한다. 
        return Post.objects.all()

class DetailView(generic.DetailView): #여러개 항목에서 하나 항목 url 숫자 인식해서 가져오는 pk필요 없이
    model = Post #queryset = Post.objects.all()이랑 같은 기능
    template_name = 'detail.html'
    context_object_name='ppost'
    def get_context_data(self, **kwargs): #오버라이딩 #커멘트를 같이 보내기 위해서 #다른데이터를 담아서 더 전달하고 싶으면 쓴다!! #kwargs는 pk인자를 가져오기 위해
        context_data = super(DetailView, self).get_context_data(**kwargs) #여기까지는 ppost를 가지고 있고 아래부터 추가 데이터들..
        context_data['form'] = CommentForm() #form을 통해 템플릿에서 쓰는것이 가능
        context_data['comments']= self.object.comment_set.all() #self.object -> 가져오는 post // comment_set을 통해 그 post의 댓글 여러개를 가져옴 (fk)들
        return context_data

def comment_create(request, post_id):
    if not request.user.is_anonymous: #is_authenticated와 같음 로그인 했니?
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False) #content내용을 넣는데 db에는 저장하지 말고 가지고 있어라
            comment.author = request.user
            comment.post_id = post_id
            comment.save() #save함수는 commit=True가 default 
        else:
            messages.info(request,"올바르지 않은 댓글 형식 입니다.")
    else:
        messages.info(request, "로그인이 필요합니다.")
    return HttpResponseRedirect(reverse('detail', args=(post_id,)))

def comment_update(request, post_id, comment_id):
    comment = get_object_or_404(Comment, pk=comment_id)
    if request.user != comment.author:
        messages.info(request, "권한 없음")
        return HttpResponseRedirect(reverse('detail', args=(post_id,)))
    if request.method == "POST":
            form  = CommentForm(request.POST, instance=comment)
            if form.is_valid():
                comment = form.save() #content내용을 넣는데 db에는 저장하지 말고 가지고 있어라
                comment.save() #save함수는 commit=True가 default 
                return HttpResponseRedirect(reverse('detail', args=(post_id,)))
    else:
        form = CommentForm(instance=comment)
    return render(request,'update_form.html',{'post_id':post_id , 'comment_id' : comment_id, 'form':form})


def comment_delete(request, post_id ,comment_id):
    comment = get_object_or_404(Comment, pk=comment_id)
    if request.user != comment.author :
        messages.info(request, '댓글 당사자가 아니라 삭제가 되지 않습니다')
    else:
        comment.delete()
    return HttpResponseRedirect(reverse('detail', args=(post_id,)))

    


