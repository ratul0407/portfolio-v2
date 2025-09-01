import { Link } from "react-router";

interface BlogPreviewProps {
  id: number;
  title: string;
  summary: string;
  readTime: string;
  slug: string;
}

export default function BlogPreview({
  title,
  summary,
  readTime,
  slug,
}: BlogPreviewProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{summary}</p>
      <p className="text-gray-500 text-sm mb-4">⏱ {readTime}</p>
      <Link
        to={`/blogs/${slug}`}
        className="text-teal-400 hover:text-teal-600 font-semibold"
      >
        Read More →
      </Link>
    </div>
  );
}
