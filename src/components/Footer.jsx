import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="SI Wellness" className="h-9 w-auto brightness-0 invert opacity-90" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Suplementos premium para potenciar tu bienestar y rendimiento. Calidad sin compromisos.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  id={`footer-${social.toLowerCase()}`}
                  aria-label={social}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-teal-700 flex items-center justify-center transition-all duration-200"
                >
                  <span className="text-xs font-bold text-slate-400 hover:text-white">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Tienda',
              links: ['Proteínas', 'Creatina', 'Vitaminas', 'Omega-3', 'Combos'],
            },
            {
              title: 'Empresa',
              links: ['Sobre Nosotros', 'Blog', 'Trabaja con Nosotros', 'Prensa'],
            },
            {
              title: 'Soporte',
              links: ['Centro de Ayuda', 'Envíos', 'Devoluciones', 'Contacto'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-teal-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {year} SI Wellness. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              {['Privacidad', 'Términos', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
