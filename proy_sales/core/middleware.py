from django.shortcuts import redirect
from django.urls import reverse
from django.core.exceptions import PermissionDenied

class LoginRequiredMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if not request.user.is_authenticated and request.path not in [reverse('signin'), reverse('signup'), reverse('home')]:
            return redirect('home')
        return response

class AdminOnlyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        protected_urls = [
            reverse('core:product_list'),
            reverse('core:product_create'),
            reverse('core:product_update', args=[0]),  
            reverse('core:product_delete', args=[0]),
            reverse('core:brand_list'),
            reverse('core:brand_create'),
            reverse('core:brand_update', args=[0]),
            reverse('core:brand_delete', args=[0]),
            reverse('core:supplier_list'),
            reverse('core:supplier_create'),
            reverse('core:supplier_update', args=[0]),
            reverse('core:supplier_delete', args=[0]),
            reverse('core:category_list'),
            reverse('core:category_create'),
            reverse('core:category_update', args=[0]),
            reverse('core:category_delete', args=[0]),
        ]

        # Eliminar argumentos de rutas protegidas
        protected_urls = [url.split('?')[0].rsplit('/', 1)[0] for url in protected_urls]

        # Verifica si la ruta actual está protegida
        path_info = request.path_info.rsplit('/', 1)[0]
        if path_info in protected_urls:
            # Verifica si el usuario está autenticado y es superusuario
            if not request.user.is_authenticated or not request.user.is_superuser:
                raise PermissionDenied  # O redirige a otra página, e.g., redirect('login')

        response = self.get_response(request)
        return response