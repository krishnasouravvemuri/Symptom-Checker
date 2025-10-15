Symptom Checker

A full-stack healthcare assistant web application that allows users to input symptoms and receive possible conditions and recommended next steps using AI (Gemini API).

---

## **Features**

* Input symptoms and get AI-generated healthcare guidance.
* Built with **Django REST Framework** for backend API.
* React frontend with a clean UI to submit symptoms and view results.
* Integrates **Google Gemini** for AI-powered responses.
* Fully local development setup; ready for deployment.

---

## **Tech Stack**

* **Backend:** Django, Django REST Framework, Gunicorn
* **Frontend:** React (Vite)
* **AI Model:** Google Gemini (`gemini-2.5-flash`)
* **Environment Management:** `.env` files, python-dotenv, npm

---

## **Setup & Installation**

### **Backend (Django)**

1. Clone the backend repo:

```bash
git clone https://github.com/yourusername/symptom-backend.git
cd symptom-backend
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the backend root:

```
GENAI_API_KEY=your_gemini_pro_key_here
DEBUG=True
```

5. Run Django server:

```bash
python manage.py runserver
```

Backend API will be available at:

```
http://127.0.0.1:8000/api/check-symptoms/
```

---

### **Frontend (React)**

1. Clone the frontend repo:

```bash
git clone https://github.com/yourusername/symptom-frontend.git
cd symptom-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```
VITE_BACKEND_URL=http://127.0.0.1:8000
```

4. Start React dev server:

```bash
npm run dev
```

Frontend will be available at:

```
http://127.0.0.1:5173
```

---

## **Usage**

1. Open the frontend in your browser.
2. Enter symptoms in the input field.
3. Click **Submit** to get AI-generated healthcare suggestions.
4. ⚠️ **Note:** All results are for educational purposes only and not a medical diagnosis.

---

## **Project Structure**

SymptomChecker/
│
├─ backend/
│   ├─ symptom_checker/
│   │   ├─ views.py        # API logic using Gemini
│   │   ├─ urls.py         # API routes
│   │   └─ ...
│   ├─ manage.py
│   ├─ requirements.txt
│   └─ .env
│
├─ frontend/
│   ├─ src/
│   │   ├─ components/
│   │   └─ App.jsx
│   ├─ package.json
│   └─ .env
│
└─ README.md
 
