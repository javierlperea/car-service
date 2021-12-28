/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button } from '@material-ui/core'
import { Formik } from 'formik'

import './Form.css'

export const Form = () => {
  return (
    <>
        <Formik
            initialValues={{
              name: '',
              lastName: '',
              dni: '',
              cars: ''
            }}
            validate={(values) => {
              let errors = {}

              if (values.name.length < 2) {
                errors.name = 'You must insert a valid name'
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                errors.name = 'Name can only contain letters and spaces'
              }

              if (values.lastName < 2) {
                errors.lastName = 'You must insert a valid last name'
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
                errors.lastName = 'Last Name can only contain letters and spaces'
              }

              if (values.dni.length < 6) {
                errors.dni = 'You must insert a valid dni (min 6 numeric digits)'
              } else if (values.dni > 8) {
                errors.dni = 'You must insert a valid dni (max 8 numeric digits)'
              }

              if (values.cars < 2) {
                errors.cars = 'You must insert a valid car/s'
              }

              return errors
            }}
            onSubmit={ (values) => {
              console.log('Send')
            }}
        >
            { ({ values, handleSubmit, handleChange, handleBlur, errors }) => (
                <form className="formulario" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            id="name"
                            autoComplete="off"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        { errors.name && <div className="error">{errors.name}</div> }
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            id="lastName"
                            autoComplete="off"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        { errors.lastName && <div className="error">{errors.lastName}</div> }
                    </div>
                    <div>
                        <label htmlFor="dni">DNI</label>
                        <input
                            type="number"
                            name="dni"
                            placeholder="DNI"
                            id="dni"
                            value={values.dni}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        { errors.dni && <div className="error">{errors.dni}</div> }
                    </div>
                    <div>
                        <label htmlFor="cars">Cars</label>
                        <input
                            type="text"
                            name="cars"
                            placeholder="cars"
                            id="cars"
                            autoComplete="off"
                            value={values.cars}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        { errors.cars && <div className="error">{errors.cars}</div> }
                    </div>
                    <Button type="submit">Add CLient</Button>
                </form>

            )}
        </Formik>
    </>
  )
}
