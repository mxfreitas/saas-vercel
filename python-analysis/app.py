from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/curva-abc', methods=['POST'])
def curva_abc():
    payload = request.json.get('products', [])
    if not payload:
        return jsonify([])
    df = pd.DataFrame(payload)
    df['revenue'] = df.get('price',0) * df.get('quantity',1)
    df = df.sort_values('revenue', ascending=False)
    df['percentage'] = (df['revenue'] / df['revenue'].sum()) * 100
    df['cumulative'] = df['percentage'].cumsum()
    def cls(x):
        if x <= 80: return 'A'
        if x <= 95: return 'B'
        return 'C'
    df['class'] = df['cumulative'].apply(cls)
    return jsonify(df.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
