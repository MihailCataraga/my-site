import React from 'react';
import {useFormik} from 'formik'

const Formik = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            site: '',
        },
        onSubmit: (values) => {
            console.log('Value are: ', values)
        }}
    )
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor='email'>Email</label>
                <input type='text' id='email' onChange={formik.handleChange} value={formik.values.email} />

                <label htmlFor='site'>Site</label>
                <input type='text' id='site' onChange={formik.handleChange} value={formik.values.site} />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Formik;
