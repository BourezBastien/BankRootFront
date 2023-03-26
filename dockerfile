# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:lts as build

RUN npm install -g http-server

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . .

# Install all the dependencies
RUN npm install

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest
# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/bank-root-front /usr/share/nginx/html

RUN apt-get update && \
    apt-get install -y certbot && apt install python3-certbot-nginx -y && apt install wget -y

COPY nginx/nginx.conf /etc/nginx/nginx.conf

RUN certbot --non-interactive --agree-tos --email "bourezbastien@gmail.com" --nginx -d "bankr00t.com"

COPY nginx/nginx_ssl.conf /etc/nginx/nginx_ssl.conf

RUN rm -r /etc/nginx/nginx.conf && mv /etc/nginx/nginx_ssl.conf /etc/nginx/nginx.conf

RUN service nginx restart

# Expose port 80
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]