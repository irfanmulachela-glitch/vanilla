"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag, BookOpen, TrendingUp, Package, FileCheck, Leaf, Search } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Sourcing Guide": Search,
  "Quality": Leaf,
  "Export Guide": FileCheck,
  "Product Guide": Package,
  "Market Analysis": TrendingUp,
  "Industry": BookOpen,
};

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

export default function BlogGrid({ posts }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  const filteredPosts =
    selectedCategory === "All"
      ? posts.filter((post) => !post.featured)
      : posts.filter(
          (post) => post.category === selectedCategory && !post.featured
        );

  return (
    <>
      {/* Category Filter */}
      <section className="bg-white border-b border-[#E5E0D8] py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                  selectedCategory === category
                    ? "bg-[#2C2518] text-white border-[#2C2518]"
                    : "text-[#6B6358] bg-[#F8F6F2] border-[#E5E0D8] hover:bg-[#2C2518] hover:text-white hover:border-[#2C2518]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#6B6358] text-lg">
                No articles found in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const Icon = categoryIcons[post.category] || Tag;
                return (
                  <article
                    key={post.id}
                    className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#E5E0D8] hover:border-[#B5A37A]/50"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-[#F8F6F2] text-[#B5A37A] text-xs font-medium rounded-full border border-[#E5E0D8] flex items-center gap-1.5">
                          <Icon className="w-3 h-3" />
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#6B6358]">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-[#2C2518] mb-3 group-hover:text-[#B5A37A] transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-[#6B6358] text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#E5E0D8]">
                        <div className="flex items-center gap-2 text-xs text-[#6B6358]">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-[#B5A37A] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
