FROM node:14.17-alpine
# WORKDIR /usr/app
WORKDIR /app
COPY package*.json .
RUN npm install
RUN npm install -g typescript
COPY . .
RUN tsc
# EXPOSE 8080
CMD [ "npm", "start" ]
