from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ExpenseSerializer, CategorySerializer
from .models import Expense, Category
from rest_framework.parsers import JSONParser

@api_view(['GET'])
def getExpneses(request):
  expenses = Expense.objects.all()
  serializer = ExpenseSerializer(expenses, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getCategories(request):
  categories = Category.objects.all()
  serializer = CategorySerializer(categories, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def createExpense(request):

  data = request.data
  try:
    category = Category.objects.get(title=data['category'])
  except:
    category = Category.objects.create(title=data['category'])

  expense = Expense.objects.create(
    title = data['title'],
    price = data['price'],
    category = category,
  )

  serializer = ExpenseSerializer(expense, many=False)
  return Response(serializer.data)