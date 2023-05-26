# Sistema de Gestion de Clientes

## Guia para poner la aplicacion en marcha

### Requerimientos:

1. SQL Server 2019
2. NodeJs version 16.17.0
3. Angular CLI version 16.0.2
4. .NET Framework 6 (net6.0)

<br>

## Una vez todas las dependencias estan listas, es necesario:<br>

### ( 1 ) Abrir el proyecto ASP.NET con Visual Studio, esto para poder actualizar la conexion y aplicar la migracion a la base de datos.

<br>

>Hay dos proyectos en el mismo repositorio: **management_view** es un proyecto de Angular y **Management** es el proyecto .NET (ese debes abrir, dando doble click a la solucion, que es el archivo **Management.sln** )

<br>

### ( 2 ) (En el mismo proyecto) Restablecer la conexion a la base de datos, para lo cual deberas actualizar el archivo **appsettings.json** del proyecto **Management.Api**.

<br>

![Ubicacion de la conexion](/docs/appsettings.png "appsettings.json")

## Cuando la conexion esté lista...

### ( 2 ) Será necesario aplicar la migración generada por EntityFramework para actualizar la base de datos.

1. Abre la consola del manejador de paquetes (Nuget)

![Abrir consola del manejador de paquetes](/docs/openPMC.png "Open Package manager console")

2. En la consola, escribe el comando **update-database**. Esto deberia generar una salida como la siguiente imagen:

![Resultado de la actualizacion](/docs/dbUpdate.png "Resultado de la operacion")

## *Nota: Es importante tomar en cuenta lo señalado en la imagen anterior, debe estar seleccionada la opcion que aparece.*

<br>

# Si todo salió bien hasta este punto, pues ya es tiempo de poner el proyecto en marcha.

### Para esto me tome el tiempo de configurar unos scripts que al final hacen la tarea, y luego, resumí esos scripts como uno solo:

    npm run launch

>Toma en cuenta que debes abrir una consola y posicionarla en la ruta raiz del repositorio (donde están los dos proyectos)

### Este script deberia instalar los modulos de la aplicacion hecha con Angular, luego generará los archivos estáticos y para finalizar, deberia abrir una ventana en el navegador web donde cargará la aplicacion una vez se haya iniciado.

<br>

## Hice mi mejor esfuerzo, aun asi soy consciente que esta configuracion podria fallar, en ese caso puedes intentar otra forma:

1. Abre una consola apuntando a la ruta raiz del repositorio.
2. Ejecuta el script para instalar los modulos del proyecto.

> ### npm run prep

3. Ejecuta el script para generar los archivos estáticos (build) de la aplicacion web (ya está preparado para generarlos en su lugar).

> ### npm run build

### Llegado a este punto, ya el proyecto .NET está listo para entrar en accion.

4. Abre la solucion del proyecto "Management", el archivo "Management.sln". Esto deberia abrir Visual Studio, luego que finalice de cargar todo, recuerda actualizar la conexion a la base de datos, tal como indiqué más arriba, y de igual forma, aplicar la migracion para actualizar la base de datos (está detallado en la forma anterior para poner la aplicacion a funcionar).

5. Si todo pasa bien, pues solo es necesario iniciar la aplicacion, presionando la tecla F5.

6. Luego que la aplicacion inicie, se abrirá una ventana del navegador donde te mostrará la documentacion de como funciona (generada por Swagger), luego de esto, abre una nueva ventana del navegador y pega la siguiente ruta:

> ### http://localhost:5188/index.html

<br>

### Al final, el navegador deberia cargar una pagina web como la siguiente:

<br>

![Resultado de la actualizacion](/docs/webFinal.png "Resultado de la operacion")


## FIN