import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import BookMarks from './components/Sidebar/BookMarks';
import NewNote from './components/Sidebar/NewNote';
import Notes from './components/Sidebar/Notes';
import Community from './components/Sidebar/Community';
import Profile from './components/Sidebar/Profile';

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        <Route  path='/' element={<Sidebar/>}/>
        <Route  path='/Community' element={<Sidebar comp={<Community/>}/>}/>
        <Route  path='/BookMarks' element={<Sidebar comp={<BookMarks/>}/>}/>
        <Route  path='/Notes' element={<Sidebar comp={<Notes/>}/>}/>
        <Route  path='/NewNote' element={<Sidebar comp={<NewNote/>}/>}/>
        <Route  path='/Profile' element={<Sidebar comp={<Profile/>}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;