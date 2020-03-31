from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, null=True)

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name
        }

class Product(models.Model):
    name = models.CharField(max_length=100, null=True)
    price = models.FloatField(null=True)
    description = models.TextField(null=True)
    count = models.IntegerField(null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count
        }