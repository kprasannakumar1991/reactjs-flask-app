from flask import json
from app import app
import unittest

class TestCase(unittest.TestCase):

    # Test whether REST end-point /cpu is working
    def test_api_cpu(self):
        tester = app.test_client(self)
        response = tester.get('/cpu', content_type="application/json")
        self.assertEqual(response.status_code, 200)

    # Test whether REST end-point /cpu returns valid data
    def test_api_cpu_response_data(self):
        tester = app.test_client(self)
        response = tester.get('/cpu', content_type="application/json")
        data = json.loads(response.get_data())
        self.assertIsNotNone(data['value'])

    # Test whether REST end-point /resource is working
    def test_api_resource(self):
        tester = app.test_client(self)
        response = tester.get('/resource', content_type="application/json")
        self.assertEqual(response.status_code, 200)

    # Test whether REST end-point /resource returns valid data
    def test_api_resource_response_data(self):
        tester = app.test_client(self)
        response = tester.get('/resource', content_type="application/json")
        data = json.loads(response.get_data())
        self.assertIsNotNone(data['cpu'])
        self.assertIsNotNone(data['memory'])

    # Test whether REST end-point /resource returns json data
    def test_api_resource_response_type(self):
        tester = app.test_client(self)
        response = tester.get('/resource', content_type="application/json")
        self.assertEqual(response.content_type, 'application/json')

    def test_api_gpu(self):
        tester = app.test_client(self)
        response = tester.get('/gpus', content_type="application/json")
        data = json.loads(response.get_data())
        self.assertIsNotNone(data)

if __name__ == '__main__':
    unittest.main()
