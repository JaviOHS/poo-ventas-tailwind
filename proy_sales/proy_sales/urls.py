from django.conf import settings
from django.conf.urls.static import static
from core import views as core
from django.contrib import admin
from django.urls import path, include
from core import views
urlpatterns = [ 
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    
    path('signup/', core.signup, name='signup'),
    path('logout/', core.signout, name='logout'),
    path('signin/', core.signin, name='signin'),
    path('profile/', views.profile, name='profile'),
    path('profile/update/', views.update_profile, name='update_profile'),

    path('', include('core.urls', namespace='core')),
    path('purchase/', include('purchase.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
