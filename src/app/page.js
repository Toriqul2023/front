import Image from 'next/image'
import Navbar from './Components/Navbar/Navbar'
import Homes from './Components/Home/Home'
import Download from './Components/Download/Download'
import Portfolio from './Components/Portfolio/Portfolio'
import Progress from './Components/Progress/Progress'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'

export default function Home() {
  return (
   <>
  
   
   <Navbar></Navbar>
   <Homes/>
   <Download/>
   <Portfolio/>
   <Progress/>
   <Services/>
   <Contact/>
   </>
  )
}
