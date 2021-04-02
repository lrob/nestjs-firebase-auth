FROM node:15.9.0

RUN npm i -g @nestjs/cli
RUN nest new --package-manager npm --skip-git app

WORKDIR /app
RUN npm i firebase-admin 

ADD . /app

ENTRYPOINT [ "npm", "run", "start" ]