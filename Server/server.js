import corsAnywhere from "cors-anywhere";

const host = "0.0.0.0";
const port = 8080;

const server = corsAnywhere.createServer({
  originWhitelist: [],
  requireHeader: [],
  removeHeaders: ["cookie", "cookie2"],

  setHeaders: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Accept": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://www.swiggy.com/",
  },
});

server.listen(port, host, () => {
  console.log(`Universal CORS Proxy running at http://${host}:${port}`);
});
