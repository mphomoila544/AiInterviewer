from django.test import TestCase
from django.urls import reverse
import json

# Create your tests here.
class RegisterTestCase(TestCase):
    def test_valid_data(self):
        url = reverse('register')
        
        test_data = {
            "username":'test_user',
            "email":'test_email@gmail.com',
            'password': 'password'
        }
        
        response = self.client.post(url, json.dumps(test_data), content_type="application/json")
        self.assertEqual(response.status_code, 201)
        
        
    def test_missing_data(self):
        url = reverse("register")
        
        test_data = {
            'username': "mphoza",
            'email': "mphoza@gmail.com"
        }
        
        response = self.client.post(url, json.dumps(test_data), content_type="application/json")
        self.assertEqual(response.status_code, 201)
        
    def test_missing_data(self):
        url = reverse("register")
        
        test_data = {
            'username': "mphoza",
            'password': "mphoza"
        }
        
        response = self.client.post(url, json.dumps(test_data), content_type="application/json")
        self.assertEqual(response.status_code, 201)
    
    def register_existing_user(self):
        url = reverse("register")
        
        test_data = {
            "username":'test_user',
            "email":'test_email@gmail.com',
            'password': 'password'
        }
        
        response = self.client.post(url, json.dumps(test_data), content_type="application/json")
        self.assertEqual(response.status_code, 201)
        