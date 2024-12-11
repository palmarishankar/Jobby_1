import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'
import JobItem from './components/JobItemDetails'
import JobSalary from './components/JobsFilterGroup'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

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
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute
        exact
        path="/jobs"
        component={Jobs}
        employmentDetails={employmentTypesList}
      />
      <ProtectedRoute
        employmentDetails={employmentTypesList}
        component={JobItem}
      />
      <div>
        {salaryRangesList.map(eachSalary => (
          <ProtectedRoute
            eachSalary={eachSalary}
            key={eachSalary.salaryRangeId}
            component={JobSalary}
          />
        ))}
      </div>
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
