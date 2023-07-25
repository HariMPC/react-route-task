
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import All from './Components/Pages/All/All';
import Fsd from './Components/Pages/Fsd/Fsd';
import Cybersecurity from './Components/Pages/Cybersecurity/Cybersecurity';
import Datascience from './Components/Pages/Datascience/Datascience';
import Career from './Components/Pages/Career/Career';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
    <Routes>
          <Route path="" element={<All/>}/>
          <Route path="/FullStackDevelopment" element={<Fsd/>} />
          <Route path="/Cybersecurity" element={<Cybersecurity/>} />
          <Route path="/Datascience" element={<Datascience/>} />
          <Route path="/Career" element={<Career/>} />
    </Routes>
    </div>
  );
}

export default App;
