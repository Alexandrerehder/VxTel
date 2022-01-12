FROM node 

WORKDIR /usr/api

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3333

CMD ["yarn","dev"]



