#gebruikt Alpine Linux image als base os
FROM node:18-alpine 

#zet de workdirectory in op /app in de container
WORKDIR /app

#kopieert het package.json bestand naar de container
COPY package.json ./

#installeert de dependencies van de package.json
RUN npm install

#kopieert alle bestanden uit de huidige directory naar de container
COPY . .

#opent poort 5000
EXPOSE 5000

#start de server
CMD ["node", "server.js"]
