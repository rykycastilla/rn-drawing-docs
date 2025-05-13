# rn-drawing-docs  
Web documentation for the `react-native-drawing` library API, a React Native-based drawing toolkit.  

## 🛠️ Technologies  
- **Language**: TypeScript  
- **Framework**: React  
- **Bundler**: Vite  
- **Routing**: React Router DOM  
- **Styling**: Tailwind CSS  

## 📂 Project Structure  
``` bash
├── src/
│   ├── hooks/           # Reusable global hooks
│   ├── components/      # Shared components across pages
│   ├── pages/           # Page-specific components
│   ├── locales/         # Internationalization files
│   └── libs/            # External code (non-NPM dependencies)
├── public/              # Static assets
└── dist/                # Production build (Vite output)
```

## ⚡ Installation & Development  

### Prerequisites  
- Node.js v22+  
- pnpm  

``` bash
git clone https://github.com/rykycastilla/rn-drawing-docs.git
pnpm install
pnpm run dev
```

## 🚀 Build & Deployment  

``` bash
pnpm run build
pnpm start
```  
