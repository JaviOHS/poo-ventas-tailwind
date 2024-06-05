import datetime
from decimal import Decimal
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from proy_sales.utils import phone_regex, valida_cedula, valida_numero_flotante_positivo, valida_numero_entero_positivo

class CustomUser(AbstractUser):
    dni = models.CharField(max_length=10,unique=True,validators=[valida_cedula])
    full_name = models.CharField(max_length=100)
    celular = models.CharField(max_length=10,blank=True, null=True,validators=[phone_regex])
    correo = models.EmailField(blank=True, null=True)
    imagen = models.ImageField(upload_to='imagenes_perfil/', null=True, blank=True)


    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def get_profile_picture_url(self):
        if self.imagen:
            return self.imagen.url
        else:
            return None
        
    def __str__(self):
        return self.username
    
class Brand(models.Model):
    description = models.CharField('Articulo', max_length=100,unique=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    state = models.BooleanField('Estado', default=True)

    class Meta:
        verbose_name = 'Marca'
        verbose_name_plural = 'Marcas'
        ordering = ['description']
        indexes = [models.Index(fields=['description'])]

    def __str__(self):
        return self.description

class Supplier(models.Model):
    name = models.CharField(max_length=100, unique=True)
    ruc = models.CharField(max_length=10,validators=[valida_cedula],unique=True) 
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=10,validators=[phone_regex],unique=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    state = models.BooleanField('Estado', default=True)
    image = models.ImageField(upload_to='suppliers/', blank=True, null=True)

    class Meta:
        verbose_name = 'Proveedor'
        verbose_name_plural = 'Proveedores'
        ordering = ['name']
        indexes = [models.Index(fields=['name'])]

    def __str__(self):
        return self.name

class Category(models.Model):
    description = models.CharField('Categoría', max_length=100,unique=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    state = models.BooleanField('Estado', default=True)

    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'
        ordering = ['description']
        indexes = [models.Index(fields=['description'])]

    def __str__(self):
        return self.description

def get_default_expiration_date():
    return timezone.now() + datetime.timedelta(days=30)

class Product(models.Model):
    class Status(models.TextChoices):
        STORE = 'RS', 'Rio Store'
        FERRISARITO = 'FS', 'Ferrisariato'
        COMISARIATO = 'CS', 'Comisariato'

    description = models.CharField(max_length=100,unique=True)
    price = models.DecimalField(max_digits=10, decimal_places=2,validators=[valida_numero_flotante_positivo])
    stock = models.IntegerField(default=100,validators=[valida_numero_entero_positivo])
    expiration_date = models.DateTimeField(default=timezone.now() + datetime.timedelta(days=30))
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='product', verbose_name='Marca')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    supplier = models.OneToOneField(Supplier, on_delete=models.CASCADE, verbose_name='Proveedor')
    categories = models.ManyToManyField('Category', verbose_name='Categoria')
    line = models.CharField(max_length=2, choices=Status.choices)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    state = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        ordering = ['description']
        indexes = [models.Index(fields=['description']),]

    def __str__(self):
        return self.description

    @property
    def get_categories(self):
        return " - ".join([c.description for c in self.categories.all().order_by('description')])