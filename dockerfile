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

#FROM development AS build

#RUN npm run build

#FROM nginx:1.13-alpine

#COPY --from=build /code/build /usr/share/nginx/html