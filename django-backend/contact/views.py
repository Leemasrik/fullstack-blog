from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMessage

@csrf_exempt
def send_contact(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        try:
            email_message = EmailMessage(
                subject=f"New Contact from {name} <{email}>",
                body=f"You have received a new message from your website contact form.\n\n"
                     f"Name: {name}\n"
                     f"Email: {email}\n"
                     f"Message:\n{message}",
                from_email='your_email@gmail.com',  # Your Gmail here
                to=['your_email@gmail.com'],         # Your Gmail here
                reply_to=[email],                    # Now works properly
            )
            email_message.send(fail_silently=False)
            
            return JsonResponse({'success': True})
        except Exception as e:
            print("Error sending mail:", e)
            return JsonResponse({'success': False})
    
    return JsonResponse({'success': False}, status=405)
