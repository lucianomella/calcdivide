FROM node:12-slim
ENV PORT=3001
COPY ./ ./
RUN npm i
RUN npm test
EXPOSE 3001
CMD [ "npm","start" ]
