FROM node:latest as builder

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --ignore-engines

COPY . .

RUN yarn build

FROM node:latest

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD [ "yarn", "serve:prod" ]