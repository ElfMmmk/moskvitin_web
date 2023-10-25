from celery import shared_task
from django.core.mail import send_mail

@shared_task
def stats():
    send_mail(
        "У нас появились новые фильмы!",
        "Спешите увидеть наши новинки",
        "online@kinoteatr.ru",
        ["examplemail@mail.com"],
        fail_silently=False,
    )
