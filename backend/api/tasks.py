from celery import shared_task
from django.core.mail import send_mail
from .services import save_visit

@shared_task
def stats():
    send_mail(
        "У нас появились новые фильмы!",
        "Спешите увидеть наши новинки",
        "online@kinoteatr.ru",
        ["examplemail@mail.com"],
        fail_silently=False,
    )

@shared_task
def visits():
    save_visit()
