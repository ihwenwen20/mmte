import HomePage from './home/page'
import AboutPage from './about/page'
import VisionMisionMottoPage from './vision-mission-motto/page'
import CompanyValuesPage from './company-values/page'
import FieldOfBusinessPage from './field-of-business/page'
import FieldOfBusinessPage2 from './field-of-business2/page'
import DocumentationsPage from './documentations/page'
import OurContactPage from './our-contact/page'
import CustomersPage from './customers/page'
import ProjectsPage from './projects/page'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <HomePage />
      <CustomersPage />
      <AboutPage />
      <VisionMisionMottoPage />
      <CompanyValuesPage />
      <FieldOfBusinessPage />
      <FieldOfBusinessPage2 />
      <ProjectsPage />

      <DocumentationsPage />
      <OurContactPage />
    </div>
  )
}
