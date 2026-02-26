# UrbanBike – Reserva de Bicicletas por Hora

Aplicación full-stack que permite a los usuarios reservar bicicletas por hora en diferentes estaciones de la ciudad.

El proyecto fue desarrollado utilizando buenas prácticas de arquitectura, principios SOLID y despliegue en la nube con AWS.

---

# Arquitectura General

## Backend

- NestJS + TypeScript  
- Clean Architecture  
- Base de datos: Amazon DynamoDB  
- Contenerizado con Docker  
- Desplegado en AWS ECS Fargate  
- Expuesto mediante Application Load Balancer  
- Seguridad HTTPS gestionada con CloudFront  
- Infraestructura definida con CloudFormation (IaC)  

## Frontend

- React + Vite + TypeScript  
- Arquitectura Feature-Based  
- UI moderna con Material UI  
- Desplegado en Vercel  

---

# Cómo levantar el proyecto en local

## Backend

```bash
cd backend
npm install
npm run start:dev
```

El backend correrá en:

```
http://localhost:3000
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend correrá en:

```
http://localhost:5173
```

Asegúrate de tener en el archivo `.env` del frontend:

```
VITE_API_URL=http://localhost:3000
```

---

# Despliegue en Producción

## Backend (AWS)

- Dockerización del proyecto  
- Imagen subida a Amazon ECR  
- Servicio ejecutándose en ECS Fargate  
- Exposición pública mediante Application Load Balancer  
- Seguridad HTTPS agregada mediante CloudFront  
- Infraestructura creada y versionada con CloudFormation  

### Arquitectura final

```
Vercel (Frontend HTTPS)
        ↓
CloudFront (HTTPS)
        ↓
ALB (HTTP)
        ↓
ECS Fargate
        ↓
DynamoDB
```

---

## Frontend (Vercel)

- Deploy automático conectado a GitHub  
- Variable de entorno configurada:

```
VITE_API_URL=https://<cloudfront-domain>
```

---

# Decisiones Arquitectónicas

## Backend – Clean Architecture

Se implementó Clean Architecture organizando el proyecto por capas:

- domain  
- application  
- infrastructure  
- presentation  

### Justificación

Se decidió no aplicar una estructura basada en features en el backend debido al alcance limitado del proyecto (4 entidades principales) y para mantener claridad estructural.

Esto permite:

- Aplicar principios SOLID  
- Desacoplar el dominio del framework  
- Mejorar testabilidad  
- Facilitar futuras extensiones  

---

## Uso de Use Cases en lugar de Services

En lugar de una capa tradicional Service, se implementaron Use Cases específicos como:

- CreateReservationUseCase  
- FinishReservationUseCase  
- ListUserActiveReservationsUseCase  

### Beneficios

- Single Responsibility Principle (SRP)  
- Bajo acoplamiento  
- Alta cohesión  
- Mejor mantenibilidad  
- Arquitectura alineada con buenas prácticas  

Cada clase representa una acción concreta del sistema, evitando clases genéricas con múltiples responsabilidades.

---

## Frontend – Feature-Based Architecture

El frontend fue estructurado por funcionalidades:

```
features/
  stations/
  reservations/
  admin/
```

Cada feature contiene:

- Componentes  
- Hooks  
- Tipos  
- Capa de acceso a API  

### Justificación

Este enfoque permite:

- Alta cohesión por dominio funcional  
- Escalabilidad  
- Separación clara de responsabilidades  
- Aplicación práctica de principios SOLID  
- Evitar sobreingeniería  

Es una estructura ampliamente utilizada en aplicaciones React modernas.

---

# Estrategia de Ramas

Se utilizó un flujo basado en Git Flow:

- main → rama estable (producción)  
- develop → integración  
- feature/* → desarrollo de funcionalidades  

Las features se integraron primero en develop y, tras validación completa, se realizó un Pull Request hacia main para consolidar la versión final estable.

Esto garantiza:

- Control  
- Trazabilidad  
- Separación entre desarrollo y versión productiva  

---

# Resultado

El proyecto demuestra:

- Dominio de TypeScript  
- Manejo de asincronía y promesas  
- Aplicación de principios SOLID  
- Arquitectura limpia y mantenible  
- Despliegue cloud profesional en AWS  
- Integración continua y despliegue en Vercel  

---

# Autor

Desarrollado como prueba técnica demostrando buenas prácticas de arquitectura, organización de código y despliegue en la nube.