import React, { useState, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsSection from './components/Products';
import Benefits from './components/Benefits';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Toast from './components/Toast';
import './index.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', visible: false });
  const toastTimeout = useRef(null);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const showToast = (message) => {
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    setToast({ message, visible: true });
    toastTimeout.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2500);
  };

  const handleAddToCart = useCallback((product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`"${product.name.split('–')[0].trim()}" agregado al carrito`);
  }, []);

  const handleUpdateQty = useCallback((id, qty) => {
    if (qty < 1) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, qty } : item))
      );
    }
  }, []);

  const handleRemove = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const scrollToShop = () => {
    document.getElementById('tienda')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        <Hero onShopClick={scrollToShop} />
        <ProductsSection onAddToCart={handleAddToCart} />
        <Benefits />
        <ContactSection />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
      />

      <Toast message={toast.message} isVisible={toast.visible} />
    </div>
  );
}

export default App;
