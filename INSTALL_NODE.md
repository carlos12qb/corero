# Installing Node.js and npm

## Prerequisites Check

Before installing, check if Node.js is already installed:

```bash
node --version
npm --version
```

If you see version numbers, Node.js is already installed. You can skip to the "After Installation" section.

## Option 1: Using Homebrew (Recommended)

### Check if Homebrew is installed:
```bash
brew --version
```

### If Homebrew is NOT installed:

**For Apple Silicon (M1/M2/M3 Macs):**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**For Intel Macs:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**After installing Homebrew, add it to your PATH:**
```bash
# For Apple Silicon
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc

# For Intel Macs (if needed)
echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
```

### Install Node.js:
```bash
# Update Homebrew first
brew update

# Install Node.js (which includes npm)
brew install node

# Verify installation
node --version   # Should show v18.x.x or higher
npm --version    # Should show 9.x.x or higher
```

## Option 2: Using Official Installer

1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version for macOS
3. Run the installer
4. Follow the installation wizard
5. Restart your terminal

## Option 3: Using nvm (Node Version Manager)

**Best for:** Managing multiple Node.js versions

```bash
# Install nvm (latest version)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Or use the latest version from GitHub
# Check https://github.com/nvm-sh/nvm for the latest version number

# Load nvm in current session
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Add to shell profile (zsh)
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.zshrc

# Reload shell configuration
source ~/.zshrc

# Install latest LTS Node.js (recommended: v18 or v20)
nvm install --lts
nvm use --lts
nvm alias default node

# Verify installation
node --version
npm --version
```

## After Installation

Once Node.js is installed, navigate to the project directory and run:

```bash
cd "/Users/carlosdj-mac_mini/Desktop/Corera-Master/Corero-Web/Corero-Webpack/core™-platform"
npm install
```

### Expected npm install Output

A successful installation should show:
- ✅ All packages installed
- ⚠️ Some peer dependency warnings are normal (especially with React 19)
- ✅ No critical errors

### Common npm install Warnings (Safe to Ignore)

You may see warnings like:
- `npm WARN peer dep missing` - These are usually safe to ignore
- `npm WARN deprecated` - Some packages may show deprecation warnings
- React 19 peer dependency warnings - Expected, project is configured for React 19

**If npm install completes without errors, you're good to go!**

## Verify Installation

After installation, verify everything works:

```bash
node --version   # Should show v18.x.x, v20.x.x, or higher
npm --version    # Should show 9.x.x or higher

# Check npm configuration
npm config list
```

## Important: Node.js Version Requirements

This project requires:
- **Node.js**: v18.0.0 or higher (v20.x.x recommended)
- **npm**: v9.0.0 or higher

**Why?** React 19 and modern webpack features require Node.js 18+.

## Troubleshooting

### Issue 1: npm is still not found after installation

**Solutions:**
1. **Close and reopen your terminal completely** (don't just source the profile)
2. **Check your PATH:**
   ```bash
   echo $PATH
   which node
   which npm
   ```
3. **For Homebrew (Apple Silicon), add to PATH:**
   ```bash
   echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
   source ~/.zshrc
   ```
4. **For Homebrew (Intel Mac), add to PATH:**
   ```bash
   echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
   source ~/.zshrc
   ```

### Issue 2: Permission Errors During npm install

**Solution:**
```bash
# Don't use sudo with npm! Instead, fix npm permissions:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### Issue 3: Multiple Node.js Installations Conflict

**Solution:**
- Use only ONE installation method (Homebrew OR nvm, not both)
- If you have both, remove one:
  ```bash
  # To remove Homebrew Node.js
  brew uninstall node
  
  # To remove nvm
  rm -rf ~/.nvm
  # Then remove nvm lines from ~/.zshrc
  ```

### Issue 4: "Command not found" even after installation

**Solution:**
1. Check if Node.js is in a non-standard location:
   ```bash
   find /usr/local -name node 2>/dev/null
   find /opt -name node 2>/dev/null
   ```
2. Add the found path to your PATH in ~/.zshrc
3. Restart terminal

### Issue 5: npm install fails with network errors

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Use a different registry (if needed)
npm config set registry https://registry.npmjs.org/

# Check npm configuration
npm config list
```

### Issue 6: React 19 Compatibility Warnings

If you see peer dependency warnings about React 19:
- These are usually warnings, not errors
- The project is configured for React 19
- You can ignore peer dependency warnings if the build succeeds

## After Successful Installation

Once Node.js and npm are installed and verified:

```bash
# Navigate to project directory
cd "/Users/carlosdj-mac_mini/Desktop/Corera-Master/Corero-Web/Corero-Webpack/core™-platform"

# Install project dependencies
npm install

# If npm install succeeds, you're ready to build!
npm run dev    # Start development server
npm run build  # Build for production
```

## Still Having Issues?

1. **Check system architecture:**
   ```bash
   uname -m  # Should show arm64 (Apple Silicon) or x86_64 (Intel)
   ```

2. **Check for conflicting installations:**
   ```bash
   which -a node
   which -a npm
   ```

3. **Get help:**
   - Node.js: https://nodejs.org/en/docs/
   - npm: https://docs.npmjs.com/
   - Homebrew: https://docs.brew.sh/
   - nvm: https://github.com/nvm-sh/nvm

