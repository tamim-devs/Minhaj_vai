import React from "react";

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
          {/* BLOG CARD */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721"
                className="w-full h-72 object-cover rounded-xl" />

              <div>
                <p className="text-sm text-gray-400 mb-2">
                  25 March 2022 — Comments (4) — Share (7)
                </p>

                <h2 className="text-xl font-bold">
                  CONSULTED ADMITTING IS POWER ACUTENESS.
                </h2>

                <p className="text-gray-400 max-w-2xl leading-7 mt-3">
                  Sit amet faucibus tor venenatis, lectus magna fringilla risus urna...
                </p>

                <button className="mt-4 px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition">
                  Read More
                </button>
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
              className="w-full bg-black px-4 py-2 rounded" />
            <button className="w-full px-4 py-2 bg-white text-black rounded-xl font-semibold">
              Search
            </button>
          </div>

          {/* RECENT POSTS */}
          <div className="bg-[#111] p-6 rounded-2xl space-y-4">
            <h3 className="font-semibold text-lg">RECENT POSTS</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Consulted admitting is power acuteness.</li>
              <li>Unsatiable entreaties may collecting power.</li>
              <li>Discovery incomode earnestly he commanded</li>
              <li>Unsatiable entreaties may collecting power</li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="bg-[#111] p-6 rounded-2xl space-y-4">
            <h3 className="font-semibold text-lg">CATEGORIES</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>- Analysis</li>
              <li>- Firewall</li>
              <li>- IT Solutions</li>
              <li>- Security</li>
              <li>- Technology</li>
            </ul>
          </div>

          {/* TAGS */}
          <div className="bg-[#111] p-6 rounded-2xl space-y-4">
            <h3 className="font-semibold text-lg">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {["SaaS", "UI/UX", "Web", "Java", "Figma", "Development"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;