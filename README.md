# BackendDooverl

# Como resolvi el problema
1- Descargar en la opcion de "Todos" en Excel.
2- Ver como estaba la tabla de la informacion que tenian.
3- Crear mi base de datos en MySQL hosteada en railway.
4- Duplicar la tabla que ellos manejaban de su Excel en mi tabla "zipCodes.
5- Exportar cada hoja cambiandoles la extension por csv para poder leerlas e insertarlas con codigo.
6- Crear y ejecutar el codigo que se ve en el archivo de node/index.js, lo que hace es iterar todos los cvs que estan en node/csvs (Hay uno por cada estado), e insertar la informacion de esos archivios como registros en mi tabla de "zipCodes".
7- Una vez lista la tabla empece a crear el servidor de Django con python