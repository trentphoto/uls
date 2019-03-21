// defaults
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  Home,
  NotFound,
  AboutRoutes,
  MediaRoutes,
  AdmissionsRoutes,
  AcademicsRoutes,
  Lvl2Routes
} from './views'
import { Navbar } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'

import './theme/block-theme.css'
import './theme/blocks.css'
import { withPages } from './utils/hocs'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faUser,
  faCheckCircle,
  faBookOpen,
  faImage,
  faInfoCircle,
  faGlobeAmericas,
  faPaperPlane,
  faSeedling,
  faDollarSign,
  faMap,
  faLandmark,
  faFolderOpen,
  faSchool,
  faGraduationCap,
  faCertificate,
  faVideo,
  faUsers,
  faCalendarDay,
  faHandHoldingHeart,
  faChalkboardTeacher,
  faBuilding
} from '@fortawesome/free-solid-svg-icons'
import Cal from './views/Cal'
library.add(
  faHome,
  faUser,
  faCheckCircle,
  faBookOpen,
  faImage,
  faInfoCircle,
  faGlobeAmericas,
  faPaperPlane,
  faSeedling,
  faDollarSign,
  faMap,
  faLandmark,
  faFolderOpen,
  faSchool,
  faGraduationCap,
  faCertificate,
  faVideo,
  faUsers,
  faCalendarDay,
  faHandHoldingHeart,
  faChalkboardTeacher,
  faBuilding
)

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={AboutRoutes} />
      <Route path="/admissions" component={AdmissionsRoutes} />
      <Route path="/academics" component={AcademicsRoutes} />
      <Route path="/united-media" component={MediaRoutes} />
      <Route path="/cal" component={Cal} />

      {/* persona pages - top right */}
      <Route path="/students" component={Lvl2Routes} />
      <Route path="/alumni" component={Lvl2Routes} />
      <Route path="/faculty-staff" component={Lvl2Routes} />
      <Route path="/giving" component={Lvl2Routes} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default withPages(App)
