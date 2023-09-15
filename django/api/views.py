from django.http import JsonResponse
import MySQLdb
import json

def getZipCodes(request, codigo):
    db = MySQLdb.connect(
        host='containers-us-west-162.railway.app',
        user='root',
        password='1NZulvxyEQlLmZePjkGK',
        database='railway',
        port=5561,
    )

    try:
        cursor = db.cursor()

        # Ejecuta una consulta para buscar el código en la base de datos
        cursor.execute("SELECT * FROM zipCodes WHERE d_codigo = %s", (codigo,))

        # Obtiene los resultados de la consulta
        results = cursor.fetchall()

        if results:
            formatted_results = {
                "zip_code": results[0][9],
                "locality": results[0][5].upper() if results[0][5] is not None else None,
                "federal_entity": {
                    "key": results[0][4],
                    "name": results[0][6].upper() if results[0][6] is not None else None,
                    "code": None 
                },
                "settlements": [],
                "municipality": {
                    "key": results[0][3],
                    "name": results[0][7].upper() if results[0][7] is not None else None,  
                }
            }

            for row in results:
                settlement = {
                    "key": row[2],
                    "name": row[10].upper() if row[10] is not None else None,
                    "zone_type": row[1],
                    "settlement_type": {
                        "name": row[8],
                    }
                }
                formatted_results["settlements"].append(settlement)

            return JsonResponse(formatted_results)

        else:
            return JsonResponse({"message": "Código no encontrado en la base de datos"})

    except Exception as e:
        return JsonResponse({"error": str(e)})

    finally:
        db.close()

def hey(request):
    return JsonResponse({"Hola"})