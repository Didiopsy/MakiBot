const client = require("./client/client.js"); // Importation du client
const config = require("../config.js"); // Importation du fichier de configuration

client.login(config.token); // Connexion à discord
