import React,{ useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { register} from '../actions/user'



const SignUp = ({history}) => {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const auth = useSelector((state)=>state.auth);
    const { userInfo,error } = auth;
    const dispatch= useDispatch();
    useEffect(()=>{
        if(userInfo){
            history.push('/shop');
        }
    },[userInfo])

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(register(name,email,password,confirmpassword));
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <ul className="form-container">
                    <li>
                        <h2 className="text-center">Create Account</h2>
                    </li>
                    <li>
                        <label for="name">
                            Name
                        </label>
                        <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} />
                    </li>
                    <li>
                        <label for="email">
                            Email
                        </label>
                        <input type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
                    </li>
                    <li>
                        <label for="password">
                        Password
                        </label>
                        <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    </li>
                    <li>
                        <label for="confirmpassword">
                        Confirm Password
                        </label>
                        <input type="password" name="confirmpassword" value={confirmpassword} onChange={e=>setConfirmPassword(e.target.value)} />
                    </li>
                    <li>
                        <button className="button primary text-center" type="submit">Sign Up for GeeksGrocery Account</button>
                    </li>

                </ul>
            </form>
            
        </div>
    )
}

export default SignUp
