from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .models import CadastroConflitante, PerdasCadastro
from .serializers import CadastroConflitanteSerializer, PerdasCadastroSerializer
from rest_framework.decorators import api_view
import math


@api_view(['GET', 'POST', 'DELETE'])
def perda_list(request):
    if request.method == 'GET':
        perdas = PerdasCadastro.objects.all()

        nome = request.GET.get('nome', None)
        if nome is not None:
            perdas = perdas.filter(nome__icontains=nome)

        perdas_serializer = PerdasCadastroSerializer(perdas, many=True)
        return JsonResponse(perdas_serializer.data, safe=False)

    elif request.method == 'POST':
        perda_data = JSONParser().parse(request)
        perda_serializer = PerdasCadastroSerializer(data=perda_data)
        if perda_serializer.is_valid():
            perda_serializer.save()
            return JsonResponse(perda_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(perda_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = PerdasCadastro.objects.all().delete()
        return JsonResponse({'message': '{} Perdas deletadas!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def perda_detail(request, pk):
    try:
        perda = PerdasCadastro.objects.get(pk=pk)
        if request.method == 'GET':
            perdas_serializer = PerdasCadastroSerializer(perda)
            return JsonResponse(perdas_serializer.data)

        elif request.method == 'PUT':
            perda_data = JSONParser().parse(request)
            perda_serializer = PerdasCadastroSerializer(perda, data=perda_data)
            if perda_serializer.is_valid():
                perda_serializer.save()
                return JsonResponse(perda_serializer.data)

        elif request.method == 'DELETE':
            perda.delete()
            return JsonResponse({'message': 'registro deletado !'}, status=status.HTTP_204_NO_CONTENT)
        return JsonResponse(perda_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except PerdasCadastro.DoesNotExist:
        return JsonResponse({'message': 'o registro não existe'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def perda_list_cpf(request, cpf):
    perdas = PerdasCadastro.objects.get(cpf__exact = cpf)

    if request.method == 'GET':
        perdas_serializer = PerdasCadastroSerializer(perdas, many=True)
        return JsonResponse(perdas_serializer.data, safe=False)


@api_view(['GET', 'POST'])
def checa_veracidade(resquest):
    if resquest.method == 'POST':
        data = JSONParser().parse(resquest)
        perdas = PerdasCadastro.objects.all()

        for perda in perdas:
            dist = 6371 * math.acos(math.cos(
                math.radians(90-float(perda.loclat))) *
                math.cos(math.radians(90-float(data['loclat']))) +
                math.sin(math.radians(90-float(perda.loclat))) *
                math.sin(math.radians(90-float(data['loclat']))) *
                math.cos(math.radians(float(perda.loclng)-float(data['loclng']))) * 1.15)
            # print(dist)
            if dist >= 10:
                cadastro_conflitante_serializer = CadastroConflitanteSerializer({"loclat": perda.loclat,
                                                                                 "loclng": perda.loclng,
                                                                                 "idConfl": perda.id,
                                                                                 "dist": dist})
                return JsonResponse(cadastro_conflitante_serializer.data)
    return JsonResponse(None, safe=False)    
