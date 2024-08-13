import * as Yup from 'yup';
import '../../css/Login.css';
import { Form, Formik } from "formik";
import { Col, Row } from 'react-bootstrap';
import FieldForm from '../../components/forms-formiks/FieldForm';
import { createProducts } from '../../utils/API/AxiosCall';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginButton from '../../components/button/LoginButton';
import { validUser } from '../../components/sweet-fires/SweetFires';

export type FormInput = {
    name: string;
    placeholder: string;
}

export type FormValues = {
    email: string;
    password: string;
}

const LoginForm = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState<boolean>(false);
    const initialValues = {
        email: '',
        password: '',
    }
    const loginInput: FormInput[] = [
        { name: 'email', placeholder: 'Email ' },
        { name: 'password', placeholder: 'Password ' },
    ]
    const setToken = async (values: FormValues) => {
        setClicked(!clicked);
        const response = await createProducts({
            email: values.email,
            password: values.password,
        })
        setTimeout(() => {
            if (response.data.data.token_details.access_token) {
                sessionStorage.setItem('token', response.data.data.token_details.access_token);
                validUser("Logged in...");
                navigate('/userslist');
                setTimeout(() => {
                    setClicked(!clicked);
                }, 2000);
            }
        }, 2000)

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
                        <Col className='m-0 p-0 mb-1'><h3 className='m-0 fw-none'>Login</h3></Col>
                        <label className='m-0 p-0 pb-3 mb-2'>Please enter the email and password</label>
                        <FieldForm errors={errors} touched={touched} loginInput={loginInput} />
                        {clicked ? <LoginButton message={'clicked'} /> : <LoginButton message={'normal'} />}
                        <Col className='m-0 p-0'><a href='/' >Forget Password?</a></Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;