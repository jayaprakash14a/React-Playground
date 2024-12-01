
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'


function RoutingModule() {
  return (
    <div>
      <BrowserRouter>
        
        
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="neet/online-coaching-class-11" element = {<Class11Program/>} />
            <Route path="neet/online-coaching-class-12" element = {<Class12Program/>} />
            <Route path="/" element = {<Landing/>} />
            <Route path="*" element = {<ErrorPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout(){
  return <div>
    <Header />
    <div>
      <Outlet/>
    </div>
    Footer
  </div>
}

function Header(){
  return <div>
    <Link to="/">Allen</Link> | 
    <Link to="/neet/online-coaching-class-11">class 11</Link> | 
    <Link to="/neet/online-coaching-class-12">class 12</Link> | 
  </div>
}

function ErrorPage(){
  return <div> Sorry page not found</div>
}

function Landing(){
  return <div>
    Welcome to Allen!!!
  </div>
}

function Class11Program(){
  return <div>
    Neet Program for class 11
  </div>
}

function Class12Program(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/");
  }

  return <div>
    Neet Program for class 12
    <div><button onClick={redirectUser}>Go back to home</button></div>
  </div>
}

export default RoutingModule
