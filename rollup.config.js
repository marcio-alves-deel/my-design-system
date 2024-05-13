import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { cacheBuild } from "rollup-cache";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

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
    resolve(),
    commonjs(),
    typescript({
      outDir: "dist",
      useTsconfigDeclarationDir: true,
    }),
    commonjs(),
  ],
});
