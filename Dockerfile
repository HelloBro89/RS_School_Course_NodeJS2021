FROM node:14.17-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
# RUN npm install -g typescript
COPY . .
RUN tsc
CMD [ "npm", "run", "start" ]
