# juegos-seguimos-educando

## Instalacion

En primer lugar, clonar el repositorio

```bash
git clone git@github.com:diegodorado/juegos-seguimos-educando.git
cd juegos-seguimos-educando
```

Luego, cada webapp tiene su propio subdirectorio, con sus configuraciones y dependencias.  
Por ejemplo, para trabajar en `malvinas`:


```bash
cd malvinas
yarn install
yarn start
```

O con `npm`

```bash
cd malvinas
npm i
npm start
```

Se iniciará un webserver con hot reload en `http://localhost:8080`

## Distribución

Para distribuir una versión de una webapp, se debe ejecutar `yarn build` ( o `npm build`) desde el directorio de la webapp.  
Por ejemplo, para distribuir `malvinas`:

```bash
cd malvinas
yarn build
```

La carpeta `malvinas/dist` contendrá todos los archivos a distribuir.
