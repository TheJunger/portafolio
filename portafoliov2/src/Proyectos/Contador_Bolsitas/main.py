from flask import Flask, request, jsonify, send_file
import sqlite3
from flask_cors import CORS
from io import BytesIO
import pandas as pd
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'yametekudasai'  # Cambia esto a un valor seguro
CORS(app, origins=["*"])
jwt = JWTManager(app)

@app.route('/api/register', methods=['POST'])
def register():
    username = request.json['username']
    password = request.json['password']
    hashed_password = generate_password_hash(password)

    conn = sqlite3.connect('/home/TheJunger/mysite/database.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, hashed_password))
    conn.commit()
    conn.close()

    return jsonify(message='User registered successfully'), 201

@app.route('/api/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']

    conn = sqlite3.connect('/home/TheJunger/mysite/database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT password FROM users WHERE username = ?', (username,))
    user = cursor.fetchone()
    conn.close()

    if user and check_password_hash(user[0], password):
        access_token = create_access_token(identity=username)
        print('login correcto')
        return jsonify(access_token=access_token), 200
    else:
        return jsonify(message='Invalid credentials'), 401

@app.route("/", methods=["GET"])
def test():
    conn = sqlite3.connect('/home/TheJunger/mysite/database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM bolsitas')
    data = cursor.fetchall()
    conn.close()
    columns = ["ID","Dueño", "Color", "Grosor", "Selladas", "Sin_Sellar", "Total"]
    result = [dict(zip(columns,row)) for row in data]
    return jsonify(result)

@app.route("/api/get-bolsitas-data", methods=["GET"])
@jwt_required()
def get_bolsitas_data():
    conn = sqlite3.connect('/home/TheJunger/mysite/database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM bolsitas')
    data = cursor.fetchall()
    conn.close()
    columns = ["ID","Dueño", "Color", "Grosor", "Selladas", "Sin_Sellar", "Total"]
    result = [dict(zip(columns,row)) for row in data]
    return jsonify(result)

@app.route("/api/get-specific-data", methods=["POST"])
def get_specific_bolsita():
    id = request.json["bolsitaid"]
    conn = sqlite3.connect("/home/TheJunger/mysite/database.db")
    cursor = conn.cursor()
    #cursor.execute(f'SELECT * FROM bolsitas WHERE id_bolsita = {id}')
    cursor.execute('SELECT * FROM bolsitas WHERE id_bolsita = ?', (id,))# asi para evitar sql inyection
    data = cursor.fetchall()
    conn.close()
    # Formatea los datos como una lista de diccionarios
    columns = ["ID","Dueño", "Color", "Grosor", "Selladas", "Sin_Sellar", "Total"]
    result = [dict(zip(columns, row)) for row in data]
    return jsonify(result)

@app.route("/api/save-bolsita", methods=["POST"])
@jwt_required()
def save_bolsita():
    id = request.json["bolsitaid"]
    nuevo_valor_selladas = request.json["nuevoValorSelladas"]
    nuevo_valor_sin_sellar = request.json["nuevoValorSinSellar"]

    conn = sqlite3.connect("/home/TheJunger/mysite/database.db")
    cursor = conn.cursor()

    cursor.execute(f'UPDATE bolsitas SET selladas = ?, sin_sellar = ? WHERE id_bolsita = ?',
                   (nuevo_valor_selladas, nuevo_valor_sin_sellar, id))
    conn.commit()
    conn.close()

    return jsonify(message='Data updated successfully'), 200

@app.route("/api/generate-excel", methods=["GET"])
@jwt_required()
def generate_excel():
    conn = sqlite3.connect("/home/TheJunger/mysite/database.db")
    cursor = conn.cursor()
    cursor.execute(f'SELECT * FROM bolsitas WHERE id_bolsita != 1')
    data = cursor.fetchall()
    conn.close()
    # Formatea los datos como una lista de diccionarios
    columns = ["ID","Dueño", "Color", "Ancho", "Selladas", "Sin_Sellar", "Total"]
    df = pd.DataFrame(data, columns=columns)

    # Excluir la columna "Color"
    df = df.drop(columns=["ID", "Dueño", "Color"])


    # Crear un buffer en memoria para guardar el archivo Excel
    output = BytesIO()
    with pd.ExcelWriter(output, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name='Bolsitas')

    output.seek(0)

    #Enviar el archivo Excel como una respuesta de descarga
    return send_file(output, download_name="bolsitas_data.xlsx", as_attachment=True)

