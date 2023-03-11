# metro-app

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

[] Debe tener un listado de las estaciones de metro, donde debe aparecer al menos el nombre de fantasía, dirección, comuna y código de línea.
[] Al hacer clic sobre una de las estaciones se debe desplegar en un modal
el horario referencial de la estación.
[] Deben aparecer las estaciones paginadas por defecto en 20 estaciones, y
se debe permitir cambiar ese número con un listado con los siguientes
valores: 10, 20, 50, Todos.
[] Se debe poder filtrar por comuna y código de línea (por ejemplo, L1, L2,
etc).
[] Las llamadas desde el front a la API deben ser POST.