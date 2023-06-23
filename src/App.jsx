import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Overview from './pages/Overview'
import Examples from './pages/Examples'
import Tour from './pages/Tour'
import Blog from './pages/Blog'
import Help from './pages/Help'
import RouteLayout from './layouts/RouteLayout'


const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/"  element={<RouteLayout />}> 
      <Route index element={<Overview />} />
      <Route path="examples" element={<Examples />} />
      <Route path="tour" element={<Tour />} />
      <Route path="blog" element={<Blog />} />
      <Route path='help' element={<Help />} />
    </Route>
  )
)
export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}




