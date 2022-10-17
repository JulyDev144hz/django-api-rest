from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class Task(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=555)
    done= models.BooleanField()

    def __str__(self):
        return self.name