from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def write_data():
    with open('data.txt', 'w') as f:
        f.write('Hello, World!')

# Route for the main page
@app.route('/')
def home():
    return render_template('index.html')

# Route to process user input
@app.route('/process', methods=['POST'])
def process():
    data = request.json
    user_input = data.get('user_input', '')
    response = f"Hello, {user_input}!"
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
