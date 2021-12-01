from rest_framework.serializers import ModelSerializer
from .models import Expense, Category


class ExpenseSerializer(ModelSerializer):
  class Meta():
    model = Expense
    fields = ('__all__')

class CategorySerializer(ModelSerializer):
  class Meta:
    model = Category
    fields=('__all__')