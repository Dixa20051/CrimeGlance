from django.shortcuts import render
from joblib import load
from django.http import JsonResponse
from rest_framework.response import Response
import json

from django.views.decorators.csrf import csrf_exempt


clf = load('./savedModels/models.joblib')

@csrf_exempt

def predictor(request):
    if request.method == 'POST':
        
        gdp = (json.loads(request.body)['gdp'])*0.36
        population = (json.loads(request.body)['population'])*0.87
        maleLiteracy = (json.loads(request.body)['maleLiteracy'])*0.96
        gdpp = gdp/population
        result = clf.predict([[gdpp,population,maleLiteracy]])
        print(result)
        if result ==0:
            result = 'Unsafe'
        elif result==1:
            result = 'Moderate Safe'
        else:
            result = 'Safe'
    
        return JsonResponse({'result':result})
        
    return JsonResponse({'result':'send post request'})   

