from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import json
import pika
import sys
# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@csrf_exempt
@api_view(["POST"])
def register(request):
    if request.method == "POST":
        data  = json.loads(request.body)
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")
        
        username_taken = User.objects.filter(username = username)
        print(username_taken)
        email_taken = User.objects.filter(email = email)
        print(email_taken)
        if username_taken:
            print("username taken")
            return Response("Username already taken", status.HTTP_403_FORBIDDEN)
        elif email_taken:
            print("email already exists")
            return Response("user with the same email already exists", status.HTTP_403_FORBIDDEN)
        
        #user = User.objects.create_user(username = username, email = email,password =password)
        #user.save()
        
        message = {
            "email": email,
            "msg":"send confirmation email to the user"
        }
        print(f"Sending message: {json.dumps(message)}")
        send_to_queue(json.dumps(message), "register")
        
        return Response("wait for confirmation email", status.HTTP_201_CREATED)
    else:
        return Response("failed to register user", status.HTTP_400_BAD_REQUEST)
    
    
def send_to_queue(msg, queue_name):
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost')
    )
    channel = connection.channel()
    channel.queue_declare(queue = queue_name)
    channel.basic_publish(exchange = '', routing_key = queue_name, body = msg)
    connection.close()
    
 