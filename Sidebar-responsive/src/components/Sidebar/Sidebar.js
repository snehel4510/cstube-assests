import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import { CiBookmark } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { BiNote } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

// import NewNote from './NewNote';

const Sidebar = ({comp}) => {
  const [show, setShow] = useState(false);
const [select,selected]=useState(false);
  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
        
          <div>

            <Link to='/Profile' className='nav-logo'>
             <AiOutlineUser color='#f5c382'/>
              <span className='nav-logo-name'>Profile</span>
            </Link>

            <div className='nav-list'>

              <div onClick={()=>selected(!select)}>
              <Link to='/Community' className={`nav-link ${select?"nav-link active":null}`}>
                <BsFillPeopleFill/>
                <span className='nav-link-name'>Community</span>
              </Link>
              </div>

              <div onClick={()=>selected(!select)}>
              <Link to='/Notes' className={`nav-link ${select?"nav-link active":null}`}>
                <BiNote/>
                <span className='nav-link-name'>Notes</span>
              </Link>
              </div>

              <Link to='/NewNote' className='nav-link'>
                <CiEdit/>
                <span className='nav-link-name'>New Note</span>
              </Link>

              <Link to='/BookMarks' className='nav-link'>
                <CiBookmark />
                <span className='nav-link-name'>BookMarks</span>
              </Link>

            </div>
          </div>

          <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>

      {/* <h1>Content</h1> */}
      {comp}

    </main>
  );
};

export default Sidebar;