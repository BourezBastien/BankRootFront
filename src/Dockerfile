# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:lts as build 

RUN apt update
RUN apt-get install sudo -y
RUN sudo -s

RUN npm install -g http-server

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . .

RUN ls

# Install all the dependencies

RUN npm install
# Stage 2: Serve app with nginx server

RUN npm run build:prod

# Use official nginx image as the base image
FROM nginx:latest
# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/bank-root-front /usr/share/nginx/html

RUN apt-get update && \
    apt-get install -y certbot && apt install python3-certbot-nginx -y && apt install wget -y

CMD ["cd"]
CMD ["certbot", "certonly", "--agree-tos", "--non-interactive", "--text", "--email", "bourezbastien@gmail.com", "--preferred-challenges", "dns,http", "--nginx", "-d", "bankr00t.com"]

CMD ["cp", "nginx/nginx.conf", "/etc/nginx/nginx.conf"]
CMD ["cp", "nginx/nginx_ssl.conf", "/etc/nginx/nginx_ssl.conf"]
CMD ["rm", "-r", "/etc/nginx/nginx.conf"]
CMD ["mv", "/etc/nginx/nginx_ssl.conf", "/etc/nginx/nginx.conf"]
CMD ["service", "nginx", "restart"]

# Expose port 80
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
