import Image from "next/image"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function SearchResults() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-[240px]">
        <div className="max-w-[1200px] mx-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl text-white">who is elon musk</h1>
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
                  <a
                    href="#"
                    className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70"
                  >
                    <div className="text-sm text-white font-medium mb-1">
                      Elon Musk | Biography, SpaceX, Tesla, Twitter, X, Trump, & Facts
                    </div>
                    <div className="text-xs text-gray-400">britannica.com</div>
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70"
                  >
                    <div className="text-sm text-white font-medium mb-1">
                      Elon Musk | Tesla
                    </div>
                    <div className="text-xs text-gray-400">tesla.com</div>
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70"
                  >
                    <div className="text-sm text-white font-medium mb-1">
                      Elon Musk
                    </div>
                    <div className="text-xs text-gray-400">en.wikipedia.org</div>
                  </a>
                </div>
              </section>

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
                  <p>
                    Elon Musk is a prominent entrepreneur and business magnate, best known for his
                    influential roles in several groundbreaking companies. Born on June 28, 1971, in Pretoria,
                    South Africa, Musk has made significant contributions to technology and space
                    exploration.
                  </p>
                  
                  <h3>Early Life and Education</h3>
                  <p>
                    Musk attended Queen's University in Canada before transferring to the University of
                    Pennsylvania, where he earned degrees in physics and economics in 1997. He briefly
                    enrolled in a PhD program at Stanford University but left after two days to pursue
                    entrepreneurial ventures during the dot-com boom of the late 1990s.
                  </p>

                  <h3>Major Ventures</h3>
                  <ul>
                    <li>
                      <strong>PayPal:</strong> Musk co-founded X.com in 1999, which later became PayPal after merging
                      with Confinity. PayPal was sold to eBay for $1.5 billion in 2002
                    </li>
                    <li>
                      <strong>SpaceX:</strong> Founded by Musk in 2002, SpaceX aims to reduce space transportation
                      costs and enable the colonization of Mars. It achieved milestones such as launching
                      the first privately developed liquid-fueled rocket to reach orbit
                    </li>
                    <li>
                      <strong>Tesla, Inc.:</strong> Musk joined Tesla Motors as an early investor and became CEO in 2008.
                      Under his leadership, Tesla has revolutionized the electric vehicle market with models
                      like the Model S, Model 3, and Cybertruck, along with energy products like solar
                      panels and battery storage systems
                    </li>
                  </ul>
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
              <Card className="bg-gray-800/30 border-gray-700">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Video thumbnail"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <Button
                    className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70"
                    size="sm"
                  >
                    Watch
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">
                    Elon Musk's Money: How He Made It
                  </h3>
                  <p className="text-sm text-gray-400">Forbes Daily Briefing</p>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt={`Related image ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full border-gray-700 text-gray-300">
                View More
              </Button>

              <div className="space-y-2">
                <Button variant="outline" className="w-full border-gray-700 text-gray-300">
                  Search Videos
                </Button>
                <Button variant="outline" className="w-full border-gray-700 text-gray-300">
                  Generate Image
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

