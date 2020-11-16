from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps
import json

#Conexion base de datos mongo

client = MongoClient("mongodb+srv://test:test@cluster0.dz8kp.mongodb.net/test?retryWrites=true&w=majority")
db = client.get_database('sopes1')
usuarios = db.usuarios

app = Flask(__name__)
CORS(app)


#Api Funcionando
@app.route('/')
def api_working():
    return 'API working!'
    
# Agragar datos a la base de datos mongo
@app.route('/insertarMongo', methods=['POST'])
def insertarMongo():
    if not request.json:
        abort(400)
    try:
        usuarios.insert_one(request.json)
        return jsonify({'response': "Datos insertados de forma correcta."}), 201
    except:
        return jsonify({'response': 'Error al intentar insertar en la base de datos.'}), 500
   
# Agragar datos a la base de datos
@app.route('/getUsers', methods=['GET'])
def getUser():
    try:
        data = usuarios.find()
        return dumps(data) , 200
    except:
        return jsonify({'response': 'Error al obtener informacionde de la base de datos.'}), 500
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

