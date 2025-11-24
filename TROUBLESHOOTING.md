# Webpack Troubleshooting Guide

## Common Issues and Solutions

### 1. Build Fails with Module Not Found Errors

**Solution:**
```bash
# Make sure all dependencies are installed
npm install

# Clear node_modules and reinstall if needed
rm -rf node_modules package-lock.json
npm install
```

### 2. TypeScript Compilation Errors

**Check:**
- Ensure `tsconfig.json` is properly configured
- Verify all TypeScript files have correct imports
- Check for missing type definitions: `npm install --save-dev @types/react @types/react-dom`

### 3. CSS Not Loading

**Solution:**
- Ensure `index.css` exists and is imported in `index.tsx`
- Check that `css-loader` and `style-loader` are installed
- For production, verify `mini-css-extract-plugin` is working

### 4. Assets (Images, Fonts) Not Loading

**Solution:**
- Check that asset files are in the correct location
- Verify the `publicPath` in webpack.config.js matches your deployment setup
- For production builds, use `./` as publicPath
- For dev server, use `/` as publicPath (already configured)

### 5. React Router (HashRouter) Not Working

**Solution:**
- The configuration already supports HashRouter
- Ensure `publicPath` is set correctly (already configured)
- Check browser console for routing errors

### 6. Environment Variables Not Working

**Solution:**
- Create a `.env` file in the project root
- Add your variables: `GEMINI_API_KEY=your_key_here`
- Restart the dev server after changing `.env`

### 7. Build Output is Empty or Missing Files

**Solution:**
- Check the `dist/` folder after running `npm run build`
- Verify webpack output for errors
- Ensure `clean: true` in output config isn't causing issues

### 8. Dev Server Not Starting

**Solution:**
```bash
# Check if port 3000 is already in use
lsof -ti:3000 | xargs kill -9

# Try a different port by modifying webpack.config.js
port: 3001
```

### 9. Hot Module Replacement (HMR) Not Working

**Solution:**
- Ensure `hot: true` in devServer config (already set)
- Check browser console for HMR errors
- Try hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### 10. Production Build Too Large

**Solution:**
- Code splitting is already configured
- Check what's included in the bundle
- Consider lazy loading routes if needed

## Build Commands

```bash
# Development mode with hot reload
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## File Structure After Build

```
dist/
├── index.html          # Generated HTML
├── js/
│   ├── main.[hash].js  # Main bundle
│   └── vendors.[hash].js # Vendor bundle
└── css/
    └── main.[hash].css # Extracted CSS
```

## Debugging Tips

1. **Check webpack output:** Look for warnings and errors in the terminal
2. **Browser console:** Check for runtime errors
3. **Network tab:** Verify all assets are loading correctly
4. **Source maps:** Enabled for debugging (check browser dev tools)

## Still Having Issues?

1. Clear all caches:
   ```bash
   rm -rf node_modules dist .cache
   npm install
   npm run build
   ```

2. Check webpack version compatibility:
   ```bash
   npm list webpack webpack-cli webpack-dev-server
   ```

3. Verify Node.js version (should be 16+):
   ```bash
   node --version
   ```


