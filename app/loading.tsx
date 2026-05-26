export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="space-y-4 w-full max-w-6xl px-6">
        {/* Nav skeleton */}
        <div className="h-16 bg-sage-pale/50 animate-pulse mb-12" />
        {/* Hero skeleton */}
        <div className="h-12 bg-sage-pale/60 animate-pulse w-2/3" />
        <div className="h-8 bg-sage-pale/40 animate-pulse w-1/2 mt-4" />
        <div className="h-4 bg-sage-pale/30 animate-pulse w-3/4 mt-3" />
        <div className="h-4 bg-sage-pale/30 animate-pulse w-2/3 mt-2" />
        {/* Cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-40 bg-sage-pale/40 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
