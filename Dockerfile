FROM node:21 AS build
WORKDIR /app
COPY package.json ./
RUN npm install --frozen-lockfile
COPY . .

RUN npm run build
FROM node:21-alpine
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000

CMD ["npm", "start"]