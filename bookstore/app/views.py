from django.shortcuts import render
from rest_framework.views import APIView
from .models import Book
from .serializer import ReactSerializer
from rest_framework.response import Response

class ReactView(APIView):
    def get(self, request):
        # Retrieve all books from the database
        books = Book.objects.all()
        
        # Serialize the queryset of books
        serializer = ReactSerializer(books, many=True)
        
        # Return serialized data as a JSON response
        return Response(serializer.data)

    def post(self, request):
        # Deserialize request data into a Book object
        serializer = ReactSerializer(data=request.data)
        
        # Validate the data
        if serializer.is_valid(raise_exception=True):
            # Save the validated data to the database
            serializer.save()
            
            # Return success response
            return Response(serializer.data, status=201)
        else:
            # Return error response if data is not valid
            return Response(serializer.errors, status=400)
