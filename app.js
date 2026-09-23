const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const name = "learn pugal";
 
app.get("/", (req, res) => {
    const welcomeMessage = `Welcome to ShopEasy ${name} software `;
    res.send(welcomeMessage);
});
 
const server = app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
module.exports = { app, server,name };