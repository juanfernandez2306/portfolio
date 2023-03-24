import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import '../../css/Formformik.css';
import displayingErrorMessagesSchema from './displayingErrorMessagesSchema';
import axios from 'axios';


const FormFormik = ({setpopupState, setResponseServer, setStyleResponse}) => {

  const [disabled, setDisabled] = useState(false);
  
  return (
    <>
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        message: ''
      }}
      validationSchema={displayingErrorMessagesSchema}
      onSubmit={(values, {resetForm}) => {

        const endpoint = 'http://localhost/php/phpmailer/sendEmail_test.php';

        setDisabled(true);
        setpopupState(true);

        axios.post(endpoint, JSON.stringify(values, null, 2))
        .then(resp => resp.data)
        .then(resp => {

            setDisabled(false);
            setResponseServer(true);

            const styleMsg = (resp.status ? ' success ' : ' error') + ' stop_animation_preloader';
            setStyleResponse(styleMsg);

        }) 
        .catch(error => {
            console.log(error);
            setDisabled(false);
            setResponseServer(true);
            setStyleResponse(' error stop_animation_preloader');
        });

      }}
    >
        <Form>
        
          <h1>Escríbeme</h1>

          <div className="container_input first">
            <label htmlFor="fullName">Nombre y Apellido</label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage component="span" name='fullName' />
          </div>

          <div className="container_input second">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" 
            name="email" />
            <ErrorMessage component="span" name='email' />
          </div>

          <div className='container_input third'>
            <label htmlFor="">Mensaje</label>
            <Field  as="textarea" id="message" name="message" />
            <ErrorMessage component="span" name='message' />
          </div>

          <button type="submit" className={disabled ? 'disabled' : ''}>Submit</button>
        </Form>
        
    </Formik>
  </>
  )
}
export default FormFormik;