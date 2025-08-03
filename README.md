# 📌 Flights API

## Descripción 📋

API para la gestión de *vuelos* personalizados. Permite crear, listar y eliminar usuarios, pasajeros y vuelos.

## Pre-requisitos ⚙️

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [MongoDb](https://www.mongodb.com/try/download/community)
- [Node.js](https://nodejs.org/) versión 18.20.3
- [Nest Js](https://docs.nestjs.com/)

En caso de tener instalado docker puedes levantar la base de datos con:
```bash
docker run --name mongodb \
  -d \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  --restart unless-stopped \
  mongo:6.0
```
Para que la aplicación funcione correctamente, necesitas configurar algunas variables de entorno. En la raíz del proyecto, crea un archivo llamado .env (si no lo tienes ya) y agrega las siguientes variables de entorno:

```env
#Database Connection
URI_MONGODB=mongodb://localhost:27017/superFlights
#JWT
JWT_SECRET=
EXPIRES_IN=
#API
APP_URL=https://superflights.com
PORT=3000
```

## Comenzando 🚀

Para iniciar el proyecto localmente:

1. Clona este repositorio.
2. Ingresa al directorio del proyecto.
3. Instala las dependencias:

```bash
npm install
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Construido con 🛠️

- [Node.js](https://nodejs.org/es/)
- [Nest js](https://docs.nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDb](https://www.mongodb.com/try/download/community)

## Rutas de la API 📡

Si necesitas más detalles y documentación sobre las rutas, puedes acceder a la interfaz de Swagger en la siguiente URL:

**Documentación de la API (Swagger): `api/docs`**

Ahí encontrarás una descripción más detallada de las rutas, los parámetros de entrada y las respuestas esperadas. La documentación está actualizada y es interactiva, lo que te permitirá probar las rutas directamente desde el navegador.

<img width="730" height="885" alt="Captura de pantalla de 2025-08-02 20-16-26" src="https://github.com/user-attachments/assets/10df51c6-da30-4b58-af32-644851a23aed" />



> Todas las rutas aceptan y responden con JSON.

## Autores ✒️

- **Everto Farías** ❤️



```

