import React from 'react'
import DocumentationsPage from '../documentations/page'
import AboutPage from '../about/page'
import VisionMisionMottoPage from '../vision-mission-motto/page'
import CompanyValuesPage from '../company-values/page'
import FieldOfBusinessPage from '../field-of-business/page'
import FieldOfBusinessPage2 from '../field-of-business2/page'
import HomePage from '../home/page'
import OurContactPage from '../our-contact/page'

const TesPage = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <HomePage />
        <AboutPage />
        <VisionMisionMottoPage />
        <CompanyValuesPage />
        <FieldOfBusinessPage />
        <FieldOfBusinessPage2 />

        <DocumentationsPage />
        <OurContactPage />
      </div>
    </>
  )
}

export default TesPage
