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
import Payment from './components/Payment'
import OrderHistory from './components/OrderHistory'
import OrderScreen from './components/OrderScreen'


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
    
      <Header/>
      <main>
      <Switch>
      <Route exact path='/signin' component={SignIn} />
      <PrivateRoute exact path='/shop' component={Shop} />
      <PrivateRoute  path='/checkout' component={CheckOut} />
      <PrivateRoute path='/payment' component={Payment} />
      <PrivateRoute path='/myorders' component={OrderHistory} />
      <PrivateRoute path='/order/:id' component={OrderScreen} />
      <Route exact path='/' component={SignUp} />
     
      </Switch>
      </main>
    
    </BrowserRouter>
  )
}

export default App 
