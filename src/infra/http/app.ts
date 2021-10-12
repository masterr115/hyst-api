import express from "express";
const app = express();

import routes from "./routes";
import rateLimit from "express-rate-limit";

const apiLimiter = rateLimit({
  windowMs: 5000, // 5 seconds
  max: 5,
  message: "Too many requests, wait before consulting another information",
});

app.use(apiLimiter);
app.use(routes);

export { app };
