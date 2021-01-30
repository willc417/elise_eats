import boto3
from botocore.exceptions import ClientError

def send_email(sender_name, sender_email, body_text):
    # Replace sender@example.com with your "From" address.
    # This address must be verified with Amazon SES.
    SENDER = f"{sender_name} via Pink House Website <pinkhouse38012@gmail.com>"

    # Replace recipient@example.com with a "To" address. If your account
    # is still in the sandbox, this address must be verified.

    # If necessary, replace us-west-2 with the AWS Region you're using for Amazon SES.
    AWS_REGION = "us-east-2"

    # The subject line for the email.
    SUBJECT = "Message recieved from Website!"

    # The character encoding for the email.
    CHARSET = "UTF-8"

    # Create a new SES resource and specify a region.
    client = boto3.client('ses',region_name=AWS_REGION)

    # Try to send the email.
    try:
        #Provide the contents of the email.
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    "pinkhouse38012@gmail.com",
                ],
            },
            Message={
                'Body': {
                    'Text': {
                        'Charset': CHARSET,
                        'Data': body_text,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': SUBJECT,
                },
            },
            Source=SENDER,
            # If you are not using a configuration set, comment or delete the
            # following line
        )
    # Display an error if something goes wrong.
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        print("Email sent! Message ID:"),
        print(response['MessageId'])


def lambda_handler(event, context):
    sender_name = event.get('name')
    sender_email  = event.get('email')
    body_text = event.get('content')

    body_text = f"Email from {sender_name}.\n Return Email: {sender_email}\n Message: {body_text}"

    send_email(sender_name, sender_email, body_text)

    return {'statusCode': 200}
