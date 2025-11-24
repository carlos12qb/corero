# How to Load Pages - HashRouter Guide

## Understanding HashRouter

This app uses **HashRouter** from React Router, which means URLs use hash fragments (`#`) instead of regular paths.

## Accessing Pages

### Development Mode

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   - Go to: `http://localhost:3000`
   - The app will automatically load the home page

3. **Navigate to different pages:**
   - Home: `http://localhost:3000/#/` or `http://localhost:3000`
   - Solutions: `http://localhost:3000/#/solutions`
   - Services: `http://localhost:3000/#/services`
   - Partners: `http://localhost:3000/#/partners`
   - Investors: `http://localhost:3000/#/investors`
   - Product: `http://localhost:3000/#/product`
   - Support: `http://localhost:3000/#/support`
   - Demo: `http://localhost:3000/#/demo`

### Production Build

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Serve the dist folder:**
   - The `dist/` folder contains all the built files
   - Serve it with any static file server
   - Pages work the same way with hash URLs

## Navigation Methods

### Method 1: Using Navigation Links (Recommended)

The app has a Navbar component with navigation links. Click on them to navigate:
- Click "Solutions" → Goes to `#/solutions`
- Click "Services" → Goes to `#/services`
- etc.

### Method 2: Direct URL Access

Type the full URL in your browser:
```
http://localhost:3000/#/solutions
```

### Method 3: Programmatic Navigation

In your React components, use:
```typescript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/solutions'); // Navigates to #/solutions
```

## Troubleshooting Pages Not Loading

### Issue 1: Blank Page / Nothing Renders

**Check:**
1. Open browser console (F12 or Cmd+Option+I)
2. Look for JavaScript errors
3. Check if React is loading:
   ```javascript
   // In browser console, check:
   document.getElementById('root')
   ```

**Solution:**
- Make sure `npm install` completed successfully
- Check that `npm run dev` started without errors
- Verify all dependencies are installed

### Issue 2: 404 Errors for Routes

**This shouldn't happen with HashRouter**, but if it does:

**Solution:**
- HashRouter uses `#` in URLs, so the server doesn't need special routing
- Make sure you're using `#/route` not `/route`
- Example: `http://localhost:3000/#/solutions` ✅
- NOT: `http://localhost:3000/solutions` ❌

### Issue 3: Page Loads But Shows Nothing

**Check:**
1. Browser console for React errors
2. Network tab to see if assets are loading
3. Check if components are imported correctly

**Solution:**
```bash
# Rebuild the project
npm run build

# Clear browser cache
# Chrome: Cmd+Shift+Delete (Mac) or Ctrl+Shift+Delete (Windows)
# Or use Incognito/Private mode
```

### Issue 4: Navigation Links Don't Work

**Check:**
- Are you clicking links in the Navbar?
- Check browser console for errors
- Verify React Router is installed: `npm list react-router-dom`

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue 5: Hot Reload Not Working

**Solution:**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Restart dev server: Stop (Ctrl+C) and run `npm run dev` again

## Testing All Pages

To verify all pages work:

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Test each route:**
   - Home: `http://localhost:3000/#/`
   - Solutions: `http://localhost:3000/#/solutions`
   - Services: `http://localhost:3000/#/services`
   - Partners: `http://localhost:3000/#/partners`
   - Investors: `http://localhost:3000/#/investors`
   - Product: `http://localhost:3000/#/product`
   - Support: `http://localhost:3000/#/support`
   - Demo: `http://localhost:3000/#/demo`

3. **Check browser console** for any errors on each page

## Quick Debug Checklist

- [ ] `npm install` completed successfully
- [ ] `npm run dev` is running without errors
- [ ] Browser shows `http://localhost:3000`
- [ ] Browser console has no errors
- [ ] Root element exists: `document.getElementById('root')`
- [ ] React is loaded (check in console)
- [ ] Using hash URLs: `#/route` not `/route`

## Still Not Working?

1. **Check the build output:**
   ```bash
   npm run build
   # Look for errors in the output
   ```

2. **Verify file structure:**
   ```
   core™-platform/
   ├── index.tsx          ✅ Entry point
   ├── App.tsx            ✅ Main app component
   ├── pages/             ✅ Page components
   │   ├── Home.tsx
   │   ├── Solutions.tsx
   │   └── ...
   └── components/        ✅ UI components
   ```

3. **Check for TypeScript errors:**
   ```bash
   npx tsc --noEmit
   ```

4. **View webpack build info:**
   ```bash
   npm run dev
   # Look at the output - it should show:
   # - Compiled successfully
   # - Local: http://localhost:3000
   ```

## Common Error Messages

### "Cannot GET /solutions"
- **Cause:** Trying to access `/solutions` instead of `/#/solutions`
- **Fix:** Use hash URL: `http://localhost:3000/#/solutions`

### "Module not found"
- **Cause:** Missing dependencies or incorrect imports
- **Fix:** Run `npm install` and check import paths

### "Cannot read property 'render' of null"
- **Cause:** React not mounting properly
- **Fix:** Check that `index.html` has `<div id="root"></div>`

### "Route not found"
- **Cause:** Route path mismatch
- **Fix:** Check `App.tsx` routes match the URLs you're using


