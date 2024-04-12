FROM node:14 AS build
WORKDIR /app
COPY package.json ./
RUN npm install --frozen-lockfile
COPY . .

RUN npm build
FROM node:14-alpine
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000

CMD ["npm", "start"]