# BackendDooverl

# Como resolvi el problema
1. **Descargar los Datos en Excel**
   - Descarga la hoja de cálculo en la opción "Todos" en formato Excel.

2. **Verificación de la Tabla de Datos Original**
   - Comprueba cómo estaba estructurada la tabla de información en el archivo Excel original para entender su formato y columnas.

3. **Configurar una Base de Datos MySQL en Railway**
   - Crea una base de datos MySQL en Railway (o tu plataforma de elección) para almacenar los datos.

4. **Duplicar la Tabla de Datos en la Base de Datos**
   - Crea una tabla llamada "zipCodes" en la base de datos y duplica la estructura de la tabla de Excel para almacenar los datos.

5. **Exportar Datos a archivos CSV**
   - Exporta cada hoja del archivo Excel original como un archivo CSV, cambiando la extensión adecuadamente.

6. **Ejecutar el Código de Importación de Datos**
   - Utiliza el archivo `node/index.js` para iterar a través de los archivos CSV en la carpeta `node/csvs` (uno por cada estado) e insertar la información en la tabla "zipCodes" de la base de datos MySQL.

7. **Configurar y Ejecutar el Servidor Django**
   - Crear una virtualenv con Django en Python para acceder a los datos almacenados en la base de datos MySQL.
   - Crear la ruta con la que se obtendran los datos mediante un codigo postal
   - Formatear la respuesta para que quede igual a la del ejemplo.

8. **Hostear el proyecto
   - Aqui la verdad batalle muchisimas horas, mas de las que me gustaria admitir, no se el porque no lo logre, capaz fue el estres que las soluciones faciles me las medio nublo pero pues en todas las plataformas que lo intente me daba error de algun tipo aunque segun yo y la documentacion todo estara bien, grabe un video del funcionamiento de la api y de los registros de la Base de Datos.

# Notas
Creo que aqui el fallo primero fue utilizar la version 11 de python cuando la mayoria de estos host usan hasta la 10, porque despues intente cambiar eso ya que estaban subidas y fue como que un problema la verdad no se que tanto haya afectado o no, llevaba años sin tocar python ni django, luego querer hacerlo rapido con la tecnologia que ya se que es node el insertado de los archivos csv a la tabla de MySQL,
eso igual me confundia en la estructura de los archivos si debia ser en una carpeta mas o una menos porque estaba alado lo de node cuando queria cambiar cosas de la virtualenv, python, django etc,
Me gusto mucho el proyecto pero la verdad si me fallo el poner el host de Django, todos los demas puntos creo que los logre completar bastante bien.
