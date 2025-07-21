# TechLab Backend - Proyecto Final

## Descripción
API REST para administrar productos con autenticación JWT y base de datos Firestore de Firebase.

---

## Variables de entorno necesarias

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables (ver `.env.example`):

PORT=3000
JWT_SECRET=tu_clave_secreta_aqui
FIREBASE_API_KEY=tu_api_key_aqui
FIREBASE_AUTH_DOMAIN=tu_auth_domain_aqui
FIREBASE_PROJECT_ID=tu_project_id_aqui
FIREBASE_STORAGE_BUCKET=tu_storage_bucket_aqui
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id_aqui
FIREBASE_APP_ID=tu_app_id_aqui


---

## Cómo correr la aplicación

1. Instalar dependencias:

```bash
npm install
Iniciar el servidor:

npm run start
Endpoints disponibles
POST /auth/login - Autenticación (envía username y password en el body)

GET /api/products - Obtener todos los productos

GET /api/products/:id - Obtener producto por ID

POST /api/products/create - Crear producto (enviar datos en JSON)

DELETE /api/products/:id - Eliminar producto por ID

Notas
El archivo .env no está subido al repositorio para proteger información sensible.

El archivo .env.example contiene la estructura de variables necesaria para configurar el entorno.

