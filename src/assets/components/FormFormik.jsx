import { Formik, Field, Form } from 'formik';

const FormFormik = () => (
  <>
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        message: ''
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        
        <h1>Escríbeme</h1>

        <div className="container_input first">
          <label htmlFor="fullName">Nombre y Apellido</label>
          <Field type="text" id="fullName" name="fullName" required />
        </div>

        <div className="container_input second">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" 
          name="email" required />
        </div>

        <div className='container_input third'>
          <label htmlFor="">Mensaje</label>
          <Field  as="textarea" id="message" name="message" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </>
);

export default FormFormik;