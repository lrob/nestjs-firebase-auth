FROM node:15.9.0


RUN npm install -g create-react-app
RUN create-react-app /app
WORKDIR /app/
RUN npm install firebase react-router-dom react-router

ADD  src /app/src

ENTRYPOINT [ "npm", "start" ]