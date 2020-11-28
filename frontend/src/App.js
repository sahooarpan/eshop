import React,{ useEffect } from 'react'
import Header from './components/Header'
import SignUp from './components/SignUp'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import SignIn from './components/SignIn'
import Shop from './components/Shop'
import { useDispatch } from 'react-redux'
import { userLoad } from './actions/user'  
import PrivateRoute from './components/routing/PrivateRoute'
import { setAuthToken } from './utils/setAuthToken'
import CheckOut from './components/CheckOut'
const App = () => {
  const dispatch = useDispatch();
  if(localStorage.getItem('userInfo')){
    const userInfo=JSON.parse(localStorage.getItem('userInfo'))
    setAuthToken(userInfo.token)

  }
  useEffect(()=>{
   dispatch(userLoad()) 
      
    
  },[])

  return (
    <BrowserRouter>
    <div className="grid-container">
      <Header/>
      <main>
      <Switch>
      <Route exact path='/signin' component={SignIn} />
      <PrivateRoute exact path='/shop' component={Shop} />
      <Route  path='/checkout' component={CheckOut} />
      <Route exact path='/' component={SignUp} />
     
      </Switch>
      </main>
    </div>
    </BrowserRouter>
  )
}

export default App 
