FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN chmod +x build.sh
EXPOSE 4000
CMD ["./build.sh"]