import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

const agent = siteConfig.usAgent;


function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function AgentContacts({ size = "md" }: { size?: "sm" | "md" }) {
  const btn =
    size === "sm"
      ? "px-4 py-2.5 text-sm"
      : "px-5 py-3 text-sm sm:text-base";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`https://wa.me/${agent.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-lg bg-[#2C2518] text-white font-semibold hover:bg-[#3D3425] transition-colors ${btn}`}
      >
        <WhatsAppIcon className="w-4 h-4" />
        {agent.whatsappDisplay}
      </a>
      <a
        href={`mailto:${agent.email}`}
        className={`inline-flex items-center gap-2 rounded-lg border border-[#D8D3C9] bg-white text-[#2C2518] font-semibold hover:border-[#B5A37A] transition-colors ${btn}`}
      >
        <Mail className="w-4 h-4 text-[#B5A37A]" />
        {agent.email}
      </a>
    </div>
  );
}

function Badge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#E5DCC5] bg-[#FBF8F1] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C7A4F]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#B5A37A]" aria-hidden="true" />
      {agent.title}
    </span>
  );
}

/** Highlighted callout: homepage regions, contact page. */
export function UsAgentCallout({ className = "" }: { className?: string }) {
  return (
    <aside
      aria-label="Authorized US agent"
      className={`relative rounded-2xl border border-[#E5DCC5] bg-white p-6 sm:p-7 before:absolute before:left-0 before:top-6 before:bottom-6 before:w-[3px] before:rounded-full before:bg-[#B5A37A] ${className}`}
    >
      <Badge />
      <h3 className="mt-4 text-xl font-bold text-[#2C2518] leading-snug">
        In the US? Talk to <span className="whitespace-nowrap">{agent.name}</span>
      </h3>
      <p className="mt-2 text-[#6B6358] leading-relaxed">
        Our authorized US agent sends samples within the US, meets buyers in person and handles quotes and orders locally.
      </p>
      <div className="mt-5">
        <AgentContacts size="sm" />
      </div>
    </aside>
  );
}

/** Full section: US region page. */
export function UsAgentSection() {
  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="us-agent-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Badge />
            <h2
              id="us-agent-heading"
              className="mt-5 font-[family-name:var(--font-libre)] text-3xl lg:text-4xl font-bold text-[#2C2518] leading-tight"
            >
              Your vanilla partner, <span className="italic font-normal text-[#B5A37A]">here in the US</span>
            </h2>
            <p className="mt-5 text-lg text-[#6B6358] leading-relaxed">
              {agent.name} is our authorized agent in the United States. Work with someone on your side of the world,
              see the beans before you commit, and meet face to face, while your vanilla still comes straight from Java.
            </p>
            <div className="mt-8">
              <AgentContacts />
            </div>
          </div>
          <ol className="lg:col-span-6 border-t border-[#E5E0D8]">
            {[
              { t: "Samples sent within the US", d: "No international wait for your first look. Ask for Grade A, Grade B, paste or powder." },
              { t: "Meet in person", d: "Talk through your specs, volumes and packaging face to face before you order." },
              { t: "Quotes and orders handled locally", d: "Get your quote and place your order through our US agent, without chasing an overseas time difference." },
            ].map((item, i) => (
              <li key={item.t} className="flex gap-5 py-6 border-b border-[#E5E0D8]">
                <span className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-[#B5A37A] pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#2C2518]">{item.t}</h3>
                  <p className="mt-1 text-[#6B6358] leading-relaxed">{item.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Horizontal strip: contact page, between masthead and form. */
export function UsAgentStrip() {
  return (
    <section className="bg-white pt-12 lg:pt-16" aria-label="Authorized US agent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-[#E5DCC5] bg-white px-6 py-6 sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-10 before:absolute before:left-0 before:top-6 before:bottom-6 before:w-[3px] before:rounded-full before:bg-[#B5A37A]">
          <div className="max-w-2xl">
            <Badge />
            <p className="mt-3 text-lg font-semibold text-[#2C2518]">
              In the United States? Talk to <span className="whitespace-nowrap">{agent.name}</span>, our authorized US agent.
            </p>
            <p className="mt-1 text-[#6B6358] leading-relaxed">
              Samples sent within the US, meetings in person, and quotes and orders handled locally.
            </p>
          </div>
          <div className="mt-5 lg:mt-0 shrink-0">
            <AgentContacts size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
