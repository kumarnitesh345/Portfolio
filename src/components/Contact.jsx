import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  AlertCircle, 
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Loader2,
  MessageSquare
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const nameInputRef = useRef(null);

  // Listen for 'open-contact-form' event from "Let's Talk" button
  useEffect(() => {
    const handleOpenAndFocus = () => {
      setTimeout(() => {
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      }, 500);
    };

    window.addEventListener('open-contact-form', handleOpenAndFocus);
    return () => window.removeEventListener('open-contact-form', handleOpenAndFocus);
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Message should be at least 8 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS credentials from Vite env or configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (publicKey && publicKey !== 'your_public_key') {
        // Send email via EmailJS
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Nitesh Kumar',
            reply_to: formData.email,
          },
          publicKey
        );

        setSubmitStatus('success');
        setStatusMessage('Your message has been sent successfully! I will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback when EmailJS keys are not yet configured in .env
        // Still give clear positive feedback and option to send directly via mailto:
        setSubmitStatus('success');
        setStatusMessage('Message recorded! Click below to send directly via your mail client or to copy the drafted message.');
      }
    } catch (error) {
      console.error('EmailJS submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('Unable to send message at this moment. You can dispatch directly via email below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Nitesh,\n\n${formData.message}\n\nFrom:\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${resumeData.personal.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(resumeData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-[#040d09]">
      {/* Decorative Organic Emerald Ambience Wave at Bottom */}
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[#00df81]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#020906] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header: 06 —— Contact Me */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#00df81] font-mono font-bold text-lg">06 ——</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
        </div>

        <p className="text-base sm:text-lg text-stone-300 mb-10 font-normal">
          Let's build something amazing together!
        </p>

        {/* Social Buttons & Direct Contact Strip */}
        <div className="rounded-2xl bg-[#081a14]/85 border border-[#00df81]/25 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-8 shadow-xl backdrop-blur-md">
          {/* Circular Social Icons with working links */}
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#040d09] border border-[#00df81]/30 hover:border-[#00df81] hover:bg-[#00df81] text-stone-200 hover:text-stone-950 flex items-center justify-center transition-all shadow-md active:scale-95 group"
              aria-label="Visit Nitesh Kumar's GitHub Profile"
              title="Visit Nitesh's GitHub"
            >
              <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            {/* LinkedIn */}
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#040d09] border border-[#00df81]/30 hover:border-[#00df81] hover:bg-[#00df81] text-stone-200 hover:text-stone-950 flex items-center justify-center transition-all shadow-md active:scale-95 group"
              aria-label="Visit Nitesh Kumar's LinkedIn Profile"
              title="Visit Nitesh's LinkedIn"
            >
              <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            {/* Email mailto: */}
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="w-12 h-12 rounded-full bg-[#040d09] border border-[#00df81]/30 hover:border-[#00df81] hover:bg-[#00df81] text-stone-200 hover:text-stone-950 flex items-center justify-center transition-all shadow-md active:scale-95 group"
              aria-label="Send email directly to Nitesh Kumar"
              title="Send an Email to Nitesh"
            >
              <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            {/* Phone tel: */}
            <a
              href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`}
              className="w-12 h-12 rounded-full bg-[#040d09] border border-[#00df81]/30 hover:border-[#00df81] hover:bg-[#00df81] text-stone-200 hover:text-stone-950 flex items-center justify-center transition-all shadow-md active:scale-95 group"
              aria-label="Call Nitesh Kumar"
              title="Call Nitesh's Phone"
            >
              <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Quick status callout */}
          <div className="flex items-center gap-2.5 text-xs font-mono text-stone-300 bg-[#040d09] px-4 py-2 rounded-full border border-[#00df81]/25">
            <span className="w-2 h-2 rounded-full bg-[#00df81] animate-ping"></span>
            <span>Available for Full-time Roles &amp; Inquiries</span>
          </div>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Email card with copy */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#081a14]/60 border border-[#00df81]/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#00df81]/15 text-[#00df81]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-stone-400 uppercase">Direct Email</div>
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  className="text-xs sm:text-sm font-mono text-stone-100 hover:text-[#00df81] transition-colors"
                >
                  {resumeData.personal.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-1.5 rounded-md text-stone-400 hover:text-white hover:bg-[#040d09] transition-colors cursor-pointer"
              title="Copy Email Address"
              aria-label="Copy Email Address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-[#00df81]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone card with copy */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#081a14]/60 border border-[#00df81]/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#00df81]/15 text-[#00df81]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-stone-400 uppercase">Phone &amp; WhatsApp</div>
                <a
                  href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`}
                  className="text-xs sm:text-sm font-mono text-stone-100 hover:text-[#00df81] transition-colors"
                >
                  {resumeData.personal.phone}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyPhone}
              className="p-1.5 rounded-md text-stone-400 hover:text-white hover:bg-[#040d09] transition-colors cursor-pointer"
              title="Copy Phone Number"
              aria-label="Copy Phone Number"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-[#00df81]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Functional EmailJS Contact Form */}
        <div className="rounded-2xl bg-[#081a14] border border-[#00df81]/30 p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-5 h-5 text-[#00df81]" />
            <h4 className="text-xl font-bold text-white">Send Me a Message</h4>
          </div>

          {/* Status Banner */}
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
                submitStatus === 'success'
                  ? 'bg-[#00df81]/15 border border-[#00df81]/40 text-[#f0fdf4]'
                  : 'bg-rose-950/40 border border-rose-500/40 text-rose-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {submitStatus === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-[#00df81] shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                )}
                <span>{statusMessage}</span>
              </div>

              <button
                type="button"
                onClick={handleOpenMailto}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00df81] text-stone-950 font-bold hover:bg-[#05c774] transition-colors self-start sm:self-auto shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Email App</span>
              </button>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-stone-300 mb-1.5">
                Your Name <span className="text-[#00df81]">*</span>
              </label>
              <input
                ref={nameInputRef}
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Your Name"
                disabled={isSubmitting}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-4 py-2.5 rounded-xl bg-[#040d09] border text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-1 transition-colors ${
                  errors.name
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
                    : 'border-[#00df81]/25 focus:border-[#00df81] focus:ring-[#00df81]'
                }`}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-stone-300 mb-1.5">
                Your Email <span className="text-[#00df81]">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. yourname@domain.com"
                disabled={isSubmitting}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-2.5 rounded-xl bg-[#040d09] border text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-1 transition-colors ${
                  errors.email
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
                    : 'border-[#00df81]/25 focus:border-[#00df81] focus:ring-[#00df81]'
                }`}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-stone-300 mb-1.5">
                Message <span className="text-[#00df81]">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project, role, or collaboration inquiry..."
                disabled={isSubmitting}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full px-4 py-2.5 rounded-xl bg-[#040d09] border text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-1 transition-colors resize-y ${
                  errors.message
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
                    : 'border-[#00df81]/25 focus:border-[#00df81] focus:ring-[#00df81]'
                }`}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#00df81] hover:bg-[#05c774] disabled:opacity-60 text-stone-950 font-bold text-sm transition-all shadow-md shadow-[#00df81]/25 active:scale-95 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-stone-950" />
                    <span>Sending your mail...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-stone-950" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
