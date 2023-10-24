from rest_framework.parsers import MultiPartParser
from rest_framework.decorators import parser_classes
from rest_framework.viewsets import ModelViewSet
from django.core.mail import send_mail
from django.dispatch import receiver
from django.db.models.signals import post_save

from .seraializers import UserSerializer, MovieSerializer
from .models import User, Movie


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@parser_classes((MultiPartParser,))
class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    @receiver(post_save)
    def send_mail_on_create(sender, instance=None, created=False, **kwargs):
        if created:
            if (sender == Movie):
                send_mail(
                    "Новый фильм!",
                    "У нас вышел новый фильм, спешите увидеть!",
                    "online@kinoteatr.ru",
                    ["examplemail@mail.com"],
                    fail_silently=False,
                )
