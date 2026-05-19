#!/bin/sh
set -eu

PETCHAT_REPO="${PETCHAT_REPO:-/Users/xiaomao822/Desktop/git/petchat/PetChat}"
HOOK_PATH="$PETCHAT_REPO/.git/hooks/post-commit"
SYNC_SCRIPT="/Users/xiaomao822/Desktop/官网/scripts/auto-publish-petchat.sh"

if [ ! -d "$PETCHAT_REPO/.git" ]; then
  echo "PetChat git repository not found: $PETCHAT_REPO" >&2
  exit 1
fi

if [ -f "$HOOK_PATH" ]; then
  BACKUP_PATH="$HOOK_PATH.backup.$(date +%Y%m%d%H%M%S)"
  cp "$HOOK_PATH" "$BACKUP_PATH"
  echo "Backed up existing post-commit hook to $BACKUP_PATH"
fi

cat > "$HOOK_PATH" <<EOF
#!/bin/sh
PETCHAT_REPO="$PETCHAT_REPO" "$SYNC_SCRIPT"
EOF

chmod +x "$HOOK_PATH"
echo "Installed PetChat post-commit hook: $HOOK_PATH"
