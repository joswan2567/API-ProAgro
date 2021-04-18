from django.db import models

class PerdasCadastro(models.Model):

    nome = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    cpf = models.CharField('CPF', max_length=11)
    loclat = models.CharField('LAT', max_length=13, null=True)
    loclng = models.CharField('LNG', max_length=13, null=True)
    eventoocorrido = models.CharField(max_length=25)
    colheitatipo = models.CharField(max_length=25)
    colheitadata = models.DateTimeField(null=True)
    created_at = models.DateTimeField('Criado em', auto_now_add=True)
    updated_at = models.DateTimeField('Atualizado em', auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['created_at']
        verbose_name = (u'nome')
        verbose_name_plural = (u'nomes')
    
