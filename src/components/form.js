import React, {useState} from 'react';
import './Form.css';
const Form = () =>{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return(
        <div className='form-container'>
            <form>
                <div>
                    <label>
                        First Name:
                    </label>
                    <input 
                    type='text' 
                    name='firstName'
                    value={formData.firstName} 
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>
                        Last Name:
                    </label>
                    <input type='text' 
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>
                        Email:
                    </label>
                    <input type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>
                        Password:
                    </label>
                    <input type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}/>
                </div>
                <div>
                    <label>
                        Confirm Password:
                    </label>
                    <input type='password'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}/>
                </div>
                <div className='form-data-display'>
                    <h3>Your Form Data</h3>
                    <p>First Name: {formData.firstName}</p>
                    <p>Last Name: {formData.lastName}</p>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.password}</p>
                    <p>Confirm Password: {formData.confirmPassword}</p>
                </div>
            </form>
        </div>
    );
};
export default Form;
