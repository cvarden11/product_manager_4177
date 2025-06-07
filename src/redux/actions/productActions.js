import {toast} from 'react-toastify';

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCT_FAILURE";

export const CREATE_PRODUCTS_REQUEST = "CREATE_PRODUCT_REQUEST";
export const CREATE_PRODUCTS_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCTS_FAILURE = "CREATE_PRODUCT_FAILURE";

export const UPDATE_PRODUCTS_REQUEST = "UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCTS_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCTS_FAILURE = "UPDATE_PRODUCT_FAILURE";

export const DELETE_PRODUCTS_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCTS_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCTS_FAILURE = "DELETE_PRODUCT_FAILURE";


export const fetchProducts = () => async (dispatch) =>{
    dispatch({type: FETCH_PRODUCTS_REQUEST});

    try{
        const res = await fetch("http://localhost:5400/api/products");
        const data = await res.json()
        dispatch({type:FETCH_PRODUCTS_SUCCESS, payload: data});
    }catch(err){
        dispatch({type:FETCH_PRODUCTS_FAILURE, payload: err.message});
        toast.error("failed to load product")
    }

};

export const addProducts = (product) => async (dispatch)=>{
    dispatch({type: CREATE_PRODUCTS_REQUEST});

    try{
        const res = await fetch("http://localhost:5400/api/products",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(product),
        });
        const data = await res.json()

        dispatch({type:CREATE_PRODUCTS_SUCCESS, payload: data});
        toast.success("Product Created Successfully!")
    }catch(err){
        dispatch({type:CREATE_PRODUCTS_FAILURE, payload: err.message});
        toast.error("Failed to Create Product")
    }

};


export const updateProducts = (product) => async (dispatch)=>{
    dispatch({type: UPDATE_PRODUCTS_FAILURE});

    try{
        const res = await fetch(`http://localhost:5400/api/products/${product.id}`,{
            method:"PUT",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(product),
        });
        const data = await res.json()

        dispatch({type:UPDATE_PRODUCTS_SUCCESS, payload: data});
        toast.success("Product Updated Successfully!")
    }catch(err){
        dispatch({type:UPDATE_PRODUCTS_FAILURE, payload: err.message});
        toast.error("Failed to Update Product")
    }

};

export const deleteProducts = (id) => async (dispatch)=>{
    dispatch({type: DELETE_PRODUCTS_REQUEST});

    try{
        await fetch(`http://localhost:5400/api/products/${id}`,{
            method:"DELETE",
        });

        dispatch({type:DELETE_PRODUCTS_SUCCESS, payload: id});
        toast.success("Product Deleted Successfully!")
    }catch(err){
        dispatch({type:DELETE_PRODUCTS_FAILURE, payload: err.message});
        toast.error("Failed to Delete Product")
    }

};