import os
from dotenv import load_dotenv
import traceback
from rest_framework.decorators import api_view
from rest_framework.response import Response
from google import genai

# Load environment variables
load_dotenv()
api_key = os.getenv("GENAI_API_KEY")
print("✅ Gemini API key loaded:", bool(api_key))

# Initialize the client with the API key explicitly
client = genai.Client(api_key=api_key)

@api_view(['POST'])
def check_symptoms(request):
    symptoms = request.data.get('symptoms', '')

    if not symptoms:
        return Response({"error": "Please provide symptoms."}, status=400)

    prompt = f"""
You are a virtual healthcare assistant.
Based on these symptoms: {symptoms},
list possible conditions and recommended next steps.
Always end your response with:
"⚠️ This is for educational purposes only and not a medical diagnosis."
    """

    try:
        print("🧠 Sending request to Gemini...")

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        output = response.text  # The generated text

        return Response({
            "symptoms": symptoms,
            "result": output
        })

    except Exception as e:
        print("💥 ERROR calling Gemini API:")
        traceback.print_exc()
        return Response({"error": str(e)}, status=500)
