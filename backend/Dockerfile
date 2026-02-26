# =========================
# 1️⃣ Build Stage
# =========================
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos package.json primero para aprovechar cache
COPY package*.json ./

# Instalamos dependencias
RUN npm ci

# Copiamos el resto del código
COPY . .

# Compilamos NestJS
RUN npm run build

# =========================
# 2️⃣ Production Stage
# =========================
FROM node:20-alpine

WORKDIR /app

# Copiamos solo lo necesario
COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/dist ./dist

# Puerto que usa Nest
EXPOSE 3000

# Comando de arranque
CMD ["node", "dist/main.js"]