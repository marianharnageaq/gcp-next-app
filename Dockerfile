FROM node:14 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

RUN yarn build
FROM node:14-alpine
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000

CMD ["npm", "start"]