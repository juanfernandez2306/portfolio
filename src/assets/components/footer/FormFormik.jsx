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

        const endpoint = 'http://localhost/php/phpmailer/sendEmail.php';

        setDisabled(true);
        setpopupState(true);

        axios.post(endpoint, JSON.stringify(values, null, 2))
        .then(resp => resp.data)
        .then(resp => {

            setDisabled(false);
            setResponseServer(true);

            const styleMsg = (resp.status ? ' success ' : ' error') + ' stop_animation_preloader';
            setStyleResponse(styleMsg);
            resetForm();

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
            <div className='container_error'>
              <ErrorMessage name='fullName' />
            </div>
          </div>

          <div className="container_input second">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" 
            name="email" />
            <div className='container_error'>
              <ErrorMessage name='email' />
            </div>
          </div>

          <div className='container_input third'>
            <label htmlFor="">Mensaje</label>
            <Field  as="textarea" id="message" name="message" maxLength="301" rows="5" />
            <div className='container_error'>
              <ErrorMessage name='message' />
            </div>
          </div>

          <button type="submit" className={disabled ? 'disabled' : ''}>Enviar</button>
        </Form>
        
    </Formik>
  </>
  )
}
export default FormFormik;