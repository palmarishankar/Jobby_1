import {BrowserRouter as Router, Route, Routes} from "react-router"
import Login from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'
//shankar
import JobSalary from './components/JobsFilterGroup'
import NotFound from './components/NotFound'

import './App.css'
import JobItemDetails from "./components/JobItemDetails"

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/" element={<Home/>} /> 

      <Route
        exact
        path="/jobs"
        element={<Jobs/>}
        employmentDetails={employmentTypesList} 
      />

      <Route path="/jobs/:id"
        employmentDetails={employmentTypesList}
        element={<JobItemDetails/>}
      />
      
        {salaryRangesList.map(eachSalary => (
          <Route
            eachSalary={eachSalary}
            key={eachSalary.salaryRangeId}
            element={<JobSalary/>}
          />
        ))}
      
      <Route path="/not-found" element={<NotFound/>} />
  </Routes>
  </Router>
 
)

export default App
