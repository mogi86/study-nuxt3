FROM node:16.15.0
WORKDIR /app
COPY package*.json ./
COPY . .
# RUN npm install -g yarn
RUN yarn install
RUN yarn build

EXPOSE 3000
CMD ["yarn", "preview"]
