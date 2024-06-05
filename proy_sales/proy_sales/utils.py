from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator

phone_regex = RegexValidator(regex=r'^\d{9,15}$', message="Caracteres inválidos para un número de teléfono.")
 
def valida_cedula(value):
    cedula = str(value)
    if not cedula.isdigit():
        raise ValidationError('La cédula debe contener solo números.')

    longitud = len(cedula)
    if longitud != 10:
        raise ValidationError('Cantidad de dígitos incorrecta.')

    coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2]
    total = 0
    for i in range(9):
        digito = int(cedula[i])
        coeficiente = coeficientes[i]
        producto = digito * coeficiente
        if producto > 9:
            producto -= 9
        total += producto

    digito_verificador = (total * 9) % 10
    if digito_verificador != int(cedula[9]):
        raise ValidationError('La cédula no es válida.')
      
def valida_numero_entero_positivo(value):
    if not str(value).isdigit() or int(value) <= 0:
        raise ValidationError('Debe ingresar un número entero positivo válido.')

def valida_numero_flotante_positivo(value):
    try:
        valor_float = float(value)
        if valor_float <= 0:
            raise ValidationError('Debe ingresar un número flotante positivo válido.')
    except ValueError:
        raise ValidationError('Debe ingresar un número flotante válido.')