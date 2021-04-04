from rest_framework import serializers
from .models import PerdasCadastro


class PerdasCadastroSerializer(serializers.ModelSerializer):

    class Meta:
        model = PerdasCadastro
        fields = '__all__'
