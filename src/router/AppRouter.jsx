import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, Register, LockScreen, ForgotPassword, Dashboard } from '../features'



const AppRouter = () => {
  return (
     <Routes>
        {/* public routes  */}
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/lockscreen' element={<LockScreen />} />
        <Route path='/forgot/password' element={<ForgotPassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/unauthorised' element={<Unauthorised />} />
        <Route path='/404' element={<Four0Four />} /> */}
        
   


        {/* protected */}
        
        {/* <Route element={<PersistLogin />}>

        <Route element={<RequireAuth allowedRoles={[2000]}/>}>

        </Route>
        
        </Route> */}

        {/*  */}
        {/* <Route path='*' element={<Missing />} /> */}
     </Routes>
  )
}

export default AppRouter