# Generated by Django 4.1.3 on 2022-11-07 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_carro'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carro',
            name='monto',
            field=models.IntegerField(verbose_name='Monto'),
        ),
    ]