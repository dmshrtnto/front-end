FROM node:15.13-alpine
WORKDIR /app
ENV PATH ="./node_modules/.bin:$PATH"
COPY . /app
RUN npm run build
CMD ["npm","start"]