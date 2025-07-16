import { build, context } from "esbuild";

const [_, __, ...args] = process.argv;

if (args[0] == "dev") {
  console.log("building dev");
  const ctx = await context({
    entryPoints: ["src/public/lib/**/*.ts"],
    outdir: "src/public/lib/",
    bundle: true,
    minify: false,
  });
  process.addListener("SIGINT", () => process.exit(0));
  await ctx.watch();
}

await build({
  entryPoints: ["src/public/lib/**/*.ts"],
  outdir: "build/public/lib/",
  bundle: true,
  minify: true,
});
