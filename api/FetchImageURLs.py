import boto3
import os
import json

BUCKET_NAME = os.environ.get('BUCKET_NAME')

def lambda_handler(event, context):
    print(event)
    images = ""

    s3_client = boto3.client('s3')
    s3_resource = boto3.resource('s3')

    bucket = s3_resource.Bucket(BUCKET_NAME)
    for file in bucket.objects.all():
        url = "https://%s.s3.us-east-2.amazonaws.com/%s" % (BUCKET_NAME, file.key)
        if images != "":
            images += ","
        images += url



    return {'statusCode': 200, 'body': images, "headers": {"Access-Control-Allow-Origin": '*'}}
