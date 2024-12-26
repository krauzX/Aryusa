import { execa } from "execa";
import fs from "fs";

(async () => {
  try {
    // Checkout existing gh-pages branch
    await execa("git", ["checkout", "gh-pages"]);
    console.log("Building started...");
    await execa("pnpm", ["run", "build"]);

    const folderName = fs.existsSync("dist") ? "dist" : "build";

    if (!fs.existsSync(folderName)) {
      throw new Error(`Directory ${folderName} does not exist`);
    }

    console.log(`Adding files from ${folderName} to Git...`);
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);

    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "gh-pages", "--force"]);

    fs.rmdirSync(folderName, { recursive: true });
    await execa("git", ["checkout", "-f", "main"]);

    console.log("Successfully deployed, check your settings");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
