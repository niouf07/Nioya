const User = require("./models/user");

// Guild.sync({ alter: true });
// delete old collum and add those from the model
User.sync({ force: true });
