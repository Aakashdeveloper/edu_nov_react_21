FROM node
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8700
CMD ["npm","start"]