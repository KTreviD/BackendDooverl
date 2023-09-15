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
   - Crea un servidor Django en Python para acceder a los datos almacenados en la base de datos MySQL.
