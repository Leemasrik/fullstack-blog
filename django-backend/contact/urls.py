# app/urls.py

from django.urls import path
from .views import send_contact  # Make sure this matches your view name

urlpatterns = [
    path('api/contact/', send_contact, name='send_contact'),
]
