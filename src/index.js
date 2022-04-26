import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'


// Iron Gate Cleaning Services Pages
import App from './App';
import About from './About'
import BlogDetail from "./BlogDetail";
import BlogList from "./BlogList";
import Packages from "./Packages";
import PackageDetail from "./PackageDetail";
import BookPackage from "./BookPackage";
import Contact from "./Contact";
import Profile  from "./Profile";
import Login from "./Login";
import SignUser from "./SignUser";
import FAQ from "./FAQ";
import ResetPassword from "./ResetPassword";
import ChangePassword from "./ChangePassword";
import Privacy from "./Privacy";
import Terms from "./Terms";
import PreviousBooking from "./PreviousBooking";
import TotalPayment from "./TotalPayment";
import YourReviews from "./YourReviews";
import UpdateProfile from "./UpdateProfile";

// package-detail


const Routing = () => {
  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={App} />
        <Route exact path="/about" component={About} />
        

        <Route exact path="/blog-list" component={BlogList} />
        <Route exact path="/blog-detail" component={BlogDetail} />
       
        <Route exact path="/packages" component={Packages} />
        <Route exact path="/Package-detail" component={PackageDetail} />
        <Route exact path="/boook-package" component={BookPackage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUser} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/forgotpassword" component={ResetPassword} />
        <Route exact path="/changepassword" component={ChangePassword} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/previous-booking" component={PreviousBooking} />
        <Route exact path="/total-payment" component={TotalPayment} />
        <Route exact path="/your-reviews" component={YourReviews} />
        <Route exact path="/update-profile" component={UpdateProfile} />
      

      </Switch>
      <Footer />
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);