import React, { useState, useEffect } from 'react';

const ShoppingCartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = ({ cartCount, onCartClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Tienda', 'Beneficios', 'Contacto'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-glass shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="nav-logo">
            <img src="/logo.png" alt="SI Wellness Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="text-xl font-black tracking-tight text-slate-900">
              SI <span style={{ color: '#0f766e' }}>Wellness</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                id={`nav-${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors duration-200 relative group"
                style={{ '--tw-text-opacity': 1 }}
              >
                {link}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: '#0f766e' }}
                />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#login"
              id="nav-login"
              className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300"
            >
              Iniciar Sesión
            </a>

            {/* Cart Button */}
            <button
              id="nav-cart"
              onClick={onCartClick}
              className="relative p-2.5 rounded-full bg-white border border-slate-200 hover:border-teal-300 shadow-sm transition-all duration-200 hover:shadow-md group"
              aria-label="Abrir carrito"
            >
              <ShoppingCartIcon className="h-5 w-5 text-slate-700 group-hover:text-teal-700 transition-colors" />
              {cartCount > 0 && (
                <span
                  className="cart-badge absolute -top-1.5 -right-1.5 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                  style={{ background: '#0f766e', fontSize: '11px' }}
                >
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-menu"
              aria-label="Menú móvil"
            >
              {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-4 py-3 text-slate-700 hover:text-teal-700 hover:bg-teal-50 font-medium transition-colors rounded-lg mx-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#login"
              className="block mx-4 mt-3 text-center py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-700"
            >
              Iniciar Sesión
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
