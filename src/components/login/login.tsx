import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="formcontainer">
       
        <div className="card">
            <h1 className="card_title">Add Information</h1>
          
            <form className="card_form" 
            // onSubmit={}
            >
                <div className="input">
                    <input  type="email"
                        name="email"
                        placeholder="Your E-mail" className="input_field" required
                        // onChange={handleChange}
                    />
                </div>
                <div className="input">
                    <input type="password"
                        name="password"
                        placeholder="Your password" className="input_field" required
                        // onChange={handleChange}
                    />
                </div>
            
                <button type="submit" className="card_button"
                    // onChange={handleChange}
                >Submit</button>
                <button type="submit" className="card_button"
                    onClick={() => navigate('/')}
                >Back</button>
            </form>
        </div>
    </div>
    );
};

export default Login;