import React from "react";
import { blogPosts, recentPosts, blogCategories, blogTags } from "../constant";

const Blog = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 lg:px-16 py-12">

      {/* PAGE TITLE */}
      <h1 className="text-center text-3xl font-bold mb-12 tracking-wider">
        ✦ BLOG WITH RIGHTSIDEBAR ✦
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10 w-full max-w-7xl mx-auto">

{/* LEFT BLOG POSTS */}
<div className="space-y-16">
  {blogPosts.map((post) => (
    <div key={post.id} className="space-y-4">

      {/* Image */}
      <img
        src={post.image}
        className="w-full h-72 object-cover rounded-xl"
        alt={post.title}
      />

      {/* Title */}
      <h2 className="text-xl font-bold">{post.title}</h2>

      {/* FULL CONTENT — EXACTLY LIKE SCREENSHOT */}
      <div className="text-gray-400 leading-7 space-y-3 max-w-2xl">
       {post.sections.map((section, index) => (
  <div key={index} className="space-y-3">

    {section.heading && (
      <h2 className="text-2xl font-semibold mt-6 mb-2">
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


      </div>

    </div>
  ))}
</div>




        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">

          {/* SEARCH */}
          <div className="bg-[#111] p-6 rounded-2xl space-y-4">
            <input
              placeholder="Search here..."
              className="w-full bg-black px-4 py-2 rounded"
            />
            <button className="w-full px-4 py-2 bg-white text-black rounded-xl font-semibold">
              Search
            </button>
          </div>

          {/* RECENT POSTS */}
          <div className="bg-[#111] p-6 rounded-2xl space-y-4">
            <h3 className="font-semibold text-lg">RECENT POSTS</h3>
            <ul className="space-y-3 text-sm text-gray-300">
            {recentPosts.map((item, index) => (
  <li key={index}>{item}</li>
))}

            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="bg-[#111] p-6 rounded-2xl space-y-4">
            <h3 className="font-semibold text-lg">CATEGORIES</h3>
            <ul className="space-y-3 text-sm text-gray-300">
  {blogCategories.map((cat, index) => (
    <li key={index}>- {cat}</li>
  ))}
</ul>
          </div>

          {/* TAGS */}
          <div className="bg-[#111] p-6 rounded-2xl space-y-4">
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
