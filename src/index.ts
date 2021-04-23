import app from "./app";
import connect from "./db";

(async () => {
  await connect();
  app.listen(4000, () => console.log("🚀 @4000"));
})();
