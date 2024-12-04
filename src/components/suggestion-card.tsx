interface SuggestionCardProps {
  icon: React.ReactNode
  title: string
}

export function SuggestionCard({ icon, title }: SuggestionCardProps) {
  return (
    <button className="flex items-center gap-3 p-4 text-sm text-gray-300 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors">
      {icon}
      <span>{title}</span>
    </button>
  )
}

