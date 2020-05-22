from django.shortcuts import render
from .models import Youtube

# Create your views here.
def introduction(request):
    youtube = Youtube.objects
    return render(request , 'introduction.html' , {'youtube' : youtube})