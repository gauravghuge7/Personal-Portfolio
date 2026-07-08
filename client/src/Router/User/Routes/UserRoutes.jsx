

import { Route, Routes } from 'react-router-dom';
import UserLayout from '../Layout/UserLayout';
import Landing from '../../../Landing/Landing';
import Education from '../../../components/Education/Education';
import Projects from '../../../components/Projects/Projects';
import Experience from '../../../components/Experience/Experience';
import GithubDashboard from '../../../components/GithubDashboard/GithubDashboard';
import Contact from '../../../components/Contact/Contact';
import Skills from '../../../components/Skills/Skills';
import Journey from '../../../components/Journey/Journey';
import ReadmeViewer from '../../../components/ReadmeInfo/ReadmeViewer';
import Gallery from '../../../components/Gallery/Gallery';

const UserRoutes = () => {
   return (
      <div>
            <Routes>
               <Route path='/' element={<UserLayout />} >
                  <Route index  element={<Landing />} />

                  <Route path='/projects' element={<Projects />} />
                  <Route path='/githubDashboard' element={<GithubDashboard />} />
                  <Route path='/education' element={<Education />} />
                  <Route path='/experience' element={<Experience />} />

                  <Route path='/experience/:id' element={<Experience />} />
                  <Route path='/skills' element={<Skills />} />
                  <Route path='/gallery' element={<Gallery />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/Information' element={<ReadmeViewer />} />

                  <Route path='journey' element={<Journey />} />

               </Route>

            </Routes>
         
      </div>
   );
}

export default UserRoutes;
