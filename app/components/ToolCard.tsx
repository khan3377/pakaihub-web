type ToolCardProps = {
  logo: string;
  title: string;
  description: string;
  rating: string;
  color: string;
  link: string;
  category: string;
};

export default function ToolCard({
  logo,
  title,
  description,
  rating,
  color,
  link,
  category,
}: ToolCardProps) {
  return (
    <div className="group w-full rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/10">

      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="text-5xl">
          {logo}
        </div>

        <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-400">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className={`mt-6 text-2xl font-bold ${color}`}>
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 min-h-[60px] text-gray-400">
        {description}
      </p>

      {/* Bottom */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-yellow-400">
          {rating}
        </span>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold transition hover:bg-blue-700"
        >
          Visit →
        </a>
      </div>

    </div>
  );
}