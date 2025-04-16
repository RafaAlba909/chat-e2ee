# Chat E2EE - Cifrado Extremo

Este proyecto es una **aplicación de chat con cifrado de extremo a extremo (E2EE)**. Los usuarios pueden cifrar y descifrar mensajes utilizando una clave secreta, lo que garantiza que los mensajes solo puedan ser leídos por el emisor y el receptor, asegurando así la privacidad y seguridad de las conversaciones.

## Funcionalidades

- **Cifrado y descifrado de mensajes:** Los mensajes enviados entre los usuarios están protegidos con cifrado simétrico utilizando una clave secreta.
- **Interfaz de usuario sencilla:** Una interfaz intuitiva que permite a los usuarios enviar y recibir mensajes de forma segura.
- **Mensajes en tiempo real:** Utiliza WebSockets para lograr una comunicación en tiempo real entre los usuarios.

## Tecnologías

Este proyecto está construido utilizando las siguientes tecnologías:

- **Frontend:** HTML, CSS, JavaScript, React.js
- **Backend:** Python con Flask
- **Cifrado:** Cryptography (librería Python para cifrado simétrico)
- **Base de datos:** SQLite (o cualquier otra base de datos según necesidad)
- **WebSockets:** Flask-SocketIO para comunicación en tiempo real
- **Autenticación:** JSON Web Tokens (JWT)

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener las siguientes herramientas instaladas en tu máquina:

- **Python 3.8+**
- **Node.js** (si vas a correr la parte de frontend de forma separada)
- **pip** (para la gestión de dependencias de Python)

### Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio:**

   - git clone https://github.com/RafaAlba909/chat-e2ee.git
   - cd chat-e2ee
   - python app.py
