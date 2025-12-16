# Publishing to PyPI

This document explains how to set up automated publishing to PyPI for this project.

## Prerequisites

### 1. Create a PyPI Account

1. Go to [https://pypi.org/account/register/](https://pypi.org/account/register/)
2. Create an account and verify your email
3. Enable two-factor authentication (recommended)

### 2. (Optional) Create a TestPyPI Account

For testing releases before publishing to production PyPI:

1. Go to [https://test.pypi.org/account/register/](https://test.pypi.org/account/register/)
2. Create a separate account (TestPyPI is independent from PyPI)

## Setting Up Trusted Publishing

This project uses **Trusted Publishing** (also known as OIDC publishing), which is the recommended way to publish to PyPI from GitHub Actions. It doesn't require storing API tokens as secrets.

### Configure PyPI Trusted Publisher

1. Log in to [PyPI](https://pypi.org)
2. Go to your account settings → "Publishing"
3. Scroll down to "Add a new pending publisher" (for new packages) or go to your package and click "Manage" → "Publishing"
4. Fill in the form:
   - **PyPI Project Name**: `adk-playground`
   - **Owner**: `danroblewis` (your GitHub username or organization)
   - **Repository name**: `adk-playground`
   - **Workflow name**: `publish.yml`
   - **Environment name**: `pypi`
5. Click "Add"

### (Optional) Configure TestPyPI Trusted Publisher

1. Log in to [TestPyPI](https://test.pypi.org)
2. Follow the same steps as above, but use:
   - **Environment name**: `testpypi`

### Configure GitHub Repository Environments

1. Go to your GitHub repository → Settings → Environments
2. Create a new environment called `pypi`
   - Optionally, add protection rules (e.g., require approval for deployments)
3. (Optional) Create another environment called `testpypi`

## Creating a Release

### Option 1: Automated Release (Recommended)

1. Go to the GitHub repository → Actions → "Create Release"
2. Click "Run workflow"
3. Enter the version number (e.g., `0.2.0`)
4. Select the release type (patch/minor/major)
5. Click "Run workflow"

This will:
- Update the version in `pyproject.toml`
- Commit and push the change
- Create a git tag
- Create a GitHub release
- Trigger the publish workflow to upload to PyPI

### Option 2: Manual Release

1. Update the version in `pyproject.toml`:
   ```toml
   version = "0.2.0"
   ```

2. Commit and push:
   ```bash
   git add pyproject.toml
   git commit -m "chore: bump version to 0.2.0"
   git push
   ```

3. Create and push a tag:
   ```bash
   git tag -a v0.2.0 -m "Release v0.2.0"
   git push origin v0.2.0
   ```

4. Create a release on GitHub:
   - Go to Releases → "Draft a new release"
   - Choose the tag you just created
   - Add release notes
   - Click "Publish release"

The publish workflow will automatically run and upload the package to PyPI.

## Testing with TestPyPI

Before publishing to production PyPI, you can test with TestPyPI:

1. Go to Actions → "Publish to PyPI"
2. Click "Run workflow"
3. Check "Publish to TestPyPI instead of PyPI"
4. Click "Run workflow"

Then test installation:
```bash
pip install --index-url https://test.pypi.org/simple/ --extra-index-url https://pypi.org/simple/ adk-playground
```

## Verifying the Release

After publishing, verify the package:

```bash
# Check PyPI page
open https://pypi.org/project/adk-playground/

# Test installation
pip install adk-playground

# Test with uvx
uvx adk-playground
```

## Troubleshooting

### "Project not found" Error

If you get this error when publishing:
- The PyPI project name might already be taken
- The trusted publisher might not be configured correctly
- Check that the environment name matches exactly

### "Invalid token" or Authentication Errors

- Ensure the GitHub environment is named exactly `pypi` or `testpypi`
- Verify the workflow filename matches what's configured in PyPI
- Check that the repository owner matches

### Build Errors

- Ensure `pyproject.toml` is valid
- Check that all required files are included in the package
- Test locally with: `python -m build`

## Quick Reference

| Action | Command/URL |
|--------|------------|
| Create PyPI account | https://pypi.org/account/register/ |
| Configure trusted publisher | https://pypi.org/manage/account/publishing/ |
| View package | https://pypi.org/project/adk-playground/ |
| Create release | GitHub Actions → "Create Release" |
| Manual publish | GitHub Actions → "Publish to PyPI" |
