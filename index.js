require("dotenv").config();
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
// Create Express Server
const app = express();

// Configuration
const PORT = 3001;
const HOST = "localhost";
const API_SERVICE_URL = "https://opendata.resas-portal.go.jp";

// Proxy endpoints
app.use(
  "/",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    headers: {
      "X-API-KEY": process.env.AREAS_API_KEY,
    },
  })
);

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
