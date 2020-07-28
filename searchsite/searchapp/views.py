from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView,UpdateView,DeleteView
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect
from django.db.models import Q
from .models import Blog
# Create your views here.

class index(ListView):
    template_name = 'index.html'
    context_object_name = 'blog_list'
    def get_queryset(self):
        return Blog.objects.all

class detail(DetailView):
    model = Blog
    template_name = 'detail.html'
    context_object_name = 'blog'

class delete(DeleteView):
    model = Blog
    template_name = 'delete.html'
    context_object_name = 'blog'
    success_url = reverse_lazy('index')

class update(UpdateView):
    model = Blog
    template_name = 'update.html'
    fields = ['title','text']
    success_url = reverse_lazy('index')

class create(CreateView):
    model = Blog
    template_name = 'create.html'
    fields = ['title','text']
    def form_valid(self,form):
        Blog = form.save(commit=False)
        Blog.author = self.request.user
        Blog.save()

        return HttpResponseRedirect(self.request.POST.get('next','/'))

def result(request):
    BlogPosts = Blog.objects.all()
    query = request.GET.get('query','') 
    search_type = request.GET.get('type','')
    if query:
        if search_type == 'all':
            BlogPosts = BlogPosts.filter(Q(title__icontains=query)| Q(text__icontains=query) | Q(author__username__icontains=query)).order_by('-time')
        elif search_type == 'title':
            BlogPosts = BlogPosts.filter(title__icontains=query).order_by('-time')
        elif search_type == 'text':
            BlogPosts = BlogPosts.filter(text__icontains=query).order_by('-time')
        elif search_type == 'author':
            BlogPosts = BlogPosts.filter(author__username__icontains=query).order_by('-time')
        result_num = len(BlogPosts)
    return render(request, 'result.html',{'BlogPosts':BlogPosts , 'query':query, 'result_num':result_num})
