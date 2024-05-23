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
    const [errors, setErrors] = useState({
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
        validateField(name, value);
    };
    const validateField = (name, value) =>{
        let error = '';
        switch (name){
            case 'firstName':
            case 'lastName':
                if(value.length <2){
                    error= 'This field must be at least 2 characters long';
                }
                break;
            case 'email':
                if(value.length < 5){
                    error= 'This field must be at least 5 characters long';
                }
                break;
            case 'password':
                if(value.length < 8){
                    error= 'Password must be at least 8 characters long';
                }
                break;
            case 'confirmPassword':
                if (value !== formData.password){
                    error = 'Password do not match';
                }
                break;
                default:
                break;

        }
        setErrors({
            ...errors,
            [name]: error,
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
                    {errors.firstName && <span className='error'>{errors.firstName}</span>}
                </div>
                <div>
                    <label>
                        Last Name:
                    </label>
                    <input type='text' 
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}/>
                    {errors.lastName && <span className='error'>{errors.lastName}</span>}
                </div>
                <div>
                    <label>
                        Email:
                    </label>
                    <input type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}/>
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>
                <div>
                    <label>
                        Password:
                    </label>
                    <input type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}/>
                    {errors.password && <span className='error'>{errors.password}</span>}
                </div>
                <div>
                    <label>
                        Confirm Password:
                    </label>
                    <input type='password'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}/>
                    {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
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
