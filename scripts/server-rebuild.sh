#!/bin/bash
# Run on VPS: cd /home/navtelecom-iot/htdocs/navtelecom-iot.com && bash scripts/server-rebuild.sh

set -e
cd /home/navtelecom-iot/htdocs/navtelecom-iot.com

echo "=== 1. Git pull (get --webpack fix) ==="
git fetch origin
git reset --hard origin/main

echo ""
echo "=== 2. Clean everything ==="
pm2 delete navtel 2>/dev/null || true
rm -rf .next node_modules/.cache

echo ""
echo "=== 3. Install & build ==="
npm install
npm run build

echo ""
echo "=== 4. Verify .next exists ==="
ls -la .next/ || { echo "ERROR: .next not found - build failed"; exit 1; }
ls -la .next/static/chunks/*.css 2>/dev/null | head -5 || echo "WARNING: No CSS chunks found"
ls -la .next/static/chunks/*.js 2>/dev/null | head -5 || echo "WARNING: No JS chunks found"

echo ""
echo "=== 5. Fix ownership & start ==="
chown -R navtelecom-iot:navtelecom-iot .
pm2 start "npm run start -- --port 3000" --name navtel
pm2 save

echo ""
echo "=== 6. Verify HTML matches chunks ==="
sleep 2
echo "Chunks on disk:"
ls .next/static/chunks/*.css 2>/dev/null | xargs -I{} basename {}
echo ""
echo "Chunks in HTML:"
curl -s http://127.0.0.1:3000/ | grep -oE '_next/static/chunks/[a-z0-9]+\.css' | sort -u

echo ""
echo "=== DONE ==="
