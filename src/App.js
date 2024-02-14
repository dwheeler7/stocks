import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import Dashboard from './pages/Dashboard/Dashboard'
import Stock from './pages/Stock/Stock'
import About from './pages/About/About'

export default function App(){
    return (
        <div className='App'>

            <Routes>
                
                <Route path="/stocks" element={<Dashboard/>}/>                           
            </Routes>
        </div>
    )
}