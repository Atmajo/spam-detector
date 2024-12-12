import flask
import numpy as np
from main import Read, Process

app = flask.Flask(__name__)

class Main:
    def __init__(self, file, text):
        self.file = file
        self.text = text
    
    def main(self):
        read = Read(self.file)
        df = read.read()
        
        process = Process(df, self.text)
        process.preprocess()
        result = process.isSpam()
        
        return result
    
@app.route('/test', methods=['GET'])
def test():
    file = './spamwords.csv'
    
    text = 'click the link below to get xxx free, earn money'
    text = np.array(text.lower().split(" "))
    
    main = Main(file, text)
    prediction = main.main()
    
    return flask.jsonify({'prediction': prediction})

@app.route('/predict', methods=['POST'])
def predict():
    file = './spamwords.csv'
    
    text = flask.request.json['text']
    text = np.array(text.lower().split(" "))
    
    main = Main(file, text)
    prediction = main.main()
    
    return flask.jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")