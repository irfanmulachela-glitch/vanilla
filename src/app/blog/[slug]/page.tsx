import { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock, Tag } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { notFound } from "next/navigation";

const blogPosts = {
  "sourcing-vanilla-beans-indonesia": {
    title: "How to Source High-Quality Vanilla Beans from Indonesia",
    excerpt:
      "A comprehensive guide for B2B buyers on evaluating vanilla bean quality, understanding grades, and finding reliable Indonesian suppliers.",
    category: "Sourcing Guide",
    date: "2026-01-15",
    readTime: "8 min read",
    content: `
      <p>Indonesia is the world's second-largest vanilla producer, offering exceptional quality beans at competitive prices. For B2B buyers, sourcing vanilla from Indonesia requires understanding local markets, quality standards, and supplier verification processes.</p>

      <h2>Why Source Vanilla from Indonesia?</h2>
      <p>Indonesian vanilla, primarily <em>Vanilla planifolia</em>, is known for its rich, creamy flavor profile with notes of caramel and dried fruit. The country's tropical climate and volcanic soil create ideal growing conditions, resulting in beans with vanillin content ranging from 1.3% to 2.7%.</p>

      <h2>Understanding Vanilla Bean Grades</h2>
      <p>Indonesian vanilla beans come in two primary grades:</p>
      <ul>
        <li><strong>Grade A (Gourmet):</strong> 16-20 cm length, 25-35% moisture, 1.3-2.7% vanillin. Perfect for retail, pastry, and culinary applications.</li>
        <li><strong>Grade B (Extract):</strong> 10-16 cm length, less than 25% moisture, 1.3-2.2% vanillin. Ideal for extract manufacturing and industrial use.</li>
      </ul>

      <h2>Evaluating Supplier Quality</h2>
      <p>When evaluating Indonesian vanilla suppliers, request the following documentation:</p>
      <ul>
        <li>Certificate of Analysis (CoA) with vanillin content testing</li>
        <li>Phytosanitary certificate for export compliance</li>
        <li>HACCP or food safety certification</li>
        <li>Sample beans for quality verification</li>
      </ul>

      <h2>MOQ and Pricing Considerations</h2>
      <p>Most Indonesian vanilla suppliers offer MOQs ranging from 1 kg for samples to 25 kg for wholesale orders. Pricing varies based on grade, vanillin content, and order volume. Request quotes from multiple suppliers to compare pricing structures.</p>

      <h2>Shipping and Logistics</h2>
      <p>Indonesian vanilla exports typically ship from Semarang, Jakarta, or Surabaya. Air freight delivery takes 3-7 days globally, while sea freight options are available for larger shipments. Ensure your supplier provides complete export documentation.</p>
    `,
  },
  "vanilla-bean-grading": {
    title: "Understanding Vanilla Bean Grading: Grade A vs Grade B",
    excerpt:
      "Learn the differences between Grade A gourmet beans and Grade B extraction beans, and which is right for your application.",
    category: "Quality",
    date: "2026-01-10",
    readTime: "6 min read",
    content: `
      <p>Vanilla bean grading is crucial for B2B buyers to ensure they receive the right product for their specific application. Understanding the differences between grades helps optimize costs and quality.</p>

      <h2>Grade A: Gourmet Vanilla Beans</h2>
      <p>Grade A beans are premium quality, designed for direct culinary use. Key characteristics include:</p>
      <ul>
        <li><strong>Length:</strong> 16-20 cm</li>
        <li><strong>Moisture Content:</strong> 25-35%</li>
        <li><strong>Vanillin Content:</strong> 1.3-2.7%</li>
        <li><strong>Appearance:</strong> Plump, oily, with visible vanillin crystals</li>
        <li><strong>Applications:</strong> Retail, pastry, ice cream, culinary</li>
      </ul>

      <h2>Grade B: Extraction Vanilla Beans</h2>
      <p>Grade B beans are designed for extract manufacturing and industrial applications. Key characteristics include:</p>
      <ul>
        <li><strong>Length:</strong> 10-16 cm</li>
        <li><strong>Moisture Content:</strong> Less than 25%</li>
        <li><strong>Vanillin Content:</strong> 1.3-2.2%</li>
        <li><strong>Appearance:</strong> Thinner, drier, more economical</li>
        <li><strong>Applications:</strong> Extract manufacturing, flavoring, industrial</li>
      </ul>

      <h2>Which Grade Should You Choose?</h2>
      <p>The choice between Grade A and Grade B depends on your application:</p>
      <ul>
        <li>Choose <strong>Grade A</strong> if you're selling retail vanilla beans or using them in premium culinary applications.</li>
        <li>Choose <strong>Grade B</strong> if you're manufacturing vanilla extract or need cost-effective vanilla flavoring for industrial use.</li>
      </ul>

      <h2>Quality Testing Methods</h2>
      <p>Reputable suppliers provide Certificate of Analysis (CoA) documents showing vanillin content, moisture levels, and other quality metrics. Request independent testing if needed for your quality assurance program.</p>
    `,
  },
  "export-documentation-guide": {
    title: "Export Documentation Guide: What You Need to Import Vanilla",
    excerpt:
      "Complete guide to phytosanitary certificates, certificate of origin, and other documentation required for vanilla imports.",
    category: "Export Guide",
    date: "2026-01-05",
    readTime: "10 min read",
    content: `
      <p>Importing vanilla from Indonesia requires proper documentation to ensure smooth customs clearance and compliance with both Indonesian export regulations and your country's import requirements.</p>

      <h2>Essential Export Documents</h2>
      <p>Every vanilla shipment from Indonesia should include:</p>
      <ul>
        <li><strong>Phytosanitary Certificate:</strong> Issued by Indonesia's Plant Quarantine Agency, confirming the vanilla is free from pests and diseases.</li>
        <li><strong>Certificate of Origin (COO):</strong> Verifies the vanilla was produced in Indonesia, important for tariff calculations.</li>
        <li><strong>Certificate of Analysis (CoA):</strong> Details vanillin content, moisture levels, and other quality parameters.</li>
        <li><strong>Commercial Invoice:</strong> Itemized list of products with prices and terms.</li>
        <li><strong>Packing List:</strong> Details of packaging, weights, and dimensions.</li>
      </ul>

      <h2>Country-Specific Requirements</h2>
      <p>Different countries have varying import requirements:</p>
      <ul>
        <li><strong>USA:</strong> FDA registration may be required for food products. Prior notice must be filed with FDA before arrival.</li>
        <li><strong>EU:</strong> EU food safety regulations apply. Ensure compliance with EU Maximum Residue Limits (MRLs).</li>
        <li><strong>UAE:</strong> Halal certification is often required. ESMA standards may apply.</li>
        <li><strong>Australia:</strong> Strict biosecurity requirements. BICON database should be checked for import conditions.</li>
      </ul>

      <h2>Shipping Terms Explained</h2>
      <p>Common incoterms for vanilla exports include:</p>
      <ul>
        <li><strong>FOB (Free On Board):</strong> Seller delivers to port, buyer assumes risk and cost from there.</li>
        <li><strong>CIF (Cost, Insurance, Freight):</strong> Seller covers cost, insurance, and freight to destination port.</li>
        <li><strong>DDP (Delivered Duty Paid):</strong> Seller handles all costs including import duties.</li>
      </ul>

      <h2>Working with Your Supplier</h2>
      <p>Choose a supplier experienced in international export who can provide complete documentation and guide you through the import process. Request documentation samples before placing orders.</p>
    `,
  },
  "vanilla-paste-vs-extract": {
    title: "Vanilla Paste vs Vanilla Extract: Which Should You Use?",
    excerpt:
      "A detailed comparison of vanilla paste and vanilla extract for food manufacturers, including cost analysis and application guide.",
    category: "Product Guide",
    date: "2025-12-28",
    readTime: "7 min read",
    content: `
      <p>For food manufacturers, choosing between vanilla paste and vanilla extract impacts product quality, cost, and application. Understanding the differences helps optimize your vanilla usage.</p>

      <h2>Vanilla Paste: Overview</h2>
      <p>Vanilla paste is a concentrated vanilla product containing:</p>
      <ul>
        <li>Ground vanilla beans</li>
        <li>Vanilla extract</li>
        <li>Sugar or corn syrup (as carrier)</li>
      </ul>
      <p>Vanilla paste offers the visual appeal of vanilla bean specks with the convenience of liquid application. It's ideal for products where appearance matters, like ice cream, yogurt, and pastries.</p>

      <h2>Vanilla Extract: Overview</h2>
      <p>Vanilla extract is made by macerating vanilla beans in alcohol and water. It contains:</p>
      <ul>
        <li>Vanilla flavor compounds</li>
        <li>Alcohol (as solvent and preservative)</li>
        <li>Water</li>
      </ul>
      <p>Extract is the most common form used in baking and food manufacturing due to its consistent flavor profile and easy incorporation.</p>

      <h2>Cost Comparison</h2>
      <p>Vanilla paste typically costs 20-40% more than equivalent vanilla extract due to the inclusion of whole bean particles. However, the visual appeal can command premium pricing in finished products.</p>

      <h2>Application Guide</h2>
      <ul>
        <li><strong>Use Vanilla Paste for:</strong> Ice cream, yogurt, pastry cream, applications where bean specks are desired</li>
        <li><strong>Use Vanilla Extract for:</strong> Baked goods, beverages, applications where appearance is less important</li>
      </ul>

      <h2>Custom Formulations</h2>
      <p>Many manufacturers offer custom vanilla paste formulations with adjustable vanillin concentration, sugar content, and viscosity. This allows optimization for specific applications and cost requirements.</p>
    `,
  },
  "vanilla-market-trends-2026": {
    title: "Global Vanilla Market Trends 2026",
    excerpt:
      "Analysis of current vanilla pricing, supply chain dynamics, and forecasts for the coming year.",
    category: "Market Analysis",
    date: "2025-12-20",
    readTime: "12 min read",
    content: `
      <p>The global vanilla market continues to evolve, with significant trends affecting pricing, supply chains, and buyer strategies. Here's what B2B buyers need to know for 2026.</p>

      <h2>Current Market Overview</h2>
      <p>Global vanilla demand remains strong, driven by the food and beverage industry's preference for natural flavoring. Madagascar continues to dominate production, but Indonesia and other origins are gaining market share.</p>

      <h2>Price Trends</h2>
      <p>Vanilla bean prices have stabilized after the volatility of previous years. Current wholesale prices for Grade A Indonesian vanilla range from $300-500/kg, depending on quality and vanillin content. Grade B beans for extraction are more economical at $150-300/kg.</p>

      <h2>Supply Chain Dynamics</h2>
      <p>Key factors affecting vanilla supply in 2026:</p>
      <ul>
        <li><strong>Climate:</strong> Weather patterns in growing regions affect yields</li>
        <li><strong>Labor:</strong> Vanilla cultivation is labor-intensive, affecting production costs</li>
        <li><strong>Logistics:</strong> Global shipping conditions impact delivery times and costs</li>
      </ul>

      <h2>Buyer Strategies for 2026</h2>
      <p>To optimize your vanilla procurement:</p>
      <ul>
        <li>Establish long-term relationships with multiple suppliers</li>
        <li>Consider forward contracts to lock in pricing</li>
        <li>Explore alternative origins like Indonesia for competitive pricing</li>
        <li>Maintain safety stock to avoid supply disruptions</li>
      </ul>

      <h2>Quality Trends</h2>
      <p>Buyers increasingly demand transparency in vanilla sourcing, including:</p>
      <ul>
        <li>Traceability from farm to shipment</li>
        <li>Independent quality testing</li>
        <li>Sustainability certifications</li>
        <li>Detailed documentation</li>
      </ul>

      <h2>Forecast</h2>
      <p>The vanilla market is expected to see moderate growth in 2026, with stable pricing for quality Indonesian vanilla. Buyers who establish reliable supply chains now will be well-positioned for future demand.</p>
    `,
  },
  "food-safety-standards-vanilla": {
    title: "Food Safety Standards: Why They Matter for Vanilla Buyers",
    excerpt:
      "Understanding food safety standards and why they're critical for food safety in vanilla processing and export.",
    category: "Quality",
    date: "2025-12-15",
    readTime: "5 min read",
    content: `
      <p>Food safety standards are critical for vanilla buyers, ensuring product quality, regulatory compliance, and consumer safety. Understanding these standards helps buyers make informed sourcing decisions.</p>

      <h2>Why Food Safety Matters</h2>
      <p>Vanilla is a high-value ingredient used in food products consumed globally. Ensuring food safety:</p>
      <ul>
        <li>Protects consumer health</li>
        <li>Ensures regulatory compliance</li>
        <li>Maintains product quality</li>
        <li>Protects brand reputation</li>
      </ul>

      <h2>Key Food Safety Standards</h2>
      <p>Several standards apply to vanilla processing and export:</p>
      <ul>
        <li><strong>Good Manufacturing Practices (GMP):</strong> Basic hygiene and processing standards</li>
        <li><strong>Hazard Analysis Critical Control Points (HACCP):</strong> Systematic approach to food safety</li>
        <li><strong>ISO 22000:</strong> Food safety management systems</li>
        <li><strong>Halal Certification:</strong> Required for markets with Muslim-majority populations</li>
      </ul>

      <h2>Quality Testing Requirements</h2>
      <p>Reputable vanilla suppliers provide:</p>
      <ul>
        <li>Certificate of Analysis (CoA) with vanillin content</li>
        <li>Moisture content testing</li>
        <li>Microbiological testing</li>
        <li>Heavy metal testing</li>
      </ul>

      <h2>Working with Certified Suppliers</h2>
      <p>Choose suppliers with documented food safety programs. Request copies of certifications, audit reports, and quality procedures before placing orders.</p>
    `,
  },
  "vanilla-bean-prices-indonesia": {
    title: "Vanilla Bean Prices Indonesia 2026",
    excerpt:
      "Current wholesale vanilla bean prices from Indonesian suppliers, factors affecting pricing, and how to get the best deals.",
    category: "Market Analysis",
    date: "2025-11-15",
    readTime: "8 min read",
    content: `
      <p>Understanding vanilla bean pricing is essential for B2B buyers looking to optimize their procurement costs while maintaining quality standards.</p>

      <h2>Current Price Ranges</h2>
      <p>Indonesian vanilla bean prices in 2026:</p>
      <ul>
        <li><strong>Grade A (Gourmet):</strong> $300-500/kg depending on vanillin content</li>
        <li><strong>Grade B (Extract):</strong> $150-300/kg for standard quality</li>
        <li><strong>Premium Grade A:</strong> $500-700/kg for high vanillin (2.5%+)</li>
      </ul>

      <h2>Factors Affecting Price</h2>
      <p>Several factors influence vanilla pricing:</p>
      <ul>
        <li><strong>Vanillin Content:</strong> Higher vanillin commands premium pricing</li>
        <li><strong>Bean Length:</strong> Longer beans are more valuable</li>
        <li><strong>Moisture Content:</strong> Affects weight and shelf life</li>
        <li><strong>Order Volume:</strong> Bulk orders typically receive better pricing</li>
        <li><strong>Season:</strong> Harvest timing affects availability</li>
      </ul>

      <h2>Getting the Best Prices</h2>
      <p>To optimize your vanilla procurement costs:</p>
      <ul>
        <li>Order in bulk (25kg+ for wholesale pricing)</li>
        <li>Establish long-term supplier relationships</li>
        <li>Consider Grade B for extract applications</li>
        <li>Request quotes from multiple suppliers</li>
      </ul>

      <h2>Price Stability Outlook</h2>
      <p>Indonesian vanilla prices are expected to remain stable in 2026, making it a good time to establish supply relationships.</p>
    `,
  },
  "indonesian-vanilla-vs-madagascar": {
    title: "Indonesian Vanilla vs Madagascar Vanilla",
    excerpt:
      "Comparing the two largest vanilla origins: flavor profiles, pricing, quality characteristics, and best applications.",
    category: "Product Guide",
    date: "2025-11-01",
    readTime: "9 min read",
    content: `
      <p>Indonesia and Madagascar are the world's two largest vanilla producers, each offering distinct characteristics. Understanding the differences helps buyers choose the right origin for their applications.</p>

      <h2>Flavor Profile Comparison</h2>
      <ul>
        <li><strong>Indonesian Vanilla:</strong> Rich, creamy, with notes of caramel, dried fruit, and smoky undertones. More complex flavor profile.</li>
        <li><strong>Madagascar Vanilla:</strong> Sweet, creamy, with classic vanilla flavor and floral notes. More traditional vanilla taste.</li>
      </ul>

      <h2>Quality Characteristics</h2>
      <ul>
        <li><strong>Indonesian:</strong> V. planifolia, vanillin 1.3-2.7%, thicker beans, higher moisture</li>
        <li><strong>Madagascar:</strong> V. planifolia, vanillin 1.5-2.2%, thinner beans, more uniform</li>
      </ul>

      <h2>Pricing Comparison</h2>
      <p>Indonesian vanilla typically offers better value:</p>
      <ul>
        <li><strong>Indonesian Grade A:</strong> $300-500/kg</li>
        <li><strong>Madagascar Grade A:</strong> $500-800/kg</li>
      </ul>

      <h2>Best Applications</h2>
      <ul>
        <li><strong>Choose Indonesian for:</strong> Applications requiring complex flavor, cost optimization, halal markets</li>
        <li><strong>Choose Madagascar for:</strong> Classic vanilla applications, premium retail, traditional recipes</li>
      </ul>

      <h2>Supply Reliability</h2>
      <p>Indonesia offers more stable supply chains and shorter shipping times to Asian and Middle Eastern markets. Madagascar exports primarily through Europe.</p>
    `,
  },
  "halal-vanilla-supplier": {
    title: "Finding a Halal Vanilla Supplier",
    excerpt:
      "Guide to sourcing halal-certified vanilla products for Middle Eastern and Muslim-majority markets.",
    category: "Sourcing Guide",
    date: "2025-10-15",
    readTime: "7 min read",
    content: `
      <p>For food manufacturers serving Muslim-majority markets, halal certification is essential. This guide helps you find reliable halal vanilla suppliers.</p>

      <h2>Why Halal Certification Matters</h2>
      <p>Halal certification ensures:</p>
      <ul>
        <li>Compliance with Islamic dietary laws</li>
        <li>Access to Middle Eastern and Asian markets</li>
        <li>Consumer trust in Muslim-majority regions</li>
        <li>Regulatory compliance in halal-certified countries</li>
      </ul>

      <h2>What Makes Vanilla Halal?</h2>
      <p>For vanilla to be halal certified:</p>
      <ul>
        <li>No alcohol-based solvents in extraction</li>
        <li>Clean processing facilities</li>
        <li>Halal-certified ingredients</li>
        <li>Proper documentation and audit trails</li>
      </ul>

      <h2>Halal Vanilla Products</h2>
      <p>Common halal vanilla products include:</p>
      <ul>
        <li><strong>Halal Vanilla Beans:</strong> Naturally halal, no processing required</li>
        <li><strong>Halal Vanilla Paste:</strong> Made with halal-certified ingredients</li>
        <li><strong>Halal Vanilla Powder:</strong> Pure vanilla, naturally halal</li>
      </ul>

      <h2>Finding Halal Suppliers</h2>
      <p>To find halal vanilla suppliers:</p>
      <ul>
        <li>Check for recognized halal certification bodies</li>
        <li>Request copies of halal certificates</li>
        <li>Verify certification with the issuing body</li>
        <li>Look for suppliers experienced in halal markets</li>
      </ul>

      <h2>Indonesian Halal Vanilla</h2>
      <p>Indonesia, with its Muslim-majority population, is a natural source for halal vanilla products. Many Indonesian suppliers hold recognized halal certifications.</p>
    `,
  },
  "bulk-vanilla-beans-indonesia": {
    title: "How to Buy Bulk Vanilla Beans from Indonesia",
    excerpt:
      "Complete guide to purchasing bulk vanilla beans wholesale. Pricing, MOQ, quality testing, and logistics explained.",
    category: "Sourcing Guide",
    date: "2025-09-20",
    readTime: "10 min read",
    content: `
      <p>Buying bulk vanilla beans from Indonesia offers significant cost advantages for food manufacturers and distributors. This guide covers everything you need to know about wholesale vanilla procurement.</p>

      <h2>Why Buy Bulk from Indonesia?</h2>
      <p>Indonesia offers competitive pricing for bulk vanilla:</p>
      <ul>
        <li>Grade A beans: $300-500/kg FOB</li>
        <li>Grade B beans: $150-300/kg FOB</li>
        <li>Volume discounts for 100kg+ orders</li>
        <li>Year-round supply availability</li>
      </ul>

      <h2>Minimum Order Quantities</h2>
      <p>Most Indonesian suppliers offer flexible MOQs:</p>
      <ul>
        <li>Sample orders: 1-5 kg</li>
        <li>Small wholesale: 25 kg</li>
        <li>Standard wholesale: 50-100 kg</li>
        <li>Bulk orders: 100kg+ with better pricing</li>
      </ul>

      <h2>Quality Testing for Bulk Orders</h2>
      <p>Before placing large orders:</p>
      <ul>
        <li>Request Certificate of Analysis (CoA)</li>
        <li>Verify vanillin content (1.3-2.7% for Grade A)</li>
        <li>Check moisture content (25-35% for Grade A)</li>
        <li>Request samples for evaluation</li>
      </ul>

      <h2>Shipping Bulk Orders</h2>
      <p>For large orders, consider:</p>
      <ul>
        <li>Air freight for urgent orders (3-7 days)</li>
        <li>Sea freight for cost savings (2-4 weeks)</li>
        <li>FOB terms from Semarang, Jakarta, or Surabaya</li>
        <li>CIF or DDP for door-to-door delivery</li>
      </ul>

      <h2>Tips for First-Time Buyers</h2>
      <p>Start with a trial order to verify quality before committing to large volumes. Establish clear specifications and get everything in writing.</p>
    `,
  },
  "vanilla-bean-moisture-content": {
    title: "Vanilla Bean Moisture Content: Why It Matters",
    excerpt:
      "Understanding how moisture content affects vanilla bean quality, pricing, and shelf life. Technical guide for B2B buyers.",
    category: "Quality",
    date: "2025-09-10",
    readTime: "6 min read",
    content: `
      <p>Moisture content is one of the most critical factors in vanilla bean quality. Understanding its impact helps buyers make informed purchasing decisions.</p>

      <h2>Moisture Content Standards</h2>
      <p>Indonesian vanilla bean moisture standards:</p>
      <ul>
        <li><strong>Grade A:</strong> 25-35% moisture</li>
        <li><strong>Grade B:</strong> Less than 25% moisture</li>
      </ul>

      <h2>Why Moisture Matters</h2>
      <p>Moisture content affects:</p>
      <ul>
        <li><strong>Flavor intensity:</strong> Higher moisture = more aromatic</li>
        <li><strong>Shelf life:</strong> Lower moisture = longer storage</li>
        <li><strong>Weight:</strong> Affects pricing per kilogram</li>
        <li><strong>Appearance:</strong> Higher moisture = plumper, oilier beans</li>
      </ul>

      <h2>Testing Moisture Content</h2>
      <p>Professional testing methods include:</p>
      <ul>
        <li>Halogen moisture analyzer</li>
        <li>Oven-drying method</li>
        <li>Karl Fischer titration</li>
      </ul>

      <h2>Implications for Buyers</h2>
      <p>When evaluating vanilla beans:</p>
      <ul>
        <li>Request moisture test results with your order</li>
        <li>Consider your storage conditions</li>
        <li>Factor moisture into cost calculations</li>
        <li>Understand how moisture affects your application</li>
      </ul>
    `,
  },
  "vanilla-extract-manufacturing": {
    title: "Vanilla Extract Manufacturing: A Complete Guide",
    excerpt:
      "Step-by-step guide to manufacturing vanilla extract. Equipment, processes, and raw material requirements explained.",
    category: "Product Guide",
    date: "2025-08-25",
    readTime: "12 min read",
    content: `
      <p>Manufacturing vanilla extract requires careful selection of raw materials and understanding of the extraction process. This guide covers everything manufacturers need to know.</p>

      <h2>Raw Material Selection</h2>
      <p>For extract manufacturing, use Grade B vanilla beans:</p>
      <ul>
        <li>Moisture content: Less than 25%</li>
      <li>Vanillin content: 1.3-2.2%</li>
      <li>Bean length: 10-16 cm</li>
      <li>Cost-effective for large-volume production</li>
      </ul>

      <h2>Extraction Process</h2>
      <p>Basic vanilla extract manufacturing:</p>
      <ul>
        <li>Chop or split vanilla beans</li>
        <li>Combine with alcohol and water solution</li>
        <li>Age for 3-6 months minimum</li>
        <li>Filter and package</li>
      </ul>

      <h2>Equipment Needed</h2>
      <p>Essential equipment includes:</p>
      <ul>
        <li>Extraction tanks</li>
        <li>Filtration system</li>
        <li>Testing equipment (vanillin analyzer)</li>
        <li>Packaging equipment</li>
      </ul>

      <h2>Quality Control</h2>
      <p>Ensure consistent quality with:</p>
      <ul>
        <li>Regular vanillin content testing</li>
        <li>Sensory evaluation</li>
        <li>Batch documentation</li>
        <li>Shelf life testing</li>
      </ul>
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteConfig.url}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#F8F6F2] py-4 border-b border-[#E5E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[#6B6358]">
            <Link href="/" className="hover:text-[#B5A37A] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-[#B5A37A] transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#2C2518]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#B5A37A] mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-[#F0EDE6] text-[#B5A37A] text-xs font-medium rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-[#6B6358]">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#2C2518] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#6B6358]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              La Vanilla Supplier
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none prose-headings:text-[#2C2518] prose-p:text-[#6B6358] prose-li:text-[#6B6358] prose-strong:text-[#2C2518] prose-a:text-[#B5A37A] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2C2518] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Quality Vanilla for Your Business?
          </h2>
          <p className="text-[#B5A37A] mb-6">
            Get a free sample and quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2C2518] font-medium rounded-lg hover:bg-[#F8F6F2] transition-colors"
            >
              Request Free Sample
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#B5A37A] text-white font-medium rounded-lg hover:bg-[#A8956A] transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-[#F8F6F2] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2C2518] mb-6">
            Related Articles
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedPost]) => (
                <Link
                  key={key}
                  href={`/blog/${key}`}
                  className="p-4 bg-white rounded-lg border border-[#E5E0D8] hover:border-[#B5A37A] transition-colors"
                >
                  <span className="text-xs text-[#B5A37A] font-medium">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-semibold text-[#2C2518] mt-1">
                    {relatedPost.title}
                  </h3>
                </Link>
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
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: siteConfig.name,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${siteConfig.url}/blog/${slug}`,
            },
          }),
        }}
      />
    </>
  );
}
