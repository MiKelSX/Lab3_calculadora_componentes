from flask import Flask, request, jsonify
app = Flask(__name__)

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
