import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x0cE6A654A8311559BC351DBa6AAECd83b7ee48d3",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "MemeDAO Members",
        description: "TA DAO for Memers to have Fun & make Money all together!",
        image: readFileSync("scripts/assets/propaganda1.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()