export function AboutSection() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-handwritten text-4xl md:text-5xl text-rustic-brown mb-8">Our Story</h2>

          <p className="text-xl text-rustic-brown/80 leading-relaxed mb-8">
            A quaint homemade café serving Goan and Italian comfort food with heart. Loved by groups, solo diners, and
            foodies alike.
          </p>

          {/* Mood Words */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-gradient-to-r from-sunset-orange/20 to-mustard-yellow/20 text-rustic-brown px-6 py-3 rounded-full font-medium text-lg">
              🏠 Cozy
            </span>
            <span className="bg-gradient-to-r from-sky-blue/20 to-mustard-yellow/20 text-rustic-brown px-6 py-3 rounded-full font-medium text-lg">
              😊 Casual
            </span>
            <span className="bg-gradient-to-r from-mustard-yellow/20 to-sunset-orange/20 text-rustic-brown px-6 py-3 rounded-full font-medium text-lg">
              🤝 Friendly
            </span>
            <span className="bg-gradient-to-r from-sunset-orange/20 to-sky-blue/20 text-rustic-brown px-6 py-3 rounded-full font-medium text-lg">
              💭 Memory-Filled
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
