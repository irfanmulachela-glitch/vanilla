import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Shield,
  FileCheck,
  Award,
  FlaskConical,
  Microscope,
  Download,
  FileText,
  Stamp,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { siteConfig, breadcrumbSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: "Quality & Certifications | Halal Vanilla Supplier Indonesia",
  description:
    "Food Safety Standards vanilla supplier with Halal certification, Phytosanitary compliance, and full export documentation. Every shipment verified by lab testing.",
  keywords: [
    "vanilla quality certifications",
    "halal vanilla supplier",
    "phytosanitary certificate vanilla",
    "food safety vanilla",
  ],
  alternates: {
    canonical: "/quality",
  },
  openGraph: {
    title: "Quality & Certifications - La Vanilla Supplier",
    description: "Food Safety Standards, Halal certified, Phytosanitary compliance. Full documentation.",
    url: "https://lavanillasupplier.com/quality",
    type: "website",
  },
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
          <div className="grid md:grid-cols-2 gap-8">
            {/* Halal Certification */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-[#D8C393] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E8DCC0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-[#8B7D50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Halal Certification
                  </h3>
                  <p className="text-sm text-[#8B7D50] font-medium">
                    MUI (Majelis Ulama Indonesia)
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Certified Halal by the Indonesian Ulema Council, ensuring full compliance
                with Islamic dietary laws for Muslim consumers worldwide.
              </p>
              <div className="bg-[#F5F0E3] rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-500 mb-1">Certificate Number</p>
                <p className="text-sm font-mono font-semibold text-gray-900">
                  123.1/ID-00123456789012
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  "Sharia-compliant processing",
                  "Regular MUI inspections",
                  "Annual renewal verification",
                  "Certificate available on request",
                ].map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B7D50]" />
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phytosanitary Certificate */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-[#D8C393] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E8DCC0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-8 h-8 text-[#8B7D50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Phytosanitary Certificate
                  </h3>
                  <p className="text-sm text-[#8B7D50] font-medium">
                    Indonesian Ministry of Agriculture
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Official phytosanitary certificate issued by the Indonesian Plant Protection
                Agency under the Ministry of Agriculture, verifying pest-free status.
              </p>
              <div className="bg-[#F5F0E3] rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-500 mb-1">Issuing Authority</p>
                <p className="text-sm font-semibold text-gray-900">
                  Direktorat Jenderal Perlindungan Tanaman
                </p>
                <p className="text-xs text-gray-500 mt-1">Kementerian Pertanian RI</p>
              </div>
              <ul className="space-y-2">
                {[
                  "Plant health inspection completed",
                  "Pest-free zone verification",
                  "Country-specific compliance",
                  "Issued per shipment",
                ].map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B7D50]" />
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificate of Origin */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-[#D8C393] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E8DCC0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Stamp className="w-8 h-8 text-[#8B7D50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Certificate of Origin
                  </h3>
                  <p className="text-sm text-[#8B7D50] font-medium">
                    KADIN (Kamar Dagang Indonesia)
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Verified Certificate of Origin issued by the local Chamber of Commerce (KADIN),
                confirming Indonesian origin of all vanilla products.
              </p>
              <div className="bg-[#F5F0E3] rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-500 mb-1">Issuing Body</p>
                <p className="text-sm font-semibold text-gray-900">
                  Kamar Dagang dan Industri Indonesia
                </p>
                <p className="text-xs text-gray-500 mt-1">Indonesia Chamber of Commerce</p>
              </div>
              <ul className="space-y-2">
                {[
                  "Official origin verification",
                  "Trade compliance confirmation",
                  "Customs-ready documentation",
                  "Indonesian export validated",
                ].map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B7D50]" />
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grade A Certificate */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-[#D8C393] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E8DCC0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-[#8B7D50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Grade A Certificate
                  </h3>
                  <p className="text-sm text-[#8B7D50] font-medium">
                    Issued by In-House QC Team
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Internal quality certificate issued by our certified QC team, verifying vanillin
                content, moisture levels, and sensory evaluation results.
              </p>
              <div className="bg-[#F5F0E3] rounded-lg p-3 mb-4">
                <p className="text-xs text-gray-500 mb-1">Vanillin Content Verification</p>
                <p className="text-sm font-mono font-semibold text-gray-900">
                  1.3% - 2.7% (Grade A Standard)
                </p>
                <p className="text-xs text-gray-500 mt-1">Gas Chromatography Verified</p>
              </div>
              <ul className="space-y-2">
                {[
                  "Vanillin content: 1.3-2.7%",
                  "Moisture: 25-35%",
                  "Expert sensory panel approved",
                  "Batch traceability confirmed",
                ].map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B7D50]" />
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                      "Gas chromatography testing to verify vanillin concentration meets specifications (1.3-2.7%).",
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

      {/* Downloadable Documents */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Downloadable Documents
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Access our certifications and documentation. All documents are available
            for download to verify our compliance and quality standards.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Award,
                title: "Halal Certificate (MUI)",
                description:
                  "Official MUI Halal certification with certificate number 123.1/ID-00123456789012",
                filename: "halal-certificate-mui.pdf",
                color: "bg-[#E8DCC0]",
              },
              {
                icon: Leaf,
                title: "Phytosanitary Certificate",
                description:
                  "Issued by Indonesian Ministry of Agriculture (Direktorat Jenderal Perlindungan Tanaman)",
                filename: "phytosanitary-certificate.pdf",
                color: "bg-[#E8DCC0]",
              },
              {
                icon: Stamp,
                title: "Certificate of Origin",
                description:
                  "Verified by KADIN (Kamar Dagang dan Industri Indonesia)",
                filename: "certificate-of-origin.pdf",
                color: "bg-[#E8DCC0]",
              },
              {
                icon: FileText,
                title: "Certificate of Analysis (Grade A)",
                description:
                  "In-house QC verification with vanillin content analysis (1.3-2.7%)",
                filename: "certificate-of-analysis.pdf",
                color: "bg-[#E8DCC0]",
              },
            ].map((doc) => (
              <div
                key={doc.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#D8C393] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${doc.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <doc.icon className="w-6 h-6 text-[#8B7D50]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{doc.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                    <a
                      href={`/documents/${doc.filename}`}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B7D50] text-white rounded-lg text-sm font-medium hover:bg-[#7A6E45] transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-8">
            Contact us for additional documentation or certified copies.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C2518]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            All certifications and documentation included with every shipment.
            Request a quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C2518] font-semibold rounded-xl hover:bg-[#F8F6F2] transition-colors"
            >
              Request Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B5A37A] text-white font-semibold rounded-xl hover:bg-[#A8956A] transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-[#2C2518] mb-6">Related Pages</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/products/vanilla-beans", label: "Vanilla Beans", desc: "Grade A & B beans" },
              { href: "/wholesale", label: "Wholesale", desc: "Bulk orders & pricing" },
              { href: "/la-vanilla-standard", label: "Our Standard", desc: "Quality framework" },
              { href: "/comparison", label: "Grade Comparison", desc: "A vs B specs" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 bg-white rounded-xl border border-[#E5E0D8] hover:border-[#B5A37A]/50 transition-colors group"
              >
                <p className="font-semibold text-[#2C2518] group-hover:text-[#B5A37A] transition-colors">
                  {link.label}
                </p>
                <p className="text-sm text-[#6B6358] mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation With Every Shipment */}
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
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Halal Certification",
                recognizedBy: {
                  "@type": "Organization",
                  name: "MUI (Majelis Ulama Indonesia)",
                },
                identifier: "123.1/ID-00123456789012",
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Phytosanitary Certificate",
                recognizedBy: {
                  "@type": "Organization",
                  name: "Indonesian Ministry of Agriculture",
                  department: "Direktorat Jenderal Perlindungan Tanaman",
                },
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Certificate of Origin",
                recognizedBy: {
                  "@type": "Organization",
                  name: "KADIN (Kamar Dagang dan Industri Indonesia)",
                },
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Grade A Certificate",
                recognizedBy: {
                  "@type": "Organization",
                  name: "In-House QC Team",
                },
                description:
                  "Vanillin content verification: 1.3% - 2.7% (Grade A Standard)",
              },
            ],
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Quality & Certifications", url: "/quality" },
            ])
          ),
        }}
      />
    </>
  );
}
