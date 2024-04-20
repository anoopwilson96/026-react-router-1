import React from 'react'
import { Outlet, Link } from "react-router-dom";

function MyFooter (){
  return(

    <>
    <footer className="bg-warning">
  <section className=" p-2  d-flex flex-row justify-content-around align-items-center gap-2 ">
  <nav>
          <ul className='d-flex flex-row gap-4'>
            <li className='list-unstyled'>
              <Link to={`#`}>More cities</Link>
            </li>
            <li className='list-unstyled'>
              <Link to={`#`}>Report errors</Link>
            </li>
          </ul>
        </nav>
    
  </section>
</footer>
    
    
    </>
  

  )
}

export default MyFooter