const { log } = require("console");
const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "components");
const indexPath = path.join(componentsDir, "index.ts");

function generateExports() {
  fs.readdir(componentsDir, (err, files) => {
    if (err) {
      console.error("Error reading components directory:", err);
      return;
    }

    const exportStatements = files
      .filter((file) => file.endsWith(".tsx") && file !== "index.ts")
      .map((file) => {
        const componentName = path.basename(file, ".tsx");
        return `export { default as ${componentName} } from './${componentName}';`;
        console.log(`Added ${componentName} SuccessFully`);
      })
      .join("\n");

    fs.writeFile(indexPath, exportStatements, (err) => {
      if (err) {
        console.error("Error writing to index.ts:", err);
      } else {
        console.log("Successfully generated index.ts");
      }
    });
  });
}

generateExports();
