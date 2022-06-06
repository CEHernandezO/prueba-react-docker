FROM node:16-alpine AS development
ENV  NODE_ENV development
WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
#RUN npm run build

#CMD [ "node", "src/index.js" ]
CMD [ "npm", "start" ]