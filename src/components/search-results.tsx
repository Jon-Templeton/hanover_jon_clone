import { SearchResult } from "@/types/perplexity";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface SearchResultsProps {
  result: SearchResult | null;
  isLoading: boolean;
  searchQuery: string;
}

export function SearchResults({ result, isLoading, searchQuery }: SearchResultsProps) {
  const [followUpQuery, setFollowUpQuery] = useState('');
  const [allResults, setAllResults] = useState<Array<{ query: string; result: SearchResult }>>([]);
  const [isFollowUpLoading, setIsFollowUpLoading] = useState(false);

  // Initialize allResults with the first result when it changes
  useEffect(() => {
    if (result && !allResults.some(r => r.query === searchQuery)) {
      setAllResults([{ query: searchQuery, result }]);
    }
  }, [result, searchQuery]);

  const handleFollowUpSearch = async () => {
    if (!followUpQuery.trim()) return;

    setIsFollowUpLoading(true);
    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PERPLEXITY_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "llama-3.1-sonar-small-128k-online",
          messages: [
            {
              role: "system",
              content: "Be precise and concise."
            },
            {
              role: "user",
              content: followUpQuery
            }
          ],
          temperature: 0.2,
          top_p: 0.9,
          return_images: false,
          return_related_questions: false,
          search_recency_filter: "month",
          stream: false
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await response.json();
      const newResult = {
        query: followUpQuery,
        result: {
          content: data.choices[0].message.content,
          citations: data.citations || []
        }
      };

      setAllResults(prev => [...prev, newResult]);
      setFollowUpQuery('');
    } catch (error) {
      console.error('Error fetching response:', error);
    } finally {
      setIsFollowUpLoading(false);
    }
  };

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
    <div className="max-w-[1200px] mx-auto p-4 overflow-y-auto">
      <div className="space-y-8">
        {allResults.map((item, index) => (
          <div key={index} className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl text-white">{item.query}</h1>
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
                {item.result.citations.length > 0 && (
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
                      {item.result.citations.map((citation, citationIndex) => (
                        <a
                          key={citationIndex}
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
                    <p>{item.result.content}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        ))}

        <div className="relative">
          <input
            type="text"
            placeholder="Ask follow-up"
            value={followUpQuery}
            onChange={(e) => setFollowUpQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleFollowUpSearch();
              }
            }}
            className="w-full bg-gray-800/50 text-gray-300 rounded-lg px-4 py-3 pr-20 focus:outline-none focus:ring-2 focus:ring-[#5ED5A8]"
          />
          <Button 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600"
            onClick={handleFollowUpSearch}
            disabled={isFollowUpLoading}
          >
            {isFollowUpLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
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
            )}
          </Button>
        </div>
      </div>
    </div>
  );
} 