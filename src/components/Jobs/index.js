import Header from '../Header'
import JobProfileSection from '../JobProfileSection'
import SimilarJobItem  from '../SimilarJobItem'
import './index.css'

const Jobs = () => (
  <>
    <Header />
    <div className="job-profile-container">
      <JobProfileSection /> 
    </div>
  </>
)
export default Jobs
