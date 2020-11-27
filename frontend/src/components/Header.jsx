import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logOut } from '../actions/user';

const Header = () => {

const auth = useSelector(state=>state.auth);

const dispatch = useDispatch();

const handleLogOut=()=>{
  dispatch(logOut())
}


  return (
        <header className="row">
            <div>
          <Link className="brand" to="/">
            GeeksGrocery
          </Link>
        </div>
   {
     auth.userInfo?( <div>
      <Link to="/shop">{auth.userInfo.name}</Link>
      <Link onClick={handleLogOut}>Sign Out</Link>
    </div>):( <div>
      <Link to="/">Register</Link>
      <Link to="/signin">Sign In</Link>
    </div>)
   }    
        </header>
    )
}

export default Header
