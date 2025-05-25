from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.send_contact, name='send_contact'),  # ✅ Now it matches the actual view
]
