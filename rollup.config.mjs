import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import { cacheBuild } from "rollup-cache";
import multiInput from "./rollup.multiinput.config.js";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import { default as tsPatchCompiler } from "ts-patch/compiler/typescript.js";
import url from "@rollup/plugin-url";
import replace from "@rollup/plugin-replace";

const cacheConfig = {
  name: "my-design-system",
  dependencies: ["rollup.config.mjs"],
};

export default cacheBuild(cacheConfig, {
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    resolve({
      browser: true, // Suporte para pacotes de navegador
      preferBuiltins: false, // Preferir pacotes nativos em vez de polyfills
    }),
    multiInput({ relative: "src/" }),
    peerDepsExternal(),
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
    replace({
      preventAssignment: true,
      values: {
        "use client": "", // Substituir "use client" por um espaço vazio
      },
    }),
  ],
});
