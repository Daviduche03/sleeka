import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyDetailProps {
  title: string;
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  image: string;
  tags: string;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  title,
  overview,
  problem,
  solution,
  results,
  image,
  tags,
}) => {
  return (
    <div className="min-h-screen bg-[#5c0386] text-white">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Case Study: {title}
        </h1>
        <p className="text-white/80 text-lg">{tags}</p>
      </div>

      {/* Content Section - Centered on Desktop */}
      <div className="container mx-auto px-6 md:px-12 pb-24 max-w-4xl">
        <div className="space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Overview
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {overview}
            </p>
          </div>

          {/* Problem */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Problem
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Solution
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {solution}
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Result (Matrix)
            </h2>
            <ul className="space-y-4 mb-12">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white/90 text-lg"
                >
                  <span className="text-white font-bold text-xl flex-shrink-0">
                    {index + 1}.
                  </span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image at the bottom */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
