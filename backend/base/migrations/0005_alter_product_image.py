# Generated by Django 4.2 on 2023-05-27 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='images/not_image.png', null=True, upload_to=''),
        ),
    ]
