from django.urls import path
from .views import check_symptoms

urlpatterns = [
    path('check-symptoms/', check_symptoms, name='check_symptoms'),
]
