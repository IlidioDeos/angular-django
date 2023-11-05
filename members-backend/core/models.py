from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=5)
    profile_image = models.ImageField(upload_to='profile_images', blank=True)

# Create your models here. Como aparece no admin
    def __str__(self):
        return self.name + ' - ' + self.email