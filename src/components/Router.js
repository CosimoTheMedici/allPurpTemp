import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page from './Page'



const AppRouter = () => {
  return (
     <Routes>
        {/* public routes  */}
        <Route path='/' element={<Page />} />
        {/* <Route path='/unauthorised' element={<Unauthorised />} />
        <Route path='/404' element={<Four0Four />} /> */}
        
        {/* protected */}
        
      
        
        {/* protected agents */}
        <Route element={<RequireAuth allowedRoles={[3000]}/>}>
        

        </Route>

        <Route element={<RequireAuth allowedRoles={[4000]}/>}>
      

        </Route>

        <Route element={<RequireAuth allowedRoles={[4000,3000]}/>}>
        </Route>


        {/*  */}
        {/* <Route path='*' element={<Missing />} /> */}
     </Routes>
  )
}

export default AppRouter