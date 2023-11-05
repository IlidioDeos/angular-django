from rest_framework import serializers
from .models import Member

# Create your serializers here. Dados que o Angular vai receber
class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'name', 'email', 'phone', 'address', 'city', 'state', 'zipcode', 'profile_image']

class MemberSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'name']