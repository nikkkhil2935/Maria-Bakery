import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { MenuPreviewSection } from "@/components/home/menu-preview-section"
import { GallerySection } from "@/components/home/gallery-section"
import { LocationSection } from "@/components/home/location-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MenuPreviewSection />
      <GallerySection />
      <LocationSection />
    </div>
  )
}
