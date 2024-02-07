import fs from "fs";
import path from "path";

const fileRemover = (filename) => {
  fs.unlink(
    path.join(__dirname, "../uploads", __filename, function (err) {
      if (err && err.code == "ENOENT") {
        console.info("File doesn't exist, won't remove it.");
      } else if (err) {
        console.error("Error occurred while trying to remove file");
      } else {
        console.info(`removed ${filename}`);
      }
    })
  );
};

export default fileRemover;
