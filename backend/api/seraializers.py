from rest_framework import serializers
from .models import User, Movie


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'last_login', 'first_name', 'last_name', 'email', 'photo', 'bio', 'is_active', 'is_staff', 'is_superuser']
        read_only_field = ['is_active', 'is_staff', 'is_superuser']


class MovieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Movie
        fields = ['title', 'cover', 'teaser', 'rating', 'country', 'genre', 'tagline', 'director', 'screenwriter', 'producer', 
                  'operator', 'composer', 'artist', 'edit', 'fees', 'premiere', 'age', 'duration', 'actors']
