from django.urls import path
from . import views

urlpatterns = [
    path('expenses/new/', views.createExpense, name='create-expense'),
    path('expenses/', views.getExpneses, name="expneses"),
    path('categories/', views.getCategories, name="categories"),
    
]
