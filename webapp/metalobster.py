from flask import Flask
from flask import make_response, request

import json
app = Flask(__name__)

@app.route('/')
def mainpage():
#   return send_file('templates/index.html') # production
    return make_response(open('templates/index.html').read())

name = "hello"
@app.route('/create_lobster', methods=['POST', 'GET'])
def create_lobster():
    global name
    if request.method != 'GET':
        name = "something else"
    return json.dumps({'name': request.data})

if __name__== '__main__':
    app.run(debug=True)
