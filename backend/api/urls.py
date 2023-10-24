from rest_framework.routers import DefaultRouter

from .views import UserViewSet, MovieViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'movies', MovieViewSet)

urlpatterns = router.urls
