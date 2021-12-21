import './App.css';
import {
  BrowserRouter as 
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ascAboutPage, ascAppointmentPage, ascContactPage, ascCovidCarePage, ascHomePage, ascLabTestPage, ascLoginPage, ascMedicinePage, ascVideoConsultPage } from './components/App/ayncComponent';
import { Suspense } from 'react';
import PageNotFound from './components/PageNotFound'

function App() {
  
  return (
    <Suspense 
      fallback={
        <div className='fallback-container'>
        <img src="./images/logo1.png" alt="" />
        </div>
      }
    >
      <div className="App">
        <Switch>
        {/* <Route exact path="/">
          <Redirect to="/" />
        </Route> */}
          <Route path='/' exact component={ascHomePage}>
            {/* <HomePageContainer/> */}
         
          </Route>
          <Route path='/about' exact component={ascAboutPage}>
          </Route>
          <Route path='/contactus' exact component={ascContactPage}>
          </Route>
          <Route path='/covidcare' exact component={ascCovidCarePage}>
          </Route>
          <Route path='/videoconsult' exact component={ascVideoConsultPage}>
          </Route>
          <Route path='/labtest' exact component={ascLabTestPage}>
          </Route>
          <Route path='/medicine' exact component={ascMedicinePage}>
          </Route>
          <Route path='/appointment' exact component={ascAppointmentPage}>
          </Route>
          <Route path='/login' exact component={ascLoginPage}>
          </Route>
          
          {/* <Route path='*' render={()=> 'page not found'}>
          </Route> */}
        </Switch>
        
      </div>
      </Suspense>
  );
}

export default App;
