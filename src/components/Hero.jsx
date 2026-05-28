import React from 'react';

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
  </svg>
);

const Hero = ({ onShopClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20" id="hero">
      
      {/* Decorative background blobs */}
      <div
        className="absolute top-20 right-10 w-72 h-72 opacity-40 blob"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 opacity-30 blob"
        style={{ animationDelay: '-3s', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #0f766e 0%, transparent 70%)' }}
      />

      {/* Floating elements */}
      <div className="absolute top-32 left-1/4 w-3 h-3 rounded-full animate-float" style={{ background: '#0f766e', opacity: 0.3, animationDelay: '-1s' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full animate-float" style={{ background: '#14b8a6', opacity: 0.4, animationDelay: '-2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full animate-float" style={{ background: '#0f766e', opacity: 0.2, animationDelay: '-0.5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold animate-fade-in-up"
              style={{ background: 'rgba(15, 118, 110, 0.1)', color: '#0f766e', border: '1px solid rgba(15, 118, 110, 0.2)' }}>
              <SparkleIcon />
              Bienestar Premium · Calidad Certificada
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 animate-fade-in-up delay-100">
              Potenciá tu
              <span className="block" style={{ 
                background: 'linear-gradient(135deg, #0f766e, #14b8a6)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Bienestar.
              </span>
              <span className="text-4xl sm:text-5xl lg:text-6xl text-slate-400 font-light">Todos los días.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-200">
              Suplementación de calidad científica para tu salud preventiva y rendimiento deportivo. Formulaciones puras, sin rellenos ni compromisos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <button
                id="hero-cta"
                onClick={onShopClick}
                className="btn-primary text-white font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-3 text-base"
              >
                Explorar Suplementos
                <ArrowRightIcon />
              </button>
              <a
                href="#beneficios"
                id="hero-benefits"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-slate-600 font-medium border border-slate-200 hover:border-teal-300 hover:text-teal-700 transition-all duration-200"
              >
                Ver Beneficios
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-2 animate-fade-in-up delay-400">
              {[
                { icon: '🏆', text: '100% Natural' },
                { icon: '🔬', text: 'Calidad Certificada' },
                { icon: '🚚', text: 'Envío a Todo el País' },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <span className="text-lg">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Showcase */}
          <div className="hidden lg:flex items-center justify-center relative animate-fade-in-up delay-200">
            <div className="relative">
              {/* Main product image */}
              <div className="relative z-10 animate-float" style={{ animationDuration: '4s' }}>
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl"
                  style={{ boxShadow: '0 30px 80px rgba(15, 118, 110, 0.25)' }}>
                  <img
                    src="/whey_protein.png"
                    alt="Whey Protein Isolate SI Wellness"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating product cards */}
              <div
                className="absolute -left-16 top-12 bg-white rounded-2xl p-4 shadow-lg animate-float z-20"
                style={{ animationDelay: '-1.5s', animationDuration: '3.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <img src="/creatine.png" alt="Creatina" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">Creatina Pura</p>
                    <p className="text-xs font-bold" style={{ color: '#0f766e' }}>$38.000</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-12 bottom-16 bg-white rounded-2xl p-4 shadow-lg animate-float z-20"
                style={{ animationDelay: '-2.5s', animationDuration: '4.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <img src="/multivitamin.png" alt="Multivitamínico" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">Multivitamínico</p>
                    <p className="text-xs font-bold" style={{ color: '#0f766e' }}>$18.000</p>
                  </div>
                </div>
              </div>

              {/* Stats card */}
              <div
                className="absolute -right-8 top-4 bg-white rounded-2xl px-4 py-3 shadow-lg animate-float z-20"
                style={{ animationDelay: '-0.5s', animationDuration: '3s' }}
              >
                <div className="text-center">
                  <p className="text-2xl font-black" style={{ color: '#0f766e' }}>+5k</p>
                  <p className="text-xs text-slate-500 font-medium">Clientes Felices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40L48 46.7C96 53.3 192 66.7 288 66.7C384 66.7 480 53.3 576 43.3C672 33.3 768 26.7 864 30C960 33.3 1056 46.7 1152 50C1248 53.3 1344 46.7 1392 43.3L1440 40V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
