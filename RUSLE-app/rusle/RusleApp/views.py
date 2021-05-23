from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse


from RusleApp.models import LSFactor, CFactor, PFactor, LSFactor_New, Subsites, Projects
from RusleApp.serializers import LSFactorSerializer, CFactorSerializer, PFactorSerializer, LSFactor_NewSerializer, SubsitesSerializer, ProjectsSerializer

from django.core.files.storage import default_storage


# Create your views here.
@csrf_exempt
def LSFactorApi(request,id=0):
    if request.method == 'GET':
        lsfactor = LSFactor.objects.all()
        lsfactor_serializer = LSFactorSerializer(lsfactor, many=True)
        return JsonResponse(lsfactor_serializer.data, safe=False)
    
    elif request.method == 'POST':
        lsfactor_data = JSONParser().parse(request)
        lsfactor_serializer = LSFactorSerializer(data=lsfactor_data)
        if lsfactor_serializer.is_valid():
            lsfactor_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
            lsfactor_data = JSONParser().parse(request)
            lsfactor = LSFactor.objects.get(Id=lsfactor_data['Id'])
            lsfactor_serializer = LSFactorSerializer(lsfactor, data=lsfactor_data)
            if lsfactor_serializer.is_valid():
                lsfactor_serializer.save()
                return JsonResponse("Updated Successfully !!", safe=False)
            return JsonResponse("Failed to Update", safe=False)

    elif request.method == 'DELETE':
            lsfactor = LSFactor.objects.get(Id=id)
            lsfactor.delete()
            return JsonResponse("Deleted Successfully !")


@csrf_exempt
def LSFactorNewApi(request,id=0):
    if request.method == 'GET':
        lsfactornew = LSFactor_New.objects.all()
        lsfactornew_serializer = LSFactor_NewSerializer(lsfactornew, many=True)
        return JsonResponse(lsfactornew_serializer.data, safe=False)
    
    elif request.method == 'POST':
        lsfactornew_data = JSONParser().parse(request)
        lsfactornew_serializer = LSFactor_NewSerializer(data=lsfactornew_data)
        if lsfactornew_serializer.is_valid():
            lsfactornew_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
            lsfactornew_data = JSONParser().parse(request)
            lsfactornew = LSFactor_New.objects.get(Id=lsfactornew_data['Id'])
            lsfactornew_serializer = LSFactor_NewSerializer(lsfactornew, data=lsfactornew_data)
            if lsfactornew_serializer.is_valid():
                lsfactornew_serializer.save()
                return JsonResponse("Updated Successfully !!", safe=False)
            return JsonResponse("Failed to Update", safe=False)

    elif request.method == 'DELETE':
            lsfactornew = LSFactor_New.objects.get(Id=id)
            lsfactornew.delete()
            return JsonResponse("Deleted Successfully !")


@csrf_exempt
def CFactorApi(request,id=0):
    if request.method == 'GET':
        cfactor = CFactor.objects.all()
        cfactor_serializer = CFactorSerializer(cfactor, many=True)
        return JsonResponse(cfactor_serializer.data, safe=False)
    
    elif request.method == 'POST':
        cfactor_data = JSONParser().parse(request)
        cfactor_serializer = CFactorSerializer(data=cfactor_data)
        if cfactor_serializer.is_valid():
            cfactor_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
            cfactor_data = JSONParser().parse(request)
            cfactor = CFactor.objects.get(Id=cfactor_data['Id'])
            cfactor_serializer = CFactorSerializer(cfactor, data=cfactor_data)
            if cfactor_serializer.is_valid():
                cfactor_serializer.save()
                return JsonResponse("Updated Successfully !!", safe=False)
            return JsonResponse("Failed to Update", safe=False)

    elif request.method == 'DELETE':
            cfactor = CFactor.objects.get(Id=id)
            cfactor.delete()
            return JsonResponse("Deleted Successfully !")

@csrf_exempt
def PFactorApi(request,id=0):
    if request.method == 'GET':
        pfactor = PFactor.objects.all()
        pfactor_serializer = PFactorSerializer(pfactor, many=True)
        return JsonResponse(pfactor_serializer.data, safe=False)
    
    elif request.method == 'POST':
        pfactor_data = JSONParser().parse(request)
        pfactor_serializer = PFactorSerializer(data=pfactor_data)
        if pfactor_serializer.is_valid():
            pfactor_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
            pfactor_data = JSONParser().parse(request)
            pfactor = PFactor.objects.get(Id=pfactor_data['Id'])
            pfactor_serializer = PFactorSerializer(pfactor, data=pfactor_data)
            if pfactor_serializer.is_valid():
                pfactor_serializer.save()
                return JsonResponse("Updated Successfully !!", safe=False)
            return JsonResponse("Failed to Update", safe=False)

    elif request.method == 'DELETE':
            pfactor = PFactor.objects.get(Id=id)
            pfactor.delete()
            return JsonResponse("Deleted Successfully !")


@csrf_exempt
def SubsitesApi(request,id=0):
    if request.method == 'GET':
        subsites = Subsites.objects.all()
        subsites_serializer = SubsitesSerializer(subsites, many=True)
        return JsonResponse(subsites_serializer.data, safe=False)
    
    elif request.method == 'POST':
        subsites_data = JSONParser().parse(request)
        subsites_serializer = SubsitesSerializer(data=subsites_data)
        if subsites_serializer.is_valid():
            subsites_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
            subsites_data = JSONParser().parse(request)
            subsites = Subsites.objects.get(Id=subsites_data['Id'])
            subsites_data['Name'] = subsites.Name 
            subsites_data['Desc'] = subsites.Desc 
            subsites_data['ProjectId'] = subsites.ProjectId_id 
            subsites_data['From_date'] = subsites.From_date
            subsites_data['To_date'] = subsites.To_date
            subsites_serializer = SubsitesSerializer(subsites, data=subsites_data)
            if subsites_serializer.is_valid():
                subsites_serializer.save()
                return JsonResponse("Updated Successfully !!", safe=False)
            return JsonResponse("Failed to Update", safe=False)

    elif request.method == 'DELETE':
            subsites = Subsites.objects.get(Id=id)
            subsites.delete()
            return JsonResponse("Deleted Successfully !")

@csrf_exempt
def ProjectsApi(request,id=0):
    if request.method == 'GET':
        projects = Projects.objects.all()
        projects_serializer = ProjectsSerializer(projects, many=True)
        return JsonResponse(projects_serializer.data, safe=False)
    
    elif request.method == 'POST':
        projects_data = JSONParser().parse(request)
        projects_serializer = ProjectsSerializer(data=projects_data)
        if projects_serializer.is_valid():
            projects_serializer.save()
            subsites_data = projects_data['subsites']
            subsites_data['ProjectId'] = projects_serializer.data['Id']
            subsites_serializer = SubsitesSerializer(data=subsites_data)
            if subsites_serializer.is_valid():
                subsites_serializer.save()
                return JsonResponse("Added Successfully!!", safe=False)            
            return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
            projects_data = JSONParser().parse(request)
            projects = Projects.objects.get(Id=projects_data['Id'])
            projects_serializer = ProjectsSerializer(projects, data=projects_data)
            if projects_serializer.is_valid():
                projects_serializer.save()
                return JsonResponse("Updated Successfully !!", safe=False)
            return JsonResponse("Failed to Update", safe=False)

    elif request.method == 'DELETE':
            projects = Projects.objects.get(Id=id)
            projects.delete()
            return JsonResponse("Deleted Successfully !")


@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)