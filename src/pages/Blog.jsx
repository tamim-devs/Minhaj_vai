import React, { useState } from "react";
import { blogPosts, recentPosts, blogCategories, blogTags } from "../constant";

const Blog = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white px-4 sm:px-6 lg:px-16 py-10 sm:py-12">

      {/* PAGE TITLE */}
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 tracking-wider">
        ✦ BLOG WITH RIGHTSIDEBAR ✦
      </h1>

      {/* GRID RESPONSIVE */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10 max-w-7xl mx-auto w-full">

        {/* LEFT BLOG POSTS */}
        <div className="space-y-14 sm:space-y-16">
          {blogPosts.map((post) => {
            const [expanded, setExpanded] = useState(false);

            return (
              <div key={post.id} className="space-y-4">

                {/* Image */}
                <img
                  src={post.image}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl"
                  alt={post.title}
                />

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold">{post.title}</h2>

                {/* CONTENT */}
                <div className="text-gray-400 leading-7 space-y-3 max-w-2xl">
                  {post.sections
                    .slice(0, expanded ? post.sections.length : 1)
                    .map((section, index) => (
                      <div key={index} className="space-y-3">

                        {section.heading && (
                          <h2 className="text-xl sm:text-2xl font-semibold mt-4 mb-2">
                            {section.heading}
                          </h2>
                        )}

                        <div className="text-gray-400 leading-7 max-w-3xl flex flex-wrap">
                          {section.content.map((item, i) => {
                            if (item.type === "bold") return <b key={i}>{item.value}</b>;
                            if (item.type === "br") return <br key={i} />;
                            return <span key={i}>{item.value}</span>;
                          })}
                        </div>

                      </div>
                    ))}

                  {/* SHOW MORE / LESS BUTTON */}
                  {post.sections.length > 1 && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="
                      transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-105 hover:border-white
                      text-black font-semibold text-sm sm:text-base bg-white border-2 border-white rounded-full py-2 px-4 mt-3 cursor-pointer"
                    >
                      {expanded ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">

          {/* SEARCH */}
          <div className="bg-[#111] p-5 sm:p-6 rounded-2xl space-y-4">
            <input
              placeholder="Search here..."
              className="w-full bg-black px-4 py-2 rounded text-sm sm:text-base"
            />
            <button className="w-full px-4 py-2 bg-white text-black rounded-xl font-semibold text-sm sm:text-base">
              Search
            </button>
          </div>

          {/* RECENT POSTS */}
          <div className="bg-[#111] p-5 sm:p-6 rounded-2xl space-y-4">
            <h3 className="font-semibold text-lg">RECENT POSTS</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {recentPosts.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="bg-[#111] p-5 sm:p-6 rounded-2xl space-y-4">
            <h3 className="font-semibold text-lg">CATEGORIES</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {blogCategories.map((cat, index) => (
                <li key={index}>- {cat}</li>
              ))}
            </ul>
          </div>

          {/* TAGS */}
          <div className="bg-[#111] p-5 sm:p-6 rounded-2xl space-y-4">
            <h3 className="font-semibold text-lg">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {blogTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border rounded-full text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
