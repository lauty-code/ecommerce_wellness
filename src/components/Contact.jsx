import React from 'react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ ¡Mensaje enviado! Nos pondremos en contacto dentro de las 24hs.');
  };

  return (
    <section className="py-24 bg-slate-50" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <div>
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
              style={{ color: '#0f766e', background: 'rgba(15, 118, 110, 0.08)' }}
            >
              Contacto
            </span>
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6">
              ¿Tenés alguna
              <span className="block" style={{ color: '#0f766e' }}>pregunta?</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Nuestro equipo de especialistas está disponible para ayudarte a elegir el suplemento ideal para tus objetivos.
            </p>

            <div className="space-y-5">
              {[
                { icon: '📧', label: 'Email', value: 'hola@siwellness.com.ar' },
                { icon: '📱', label: 'WhatsApp', value: '+54 9 11 1234-5678' },
                { icon: '📍', label: 'Dirección', value: 'Buenos Aires, Argentina' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</p>
                    <p className="font-semibold text-slate-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Envianos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="contact-name">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm transition-all placeholder:text-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm transition-all placeholder:text-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="contact-subject">
                  Asunto
                </label>
                <select
                  id="contact-subject"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm transition-all bg-white"
                >
                  <option>Consulta sobre productos</option>
                  <option>Asesoramiento nutricional</option>
                  <option>Estado de mi pedido</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="contact-message">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Escribí tu consulta acá..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm transition-all resize-none placeholder:text-slate-300"
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="btn-primary w-full text-white font-bold py-4 rounded-2xl text-sm"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
