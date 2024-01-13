import Hero from "@/components/widgets/Hero"
import CoreTrack from "@/components/widgets/CoreTrack"
import SpecializedTracks from "@/components/widgets/SpecializedTracks"
import Outcome from "@/components/widgets/Outcome"
export default function Home() {
  return (
    <>
    <main>
    {/*hero section */}
    <Hero/>
    {/* Core Track section */}
    <CoreTrack/>
    {/* Specialized tracks */}
    <SpecializedTracks/>
    {/* out-come */}
    <Outcome/>
    </main></>
  )
}
