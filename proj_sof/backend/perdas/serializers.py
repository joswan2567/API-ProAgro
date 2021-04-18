from rest_framework import serializers
from .models import PerdasCadastro


class PerdasCadastroSerializer(serializers.ModelSerializer):
        class Meta:
            model = PerdasCadastro
            fields = '__all__'
class CadastroConflitanteSerializer(serializers.Serializer):

    idConfl = serializers.IntegerField()
    loclat = serializers.CharField()
    loclng = serializers.CharField()
    dist = serializers.FloatField()

