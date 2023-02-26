// import '../src/Pages/Style/MinifyStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Program from './Pages/Program/Program';
import Collaborative from './Pages/Collaborative/Collaborative';
import Events from './Pages/Event/Events';
import Contacts from './Pages/Contacts/Contacts';
// import Donation from './Pages/Donation/Donation';
import Schools from './Pages/Collaborative/Partners/Schools/Schools';
import University from './Pages/Collaborative/Partners/University';
import Business from './Pages/Collaborative/Partners/Business';
import NonProfit from './Pages/Collaborative/Partners/NonProfit';
import Employee from './Pages/Collaborative/Partners/Employee';
import SchoolDetails from './Pages/Collaborative/Partners/Schools/SchoolDetails';
import SuperAdmin from './Pages/Users/SuperAdmin';
// import DonationBank from './Pages/Donation/DonationBank';
import Career from './Pages/Career/Career';
import ApplyNow from './Pages/Career/ApplyNow';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Users/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AddArticles from './Pages/Dashboard/Articles/AddArticles';
import AddProgram from './Pages/Dashboard/ProgramItem/AddProgram';
import AddEvents from './Pages/Dashboard/AddEvents/AddEvents';
import ManageArticles from './Pages/Dashboard/Articles/ManageArticles';
import ManageEvents from './Pages/Dashboard/AddEvents/ManageEvents';
import ManageProgram from './Pages/Dashboard/ProgramItem/ManageProgram';
import ManageCareer from './Pages/Dashboard/Careerdb/ManageCareer';
import DonationList from './Pages/Dashboard/DonationList/DonationList';
import AddCareer from './Pages/Dashboard/Careerdb/AddCareer';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import PrivaetRoute from './Pages/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/PrivateRoute/AdminRoute/AdminRoute';
import ArticlesData from './Pages/Blog/ArticlesData';
import ArticleDetails from './Pages/Blog/ArticleDetails';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/program' element={<Program />} />
              {/* <Route path='/donation' element={<Donation />} /> */}
              {/* <Route path='/donationbank' element={<DonationBank />} /> */}
              <Route path='/collaborative' element={<Collaborative />} />
              <Route path='/school' element={<Schools />} />
              <Route path='/school/:schoolId' element={<SchoolDetails />} />
              <Route path='/university' element={<University />} />
              <Route path='/business' element={<Business/>} />
              <Route path='/nonprofit' element={<NonProfit />} />
              <Route path='/employee' element={<Employee />} />
              <Route path='/articles' element={<ArticlesData />} />
              <Route path='/article/:articleId' element={<ArticleDetails />} />
              <Route path='/events' element={<Events />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/signupfwfa' element={<Register />} />
              {/* <Route path='/login' element={<Login />} /> */}
              <Route path='/superadmin' element={<SuperAdmin />} />
              <Route path='/career' element={<Career />} />
              <Route path='/apply-now' element={<ApplyNow />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/dashboard' element={<PrivaetRoute> <Dashboard /> </PrivaetRoute>}>

                <Route exact path="/dashboard" element={<DashboardHome />} />
                <Route path={`/dashboard/addcareer`} element={<AdminRoute> <AddCareer /> </AdminRoute>} />
                <Route path={`/dashboard/addprogram`} element={<AdminRoute> <AddProgram /> </AdminRoute> } />
                <Route path={`/dashboard/addarticles`} element={<AdminRoute> <AddArticles /> </AdminRoute>} />
                <Route path={`/dashboard/addevents`} element={<AdminRoute> <AddEvents /> </AdminRoute>} />
                <Route path={`/dashboard/manageArticles`} element={<PrivaetRoute> <ManageArticles /> </PrivaetRoute>} />
                <Route path={`/dashboard/manageEvents`} element={<PrivaetRoute> <ManageEvents /> </PrivaetRoute>} />
                <Route path={`/dashboard/managePrograms`} element={<PrivaetRoute> <ManageProgram /> </PrivaetRoute>} />
                <Route path={`/dashboard/manageCareer`} element={<PrivaetRoute> <ManageCareer /> </PrivaetRoute>} />
                <Route path={`/dashboard/donatonList`} element={<AdminRoute> <DonationList /> </AdminRoute>} />
                <Route path={`/dashboard/makeAdmin`} element={<AdminRoute> <MakeAdmin /> </AdminRoute> } />
              </Route>
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
