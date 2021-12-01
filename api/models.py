from django.db import models

class Category (models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
      return self.title

class Expense (models.Model):
  category = models.ForeignKey(Category, related_name="expenses", on_delete=models.CASCADE)
  title = models.CharField(max_length=100, null=True, blank=True)
  price = models.DecimalField(max_digits=5, decimal_places=2)
  created = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return self.title