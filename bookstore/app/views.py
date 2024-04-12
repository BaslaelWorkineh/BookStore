from django.shortcuts import render
from rest_framework.views import APIView
from .models import Book
from .serializer import ReactSerializer, CustomUserSerializer
from rest_framework.response import Response

class ReactView(APIView):
    def get_book(self, request):
        if request.method == 'GET':
            books = Book.objects.all()
            serializer = ReactSerializer(books, many=True)
            return Response(serializer.data)
        else:
            # Return an error response if it's not a POST request
            return Response({"error": "Only Get method is allowed for get book."}, status=405)

    def post_book(self, request):
        if request.methond == 'POST':
        
            serializer = ReactSerializer(data=request.data)
            
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=201)
            else:
                return Response(serializer.errors, status=400)
        else:
            return Response({'error':'Only Post method is allowd for post book'}, status=405)

    def register(self, request):
        if request.method == 'POST':
            serializer = CustomUserSerializer(data=request.data)

            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=201)
            else:
                return Response(serializer.errors, status=400)
        else:
            # Return a response indicating that only POST method is allowed
            return Response({"error": "Only POST method is allowed for registration."}, status=405)