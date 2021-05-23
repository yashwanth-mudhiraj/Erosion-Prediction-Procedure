from django.conf.urls import url
from RusleApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^lsfactor/$',views.LSFactorApi),
    url(r'^lsfactor/([0-9]+)$',views.LSFactorApi),

    url(r'^lsfactornew/$',views.LSFactorNewApi),
    url(r'^lsfactornew/([0-9]+)$',views.LSFactorNewApi),

    url(r'^cfactor/$',views.CFactorApi),
    url(r'^cfactor/([0-9]+)$',views.CFactorApi),

    url(r'^pfactor/$',views.PFactorApi),
    url(r'^pfactor/([0-9]+)$',views.PFactorApi),

    url(r'^subsites/$',views.SubsitesApi),
    url(r'^subsites/([0-9]+)$',views.SubsitesApi),

    url(r'^projects/$',views.ProjectsApi),
    url(r'^projects/([0-9]+)$',views.ProjectsApi),

    url(r'^SaveFiles$', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)