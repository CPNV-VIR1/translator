# syntax=docker/dockerfile:1
FROM nginx:latest
WORKDIR /app
# TODO: Build tailwind css before copying it
COPY resources/css ./css
COPY resources/views/index.html ./index.html
COPY public/ ./
RUN echo "server { \n\
      listen 80; \n\
      listen [::]:80; \n\
      server_name translator; \n\
      location / { \n\
        root /app; \n\
        index index.html index.htm; \n\
      } \n\
      location /translation { \n\
        proxy_pass http://translator-backend:8080/translation; \n\
      } \n\
    }" > /etc/nginx/conf.d/default.conf