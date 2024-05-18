import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginComponent from './assets/components/LoginComponent/LoginComponent';
import SignupComponent from './assets/components/SignupComponent/SignupComponent';
import UserDataComponent from './assets/components/UserDataComponent/UserDataComponent';
import LogoutComponent from './assets/components/LogoutComponent/LogoutComponent';
import MyComponent from './assets/components/MyComponent';
const App = () => {
    return (
        <Router>
            <div className="App">
                <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
                    <div className='container'> 
                        <Link className='navbar-brand' to={'/login'}>
                            FLIGHT TICKET BOOKING
                        </Link>
                        <div className='collapse navbar-collapse' id='navbarTogglerDemo2'>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/login'}>Login</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/signup'}>Sign Up</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/logout'}>Logout</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/MyComponent'}>Search</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/Booking'}>Booking</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to={'/MyBooking'}>MyBooking</Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>

                    <div className='auth-wrapper'>
                        <div className='auth-inner'>
                            <Routes>
                                <Route exact path='/' element={<LoginComponent/>}/>
                                <Route path='/login' element={<LoginComponent/>}/>
                                <Route path='/signup' element={<SignupComponent/>}/>
                                <Route path='/userdata' element={<UserDataComponent/>}/>
                                <Route path='/logout' element={<LogoutComponent/>}/>
                                <Route path='/MyComponent' element={<MyComponent/>}/>
                                </Routes>
                        </div>
                      

                    </div>
                
            </div>
        </Router>
    )
}


export default App; 