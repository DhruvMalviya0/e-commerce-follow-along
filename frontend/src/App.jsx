import './App.css'
// eslint-dis4able-next-line
import * as reactRouterDom from 'react-router-dom';
import {LoginPage, Home} from './Routes/routes.js';
import {SignupPage, CreateProduct} from './Routes/routes.js';



const App = () => {
  return (
    <reactRouterDom.BrowserRouter>
    <reactRouterDom.Routes>
      <reactRouterDom.Route path="/" element={<Home />} />
      <reactRouterDom.Route path="/login" element={<LoginPage />} />
      <reactRouterDom.Route path="/signup" element={<SignupPage/>} />
      <reactRouterDom.Route path="/product" element={<CreateProduct/>} />

    </reactRouterDom.Routes>
    </reactRouterDom.BrowserRouter>  
  )
}  

export default App;