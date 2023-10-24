import json
from typing import Dict
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django import forms
from django.urls import reverse
from .models import vendmachine
import numpy as np
import matplotlib.pyplot as plt
plt.rcParams['font.sans-serif'] = ['Taipei Sans TC Beta']


def home(request):    
    if request.is_ajax():
        if request.POST['operation'] == 'overall':
            print(request.POST['operation'])
            test = {
                'operation' : request.POST['operation'],
                
                
                }
            
            return JsonResponse(test)

        if request.POST['operation'] == 'city':
            print(request.POST['operation'], request.POST['city'])
            
            test = {
                'operation' : request.POST['operation'],
                'city': request.POST['city'],
                
                }
            
            return JsonResponse(test)

        if request.POST['operation'] == 'location':            
            print(request.POST['operation'], request.POST['city'], request.POST['location'])

            temperature = '5'     #根據 city,location 去DB取資料
            drink_name = ["礦泉水", "礦泉水", "氣泡水","可樂","FIN","FIN","麥香奶茶","麥香紅茶","麥香綠茶","蘋果C","葡萄C ","蜜桃C"]
            drink_actual = [4, 8, 5, 6, 7, 4, 8, 5, 6, 7, 1, 2]
            drink_total = [10, 10, 10, 10, 10,10, 10, 10, 10, 10, 10, 10]

            is_ajax = True
            test = {
                'operation' : request.POST['operation'],
                'city': request.POST['city'],
                'location': request.POST['location'],
                'is_ajax': is_ajax,
                'temperature': temperature,
                'drink_name': drink_name,
                'drink_actual': drink_actual,
                'drink_total': drink_total,
                }
            
            return JsonResponse(test)
    return render(request, 'base.html',locals())

# def ajax_jquery_POST(request):
#     print("ajax_jquery_POST choice :",request.POST.get('city'),request.POST.get('location'))
#     is_ajax = False
#     if request.is_ajax():
#         is_ajax = True
#         test = {
#             'city': request.POST['city'],
#             'location': request.POST['location'],
#             'is_ajax': is_ajax,
#             }
        
#         return JsonResponse(test)
        
# def district(request):
#     print("d choice :",request.POST.get('city'),request.POST.get('location'))
#     if request.method == "POST":
#         print("district ========================================================")
#         print(request.POST)
#         test = {
#             'city': request.POST['city'],
#             'location': request.POST['location'],
#             'temperature': '5',
#         }
        
#         return render(request, 'district.html', context=test)

    