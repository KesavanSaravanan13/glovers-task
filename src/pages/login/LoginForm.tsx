import * as Yup from 'yup';
import '../../css/Login.css';
import { Form, Formik } from "formik";
import { Col, Row } from 'react-bootstrap';
import FieldForm from '../../components/FieldForm';

import {createProducts} from '../../utils/API/AxiosCall';
import { useNavigate } from 'react-router-dom';

export type FormInput={
    name : string;
    placeholder:string;
}

export type FormValues = {
    email: string;
    password: string;
}

const LoginForm = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    }
    const loginInput : FormInput[] = [
        { name: 'email',placeholder:'Enter your mail id ' },
        { name: 'password', placeholder:'Enter your password ' },
    ]

    const setToken =(values : FormValues)=>{
        createProducts({
            email:values.email,
            password:values.password,
        })
        .then(response =>{
            if (response.data.access_token) {
                sessionStorage.setItem('token', response.data.access_token);
                navigate('/');
            }
        })
        .catch(error =>{
            console.error('Login error: ', error.response ? error.response.data : error.message);
        })
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                email: Yup.string().required('Please Enter Email Id!').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
                password: Yup.string().required("Please Enter the Password!"),
            })}
            onSubmit={values => {
                setToken(values);
            }}
        >
            {({ errors, touched }) => (
                <Form className='m-0 p-0'>
                    <Row className='m-0 p-0'>
                        <Col className='m-0 p-0'><h5>Login</h5></Col>
                        <label className='m-0 p-0 pb-3'>Please enter the email and password</label>
                        <FieldForm errors={errors} touched={touched} loginInput={loginInput}/>
                        <Col className='m-0 p-0 pt-3' xs={12}>
                            <button type='submit' className='m-0 p-0 py-2 col-12'>Login</button>
                        </Col>
                        <Col className='m-0 p-0'><a href='/' >Forget Password?</a></Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;