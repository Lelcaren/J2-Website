import React, { useState } from 'react';
import { IMAGES } from '../constants';
import FadeIn from '../components/FadeIn';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.lawOffice} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <p className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-4">Reach Out</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-white leading-tight">Contact Us</h1>
          <div className="w-16 h-0.5 bg-gold mt-4" />
        </div>
      </section>

      <section className="bg-navy py-28">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20">
          <FadeIn>
            <div>
              <h2 className="font-display text-4xl font-light text-white mb-3 leading-tight">We'd love to hear from you.</h2>
              <div className="w-12 h-0.5 bg-gold mb-8" />
              <p className="font-body text-sm font-light text-white/65 leading-loose mb-10">
                Whether you're exploring a transaction, looking for legal guidance, or simply want to learn more about how J2 can help, reach out and a member of our team will be in touch shortly.
              </p>
              <div className="space-y-6">
                {[
                  { label: 'General Inquiries', val: 'info@j2advisorygroup.com' },
                  { label: 'Location', val: 'New York, NY & Miami, FL' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 border-b border-white/10 pb-6">
                    <div className="w-1 h-1 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-1">{item.label}</p>
                      <p className="font-body text-sm font-light text-white/70">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div>
              {submitted ? (
                <div className="bg-navydark border border-white/10 p-12 flex flex-col items-start justify-center h-full">
                  <div className="w-12 h-0.5 bg-gold mb-8" />
                  <h3 className="font-display text-4xl font-light text-white mb-4">Thank you</h3>
                  <p className="font-body text-sm font-light text-white/60 leading-relaxed">Your message has been sent. A member of our team will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', required: true },
                    { name: 'email', label: 'Email Address', type: 'email', required: true },
                    { name: 'company', label: 'Company', type: 'text', required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block font-body text-[10px] font-semibold tracking-[2px] uppercase text-gold mb-2">
                        {field.label}{field.required && ' *'}
                      </label>
                      <input type={field.type} name={field.name} value={form[field.name]}
                        onChange={handleChange} required={field.required}
                        className="w-full border-b border-white/20 px-0 py-3 font-body text-sm text-white focus:outline-none focus:border-gold transition-colors bg-transparent placeholder-white/20"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-body text-[10px] font-semibold tracking-[2px] uppercase text-gold mb-2">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      className="w-full border-b border-white/20 px-0 py-3 font-body text-sm text-white focus:outline-none focus:border-gold transition-colors bg-transparent resize-none"
                    />
                  </div>
                  <button type="submit"
                    className="w-full font-body text-[11px] font-semibold tracking-[2px] uppercase bg-gold text-white py-4 hover:bg-yellow-600 transition-colors mt-4">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
