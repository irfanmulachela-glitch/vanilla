"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/config";

const EMPTY = {
  name: "",
  email: "",
  company: "",
  phone: "",
  product: "",
  quantity: "",
  region: "",
  message: "",
};

const FIELD =
  "w-full px-4 py-3 bg-white border border-[#D8D3C9] rounded-lg text-[#2C2518] placeholder:text-[#B3AA9C] focus:outline-none focus:border-[#B5A37A] focus:ring-2 focus:ring-[#B5A37A]/25 transition-colors";
const LABEL = "block text-[13px] font-medium text-[#2C2518] mb-2";

const NEXT_STEPS = [
  { title: "We reply within 24 hours", body: "By email or WhatsApp, with answers or a quote for your order." },
  { title: "You check a free sample", body: "Assess colour, aroma and texture against your own standards." },
  { title: "Order from 1 kg", body: "Shipped by air in 3–7 days with full export documents." },
];

const LINKS = [
  { href: "/products", label: "Our products" },
  { href: "/wholesale", label: "Wholesale terms" },
  { href: "/la-vanilla-standard", label: "Quality and certification" },
  { href: "/faq", label: "Frequently asked questions" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(EMPTY);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or message us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 lg:py-24 bg-white" aria-labelledby="quote-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-14 lg:gap-20 items-start">
          {/* Form */}
          <div>
            <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Request a Quote</p>
            <h2 id="quote-heading" className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-3">
              Tell us what you need
            </h2>
            <p className="text-[#6B6358] leading-relaxed mb-10 max-w-xl">
              The more you share about your product and volumes, the more precise our quote. Fields
              marked * are required.
            </p>

            {submitted ? (
              <div className="border-t border-[#E5E0D8] pt-10">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#B5A37A] text-[#2C2518] mb-6">
                  <Check className="w-6 h-6" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-bold text-[#2C2518] mb-2">Thank you, we&apos;ve got it</h3>
                <p className="text-[#6B6358] leading-relaxed mb-8 max-w-lg">
                  We&apos;ll reply within 24 hours. A confirmation is on its way to your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(EMPTY);
                  }}
                  className="inline-flex items-center px-6 py-3 bg-white text-[#2C2518] text-sm font-semibold rounded-lg border border-[#D8D3C9] hover:border-[#B5A37A] transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <label htmlFor="name" className={LABEL}>Full name *</label>
                  <input type="text" id="name" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className={FIELD} />
                </div>
                <div>
                  <label htmlFor="email" className={LABEL}>Email *</label>
                  <input type="email" id="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={FIELD} />
                </div>
                <div>
                  <label htmlFor="company" className={LABEL}>Company</label>
                  <input type="text" id="company" name="company" autoComplete="organization" value={formData.company} onChange={handleChange} className={FIELD} />
                </div>
                <div>
                  <label htmlFor="phone" className={LABEL}>Phone or WhatsApp</label>
                  <input type="tel" id="phone" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} className={FIELD} />
                </div>
                <div>
                  <label htmlFor="product" className={LABEL}>Product *</label>
                  <select id="product" name="product" required value={formData.product} onChange={handleChange} className={FIELD}>
                    <option value="">Select a product</option>
                    <option value="vanilla-beans">Vanilla Beans</option>
                    <option value="vanilla-paste">Vanilla Paste</option>
                    <option value="vanilla-powder">Vanilla Powder</option>
                    <option value="private-label">Private Label</option>
                    <option value="custom">Custom Formulation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className={LABEL}>Estimated quantity</label>
                  <input type="text" id="quantity" name="quantity" placeholder="e.g. 5 kg per month" value={formData.quantity} onChange={handleChange} className={FIELD} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="region" className={LABEL}>Shipping to *</label>
                  <select id="region" name="region" required value={formData.region} onChange={handleChange} className={FIELD}>
                    <option value="">Select your region</option>
                    <option value="uae">UAE / Middle East</option>
                    <option value="australia">Australia</option>
                    <option value="usa">USA</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia Pacific</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={LABEL}>Your requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What you make, the grade or specs you need, and any questions you have."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${FIELD} resize-none`}
                  />
                </div>
                {error && (
                  <p className="sm:col-span-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</p>
                )}
                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#2C2518] text-white font-semibold rounded-lg hover:bg-[#3D3425] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send inquiry"}
                    {!loading && <ArrowRight className="ms-2 w-5 h-5 rtl:rotate-180" />}
                  </button>
                  <p className="text-sm text-[#9A9187]">
                    Prefer to chat?{" "}
                    <a href={`https://wa.me/${siteConfig.social.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-medium text-[#2C2518] underline decoration-[#B5A37A] underline-offset-4 hover:text-[#8C7A4F]">
                      Message us on WhatsApp
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* What happens next */}
          <aside className="lg:sticky lg:top-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9187] mb-1">What happens next</p>
            <ol className="border-b border-[#E5E0D8]">
              {NEXT_STEPS.map((s, i) => (
                <li key={s.title} className={`flex gap-4 py-5 ${i ? "border-t border-[#E5E0D8]" : ""}`}>
                  <span className="font-[family-name:var(--font-libre)] text-xl text-[#B5A37A] leading-none pt-0.5 tabular-nums">{i + 1}</span>
                  <span>
                    <span className="block font-semibold text-[#2C2518] mb-1">{s.title}</span>
                    <span className="block text-sm text-[#6B6358] leading-relaxed">{s.body}</span>
                  </span>
                </li>
              ))}
            </ol>

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9187] mt-10 mb-1">Before you write</p>
            <ul className="border-b border-[#E5E0D8]">
              {LINKS.map((l, i) => (
                <li key={l.href} className={i ? "border-t border-[#E5E0D8]" : ""}>
                  <Link href={l.href} className="group flex items-center justify-between py-3.5 text-[#2C2518] hover:text-[#8C7A4F] transition-colors">
                    {l.label}
                    <ArrowRight className="w-4 h-4 text-[#B5A37A] group-hover:translate-x-1 transition-transform rtl:rotate-180" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
