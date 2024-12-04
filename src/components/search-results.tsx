import { SearchResult } from "@/types/perplexity";

interface SearchResultsProps {
  result: SearchResult | null;
  isLoading: boolean;
}

export function SearchResults({ result, isLoading }: SearchResultsProps) {
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
    <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-200">{result.content}</p>
        {result.citations.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Sources:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {result.citations.map((citation, index) => (
                <li key={index} className="text-sm">
                  <a
                    href={citation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {citation}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 