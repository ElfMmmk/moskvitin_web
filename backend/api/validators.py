from django.core.exceptions import ValidationError

def decimal_min_value(value):
    if value >= 1.00000:
        return value
    else:
        raise ValidationError("Значение поля не может быть меньше 1")
    