# Gebruik een webserver om statische bestanden te serveren
FROM nginx:alpine

# Kopieer de frontend bestanden naar de server directory
COPY . /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]