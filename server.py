from flask import Flask, request, jsonify, send_file
import os

app = Flask(__name__)

# Ruta para servir tu index.html directamente
@app.route("/")
def home():
    return send_file("index.html")  # asegúrate que index.html esté en la misma carpeta que server.py

@app.route("/calcular", methods=["POST"])
def calcular():
    data = request.json
    expresion = data.get("expresion", "")
    try:
        resultado = eval(expresion)
        return jsonify({"resultado": resultado})
    except:
        return jsonify({"resultado": "Error"})

if __name__ == "__main__":
    app.run(debug=True)
