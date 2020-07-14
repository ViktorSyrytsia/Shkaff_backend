require("@babel/register")({
        presets: ["@babel/preset-env"]
});
const server = require('../Shkaff_backend');

// Import the rest of our application.
module.exports = require('./server.js')
