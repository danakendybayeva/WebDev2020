from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField()

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'price': self.price
        }