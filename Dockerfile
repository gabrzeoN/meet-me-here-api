FROM node:16.19.0

WORKDIR /app/api

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npx prisma migrate dev

EXPOSE 4000

CMD [ "npm", "run", "dev" ]