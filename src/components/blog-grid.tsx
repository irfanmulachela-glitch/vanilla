"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

interface BlogGridProps {
  posts: BlogPost[];
}

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

export default function BlogGrid({ posts }: BlogGridProps) {
  const [selected, setSelected] = useState("All");

  // newest first, featured post is shown above the grid
  const listed = useMemo(
    () => posts.filter((p) => !p.featured).sort((a, b) => b.date.localeCompare(a.date)),
    [posts]
  );

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    listed.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
    return [["All", listed.length] as const, ...[...counts.entries()].sort((a, b) => b[1] - a[1])];
  }, [listed]);

  const shown = selected === "All" ? listed : listed.filter((p) => p.category === selected);

  return (
    <section className="pb-20 lg:pb-24 bg-white" aria-labelledby="all-articles">
      {/* Topic filter: underline tabs, sticks under the main menu */}
      <div className="sticky top-16 z-20 bg-white/[0.97] backdrop-blur-md border-y border-[#EEE9E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 lg:gap-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <h2 id="all-articles" className="sr-only">All articles</h2>
            {categories.map(([name, count]) => {
              const active = selected === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelected(name)}
                  aria-pressed={active}
                  className={`relative shrink-0 py-4 text-sm font-medium transition-colors ${
                    active ? "text-[#2C2518]" : "text-[#9A9187] hover:text-[#2C2518]"
                  }`}
                >
                  {name}
                  <span className={`ms-1.5 text-xs tabular-nums ${active ? "text-[#B5A37A]" : "text-[#C9C1B4]"}`}>
                    {count}
                  </span>
                  <span
                    className={`absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-[#B5A37A] transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-14">
        {shown.length === 0 ? (
          <p className="text-center text-[#6B6358] py-12">No articles in this topic yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {shown.map((post) => (
              <article key={post.id} className="group relative flex flex-col pt-6 border-t border-[#E5E0D8]">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5A37A] mb-3">
                  {post.category}
                  <span className="w-1 h-1 rounded-full bg-[#D8D3C9]" aria-hidden="true" />
                  <span className="text-[#9A9187] tracking-[0.12em]">{post.readTime}</span>
                </p>
                <h3 className="text-xl font-semibold leading-snug text-[#2C2518] mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="bg-[linear-gradient(#B5A37A,#B5A37A)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px] after:absolute after:inset-0"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-[#6B6358] leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between text-sm">
                  <time dateTime={post.date} className="text-[#9A9187]">
                    {formatDate(post.date)}
                  </time>
                  <span className="inline-flex items-center font-semibold text-[#2C2518]">
                    Read
                    <ArrowRight className="ms-1.5 w-4 h-4 text-[#B5A37A] group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
