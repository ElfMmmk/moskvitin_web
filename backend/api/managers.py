from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):
        if first_name is None or last_name is None:
            raise TypeError('Необходимо имя пользователя')
        if email is None:
            raise TypeError('Необходима электронная почта')

        user = self.model(
            email = self.normalize_email(email),
            first_name = first_name,
            last_name = last_name,
        )
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, first_name, last_name, password):
        if password is None:
            raise TypeError('Необходим пароль')
        if email is None:
            raise TypeError('Необходима электронная потча')
        if first_name is None or last_name is None:
            raise TypeError('Необходимо имя пользователя')
        
        user = self.create_user(
            email = self.normalize_email(email),
            first_name = first_name,
            last_name = last_name,
            password=password,
        )

        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save()

        return user
    