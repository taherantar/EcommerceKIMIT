# KIMIT E-Commerce 🛒

Bilingual (English / العربية) online store front-end built with **React**, **Redux** and **React Router**. Browse products, filter by category, view details, manage a cart, and switch between light/dark mode and RTL/LTR layouts.

> متجر إلكتروني ثنائي اللغة (عربي / إنجليزي) مبني بـ React و Redux، يدعم الوضع الليلي واتجاه الكتابة من اليمين لليسار.

![Home page](home.png)
<!-- Add screenshots to /docs: home.png, products.png, cart.png -->

## ✨ Features

- Product listing with **category filter**
- Product details page (images, price, discount, rating, stock)
- **Shopping cart** with Redux state management
- Edit products (admin-style form)
- **Arabic / English** switch with full **RTL** support (i18next)
- **Light / Dark** theme (React Context)
- Responsive UI (Bootstrap, React-Bootstrap, MDB, SCSS)

## 🧰 Tech Stack

React 18 · Redux · React Router 6 · i18next · Bootstrap 5 · SCSS · Axios · json-server (mock API)

## 🚀 Run Locally

```bash
git clone https://github.com/taherantar/EcommerceKIMIT.git
cd EcommerceKIMIT
npm install

# Terminal 1 – mock API on port 2222
npx json-server --watch src/database/db.json --port 2222

# Terminal 2 – the app
npm start
```

Open http://localhost:3000

## 📁 Structure

```
src/
├── components/   # Card, Slider, FilterMenu, ViewProducts
├── views/        # Home, Products, ProductDetails, Cart, EditProducts
├── layout/       # SiteNav, Footer
├── redux/        # store, reducers
├── Locale/       # en.json, ar.json
└── database/     # db.json (mock data)
```

## 🗺️ Roadmap

- [ ] Deploy live demo (Vercel / Netlify)
- [ ] Replace json-server with a hosted API
- [ ] Checkout flow and order history
- [ ] Unit tests

## 👤 Author

**Taher Antar** — [GitHub](https://github.com/taherantar)
