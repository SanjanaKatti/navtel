# Deploy to Production (GitHub Actions)

Pushing to `main` triggers an automatic deploy to your Hostinger VPS.

## One-time setup

### 1. Add GitHub secrets

In your repo: **Settings → Secrets and variables → Actions → New repository secret**

Add these secrets:

| Secret | Value | Example |
|--------|-------|---------|
| `DEPLOY_HOST` | VPS IP address | `31.97.228.110` |
| `DEPLOY_USER` | SSH username | `root` |
| `DEPLOY_SSH_KEY` | Private SSH key (full contents) | Paste your `id_rsa` or deploy key |
| `DEPLOY_PATH` | App directory on server | `/home/navtelecom-iot/htdocs/navtelecom-iot.com` |

### 2. Create a deploy SSH key (recommended)

On your Mac:

```bash
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/navtel_deploy -N ""
```

- Add the **public** key (`~/.ssh/navtel_deploy.pub`) to the VPS:
  ```bash
  ssh-copy-id -i ~/.ssh/navtel_deploy.pub root@31.97.228.110
  ```
- Add the **private** key (`~/.ssh/navtel_deploy`) contents to `DEPLOY_SSH_KEY` in GitHub (copy everything including `-----BEGIN` and `-----END`).

### 3. Confirm deploy path

`DEPLOY_PATH` must match where your app lives on the server. Common paths:

- CloudPanel Node site: `/home/navtelecom-iot/htdocs/navtelecom-iot.com`
- Manual deploy: `/var/www/navtel`

### 4. Ensure `.env.local` exists on the server

The server needs EmailJS keys. SSH in and create:

```bash
cd $DEPLOY_PATH  # your actual path
nano .env.local
```

Add:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
```

`.env.local` is gitignored, so it won’t be overwritten by `git pull`.

### 5. PM2 process name

The workflow runs `pm2 restart navtel`. If your process has a different name, edit `.github/workflows/deploy.yml` and replace `navtel` with your process name.

---

## Deploy flow

1. Push to `main`
2. GitHub Actions runs the deploy job
3. On the server: `git pull` → `npm ci` → `npm run build` → `pm2 restart navtel`
4. Site updates in about 1–2 minutes

## Check deploy status

**GitHub** → repo → **Actions** tab → latest workflow run.
