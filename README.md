## Basic information about the app.
This web application front-end is written in React.js and backend is written in Python Flask.

The backend server is a REST-api server and thus does not serve any html pages or static files.
The front end makes REST calls to fetch data from the backend flask-server.
(The react.js code is hosted in another development server created automatically by create-react-app environment)

The app shows the resource usage (CPU, Memory etc...) of your computer in your local machine's web browser.

**Requirement: Your machine should have Node.js and Python3 installed. Kindly check for the same!**


## How to deploy and install dependencies
1. Clone the code or download the code into your local machine.
2. Go to the root folder of the app using the **Terminal**.
3. Type **npm install**
   *This will install all the javascript libraries mentioned inside package.json file.
   A node_modules/ folder will be created inside the project's root folder after all the dependencies are installed.*
4. Go to the api/ folder,**cd api**.
5. Type **phyton -m venv venv**
   *This will create a Python virtual environment inside the api/ folder.*
6. Type **source venv/bing/activate**
   *This will activate Python virtual environment*.
7. Type **pip install -r requirements.txt**
   *This will install all dependent python libraries required for the project.*
   Later after using the app you can deactivate or come out of Python virtual environment by typing **deactivate**

## How to run the application
   Now when you have installed all the react.js and flask dependencies in your local machine, time is to run the app.
1. Open a new **Terminal**
2. Open 2 tabs
3. Inside both the tabs go to the project root folder.
4. In the first tab type **yarn start**
    *This is start the local server which is hosting the react.js front-end app.*
     **Automatically your browser should open-up with url as localhost:3000**   
5. In the second tab type **yarn start-api**
   *This will start the backend flask server at port 5000*

6. If you want to run the unit test case, open a new terminal tab, go to the project root folder and type **yarn test-api**
    (Unit test cases are written to test the backend server REST functionality)   
