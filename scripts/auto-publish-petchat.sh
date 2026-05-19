#!/bin/sh
set -eu

WEBSITE_DIR="/Users/xiaomao822/Desktop/官网"
PETCHAT_REPO="${PETCHAT_REPO:-/Users/xiaomao822/Desktop/git/petchat/PetChat}"
LOCK_DIR="/tmp/petpulse-petchat-sync.lock"

if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  echo "[petpulse-sync] another sync is already running; skip"
  exit 0
fi
trap 'rmdir "$LOCK_DIR"' EXIT INT TERM

# Git hooks export repository-local environment variables. Clear them before
# operating on the website repo; otherwise git commands can still target PetChat.
unset $(git rev-parse --local-env-vars 2>/dev/null || true)

cd "$WEBSITE_DIR"

SYNC_FILES="data/petchat-sync.ts data/petchat.ts"

if ! git diff --quiet -- . ':!data/petchat-sync.ts' ':!data/petchat.ts'; then
  echo "[petpulse-sync] website has unstaged local changes; skip auto publish"
  exit 0
fi

if ! git diff --cached --quiet -- . ':!data/petchat-sync.ts' ':!data/petchat.ts'; then
  echo "[petpulse-sync] website has staged local changes; skip auto publish"
  exit 0
fi

echo "[petpulse-sync] syncing from $PETCHAT_REPO"
PETCHAT_REPO="$PETCHAT_REPO" npm run sync:petchat
npm run generate

if git diff --quiet -- $SYNC_FILES; then
  echo "[petpulse-sync] no website sync changes"
  exit 0
fi

PETCHAT_BRANCH="$(git -C "$PETCHAT_REPO" branch --show-current)"
PETCHAT_SHORT="$(git -C "$PETCHAT_REPO" rev-parse --short=7 HEAD)"
PETCHAT_SUBJECT="$(git -C "$PETCHAT_REPO" show -s --format=%s HEAD)"

git add $SYNC_FILES
git commit \
  -m "Refresh PetChat source analysis" \
  -m "PetChat changed on ${PETCHAT_BRANCH:-detached}@${PETCHAT_SHORT}: ${PETCHAT_SUBJECT}" \
  -m "The sync job scanned PetChat source, Podfile, remote config keys, and analytics call sites, then regenerated the website data used by the feature analysis page." \
  -m "Constraint: Cloudflare Pages deploys only from the PetPulse website repository" \
  -m "Confidence: medium" \
  -m "Scope-risk: moderate" \
  -m "Directive: Keep generated data and sync metadata committed together so Cloudflare deploys the same PetChat snapshot shown in the UI" \
  -m "Tested: npm run generate" \
  -m "Not-tested: Browser interaction after automatic hook deployment"
git push origin main

echo "[petpulse-sync] pushed website update for PetChat ${PETCHAT_SHORT}"
