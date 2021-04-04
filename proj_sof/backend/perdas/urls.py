from django.conf.urls import url
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    url(r'^api/perdas$', views.perda_list),
    url(r'^api/perdas/(?P<pk>[0-9]+)$', views.perda_detail),
    url(r'^api/perdas/cpf$', views.perda_list_cpf),
    url(r'^api/perdas/locLat$,locLng$,date$', views.checa_veracidade)
]