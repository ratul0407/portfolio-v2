import blogsData from "../data/blogs.json";
import BlogPreview from "./BlogsPreview";

export default function BlogsComponent() {
  return (
    <section className="py-16 px-6 md:px-20 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogsData.map((blog) => (
          <BlogPreview key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}
