from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin

from .managers import UserManager
from .validators import decimal_min_value


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name="Email", unique=True)
    first_name = models.CharField(verbose_name="Имя", max_length=255)
    last_name = models.CharField(verbose_name="Фамилия", max_length=255)
    photo = models.ImageField(verbose_name="Аватарка", upload_to="users/photos",
                              default="../static/images/avatar-placeholder.svg")
    bio = models.TextField(verbose_name="О себе", blank=True)

    is_active = models.BooleanField(verbose_name='Активирован', default=True)
    is_staff = models.BooleanField(verbose_name='Персонал', default=False)
    is_superuser = models.BooleanField(verbose_name='Администратор', default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = UserManager()

    def __str__(self):
        return str(self.email)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'


class Movie(models.Model):
    title = models.CharField(verbose_name='Название', max_length=255)
    cover = models.ImageField(verbose_name='Обложка', upload_to="movies/covers")
    teaser = models.CharField(verbose_name='Тизер (YouTube)', max_length=255)
    rating = models.DecimalField(verbose_name='Рейтинг', max_digits=6, decimal_places=5, validators=[decimal_min_value])
    country = models.CharField(verbose_name='Страна', max_length=255)
    genre = models.CharField(verbose_name='Жанр', max_length=255)
    tagline = models.CharField(verbose_name='Слоган', max_length=255)
    director = models.CharField(verbose_name='Режиссер', max_length=255)
    screenwriter = models.CharField(verbose_name='Сценарист', max_length=255)
    producer = models.CharField(verbose_name='Продюсер', max_length=255)
    operator = models.CharField(verbose_name='Оператор', max_length=255)
    composer = models.CharField(verbose_name='Композитор', max_length=255)
    artist = models.CharField(verbose_name='Художник', max_length=255)
    edit = models.CharField(verbose_name='Монтаж', max_length=255)
    fees = models.PositiveIntegerField(verbose_name='Сборы в мире')
    premiere = models.DateField(verbose_name='Премьера в мире')
    age = models.PositiveIntegerField(verbose_name='Возраст')
    duration = models.PositiveIntegerField(verbose_name='Длительность (в минутах)')
    actors = models.TextField(verbose_name='Актеры')

    def __str__(self):
        return str(self.title)

    class Meta:
        verbose_name = 'Фильм'
        verbose_name_plural = 'Фильмы'
