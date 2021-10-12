import "dotenv/config";
import { app } from "./app";

app.listen(process.env.APP_PORT, () => {
  console.log(`server started at http://localhost:${process.env.APP_PORT}`);
});
