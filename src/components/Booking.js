import React, { useState } from "react";
import {useFormik} from 'formik';
import * as Yup from "yup";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Booking() {

    
    const [selectedDate, setSelectedDate] = useState(null)
    const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "", 
            email: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
            lastName: Yup.string()
            .max(15, "Must be 20 characters or less")
            .required("Required"),
            email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
            contactNumber: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required("Required"),
        }),
        onSubmit:(values) => {
            console.log(values);
        }
    });

  return (
    <form onSubmit={formik.handleSubmit} className='mt-10 ml-10'>
        <div className='mb-2'>
        <label for="firstName" className='mr-2'>First Name</label> <br />
            <input 
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName }</p> : null}
        </div>

        <div className='mb-2'>
        <label for="lastName" className='mr-2'>Last Name</label> <br />
            <input 
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName }</p> : null}
        </div>

        <div className='mb-2'>
        <label for="email" className='mr-2'>Email</label> <br />
            <input 
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email }</p> : null}
        </div>

        <div className='mb-2'>
        <label for="contactNumber" className='mr-2'>Contact Number</label> <br />
            <input 
                id="contactNumber"
                name="contactNumber"
                type="tel"
                placeholder="123-456-7890"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? <p>{formik.errors.contactNumber }</p> : null}
        </div>

        <div className='mb-2  text-black'>
        <label className='mr-2'>Select Date</label> <br />
            <DatePicker 
            selected={selectedDate} 
            onChange={date => setSelectedDate(date)} 
            dateFormat='dd/MM/yyyy'
            isClearable
            showYearDropdown
            placeholderText="mm/dd/yyyy"
            />
        </div>

        <div>

        </div>

        <button type='submit'>Submit</button>

    </form>
  )
}

export default Booking
