import { Link, useParams } from "react-router";
import blogsData from "../data/blogs.json";
import { BsArrowLeft } from "react-icons/bs";
import Markdown from "react-markdown";
export default function BlogsPage() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) return <p className="text-white p-6">Blog not found!</p>;

  return (
    <section className="py-16 px-6 md:px-20 bg-black min-h-screen text-white">
      <button className="px-2 py-1 rounded-sm bg-white text-black hover:bg-white/50 cursor-pointer mb-4">
        <Link className="flex items-center flex-row-reverse gap-3" to="/">
          Go back <BsArrowLeft />
        </Link>
      </button>
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 mb-6">
        ⏱ {blog.readTime} | {blog.date}
      </p>
      {blog.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{section.subtitle}</h2>
          <div className="prose prose-invert text-gray-300 ">
            <Markdown>{section.content}</Markdown>
          </div>
        </div>
      ))}
    </section>
  );
}
