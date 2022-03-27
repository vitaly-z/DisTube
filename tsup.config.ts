import type { Options } from "tsup";

export const tsup: Options = {
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  minify: true,
  keepNames: true,
  skipNodeModulesBundle: true,
  sourcemap: true,
  target: "es2021",
};
