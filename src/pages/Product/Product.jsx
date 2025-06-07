import React, { useState, useEffect } from 'react'
import '../../App.css'
import EmptyComponent from '../../components/EmptyComponent'
import Header from '../../components/Header'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddProduct from './AddProduct'
import ProductCard from '../../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, deleteProducts, fetchProducts, updateProducts } from '../../redux/actions/productActions'

function Product() {


    const {items, loading} = useSelector((state)=>state.products);
    const [showModel, setShowModal] = useState(false)
    const [editItem, setEditItem] = useState(null)
    
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(fetchProducts());

    }, [dispatch]);

    const handleAdd = () => {
        //setEditItem
        setEditItem(null)
        //setShowModal
        setShowModal(!showModel)
    }

     const handleSubmit = (values) => {
       if(editItem){
       dispatch(updateProducts(values))
       }
       else{
        dispatch(addProducts(values))
       }
    }

    
     const handleEdit = (product) => {
      setEditItem(product)
      setShowModal(!showModel)
    }

    
     const handleDelete = (id) => {
      dispatch(deleteProducts(id));

    }


    return (
        <>
            <section>
                <Header />
                <Container className='mt-4'>
                    <div className='d-flex justify-content-end mb-4'>

                        <Button variant="primary" onClick={() => setShowModal(true)}>
                            <i className='bi bi-plus-circle me-2'></i>Add Product
                        </Button>
                    </div>

                    {loading ? (<div>
                        <Spinner animation='border' role ='status'/>
                    </div>)
                
                :
                items.length === 0 ? (
                        <div className='d-flex justify-content-center align-items-center'
                            style={{ minHeight: '200px' }}
                        >
                            <EmptyComponent message="We're currently out of stock" />

                        </div>) : (
                        <Row className='g-4'>
                            {
                                items.map((product) => (
                                    <Col key={product.id} xs={12} sm={6} md={3} lg={3}>
                                        <ProductCard 
                                        product={product} 
                                        onEdit={()=>{handleEdit(product)}}
                                        onDelete={()=>{handleDelete(product.id)}}
                                        />
                                    </Col>
                                ))
                            }
                        </Row>
                    )}
                </Container>
                <AddProduct 
                show={showModel} 
                onClose={()=> setShowModal(!showModel)}
                initialValues={editItem||{
                    title:"",
                    image:"",
                    description:"",
                    price:0,
                }}
            onSubmit={(handleSubmit)}
            isEdit={!editItem}
                />
            
                    
            </section>
        </>
    )
}

export default Product
