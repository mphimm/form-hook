import React, { useState } from 'react';

const FormData = props => {
    const [ form, setForm] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpw: ""
    })
    const onChangHandler = event => {
        setForm ({
            ...form, 
            [event.target.name]: event.target.value
        });
        console.log(form);
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(form);
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name:</label>
                <input type="text" name="firstName" onChange={onChangHandler}/>
                <br/>
                <label>Last Name:</label>
                <input type="text" name="lastName" onChange={onChangHandler}/>
                <br/>
                <label>Email:</label>
                <input type="text" name="email" onChange={onChangHandler}/>
                <br/>
                <label>Password:</label>
                <input type="text" name="password" onChange={onChangHandler}/>
                <br/>
                <label>Confirm Password:</label>
                <input type="text" name="confirmpw" onChange={onChangHandler}/>
                <br/>
            </form>
            <div>
                <h3>Display Form Data:</h3>
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName} </p> 
                <p>Email: {form.email} </p>
                <p>Password: {form.password} </p>
                <p>Confirm Password: {form.confirmpw} </p>

            </div>


        </div>
    );
}

export default FormData;
