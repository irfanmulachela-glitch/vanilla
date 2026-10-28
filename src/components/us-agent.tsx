import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

const agent = siteConfig.usAgent;

function AgentContacts() {
  return (
    <a
      href={`mailto:${agent.email}`}
      className="inline-flex items-center gap-2 rounded-lg bg-[#2C2518] px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-[#3D3425] transition-colors"
    >
      <Mail className="w-4 h-4 text-[#D4C48A]" aria-hidden="true" />
      {agent.email}
    </a>
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

function AgentLinks({ className = "" }: { className?: string }) {
  return (
    <a
      href={`mailto:${agent.email}`}
      className={`inline-flex items-center gap-2 text-sm font-medium text-[#2C2518] hover:text-[#8C7A4F] transition-colors ${className}`}
    >
      <Mail className="w-4 h-4 text-[#B5A37A]" aria-hidden="true" />
      {agent.email}
    </a>
  );
}

/** Homepage feature, left column of "Where we ship": stands out without a box. */
export function UsAgentFeature({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <span className="block w-10 h-px bg-[#B5A37A] mb-6" aria-hidden="true" />
      <p className="text-[#B5A37A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">{agent.title}</p>
      <h3 className="font-[family-name:var(--font-libre)] text-2xl lg:text-[1.75rem] font-bold text-[#2C2518] leading-snug">
        Buying in the US? <span className="italic font-normal text-[#8C7A4F]">Meet us there.</span>
      </h3>
      <p className="mt-3 text-[#6B6358] leading-relaxed max-w-md">
        <span className="font-semibold text-[#2C2518]">{agent.name}</span>, our authorized agent in the United States,
        sends samples within the US, meets you in person, and handles quotes and orders locally.
      </p>
      <a
        href={`mailto:${agent.email}`}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#2C2518] px-5 py-3 text-sm font-semibold text-white hover:bg-[#3D3425] transition-colors"
      >
        <Mail className="w-4 h-4 text-[#D4C48A]" aria-hidden="true" />
        Email {agent.email}
      </a>
    </div>
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

/** Clean divider strip: contact page, between masthead and form. */
export function UsAgentStrip() {
  return (
    <section className="bg-white pt-14 lg:pt-16" aria-label="Authorized US agent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-y border-[#E5E0D8] py-6 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="sm:flex sm:items-baseline sm:gap-8">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B5A37A]" aria-hidden="true" />
              {agent.title}
            </p>
            <p className="mt-2 sm:mt-0 text-[#6B6358] leading-relaxed">
              <span className="font-semibold text-[#2C2518]">In the US? Talk to <span className="whitespace-nowrap">{agent.name}</span></span>{" "}
              for samples within the US, meetings in person, and local quotes and orders.
            </p>
          </div>
          <AgentLinks className="mt-4 lg:mt-0 shrink-0" />
        </div>
      </div>
    </section>
  );
}
