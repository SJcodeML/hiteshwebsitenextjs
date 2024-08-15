import Cards from "@/components/RollingCards";
import Featurecourses from "@/components/Featurecourses";
import Herosection from "@/components/herosection";
import Whychooseus from "@/components/whychooseus";
import UpComingWebinars from "@/components/UpComingWebinars";
import ALLInstructors from "@/components/Instructors";


export default function mainpage (){
  return (
  
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  
  <Herosection/>
  <Featurecourses />
  <Whychooseus />
  <Cards/>
  <UpComingWebinars/>
  <ALLInstructors/>
  
  </main>
  )
}