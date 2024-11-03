# Development
Pasos para levantar la app en desarrollo

1. levantar la base de datos
 ```
 En caso de utilizar docker
 ```
2. Renombrar el archivo .env.template a .env
3. Reemplazar las variables de entorno
4. Instalar dependencias 
```
npm install
```
4. Correr migraciones de Prisma
```
 npx prisma migrate dev
```

 # Prisma comands
 ```
 npx prisma init
 npx prisma generate
 ```