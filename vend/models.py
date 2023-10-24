from django.db import models

# Create your models here.


class drink(models.Model):
    foreignkey = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    amount = models.IntegerField()
    total = models.IntegerField()
    price = models.IntegerField()
    type = models.CharField(max_length=100)

class vendmachine(models.Model):
    foreignkey = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    place = models.CharField(max_length=100)
    temperature = models.IntegerField()

    
    