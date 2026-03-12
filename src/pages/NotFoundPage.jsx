import { Link } from "react-router-dom";
import SEO from "../Components/Seo";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center px-4">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to Nasri Noufel's portfolio homepage."
        url="/404"
        noindex={true}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=DM+Mono:wght@400&display=swap');
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.35;transform:scale(.65)} }
        body { font-family: 'Bricolage Grotesque', sans-serif; }
      `}</style>

      <div className="text-center max-w-md">
        <p className="font-mono text-[11px] tracking-[.2em] uppercase text-neutral-700 mb-6">
          Error 404
        </p>

        <h1
          className="font-extrabold text-white leading-none mb-4"
          style={{ fontSize: "clamp(5rem,20vw,9rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
        >
          4<span className="text-[#7A93A8]">0</span>4
        </h1>

        <p className="text-neutral-600 text-sm leading-relaxed mb-8">
          Looks like this page got lost in the void.
          <br />
          Let's get you back on track.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#7A93A8] hover:bg-[#5a7b8f] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200"
        >
          ← Back Home
        </Link>
      </div>

      <div className="absolute bottom-6 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#7A93A8] pulse" style={{animation:"pulse 2s ease-in-out infinite"}} />
        <p className="font-mono text-[11px] text-neutral-800">Nasri noufel seif el islam</p>
      </div>
    </div>
  );
}