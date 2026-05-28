import React, { useState } from 'react';

const StarIcon = ({ filled }) => (
  <svg className="h-4 w-4" fill={filled ? '#f59e0b' : 'none'} stroke="#f59e0b" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const CartPlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      className="product-card bg-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={`product-${product.id}`}
    >
      {/* Image */}
      <div
        className="relative h-56 overflow-hidden flex items-center justify-center"
        style={{ background: product.bgColor }}
      >
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full z-10"
            style={{ background: '#0f766e' }}
          >
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`h-44 w-44 object-contain transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.12))' }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category */}
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#0f766e' }}>
          {product.category}
        </span>

        {/* Name */}
        <h3 className="mt-1 text-lg font-bold text-slate-900 leading-snug">{product.name}</h3>

        {/* Description */}
        <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{product.description}</p>

        {/* Stars */}
        <div className="flex items-center gap-1 mt-3">
          {[1, 2, 3, 4, 5].map((s) => (
            <StarIcon key={s} filled={s <= product.rating} />
          ))}
          <span className="text-xs text-slate-400 ml-1">({product.reviews})</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: 'rgba(15, 118, 110, 0.08)', color: '#0f766e' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-5 pt-5 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-400 font-medium">Precio</p>
            <p className="text-2xl font-black text-slate-900">
              ${product.price.toLocaleString('es-AR')}
              <span className="text-sm font-medium text-slate-400 ml-1">ARS</span>
            </p>
          </div>

          <button
            id={`add-to-cart-${product.id}`}
            onClick={handleAdd}
            disabled={added}
            className={`btn-cart flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
              added
                ? 'text-white scale-95'
                : 'text-white'
            }`}
            style={{
              background: added
                ? 'linear-gradient(135deg, #059669, #10b981)'
                : 'linear-gradient(135deg, #0f766e, #14b8a6)',
              boxShadow: added
                ? '0 4px 15px rgba(5, 150, 105, 0.35)'
                : '0 4px 15px rgba(15, 118, 110, 0.3)'
            }}
          >
            {added ? (
              <>
                <CheckIcon />
                Agregado
              </>
            ) : (
              <>
                <CartPlusIcon />
                Agregar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    id: 1,
    name: 'Whey Protein Isolate – SI Wellness Edition',
    category: 'Proteínas',
    description: 'Proteína de suero ultra-filtrada con 27g por porción, baja en lactosa y sin azúcares añadidos. Recuperación muscular óptima.',
    price: 45000,
    image: '/whey_protein.png',
    bgColor: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)',
    badge: 'Más vendido',
    rating: 5,
    reviews: 128,
    tags: ['Sin azúcar', '27g proteína', 'Gluten Free'],
  },
  {
    id: 2,
    name: 'Creatina Monohidratada 100% Pura',
    category: 'Rendimiento',
    description: 'Creatina monohidratada Creapure® de grado farmacéutico. Aumenta la fuerza, potencia y masa muscular sin aditivos.',
    price: 38000,
    image: '/creatine.png',
    bgColor: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
    badge: 'Nuevo',
    rating: 5,
    reviews: 89,
    tags: ['Creapure®', '500g', '100 porciones'],
  },
  {
    id: 3,
    name: 'Multivitamínico High Performance',
    category: 'Vitaminas',
    description: '23 vitaminas y minerales esenciales formulados para atletas y personas activas. Energía, inmunidad y bienestar integral.',
    price: 18000,
    image: '/multivitamin.png',
    bgColor: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    badge: null,
    rating: 4,
    reviews: 214,
    tags: ['23 vitaminas', '60 cápsulas', 'Vegano'],
  },
  {
    id: 4,
    name: 'Omega-3 Ultra Concentrado · 1000mg',
    category: 'Salud',
    description: 'EPA y DHA de alta pureza de fuentes marinas sostenibles. Salud cardiovascular, cerebral y articulaciones sin olor a pescado.',
    price: 22000,
    image: '/omega3.png',
    bgColor: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
    badge: null,
    rating: 4,
    reviews: 176,
    tags: ['Sin olor', '90 cápsulas', 'EPA+DHA'],
  },
];

const ProductsSection = ({ onAddToCart }) => {
  return (
    <section className="py-24 bg-slate-50" id="tienda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ color: '#0f766e', background: 'rgba(15, 118, 110, 0.08)' }}
          >
            Nuestros Productos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            Suplementos que
            <span className="block" style={{ color: '#0f766e' }}>marcan la diferencia</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Cada producto está formulado con ingredientes de máxima pureza, respaldados por evidencia científica y sin compromisos en calidad.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-16 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%)' }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white" style={{ transform: 'translate(30%, -30%)' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white" style={{ transform: 'translate(-30%, 30%)' }} />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-3">¿No sabés por dónde empezar?</h3>
            <p className="text-teal-100 mb-6 text-lg">Nuestro equipo de nutricionistas puede asesorarte sin costo.</p>
            <button
              id="cta-asesoramiento"
              className="bg-white font-bold px-8 py-3.5 rounded-2xl text-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              style={{ color: '#0f766e' }}
            >
              Obtener Asesoramiento Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { products };
export default ProductsSection;
