import { SearchResult } from "@/types/perplexity";
import { Button } from "@/components/ui/button";

interface SearchResultsProps {
  result: SearchResult | null;
  isLoading: boolean;
  searchQuery: string;
}

export function SearchResults({ result, isLoading, searchQuery }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl text-white">{searchQuery}</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            <span className="sr-only">Copy</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </Button>
          <Button className="bg-[#5ED5A8] hover:bg-[#5ED5A8]/90 text-black">Share</Button>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_300px] gap-6">
        <div className="space-y-6">
          {result.citations.length > 0 && (
            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Sources
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {result.citations.map((citation, index) => (
                  <a
                    key={index}
                    href={citation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70"
                  >
                    <div className="text-sm text-white font-medium mb-1">
                      {new URL(citation).pathname.split('/').pop() || 'Source'}
                    </div>
                    <div className="text-xs text-gray-400">{new URL(citation).hostname}</div>
                  </a>
                ))}
              </div>
            </section>
          )}

          <section className="bg-gray-800/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-6 h-6 text-[#5ED5A8]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-[#5ED5A8] font-medium">Perplexity</span>
            </div>
            <div className="prose prose-invert max-w-none">
              <p>{result.content}</p>
            </div>
          </section>

          <div className="relative">
            <input
              type="text"
              placeholder="Ask follow-up"
              className="w-full bg-gray-800/50 text-gray-300 rounded-lg px-4 py-3 pr-20 focus:outline-none focus:ring-2 focus:ring-[#5ED5A8]"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <Button variant="outline" className="w-full border-gray-700 text-gray-300">
            Search Videos
          </Button>
          <Button variant="outline" className="w-full border-gray-700 text-gray-300">
            Generate Image
          </Button>
        </div>
      </div>
    </div>
  );
} 