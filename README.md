# metro-app

Prueba técnica en NuxtJS

Demo: [https://metro-app-psi.vercel.app/](https://metro-app-psi.vercel.app/)
![](https://i.imgur.com/UcIJeD2.png)

* En el caso de presentar errores de cors, se recomienda utilizar la extensión de chrome: ["ALLOW CORS"](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en)


## Dependencias
Estas son las principales dependencias utilizadas en el proyecto:

Nuxt: v2.15.8
Vue.js: v2.7.10
Axios: v5.13.6

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Requerimientos

- [x] Debe tener un listado de las estaciones de metro, donde debe aparecer al menos el nombre de fantasía, dirección, comuna y código de línea.
- [x] Al hacer clic sobre una de las estaciones se debe desplegar en un modal el horario referencial de la estación.
- [x] Deben aparecer las estaciones paginadas por defecto en 20 estaciones, y se debe permitir cambiar ese número con un listado con los siguientes valores: 10, 20, 50, Todos.
- [x] Se debe poder filtrar por comuna y código de línea (por ejemplo, L1, L2, etc).
- [x] Las llamadas desde el front a la API deben ser POST.