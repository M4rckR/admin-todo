# Development
Pasos para levantar la app en desarrollo

1. levantar la base de datos

```
docker compose up -d
```

2. Renombrar el archivo .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el seed para [crear la base de datos local](localhost:3000/api/seed)

```
npx prisma db seed
```


# Prisma Comands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod

# Stag


