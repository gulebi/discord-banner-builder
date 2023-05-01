import { defineConfig } from "tsup";

export default defineConfig([
    {
        clean: true,
        platform: "node",
        entry: ["./src/index.ts"],
        format: ["cjs", "esm"],
        minify: false,
        dts: true,
        sourcemap: true,
    },
]);
