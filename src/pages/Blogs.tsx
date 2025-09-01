import { useParams } from "react-router";
import blogsData from "../data/blogs.json";

export default function BlogsPage() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) return <p className="text-white p-6">Blog not found!</p>;

  return (
    <section className="py-16 px-6 md:px-20 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 mb-6">
        ⏱ {blog.readTime} | {blog.date}
      </p>
      {blog.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{section.subtitle}</h2>
          <p className="text-gray-300">{section.content}</p>
        </div>
      ))}
    </section>
  );
}
