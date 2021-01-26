FROM node:14.15.4-alpine AS builder
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
RUN yarn build
ENV NODE_ENV=production
RUN yarn
EXPOSE 3000
CMD ["yarn", "start"]
