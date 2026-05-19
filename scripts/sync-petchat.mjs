import { execFileSync } from "node:child_process";
import { existsSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const websiteRoot = resolve(__dirname, "..");
const petChatRoot = process.env.PETCHAT_REPO || "/Users/xiaomao822/Desktop/git/petchat/PetChat";
const outputPath = resolve(websiteRoot, "data/petchat-sync.ts");

if (!existsSync(resolve(petChatRoot, ".git"))) {
  throw new Error(`PetChat git repository not found: ${petChatRoot}`);
}

const git = (args) =>
  execFileSync("git", args, {
    cwd: petChatRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  }).trim();

const info = {
  sourceRoot: petChatRoot,
  branch: git(["branch", "--show-current"]) || "detached",
  commit: git(["rev-parse", "HEAD"]),
  shortCommit: git(["rev-parse", "--short=7", "HEAD"]),
  subject: git(["show", "-s", "--format=%s", "HEAD"]),
  committedAt: git(["show", "-s", "--format=%ci", "HEAD"]),
  syncedAt: new Date().toISOString(),
  hasUncommittedChanges: git(["status", "--porcelain"]).length > 0
};

const file = `export const petChatSyncInfo = ${JSON.stringify(info, null, 2)} as const;\n`;

writeFileSync(outputPath, file);

console.log(`Synced PetChat metadata: ${info.branch}@${info.shortCommit}`);
