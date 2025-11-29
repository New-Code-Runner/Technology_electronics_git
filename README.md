# ElecTech Hub - Technology & Electronics E-Commerce Platform

A modern, full-featured e-commerce application for buying and selling technology and electronics products. Built with React, Firebase, and Tailwind CSS.

## 🎯 Features

- **User Authentication**
  - Firebase email/password authentication
  - Google Sign-In integration
  - Protected routes for authenticated users

- **Product Management**
  - Browse products by brand (Apple, Samsung, Google, Sony, LG, Dell)
  - View detailed product information
  - Add new products to the catalog
  - Update existing products
  - Delete products

- **Shopping Cart**
  - Add products to cart
  - View cart items
  - Delete items from cart
  - Cart persists across sessions

- **User Interface**
  - Dark/Light theme toggle
  - Responsive design (mobile, tablet, desktop)
  - Interactive carousels
  - FAQ section
  - Modern UI with DaisyUI components

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite 7
- **Routing:** React Router v7
- **Styling:** Tailwind CSS, DaisyUI
- **Authentication:** Firebase
- **Notifications:** SweetAlert2, React Hot Toast
- **State Management:** React Context API
- **Build Tool:** Vite
- **Package Manager:** npm

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Firebase
Create a Firebase project and configure your credentials in `src/Firebase/firebase.config.js`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 3. Run Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── Components/
│   ├── Home.jsx           # Homepage with brand showcase
│   ├── BrandPage.jsx      # Products filtered by brand
│   ├── DetailsPage.jsx    # Product details & add to cart
│   ├── MyCart.jsx         # Shopping cart
│   ├── AddProduct.jsx     # Add new product form
│   ├── UpdatePage.jsx     # Update product form
│   ├── Login.jsx          # Login page
│   ├── Registration.jsx   # User registration
│   ├── Navbar.jsx         # Navigation bar
│   ├── Footer.jsx         # Footer
│   ├── FAQ.jsx            # FAQ section
│   ├── Authprovider.jsx   # Auth context provider
│   ├── ThemeProvider.jsx  # Dark/light theme context
│   ├── PrivetRoute.jsx    # Protected route wrapper
│   └── ErrorPage.jsx      # 404 error page
├── Firebase/
│   └── firebase.config.js # Firebase configuration
├── App.jsx                # Main app component
├── index.css              # Global styles
└── main.jsx               # Entry point

public/
└── Homedata.json          # Brand data for homepage
```

## 🔐 Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Homepage with brands |
| `/brandPage/:brand` | Public | Products by brand |
| `/detailsPage/:id` | Protected | Product details |
| `/myCart` | Protected | Shopping cart |
| `/addProduct` | Protected | Add new product |
| `/updatePage/:id` | Protected | Edit product |
| `/login` | Public | User login |
| `/registration` | Public | User signup |

## 🔑 Key Dependencies

- **react** (v19.2.0) - UI library
- **react-router-dom** (v7.9.6) - Routing
- **firebase** (v12.6.0) - Authentication & backend
- **tailwindcss** (v3.3.3) - CSS framework
- **daisyui** (v3.9.3) - Component library
- **sweetalert2** (v11.7.32) - Alerts & notifications
- **react-icons** (v4.11.0) - Icon library

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 API Integration

The application connects to a backend server for:
- Fetching products by brand
- Adding products to cart
- Managing cart items
- Updating products

Configure the API base URL in your environment or directly in components.

## 🎨 Customization

### Dark/Light Theme
Toggle theme using the theme button in the navbar. Theme preference can be enhanced with localStorage persistence.

### Styling
- Tailwind CSS classes for responsive design
- DaisyUI components for consistent UI
- Custom CSS in `src/App.css` and `src/index.css`

## 🚢 Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-builds and deploys on every push
4. Configure environment variables in Vercel dashboard if needed

## 📧 Contact & Support

For issues or questions, contact the development team.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React & Vite**

# Technology_electronics_git
