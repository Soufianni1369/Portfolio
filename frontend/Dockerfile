#gebruikt nginx om een webserver te maaken
FROM nginx:alpine

#kopieer de frontend bestanden naar de server directory
COPY . /usr/share/nginx/html

#Zorgt dat de server ook rechten heeft om ze te viewen
RUN chmod -R 755 /usr/share/nginx/html

#opent poort 80 zodat je je website kan zien
EXPOSE 80

#runt nodige commands in de container
CMD ["nginx", "-g", "daemon off;"]