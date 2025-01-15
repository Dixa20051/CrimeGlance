import pandas as pd
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

df = pd.read_csv(r"C:\Users\himanshu rai\Desktop\node\finalProject\Crime rate detection data.csv")

@csrf_exempt
def predictor(request):
    if(request.method=='POST'):
        DistName = json.loads(request.body)['DistName']
        dist= df[df['DistName']==DistName]
        StateName = (dist["StateName"].iloc[0])
        TotalPopulation = int(dist["TotalPop"].iloc[0])
        MaleLiteracy = float(dist["MALE_LIT"].iloc[0])
        FemaleLiteracy = float(dist["FEMALE_LIT"].iloc[0])
        OverallLiteracy = float(dist["OVERALL_LIT"].iloc[0])
        PerCapita = int(dist["Per capita"].iloc[0])
        TotalCrime = int(dist["TotalCrime"].iloc[0])
        CrimeRate = float(dist["Crime_rate"].iloc[0])
        return JsonResponse({'DistName':DistName,'StateName':StateName,'TotalPopulation':TotalPopulation,'MaleLiteracy':MaleLiteracy,'FemaleLiteracy':FemaleLiteracy,'OverallLiteracy':OverallLiteracy,'PerCapita':PerCapita,'TotalCrime':TotalCrime,'CrimeRate':CrimeRate})
        
    return JsonResponse({'result':'send post request'})   
