const { app } = require("@azure/functions");

app.http("wave", {
  handler: async () => ({
    body: "👋",
  }),
});
