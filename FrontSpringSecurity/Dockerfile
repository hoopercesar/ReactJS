## dockerfile  document 
                                  
# Usa una imagen base de Node.js
FROM node:latest as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Configura el entorno de producción
FROM nginx:latest

# Copia los archivos de construcción de la aplicación de la imagen de construcc>
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Exponer el puerto 80 para que Nginx pueda servir la aplicación
EXPOSE 80

# Comando para iniciar Nginx cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]
