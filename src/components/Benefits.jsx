import React from 'react';

const benefits = [
  {
    id: 'benefit-natural',
    icon: '🌿',
    title: 'Ingredientes Naturales',
    description: 'Fuentes premium, sin colorantes artificiales, conservantes ni rellenos de baja calidad.',
    stat: '100%',
    statLabel: 'Natural',
  },
  {
    id: 'benefit-science',
    icon: '🔬',
    title: 'Respaldo Científico',
    description: 'Formulaciones desarrolladas con base en la última evidencia científica en nutrición deportiva.',
    stat: '+200',
    statLabel: 'Estudios',
  },
  {
    id: 'benefit-certified',
    icon: '✅',
    title: 'Calidad Certificada',
    description: 'Cada lote es analizado por laboratorios independientes para garantizar pureza y potencia.',
    stat: 'ISO',
    statLabel: 'Certificado',
  },
  {
    id: 'benefit-cemei',
    icon: '👨‍⚕️',
    title: 'Respaldo Médico CEMEI',
    description: 'Productos validados y recomendados por los profesionales de la salud de nuestros propios centros médicos.',
    stat: 'CEMEI',
    statLabel: 'Avalado',
  },
];

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Matías R.',
    role: 'Atleta CrossFit',
    text: 'La Whey Protein de SI Wellness es la mejor que probé. Se digiere perfecto y los resultados se notan en semanas.',
    avatar: '💪',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Laura G.',
    role: 'Corredora Amateur',
    text: 'El Multivitamínico me cambió la vida. Más energía, mejor recuperación y sin ese sabor metálico horrible de otros.',
    avatar: '🏃‍♀️',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Diego M.',
    role: 'Entrenador Personal',
    text: 'Recomiendo SI Wellness a todos mis clientes. Calidad excepcional, transparencia total en ingredientes.',
    avatar: '🏋️',
    rating: 5,
  },
];

const StarIcon = () => (
  <svg className="h-4 w-4" fill="#f59e0b" viewBox="0 0 24 24">
    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const Benefits = () => {
  return (
    <>
      {/* Benefits Section */}
      <section className="py-24 bg-white" id="beneficios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
              style={{ color: '#0f766e', background: 'rgba(15, 118, 110, 0.08)' }}
            >
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              El estándar más alto
              <span className="block" style={{ color: '#0f766e' }}>en suplementación</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.id}
                id={benefit.id}
                className="group p-8 rounded-3xl border border-slate-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className="benefit-icon w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                  style={{ background: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)' }}
                >
                  {benefit.icon}
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-black" style={{ color: '#0f766e' }}>{benefit.stat}</span>
                  <span className="text-sm text-slate-400 font-medium ml-1">{benefit.statLabel}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-8 md:mx-16 lg:mx-32" />

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900">
              Lo que dicen nuestros
              <span className="block" style={{ color: '#0f766e' }}>clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                id={t.id}
                className="p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-slate-50"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
