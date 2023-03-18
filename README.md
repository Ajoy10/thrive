# Thrive
A web app developed for the 36 hour hackathon conducted APPLab HACKXHIBIT' 23, MAHE


## Setup
### To run the react app
``` 
cd ./frontend
npm install
npm start
```

### To setup the server
Inorder to get the secret files for testing purposes, please contact one of our team members
1. Create a ``.env``file under ``\server`` with the following content
```
PORT=5000

DB_USERNAME=main
DB_PASSWORD=<DB_PASSWORD>

WHITELISTED_DOMAINS = "http://localhost:3000, http://localhost:5000, *"
```
2. Setup firebase admin secrete<br>
  i. Create a ``\secret`` folder in ``server``<br>
  ii. Copy the json file obtained from Firebase sdk in the folder<br>
3. Run the server
```
cd ./server
npm install
npm run dev
```
