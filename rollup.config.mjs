import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import postcss from "rollup-plugin-postcss";
import svgr from "@svgr/rollup";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "./dist/index.es.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss(),
      url(),
      svgr(),
      babel({
        exclude: "node_modules/**", // Não transpilar dependências
        babelHelpers: "bundled",
      }),
      terser(), // Minificação do bundle
    ],
    external: ["react", "react-dom"],
  },
];
