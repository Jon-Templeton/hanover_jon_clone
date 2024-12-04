// Update the search page component styles
return (
  <div className="min-h-screen bg-gray-900 p-8">
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-gray-600 focus:outline-none text-white placeholder-gray-400"
            placeholder="Enter your search query..."
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {loading && <p className="text-gray-400">Searching...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {results && <SearchResults results={results} />}
    </div>
  </div>
); 