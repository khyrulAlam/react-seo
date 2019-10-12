import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import bodyParser from "body-parser";
import Helmet from "react-helmet";

import App from "./src/app";

const app = express();
const PORT = process.env.PORT || "3232";

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  const html = `
        <html ${helmet.htmlAttributes.toString()}>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                <div id="root">
                    ${content}
                </div>
                <script src="/client_bundle.js"></script>
            </body>
        </html>
    `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
