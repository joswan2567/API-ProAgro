# Generated by Django 3.1.7 on 2021-04-04 18:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('perdas', '0008_auto_20210404_1524'),
    ]

    operations = [
        migrations.RenameField(
            model_name='perdascadastro',
            old_name='locLat',
            new_name='loclat',
        ),
        migrations.RenameField(
            model_name='perdascadastro',
            old_name='locLng',
            new_name='loclng',
        ),
    ]
