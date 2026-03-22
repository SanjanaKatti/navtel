#!/bin/bash
# Run on the VPS: bash deploy-diagnose.sh
# Or: ssh root@31.97.228.110 "cd /home/navtelecom-iot/htdocs/navtelecom-iot.com && bash -s" < scripts/deploy-diagnose.sh

DEPLOY_PATH="${1:-/home/navtelecom-iot/htdocs/navtelecom-iot.com}"
cd "$DEPLOY_PATH" || exit 1

echo "=== 1. Deploy path ==="
pwd
ls -la . | head -15

echo ""
echo "=== 2. .next directory ==="
ls -la .next 2>/dev/null || echo ".next NOT FOUND"

echo ""
echo "=== 3. Static chunks (first 10) ==="
ls -la .next/static/chunks/ 2>/dev/null | head -15 || echo "chunks dir NOT FOUND"

echo ""
echo "=== 4. Do the failing files exist? ==="
test -f .next/static/chunks/2e672c85e99425d7.css && echo "2e672c85e99425d7.css EXISTS" || echo "2e672c85e99425d7.css MISSING"
test -f .next/static/chunks/1a0020b187bc6ba7.js && echo "1a0020b187bc6ba7.js EXISTS" || echo "1a0020b187bc6ba7.js MISSING"

echo ""
echo "=== 5. File ownership & permissions ==="
ls -la .next/static/chunks/ 2>/dev/null | head -5

echo ""
echo "=== 6. PM2 process info ==="
pm2 show navtel 2>/dev/null | grep -E "script path|exec cwd|status|username" || echo "PM2 navtel not found"

echo ""
echo "=== 7. Direct request to Next.js (bypasses Nginx) ==="
curl -sI "http://127.0.0.1:3000/_next/static/chunks/2e672c85e99425d7.css" | head -5

echo ""
echo "=== 8. Nginx error log (last 10 lines) ==="
tail -10 /var/log/nginx/error.log 2>/dev/null || echo "Cannot read nginx log"
