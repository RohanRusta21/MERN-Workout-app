FROM node

WORKDIR /Users/milan/VS Code/MERN/backend

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "start"]