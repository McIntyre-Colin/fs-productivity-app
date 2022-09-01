from django.urls import path

from apps.core import views

urlpatterns = [
    path('', views.home, name='home'),
    path('app/', views.react_app),
    path('about/', views.about, name='about'),

    path('api/just/testing/', views.test_api_view)
]
