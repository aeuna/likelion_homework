from django.shortcuts import render
import random

def team(request):
    name = ['이은아','강채원','김재훈','김지은','김희찬','김진우','이예빈','이명환','박지윤','서바다','강민지','우인아','이민정','정지원','차주희']
    random.shuffle(name)
    team1 = name[0:3]
    team2 = name[3:6]
    team3 = name[6:9]
    team4 = name[9:12]
    team5 = name[12:15]
    # 'n1' :range(0,3), 'n2': range(3,6), 'n3':range(6,9), 'n4':range(9,12), 'n5':range(12,15)
    return render(request, 'team.html', {"name" : name , "team1" : team1, "team2" : team2,  "team3" : team3,  "team4" : team4 ,  "team5" : team5 })