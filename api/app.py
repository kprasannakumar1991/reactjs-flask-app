from flask import Flask

import system

app = Flask(__name__)

@app.route('/cpu')
def get_cpu_usage():
    return {'value': system.cpu_usage()}

@app.route('/memory')
def get_memory_usage():
    return {'value': system.memory_usage()}

@app.route('/resource')
def get_resources_usage():
    return {
        'cpu': system.cpu_usage(),
        'memory': system.memory_usage()
    }
