from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    publication_date = models.DateField()
    isbn = models.CharField(max_length=13, unique=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()


class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, password=None, is_admin=False, **extra_fields):
        if not email or not name:
            raise ValueError('Please provide both email and name')
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, is_admin=is_admin, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None, **extra_fields):
        extra_fields.setdefault('is_admin', True)
        return self.create_user(email, name, password, is_admin=True, **extra_fields)

class CustomUser(AbstractBaseUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    is_admin = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email