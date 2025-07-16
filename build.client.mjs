import { build, context } from "esbuild";

const [_, __, ...args] = process.argv;

if (args[0] == "dev") {
  console.log("building dev");
  const ctx = await context({
    entryPoints: ["src/public/*.ts"],
    outdir: "src/public/",
    bundle: true,
    minify: false,
  });
  process.addListener("SIGINT", () => process.exit(0));
  await ctx.watch();
}

await build({
  entryPoints: ["src/public/*.ts"],
  outdir: "build/public/",
  bundle: true,
  minify: true,
});
