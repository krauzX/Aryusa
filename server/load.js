import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadRoutes = (app) => {
  const routesPath = path.join(__dirname, "routes");
  fs.readdirSync(routesPath).forEach((file) => {
    const routePath = path.join(routesPath, file);
    if (fs.lstatSync(routePath).isFile() && file.endsWith(".js")) {
      const fileUrl = pathToFileURL(routePath).href;
      import(fileUrl)
        .then((routeModule) => {
          const router = routeModule.default;
          const routeName = file.replace(".js", "");
          app.use(`/api/${routeName}`, router);
          console.log(`Loaded route: /api/${routeName}`);
        })
        .catch((err) => {
          console.error(`Failed to load route ${routePath}: ${err.message}`);
        });
    }
  });
};

export default loadRoutes;
