from django.db import models

# Create your models here.
class Gallery(models.Model):
    gallery_name = models.CharField(max_length = 50)
    gallery_date = models.DateField(auto_now_add = True)
    summary = models.TextField(max_length=200)
    photo = models.ImageField(upload_to= "image" , blank = True)

    def __str__(self):
        return self.gallery_name