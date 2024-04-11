from django.shortcuts import render
from rest_framework import generics
from .models import Room
from .serializer import RoomSerializer

class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer