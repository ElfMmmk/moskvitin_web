FROM node:18-alpine
WORKDIR /client
COPY *.json ./
RUN npm install
COPY . .
RUN npm run build

RUN npm install -g serve
CMD serve -s -p 3000 dist

EXPOSE 3000
