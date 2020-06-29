from django.shortcuts import render, get_object_or_404, redirect
from .models import Gallery
from django.urls import reverse

# Create your views here.
def main(request):
    gallery = Gallery.objects
    return render(request,'main.html',{'gallery':gallery})

def create(request):
    if request.method == "POST":
        gall_obj = Gallery()
        gall_obj.gallery_name = request.POST['picture_name']
        gall_obj.summary = request.POST['picture_summary']
        gall_obj.photo = request.FILES['picture_img']
        gall_obj.save()
        return redirect('main')
    else:
        pass
    return render(request, 'create.html')

def update(request, change_id):
    change_obj = get_object_or_404(Gallery, pk=change_id)
    if request.method == "POST":
        change_obj.gallery_name = request.POST['picture_name']
        change_obj.summary = request.POST['picture_summary']
        change_obj.photo = request.FILES['picture_img']
        change_obj.save()
        return redirect(reverse('main'))
    else:
        pass
    return render(request,'update.html',{'change_key':change_obj})

def delete(request, delete_id):
    delete_obj = get_object_or_404(Gallery, pk=delete_id)
    delete_obj.delete()
    return redirect('main')

