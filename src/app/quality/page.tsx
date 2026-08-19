import { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  Shield,
  FileCheck,
  Award,
  FlaskConical,
  Microscope,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Quality & Certifications - Food Safety Standards, Halal, Phytosanitary",
  description:
    "Our commitment to quality: Food Safety Standards processing, Halal certified, Phytosanitary compliance. Full documentation for every shipment.",
};

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#D8C393] to-[#C4B07A] text-stone-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Quality & Certifications
            </h1>
            <p className="text-lg text-stone-700">
              Our commitment to quality is backed by international certifications
              and rigorous testing protocols. Every product meets the highest
              global standards.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            International Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                description:
                  "Our processing facilities comply with International Quality Standards, ensuring food safety at every stage of production.",
                details: [
                  "Regular third-party audits",
                  "Documented control points",
                  "Traceability system",
                  "Continuous monitoring",
                ],
              },
              {
                icon: Award,
                title: "Halal Certified",
                description:
                  "All our products are Halal certified, meeting the requirements for Muslim consumers worldwide.",
                details: [
                  "MUI Halal certification",
                  "Sharia-compliant processing",
                  "Regular inspections",
                  "Certificate available on request",
                ],
              },
              {
                icon: FileCheck,
                title: "Phytosanitary Compliant",
                description:
                  "Every shipment includes phytosanitary certificates issued by Indonesian authorities, ensuring compliance with import regulations.",
                details: [
                  "Official government certificates",
                  "Plant health inspection",
                  "Pest-free certification",
                  "Country-specific requirements",
                ],
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#E8DCC0] rounded-xl flex items-center justify-center mb-6">
                  <cert.icon className="w-7 h-7 text-[#8B7D50]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-6">{cert.description}</p>
                <ul className="space-y-2">
                  {cert.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8B7D50]" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Quality Control Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Sourcing",
                description:
                  "Direct sourcing from verified farms with documented growing practices and fair trade partnerships.",
                icon: FlaskConical,
              },
              {
                step: "02",
                title: "Testing",
                description:
                  "Every batch tested for vanillin content, moisture levels, and sensory evaluation by certified experts.",
                icon: Microscope,
              },
              {
                step: "03",
                title: "Processing",
                description:
                  "Quality-controlled facilities with documented control points at every stage of processing.",
                icon: Shield,
              },
              {
                step: "04",
                title: "Certification",
                description:
                  "Complete documentation including Certificate of Analysis, Phytosanitary, and Certificate of Origin.",
                icon: FileCheck,
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-[#8B7D50]">
                    {item.step}
                  </span>
                  <item.icon className="w-6 h-6 text-[#8B7D50]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Protocol */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Rigorous Testing Protocol
              </h2>
              <p className="text-gray-600 mb-6">
                Our quality assurance process includes comprehensive testing at
                multiple stages. We use advanced analytical equipment to verify
                every specification we promise.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Vanillin Content Analysis",
                    description:
                      "Gas chromatography testing to verify vanillin concentration meets specifications (1.8-2.7%).",
                  },
                  {
                    title: "Moisture Content Testing",
                    description:
                      "Precise moisture measurement to ensure optimal preservation and quality (25-35% for Grade A).",
                  },
                  {
                    title: "Sensory Evaluation",
                    description:
                      "Expert panel evaluation for aroma, flavor complexity, and overall quality assessment.",
                  },
                  {
                    title: "Microbiological Testing",
                    description:
                      "Testing for harmful microorganisms to ensure food safety compliance.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B7D50] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600"
                  alt="Quality testing laboratory"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16 bg-[#D8C393] text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Complete Documentation With Every Shipment
            </h2>
            <p className="text-stone-700 text-lg max-w-2xl mx-auto">
              We provide all necessary export documentation to ensure smooth
              customs clearance in your country.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Certificate of Analysis (CoA)",
              "Phytosanitary Certificate",
              "Certificate of Origin (COO)",
              "Quality Statement Letter",
              "Halal Certificate",
              "Packing List",
              "Commercial Invoice",
              "Air Waybill",
            ].map((doc) => (
              <div
                key={doc}
                className="bg-[#C4B07A]/50 rounded-xl p-4 text-center border border-[#C4B07A]/50"
              >
                <FileCheck className="w-6 h-6 mx-auto mb-2 text-[#C4B07A]" />
                <p className="text-sm font-medium">{doc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Quality & Certifications",
            description: "Quality-assured vanilla processing facility",
            url: `${siteConfig.url}/quality`,
          }),
        }}
      />
    </>
  );
}
