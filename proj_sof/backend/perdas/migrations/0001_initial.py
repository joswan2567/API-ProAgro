# Generated by Django 3.1.7 on 2021-04-05 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PerdasCadastro',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=60)),
                ('email', models.CharField(max_length=60)),
                ('cpf', models.CharField(max_length=11, verbose_name='CPF')),
                ('loclat', models.CharField(max_length=13, null=True, verbose_name='LAT')),
                ('loclng', models.CharField(max_length=13, null=True, verbose_name='LNG')),
                ('eventoocorrido', models.CharField(max_length=25)),
                ('colheitatipo', models.CharField(max_length=25)),
                ('colheitadata', models.DateTimeField(null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Criado em')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Atualizado em')),
            ],
            options={
                'verbose_name': 'nome',
                'verbose_name_plural': 'nomes',
                'ordering': ['created_at'],
            },
        ),
    ]
