import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { cacheBuild } from "rollup-cache";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import { default as tsPatchCompiler } from "ts-patch/compiler/typescript.js";
import url from "@rollup/plugin-url";

const cacheConfig = {
  name: "my-design-system",
  dependencies: ["rollup.config.js"],
};

export default cacheBuild(cacheConfig, {
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    nodeResolve({ browser: true }),
    typescript({
      outDir: "dist",
      useTsconfigDeclarationDir: true,
      typescript: tsPatchCompiler,
      tsconfigDefaults: {
        compilerOptions: {
          plugins: [
            { transform: "typescript-transform-paths" },
            {
              transform: "typescript-transform-paths",
              afterDeclarations: true,
            },
          ],
        },
      },
    }),
    url(),
    commonjs(),
    json(),
    babel({ exclude: "node_modules/**", babelHelpers: "bundled" }),
  ],
});
