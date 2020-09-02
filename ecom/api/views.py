from django.http import JsonResponse

# Create your views here.

def home(request):
    return JsonResponse({'info':'ecommerce website using django and react','by':'Baljeet Jangra'})