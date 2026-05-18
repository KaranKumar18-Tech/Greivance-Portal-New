# Hindi Translation Guide

## Overview
The Grievance Portal has been converted to support both **English** and **Hindi** languages. Users can seamlessly switch between languages using the language toggle in the header.

## Features

### 1. **Language Toggle**
- Located in the top-right corner of the header
- Two buttons: **EN** (English) and **HI** (Hindi)
- The active language is displayed in bold
- Language preference is saved to localStorage and persists across sessions

### 2. **Comprehensive Translations**
All major UI components have been translated:
- ✅ Header & Navigation
- ✅ Footer & Links
- ✅ Home Page (Hero section, Cards, FAQ)
- ✅ Dashboard (Metrics, Actions, Tables)
- ✅ Chatbot Assistant (All dialogue)
- ✅ Authentication Forms
- ✅ Grievance Forms & Tracking
- ✅ Status Badges & Messages

### 3. **Translation System**

#### Files Added:
1. **`translations.ts`** - Contains all English and Hindi text strings
2. **`LanguageContext.tsx`** - React Context for managing language state
3. **`index.tsx`** - Updated to wrap app with LanguageProvider

#### How It Works:
```tsx
// Import the hook
import { useLanguage } from './LanguageContext';

// Use in components
const MyComponent = () => {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('haryanGrievancePortal')}</h1>
      <button onClick={() => setLanguage('hi')}>Hindi</button>
    </div>
  );
};
```

## Translation Keys

### Common Keys:
- `haryanGrievancePortal` - "हरियाणा शिकायत पोर्टल"
- `fileAGrievance` - "शिकायत दर्ज करें"
- `trackStatus` - "स्थिति ट्रैक करें"
- `dashboard` - "डैशबोर्ड"
- `login` - "लॉगिन"
- `logout` - "लॉगआउट"

### Complete List:
All translation keys are defined in `translations.ts` with both English and Hindi versions.

## Testing the Feature

### Steps:
1. Open http://localhost:3000/
2. Look for **EN** and **HI** buttons in the top-right corner
3. Click **HI** to switch to Hindi
4. All UI text should update to Hindi
5. Click **EN** to switch back to English

### What Translates:
- ✅ Page titles and headings
- ✅ Button labels
- ✅ Form labels and placeholders
- ✅ Table headers
- ✅ Status badges
- ✅ Chatbot messages
- ✅ Error messages
- ✅ Help text

### What Stays in English:
- Grievance IDs (format: HRG-2025-XXX)
- User names (as entered by user)
- Dates and numbers
- Links in footer

## Adding New Translations

To add a new translatable string:

1. **Add to `translations.ts`:**
```typescript
// In the Translations interface:
myNewKey: string;

// In englishTranslations:
myNewKey: "English text here",

// In hindiTranslations:
myNewKey: "हिंदी पाठ यहां",
```

2. **Use in Component:**
```typescript
const { t } = useLanguage();
<h1>{t('myNewKey')}</h1>
```

## Language Persistence

- User's language choice is saved to `localStorage` as `language`
- Automatically restored when user returns to the site
- Defaults to **English** for first-time users

## Technical Details

### Architecture:
```
App
├── LanguageProvider (wraps entire app)
│   └── LanguageContext provides:
│       ├── language: 'en' | 'hi'
│       ├── setLanguage: (lang) => void
│       └── t: (key) => string
└── All Components can access via useLanguage()
```

### Files Modified:
1. `index.tsx` - Added LanguageProvider wrapper
2. `components/Layout.tsx` - Header & Footer translations + toggle button
3. `components/Views.tsx` - All major views updated with t() function calls
4. `App.tsx` - Can access language context if needed

## Future Enhancements

- [ ] Add more languages (Punjabi, English variants, etc.)
- [ ] RTL support for future Arabic/Urdu translations
- [ ] Keyboard shortcuts for language switching (e.g., Alt+H for Hindi)
- [ ] Language selection dropdown instead of buttons
- [ ] Translation of form validation messages

## Support

For issues or to add more Hindi translations, update the `translations.ts` file with new entries in both `englishTranslations` and `hindiTranslations` objects.

---

**Language Support Status:**
- 🟢 English: Complete
- 🟢 Hindi: Complete
- 🔴 Other Languages: Not implemented

Last Updated: 2026-05-18
