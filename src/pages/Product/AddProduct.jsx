import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import ProductModal from '../../components/ProductModal';
import { Formik } from 'formik';
import * as Yup from 'yup';


const AddProduct=({show, onClose, initialValues, onSubmit, isEdit})=>{
  const validationSchema= Yup.object().shape({
    title:Yup.string().required("Product name is required"),
    image:Yup.string().required("Image URL is required"),
    description:Yup.string().required("Product description is required"),
    price:Yup.number().required("Price is required").positive(),
  })

  return (<>
  <Formik
    initialValues={initialValues}
    enableReinitialize
    validationSchema={validationSchema}
    onSubmit={(values, {resetForm})=>{
      onSubmit(values);
      resetForm();
      onClose();
    }}
  >
    {({
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      errors,
      touched,
    })=>(
      <ProductModal
  show={show }
  onClose={onClose}
  onSubmit={handleSubmit}
  title={isEdit ? "Add New Product": "Edit Product"}
  submitLabel={isEdit ?  "Add": "Edit Product"}
>
<Form>
  <Form.Group className='mb-3'>
    <Form.Label> Product Name</Form.Label>
    <Form.Control
    type="text"
    name="title"
    placeholder='Enter name'
    value={values.title}
    onChange={handleChange}
    onBlur={handleBlur}
    isInvalid={!!errors.title}
    autoFocus
    />
    <Form.Control.Feedback type='invalid'>
      {errors.title}
    </Form.Control.Feedback>
  </Form.Group>

<Form.Group className='mb-3'>
    <Form.Label> Banner</Form.Label>
    <Form.Control
    type="text"
    name="image"
    placeholder='Enter banner url'
    value={values.image}
    onChange={handleChange}
    onBlur={handleBlur}
    isInvalid={!!errors.image}
    autoFocus
    />
    <Form.Control.Feedback type='invalid'>
      {errors.image}
    </Form.Control.Feedback>
  </Form.Group>

  <Form.Group>
    <Form.Label> Description  </Form.Label>
    <Form.Control
    type="textarea"
    name="description"
    rows={3}
    placeholder='Enter description'
   value={values.description}
    onChange={handleChange}
    onBlur={handleBlur}
    isInvalid={!!errors.description}
    autoFocus
    />
    <Form.Control.Feedback type='invalid'>
      {errors.description}
    </Form.Control.Feedback>
   
  </Form.Group>
   
  <Form.Group>
    <Form.Label> Price  </Form.Label>
    <Form.Control
    type="text"
    name="price"
    placeholder='Enter price'
   value={values.price}
    onChange={handleChange}
    onBlur={handleBlur}
    isInvalid={!!errors.price}
    autoFocus
    />
    <Form.Control.Feedback type='invalid'>
      {errors.price}
    </Form.Control.Feedback>
  </Form.Group>
</Form>
</ProductModal>
    )}

  </Formik>
 

  
</>)

}

export default AddProduct