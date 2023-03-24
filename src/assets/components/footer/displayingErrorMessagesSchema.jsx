import {string, object} from 'yup';

const displayingErrorMessagesSchema = object().shape({
    fullName: string()
        .min(4, 'Mínimo 4 caracteres')
        .max(50, 'Máximo 50 caracteres')
        .required('Campo obligatorio'),
    message: string()
        .min(10, 'Mínimo 10 caracteres')
        .max(300, 'Máximo 300 caracteres')
        .required('Campo obligatorio'),
    email: string().email('Email invalido').required('Campo obligatorio')
});

export default displayingErrorMessagesSchema;