# Dockerfile per Railway (opzionale, ma consigliato)
FROM node:22-alpine

WORKDIR /app

# Installa pnpm
RUN npm install -g pnpm@10.4.1

# Copia package files
COPY package.json pnpm-lock.yaml ./

# Copia patches
COPY patches/ ./patches/

# Installa dipendenze
RUN pnpm install --frozen-lockfile

# Copia il resto del codice
COPY . .

# Build
RUN pnpm build

# Esponi la porta
EXPOSE 3000

# Start
CMD ["pnpm", "start"]
