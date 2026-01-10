# 🚨 CRITICAL SECURITY FIX INSTRUCTIONS

## Exposed Secrets Found in Git History

The following secrets were exposed in commit `655958c` (Jan 11, 2026) in file `.example`:

- **Resend API Key**: `re_2Kejb8BX_K5UwsCWJpkuWCzjsgMbZwz5t`
- **Database Password**: `npg_prNlvAmtuq47`
- **Better Auth Secret**: `i837kmMqklgKKybdN8TnFwkV+bj1l2j1CNMZ3cPVfZdoew==`
- **Stack API Keys**: Multiple Stack authentication keys
- **Database URLs**: Full connection strings with credentials

---

## STEP 1: Rotate ALL Credentials (DO THIS FIRST!)

### A. Resend API Key

1. Go to: https://resend.com/api-keys
2. **Delete** the exposed key: `re_2Kejb8BX_K5UwsCWJpkuWCzjsgMbZwz5t`
3. Create a new API key
4. Update your `.env` file:
   ```bash
   RESEND_API_KEY=re_YOUR_NEW_KEY_HERE
   ```

### B. Neon Database

1. Go to: https://console.neon.tech
2. Select your project
3. Go to Settings → Reset Password
4. Generate new password
5. Update your `.env` file:
   ```bash
   DATABASE_URL=postgresql://neondb_owner:NEW_PASSWORD@ep-orange-wave-ad56vdl9-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```

### C. Better Auth Secret

1. Generate a new secret:
   ```bash
   openssl rand -base64 32
   ```
2. Update your `.env` file:
   ```bash
   BETTER_AUTH_SECRET=YOUR_NEW_SECRET_HERE
   ```

### D. Google OAuth (if using)

1. Go to: https://console.cloud.google.com/apis/credentials
2. Delete the exposed OAuth 2.0 Client ID
3. Create new OAuth 2.0 Client ID
4. Update your `.env` file:
   ```bash
   GOOGLE_CLIENT_ID=your-new-client-id
   GOOGLE_CLIENT_SECRET=your-new-client-secret
   ```

---

## STEP 2: Clean Git History

### Option A: Using BFG Repo-Cleaner (Recommended - Faster)

```bash
# 1. Install BFG
brew install bfg

# 2. Create a fresh mirror clone
cd ~/Desktop
git clone --mirror https://github.com/YOUR_USERNAME/safari-guides.git

# 3. Remove the sensitive file
cd safari-guides.git
bfg --delete-files .example

# 4. Clean up
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# 5. Force push (WARNING: This rewrites history!)
git push --force

# 6. Clean up local repo
cd /Users/yusuph/codebase/guides
git fetch origin
git reset --hard origin/main  # or your branch name
```

### Option B: Using git filter-repo

```bash
# 1. Install git-filter-repo
brew install git-filter-repo

# 2. Backup your repo first
cd /Users/yusuph/codebase/guides
cp -r . ../guides-backup

# 3. Remove the sensitive file from history
git filter-repo --path .example --invert-paths

# 4. Force push
git push origin --force --all
```

### Option C: Manual removal of specific commit

```bash
# If the exposure is only in recent commits, you can use interactive rebase
git rebase -i HEAD~5  # Adjust number based on how far back the commit is

# In the editor, change 'pick' to 'drop' for commit 655958c
# Save and exit

# Force push
git push origin --force
```

---

## STEP 3: Verify Cleanup

```bash
# Check that secrets are gone from history
git log --all --full-history -p | grep -i "re_2Kejb8BX"
git log --all --full-history -p | grep -i "npg_prNlvAmtuq47"

# Should return nothing
```

---

## STEP 4: Prevent Future Exposures

1. **Never commit `.env` files** - Already in `.gitignore` ✅
2. **Use `.env.example` for templates** - Created ✅
3. **Enable pre-commit hooks** - Already using Husky ✅
4. **Enable GitHub secret scanning** - Go to repo Settings → Security → Secret scanning
5. **Add Gitleaks pre-commit hook**:

   ```bash
   # Install gitleaks
   brew install gitleaks

   # Add to .husky/pre-commit
   echo "gitleaks protect --staged" >> .husky/pre-commit
   ```

---

## STEP 5: Notify Affected Parties

If this is a production application:

- Notify your team about the credential rotation
- Check database logs for unauthorized access
- Monitor for suspicious activity
- Consider rotating all user sessions

---

## Important Notes

⚠️ **DO NOT SKIP STEP 1** - Rotating credentials is the most critical step
⚠️ **Coordinate with your team** before force pushing (Step 2)
⚠️ **Test your application** after rotating credentials
⚠️ **Keep this file secure** - Delete it after completing all steps

---

## Verification Checklist

- [ ] Resend API key rotated
- [ ] Database password rotated
- [ ] Better Auth secret rotated
- [ ] Google OAuth credentials rotated (if applicable)
- [ ] Git history cleaned
- [ ] Force push completed
- [ ] Application tested with new credentials
- [ ] Team notified
- [ ] Secret scanning enabled on GitHub
- [ ] This instruction file deleted
