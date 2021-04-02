# nestjs-firebase-auth

This repository implements an example of firebase authentication with a frontend implemented in `React` and a backend implemented in `nestjs`.
The backend code has been written following the official [`nestjs`](https://docs.nestjs.com/first-steps) and this [tutorial](https://medium.com/@sharma.vikashkr/nestjs-firebase-auth-secured-nestjs-resource-server-9649bcebd0de). The frontend code has been written following this [tutorial](https://dev.to/betiol/how-to-handle-authentication-on-node-js-using-firebase-5ajn).

## Prerequisites

* [Docker](https://docs.docker.com/get-docker/)
* [Docker-compose](https://docs.docker.com/compose/install/)

## Configuration

After cloning this repository to configure the frontend and the backend to interact with firebase take the following steps:

* Create the file `backend/src/auth/credential.json` following the instructions contained in this [firebase docs](https://firebase.google.com/docs/admin/setup#initialize-sdk) under the section **To generate a private key file for your service account**
* Create the file `frontend/src/firebaseConfig.json` with the configuration that you app needs to contact the firebase authentication server. In the [tutorial](https://dev.to/betiol/how-to-handle-authentication-on-node-js-using-firebase-5ajn) this information is shown in the screenshot titled **Add firebase to your app**. The json file will result in something like

```json
{
    "apiKey": "your-apiKey",
    "authDomain": "your-authDomain",
    "projectId": "your-projectId",
    "storageBucket": "your-storageBucket",
    "messagingSenderId": "your-messagingSenderId",
    "appId": "your-appId"
}  
```

## Run

To run the code follow the steps below:

* `docker-compose build`
* `docker-compose up -d`

when the services are up you should be able to contact the frontend at the address [localhost:3000/login]() and the frontend at the backend at [localhost:4000].
