const mysql = require('mysql2');
const fs = require('fs');
const csv = require('csv-parser');

const connection = mysql.createConnection({
    host: 'containers-us-west-162.railway.app',
    user: 'root',
    password: '1NZulvxyEQlLmZePjkGK',
    database: 'railway',
    port: 5561,
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL, ahuevo');

    let filesProcessed = 0;

    for (let i = 1; i <= 32; i++) {
        const csvFilePath = `csvs/csv${i}.csv`;

        const results = [];

        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', () => {
                const insertQuery = `INSERT INTO zipCodes (d_codigo, d_asenta, d_tipo_asenta, D_mnpio, d_estado, d_ciudad, d_CP, c_estado, c_oficina, c_CP, c_tipo_asenta, c_mnpio, id_asenta_cpcons, d_zona, c_cve_ciudad) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

                for (const row of results) {
                    const values = [
                        row.d_codigo || null,
                        row.d_asenta || null,
                        row.d_tipo_asenta || null,
                        row.D_mnpio || null,
                        row.d_estado || null,
                        row.d_ciudad || null,
                        row.d_CP || null,
                        row.c_estado || null,
                        row.c_oficina || null,
                        row.c_CP || null,
                        row.c_tipo_asenta || null,
                        row.c_mnpio || null,
                        row.id_asenta_cpcons || null,
                        row.d_zona || null,
                        row.c_cve_ciudad || null
                    ];
                    connection.query(insertQuery, values, (err, results) => {
                        if (err) {
                            console.error('Error al insertar fila:', err);
                        } else {
                            console.log('Fila insertada con éxito');
                        }
                    });
                }

                filesProcessed++;

                if (filesProcessed === 32) {
                    // Cerrar la conexión después de procesar el último archivo CSV
                    //Si no se pone asi da error porque se cierra antes
                    connection.end();
                }
            });
    }
});