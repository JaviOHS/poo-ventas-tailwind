from django.shortcuts import render
from core.models import Product, Brand, Supplier, Category

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

# ------ Tienda ------
def shop(request):
    data = {"title1": "Tienda","title2": "Productos disponibles"}
    products = Product.objects.all() # select * from Product
    data["products"]=products
    return render(request,"purchase/shop.html", data)

# ------ Carrito de compras ------
def shopping_cart(request):
    return render(request, 'purchase/shopping_cart.html')

# ------ Mis compras ------
def shopping_list(request):
    return render(request, 'purchase/shopping_list.html')
