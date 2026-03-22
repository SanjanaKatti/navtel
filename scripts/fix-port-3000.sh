#!/bin/bash
# Fix: Kill stale process on 3000, start fresh with current build
# Run: ssh root@31.97.228.110 "cd /home/navtelecom-iot/htdocs/navtelecom-iot.com && bash -s" < scripts/fix-port-3000.sh

set -e
DEPLOY_PATH="/home/navtelecom-iot/htdocs/navtelecom-iot.com"
cd "$DEPLOY_PATH"

echo "=== 1. What is on port 3000? ==="
lsof -i :3000 || echo "Nothing on 3000"
ss -tlnp | grep 3000 || true

echo ""
echo "=== 2. Stop PM2 and kill anything on 3000 ==="
pm2 delete navtel 2>/dev/null || true
fuser -k 3000/tcp 2>/dev/null || true
sleep 3

echo ""
echo "=== 3. Start from correct directory ==="
cd "$DEPLOY_PATH"
pm2 start npm --name navtel -- run start -- --port 3000
pm2 save

echo ""
echo "=== 4. Wait and verify ==="
sleep 5
echo "HTML references:"
curl -s http://127.0.0.1:3000/ | grep -oE '_next/static/chunks/[^"]+\.(css|js)' | head -3
echo ""
echo "Files on disk:"
ls .next/static/chunks/ | head -3
echo ""
echo "If they match, site should work."
