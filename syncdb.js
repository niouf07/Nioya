const Lvl = require("./models/lvl");

// Guild.sync({ alter: true });
// delete old collum and add those from the model
Lvl.sync({ force: true });
