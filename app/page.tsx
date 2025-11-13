import Hero from '@/components/Hero'
import PricingSection from '@/components/PricingSection'
import SpeakerShowcase from '@/components/SpeakerShowcase'
import AgendaSection from '@/components/AgendaSection'
import SocialProof from '@/components/SocialProof'
import FAQSection from '@/components/FAQSection'
import PartnerShowcase from '@/components/PartnerShowcase'
import ROICalculator from '@/components/ROICalculator'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <SocialProof />
      <PricingSection />
      <SpeakerShowcase />
      <AgendaSection />
      <ROICalculator />
      <FAQSection />
      <PartnerShowcase />
    </main>
  )
}
