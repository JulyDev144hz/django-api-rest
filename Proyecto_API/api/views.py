from types import NoneType
from django.views import View
from django.http.response import JsonResponse
from .models import Task
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.


class TaskView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request,*args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self,request,id=0):
        if (id>0):
            tasks=list(Task.objects.filter(id=id).values())
            if len(tasks)>0:
                task = tasks[0]
                datos = {'message':'success','tasks':task}
            else:
                datos={'message':"Tasks not found ..."}
            return JsonResponse(datos)
        else:

            tasks = list(Task.objects.values())
            if len(tasks)>0:
                datos = {'message':'success','tasks':tasks}
            else:
                datos={'message':"Tasks not found ..."}

            return JsonResponse(datos)

    def post(self,request):
        datos = {'message':'success'}
        jd=json.loads(request.body)
        Task.objects.create(name=jd['name'],description=jd['description'],done=jd['done'])
        return JsonResponse(datos)


    def put(self,request, id):
        jd=json.loads(request.body)
        tasks=list(Task.objects.filter(id=id).values())
        if len(tasks)>0:
            task = Task.objects.get(id=id)
            if 'name' in jd:
                task.name=jd['name']
            if 'description' in jd:
                task.description=jd['description']
            if 'done' in jd:
                task.done=jd['done']
            task.save()
            datos = {'message':'success'}
        else:
            datos={'message':"Tasks not found ..."}
        return JsonResponse(datos)
        

    def delete(self,request, id):
        tasks=list(Task.objects.filter(id=id).values())
        if len(tasks)>0:
            Task.objects.filter(id=id).delete()
            datos = {'message':'success'}
        else:
            datos={'message':"Tasks not found ..."}
        return JsonResponse(datos)