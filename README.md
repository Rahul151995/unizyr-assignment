# unizyr-assignment

- To read question [click here](https://github.com/Rahul151995/unizyr-assignment/blob/main/question.md)

- Codebase is Developed in TypeScript, Nodejs, Express and MongoDB.
- Integrated Cloud MongoDB DataBase.
- It is Deployed in HEROKU

- To Run The project below the Commands

```
npm install

```

- To Run the code in Local System.

```
npm run start-dev

```

- It will run on port 5000 in local system.

- API REQUEST

```
TO GET USER LIST
local url:localhost:5000/api/unizyr/user/user
hosted url :https://unizyr.herokuapp.com/api/unizyr/user/user
Request Type : GET

Response : [
      {
        "_id": "5fb6b55a4121c3d0917f3c73",
        "name": "krti",
        "email": "krti@gmail.com",
        "mobile": "2345676543",
        "address": {
            "_id": "5fb6b55a4121c3d0917f3c72",
            "houseFlatNo": "house no : 12",
            "addressLine1": "dwarka new ",
            "addressLine2": "sector 123",
            "city": "dwarka",
            "state": "new delhi",
            "pinCode": "23423423",
            "__v": 0
        },
        "__v": 0
    }
]

TO SIGN UP
local url:localhost:5000/api/unizyr/user/signup
hosted url :https://unizyr.herokuapp.com/api/unizyr/user/signup
Request Type: POST
Request Body in JSON: {
    "email":"rahul@gmail.com",
    "name":"rahul",
    "mobile":"2345676543",
    "address":{
        "houseFlatNo":"house no : 12",
        "addressLine1":"dwarka new ",
        "addressLine2":"sector 123",
        "city":"dwarka",
        "state":"new delhi",
        "pinCode":"23423423"

    }
}


```
