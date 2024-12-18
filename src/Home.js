import React from 'react'
import Header from './components/Header'
import { sectionsData } from './components/Sections/SectionData'
import SectionRTL from './components/Sections/SectionRTL'
import SectionLTR from './components/Sections/SectionLTR'
import InfoDiv from './components/MiniSection'
// import Contact from './components/Contact'
import ServiceSection from './components/services/ServiceSection'
import WorkSection from './components/ourProcess/WorkSection'
import ContactDiv from './components/ContactDiv'
import ChooseUsSection from './components/whyChooseUs/ChooseUsSection'

export default function Home() {
  return (
    <React.StrictMode>
        <Header />
        <SectionLTR 
        title={sectionsData[0].title}
        description={sectionsData[0].desc}
        button={sectionsData[0].button}
        image={sectionsData[0].image}
        type="coloured"
        />
        <SectionRTL 
        title={sectionsData[1].title}
        description={sectionsData[1].desc}
        button={sectionsData[1].button}
        image={sectionsData[1].image}
        />
        <InfoDiv />
        <ServiceSection />
        <SectionLTR 
        title={sectionsData[2].title}
        description={sectionsData[2].desc}
        button={sectionsData[2].button}
        image={sectionsData[2].image}
        />
        <WorkSection />
        <SectionLTR
        title={sectionsData[4].title}
        description={sectionsData[4].desc}
        button={sectionsData[4].button}
        image={sectionsData[4].image}
        />
        <ChooseUsSection />
        <SectionRTL
        title={sectionsData[3].title}
        description={sectionsData[3].desc}
        button={sectionsData[3].button}
        image={sectionsData[3].image}
        type="coloured"
        />
        {/* <TheTeam /> */}
        <ContactDiv />
    </React.StrictMode>
  )
}
