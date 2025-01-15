import pandas as pd
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def predictor(request):
    df = pd.read_csv(r"C:\Users\himanshu rai\Desktop\node\finalProject\Crime rate detection data.csv")
    print(df)
    if(request.method=='POST'):
        DistCode = json.loads(request.body)['DistCode']
        Year = json.loads(request.body)['Year']
        StateCode = json.loads(request.body)['StateCode']
        StateName = json.loads(request.body)['StateName']
        DistName = json.loads(request.body)['DistName']
        TotalMale = json.loads(request.body)['TotalMale']
        TotalFemale = json.loads(request.body)['TotalFemale']
        MaleLITPop = json.loads(request.body)['MaleLITPop']
        FemaleLITPop = json.loads(request.body)['FemaleLITPop']
        PerCapita = json.loads(request.body)['PerCapita']
        TotalCrime = json.loads(request.body)['TotalCrime']


        new_data = pd.DataFrame({'DistCode':[DistCode],'Year':[Year],'StateCode':[StateCode],'StateName':[StateName],'DistName':[DistName],'TotalPop1000':[(TotalMale/1000)+(TotalFemale/1000)],'TotalMale1000':[(TotalMale/1000)],'TotalFemale1000':[(TotalFemale/1000)],'TotalLITPop':[(MaleLITPop+FemaleLITPop)],'MaleLITPop':[MaleLITPop],'FemaleLITPop':[FemaleLITPop],'PerCapita1000':[(PerCapita/1000)],'TotalPop':[(TotalMale+TotalFemale)],'MALE_LIT':[(MaleLITPop/TotalMale)*100000],'FEMALE_LIT':[(FemaleLITPop/TotalFemale)*100000],'OVERALL_LIT':[((MaleLITPop+FemaleLITPop)/((TotalMale/1000)+
        (TotalFemale/1000)))*100],'Per capita':[PerCapita],'TotalCrime':[TotalCrime],'Crime_rate':[TotalCrime/((TotalMale/1000)+(TotalFemale/1000))*100],'GDPP':[(PerCapita/(TotalMale+TotalFemale))*1000]})
    #crime rate=(total crimes/total population)*100
       
        df = pd.concat([df, new_data],ignore_index=True)
        
        df.to_csv("C:\\Users\\himanshu rai\\Desktop\\node\\finalProject\\Crime rate detection data.csv", index=False)
       
        return JsonResponse({'result':'Data updated sucessfully'})   
        
    return JsonResponse({'result':'send post request'})   
