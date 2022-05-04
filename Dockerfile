# build stage
FROM node:13-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENV BASE_URL=http://localhost:8000

# production stage
FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 5000