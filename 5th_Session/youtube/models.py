from django.db import models

# Create your models here.
class Youtube(models.Model):
    channel_name = models.CharField(max_length = 50)
    creator_name = models.CharField(max_length = 50)
    popularity = models.IntegerField()
    onair = models.BooleanField()
    followers = models.IntegerField()
    link1 = models.TextField()
    link2 = models.TextField()
    link3 = models.TextField()

    def __str__(self):
        return self.channel_name
 