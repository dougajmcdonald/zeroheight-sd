import StyleDictionary from "style-dictionary";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";

const styleDictionaryTailwind = new StyleDictionary(
  makeSdTailwindConfig({
    type: "all",
    log: {
      warnings: "warn", // 'warn' | 'error' | 'disabled'
      verbosity: "verbose", // 'default' | 'silent' | 'verbose'
      errors: {
        brokenReferences: "throw", // 'throw' | 'console'
      },
    },
  })
);

async function runBuild() {
  await styleDictionaryTailwind.hasInitialized;
  await styleDictionaryTailwind.buildAllPlatforms();
}

runBuild();
