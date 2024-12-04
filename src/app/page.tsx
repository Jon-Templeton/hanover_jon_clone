'use client'

import { Plane, Sparkles, Mountain, Cookie } from 'lucide-react'
import { Sidebar } from "@/components/sidebar"
import { SuggestionCard } from "@/components/suggestion-card"
import { SearchResults } from "@/components/search-results"
import { useState } from 'react'
import { PerplexityResponse, SearchResult } from '@/types/perplexity'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setIsLoading(true)
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
              content: searchQuery
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

      const data: PerplexityResponse = await response.json();
      setSearchResult({
        content: data.choices[0].message.content,
        citations: data.citations
      });
    } catch (error) {
      console.error('Error fetching response:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-[240px]">
        {!searchResult && !isLoading ? (
          <div className="max-w-3xl mx-auto pt-32 px-4">
            <h1 className="text-4xl font-semibold text-white text-center mb-8">
              Where knowledge begins
            </h1>
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Ask anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
                className="w-full bg-gray-800/50 text-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#5ED5A8]"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SuggestionCard
                icon={<Plane className="w-5 h-5" />}
                title="Refund on delayed flight"
              />
              <SuggestionCard
                icon={<Sparkles className="w-5 h-5" />}
                title="How is Perplexity AI different?"
              />
              <SuggestionCard
                icon={<Mountain className="w-5 h-5" />}
                title="World's greatest hikes"
              />
              <SuggestionCard
                icon={<Cookie className="w-5 h-5" />}
                title="Latest cooking trends on TikTok"
              />
            </div>
          </div>
        ) : (
          <SearchResults 
            result={searchResult} 
            isLoading={isLoading} 
            searchQuery={searchQuery}
          />
        )}
        <footer className="fixed bottom-0 left-[240px] right-0 p-4 flex items-center justify-between text-sm text-gray-400 border-t border-gray-800 bg-[#1C1F1C]">
          <div className="flex items-center gap-4">
            <button className="hover:text-gray-300">Pro</button>
            <button className="hover:text-gray-300">Enterprise</button>
            <button className="hover:text-gray-300">Store</button>
            <button className="hover:text-gray-300">Blog</button>
            <button className="hover:text-gray-300">Careers</button>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-gray-300">English (English)</button>
            <button className="p-1.5 hover:text-gray-300">
              <span className="sr-only">Help</span>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </button>
          </div>
        </footer>
      </main>
    </div>
  )
}

