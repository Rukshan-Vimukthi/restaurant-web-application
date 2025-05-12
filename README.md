# Web Application For a Restaurant

A modern web application that helps restaurants manage dine-in, takeaway, and delivery orders with ease.

## Installation

```bash
git clone https://github.com/Rukshan-Vimukthi/restaurant-web-application.git
cd frontend
npm install
npm run dev
```

## 📁 Project Structure
```
📁assets/ # built assets. put this folder here to use by github pages
📁frontend/
├── 📁dist/ # Build files
├── 📁public/ # Static files like index.html, icons, etc.
├── 📁src/ # Main source code
│ ├── 📁assets/ # Images, fonts, and other assets
│ ├── 📁Staff/ # Pages that Staff uses.
│ ├── 📁types/ # Custom Types definitions
│ ├── 📁User/ # Custom React hooks
│ |    ├── 📁Components/ # Components used in pages that use by users
│ |    └── 📁Pages/ # Pages that use by customers
│ |         ├── 📁css/ # CSS files used by publicly accessible pages
│ |         ├── Home.jsx
│ |         ├── Profile.jsx
│ |         └── Register.jsx
│ └── main.tsx # Entry point for Vite
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
index.html # the file currently serving by github pages
```


## Built With

- React + TypeScript
- Bootstrap

## Author

Rukshan – [@RukshanVimukth2](https://twitter.com/RukshanVimukth2) – rukshanse.info@gmail.com
