import React, { useState } from 'react';

const XIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const SuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center overlay animate-fade-in">
    <div className="bg-white rounded-3xl p-10 max-w-sm w-full mx-4 text-center shadow-2xl animate-scale-in">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ background: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)' }}
      >
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#0f766e" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-2">¡Compra exitosa!</h3>
      <p className="text-slate-500 mb-2">Tu pedido fue procesado correctamente.</p>
      <p className="text-sm text-slate-400 mb-8">Recibirás un email de confirmación en breve. 🎉</p>
      <div
        className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 inline-block"
        style={{ background: 'rgba(15, 118, 110, 0.08)', color: '#0f766e' }}
      >
        Número de orden: #SI-{Math.floor(100000 + Math.random() * 900000)}
      </div>
      <button
        id="success-close"
        onClick={onClose}
        className="btn-primary w-full text-white font-bold py-4 rounded-2xl text-sm"
      >
        Continuar Comprando
      </button>
    </div>
  </div>
);

const CartSlider = ({ isOpen, onClose, cartItems, onUpdateQty, onRemove, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 40000 ? 0 : 2500;
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 overlay animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Slide-over */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-white shadow-2xl flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
        id="cart-panel"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-black text-slate-900">Tu Carrito</h2>
            <p className="text-sm text-slate-400">
              {cartItems.length === 0 ? 'Está vacío' : `${cartItems.reduce((s, i) => s + i.qty, 0)} ítem(s)`}
            </p>
          </div>
          <button
            id="cart-close"
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Cerrar carrito"
          >
            <XIcon className="h-5 w-5 text-slate-600" />
          </button>
        </div>

        {/* Free shipping banner */}
        {subtotal > 0 && subtotal < 40000 && (
          <div
            className="mx-4 mt-4 px-4 py-3 rounded-2xl text-sm font-medium text-center"
            style={{ background: 'rgba(15, 118, 110, 0.08)', color: '#0f766e' }}
          >
            🚚 Agregá ${(40000 - subtotal).toLocaleString('es-AR')} ARS más para envío gratis
          </div>
        )}
        {subtotal >= 40000 && (
          <div
            className="mx-4 mt-4 px-4 py-3 rounded-2xl text-sm font-medium text-center"
            style={{ background: 'rgba(5, 150, 105, 0.08)', color: '#059669' }}
          >
            ✅ ¡Envío gratis aplicado!
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-slate-400 font-medium text-lg">Tu carrito está vacío</p>
              <p className="text-slate-300 text-sm mt-2">¡Agregá algún producto para comenzar!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                id={`cart-item-${item.id}`}
                className="flex gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div
                  className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                  style={{ background: item.bgColor }}
                >
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 text-sm leading-snug truncate">{item.name}</p>
                  <p className="text-sm font-bold mt-1" style={{ color: '#0f766e' }}>
                    ${(item.price * item.qty).toLocaleString('es-AR')} ARS
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      id={`cart-qty-minus-${item.id}`}
                      onClick={() => onUpdateQty(item.id, item.qty - 1)}
                      className="qty-btn w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-lg leading-none"
                    >
                      −
                    </button>
                    <span className="text-sm font-bold text-slate-900 w-5 text-center">{item.qty}</span>
                    <button
                      id={`cart-qty-plus-${item.id}`}
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      className="qty-btn w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-lg leading-none"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  id={`cart-remove-${item.id}`}
                  onClick={() => onRemove(item.id)}
                  className="p-1.5 text-slate-300 hover:text-red-400 transition-colors self-start"
                  aria-label="Eliminar producto"
                >
                  <TrashIcon />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-slate-100 px-6 py-6 space-y-3 bg-white">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-slate-500">
                <span>Subtotal</span>
                <span className="font-medium text-slate-700">${subtotal.toLocaleString('es-AR')}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>Envío</span>
                <span className={`font-medium ${shipping === 0 ? 'text-green-600' : 'text-slate-700'}`}>
                  {shipping === 0 ? 'Gratis 🎉' : `$${shipping.toLocaleString('es-AR')}`}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-slate-100">
                <span className="font-black text-slate-900 text-lg">Total</span>
                <span className="font-black text-xl" style={{ color: '#0f766e' }}>
                  ${total.toLocaleString('es-AR')} ARS
                </span>
              </div>

              {/* SI Points accumulation */}
              <div
                className="flex justify-between items-center text-sm font-semibold mt-3 px-3 py-2.5 rounded-xl"
                style={{ background: 'rgba(15, 118, 110, 0.08)', color: '#0f766e' }}
              >
                <span className="flex items-center gap-1.5">⭐ Puntos a acumular con esta compra:</span>
                <span className="font-black">+{Math.floor(total * 0.01)} SI Points</span>
              </div>

              {/* Affiliate login CTA */}
              <p className="text-xs text-slate-400 text-center mt-3">
                ¿Sos afiliado? <a href="#login" className="font-semibold underline hover:text-teal-700 transition-colors" style={{ color: '#0f766e' }}>Iniciá sesión</a> para aplicar tu descuento.
              </p>
            </div>

            <button
              id="checkout-btn"
              onClick={onCheckout}
              className="btn-primary w-full text-white font-bold py-4 rounded-2xl text-sm flex items-center justify-center gap-2"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Finalizar Compra
            </button>
            <button
              id="cart-continue"
              onClick={onClose}
              className="w-full py-3 text-sm text-slate-400 hover:text-slate-600 transition-colors font-medium"
            >
              Seguir comprando →
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const Cart = ({ isOpen, onClose, cartItems, onUpdateQty, onRemove }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = () => {
    onClose();
    setTimeout(() => setShowSuccess(true), 200);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    // Clear cart through parent
    cartItems.forEach(item => onRemove(item.id));
  };

  return (
    <>
      <CartSlider
        isOpen={isOpen}
        onClose={onClose}
        cartItems={cartItems}
        onUpdateQty={onUpdateQty}
        onRemove={onRemove}
        onCheckout={handleCheckout}
      />
      {showSuccess && <SuccessModal onClose={handleSuccessClose} />}
    </>
  );
};

export default Cart;
