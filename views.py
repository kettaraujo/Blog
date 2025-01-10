from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Post
from .forms import PostForm

def index(request):
    posts = Post.objects.all().order_by('-created_at')
    return render(request, 'blog/index.html', {'posts': posts})

def new_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save()
            return JsonResponse({'id': post.id, 'title': post.title, 'content': post.content, 'created_at': post.created_at.strftime('%d/%m/%Y, %H:%M')})
    return JsonResponse({'error': 'Invalid form data'}, status=400)

