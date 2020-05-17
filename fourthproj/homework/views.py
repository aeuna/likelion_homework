from django.shortcuts import render

# Create your views here.
def idea(request):
    return render(request,'idea.html')