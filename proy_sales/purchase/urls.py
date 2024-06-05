from django.urls import path
from purchase import views
 
app_name='purchase' # define un espacio de nombre para la aplicacion
urlpatterns = [    
    path('', views.home, name='home'),
    path('shop/', views.shop,name='shop'),
    path('shopping_cart/', views.shopping_cart,name='shopping_cart'),
    path('shopping_list/', views.shopping_list,name='shopping_list'),
]