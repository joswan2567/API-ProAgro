from rest_framework import serializers
from .models import CadastroConflitante, PerdasCadastro


class PerdasCadastroSerializer(serializers.ModelSerializer):
        class Meta:
            model = PerdasCadastro
            fields = '__all__'
class CadastroConflitanteSerializer(serializers.ModelSerializer):

    class Meta:
        model = CadastroConflitante
        fields = '__all__'

