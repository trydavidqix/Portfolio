# GitHub Push Guide

If you're having trouble pushing changes to GitHub, follow these steps:

## 1. Check your remote repository connection

```bash
git remote -v
```

This should show your GitHub repository URL. If it doesn't show anything or shows the wrong URL, you can add or change it:

```bash
# Add a remote if none exists
git remote add origin https://github.com/trydavidqix/Portfolio.git

# Or change existing remote URL
git remote set-url origin https://github.com/trydavidqix/Portfolio.git
```

## 2. Add your changes to the staging area

```bash
git add .
```

## 3. Commit your changes

```bash
git commit -m "Your commit message here"
```

## 4. Push your changes to GitHub

Since your repository uses the `gh-pages` branch, you should push to that branch:

```bash
git push -u origin gh-pages
```

If you're not on the gh-pages branch yet, first switch to it:

```bash
# Check which branch you're on
git branch

# Switch to gh-pages branch if it exists locally
git checkout gh-pages

# Or create and switch to gh-pages branch if it doesn't exist locally
git checkout -b gh-pages
```

## Common Issues

### Authentication Failed
- GitHub no longer accepts password authentication for Git operations
- You must use a personal access token or SSH key instead
- For Personal Access Token:
  1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Generate new token
  2. Select at least the 'repo' scope
  3. Copy the generated token
  4. Use this token as your password when prompted during git push

### Branch Not Found
- Make sure you're using the correct branch name (`gh-pages`)
- If you see "error: src refspec gh-pages does not match any", create the branch first:
  ```bash
  git checkout -b gh-pages
  git add .
  git commit -m "Initial gh-pages commit"
  git push -u origin gh-pages
  ```

### Rejected Pushes
- Pull changes first: `git pull origin gh-pages`
- Resolve any conflicts, then try pushing again

### GitHub Pages Specific Issues
- Make sure your repository settings have GitHub Pages set to deploy from the gh-pages branch
- Check Settings → Pages in your repository
- After pushing, it may take a few minutes for changes to appear on your live site

Need more help? Let me know what specific error message you're seeing!
