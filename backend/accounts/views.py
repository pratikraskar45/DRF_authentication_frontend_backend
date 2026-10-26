from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import SignupSerializer


class SignupView(APIView):

    def post(self, request):
        serializer = SignupSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {
                    "message": "User created successfully"
                },
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class LoginView(APIView):

    def post(self, request):

        email = request.data.get("email")
        password = request.data.get("password")

        user = User.objects.filter(email=email).first()

        if user is None or not user.check_password(password):
            return Response(
                {
                    "message": "Invalid email or password"
                },
                status=status.HTTP_401_UNAUTHORIZED
            )

        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "message": "Login successful",
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                }
            },
            status=status.HTTP_200_OK
        )