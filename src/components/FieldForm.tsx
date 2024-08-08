import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import { Col } from "react-bootstrap";
import { FormInput } from "../pages/login/LoginForm";

type fieldType ={
    loginInput: FormInput[],
    errors: FormikErrors<Record<string,string>>,
    touched:FormikTouched<Record<string,string>>,
}

const FieldForm = ({loginInput,errors,touched}:fieldType) => {
    return (
        <Col className='m-0 p-0 pb-2' xs={12}>
            {
                loginInput.map((form , index : number) => {
                    return (
                        <Col className='m-0 p-0 pb-3' xs={12} key={index}>
                            <Field name={form.name} className={`col-12 m-0 p-0 ps-2 py-2 ${touched.email && errors.email ? 'input-error ' : ''}`} Placeholder={form.placeholder} />
                            <ErrorMessage name={form.name} component={'div'} className='m-0 p-0 message-error' />
                        </Col>
                    )
                })
            }
        </Col>
    );
}

export default FieldForm;