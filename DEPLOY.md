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

### 4. Configure Formspree (no .env needed)

Forms use [Formspree](https://formspree.io) — free tier, 50 submissions/month. No API keys or `.env.local` required.

1. Sign up at https://formspree.io
2. Create 3 forms: Contact, Newsletter, Sales Inquiry
3. For each form, set the recipient email (where submissions are sent)
4. Copy each form ID from the endpoint URL (e.g. from `https://formspree.io/f/xyzk8abd` use `xyzk8abd`)
5. Edit `lib/formspree-config.ts` and paste the form IDs

You can remove `.env.local` if it only contained EmailJS keys — forms no longer need it.

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
