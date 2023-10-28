#!/bin/sh

python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000 && exec "$@"
# echo "Apply app migrations"
# python3 manage.py makemigrations api
# echo "Apply database migrations"
# python3 manage.py migrate
# echo "Starting server"
# python manage.py runserver 0.0.0.0:8000
