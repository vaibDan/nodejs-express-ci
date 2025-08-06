ARG NODE_VERSION=16.x
FROM node:${NODE_VERSION}-slim

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]