FROM node:8.4.0

RUN npm install -g webpack

COPY package.json package.json
RUN npm install
COPY . .
RUN webpack
CMD ["node", "server.js"]
EXPOSE 3000
