import{
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    CREATE_PRODUCTS_FAILURE,
    CREATE_PRODUCTS_REQUEST,
    CREATE_PRODUCTS_SUCCESS,
    UPDATE_PRODUCTS_FAILURE,
    UPDATE_PRODUCTS_REQUEST,
    UPDATE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_FAILURE,
    DELETE_PRODUCTS_REQUEST,
    DELETE_PRODUCTS_SUCCESS,
} from "../actions/productActions"

const initialState = {
    items:[],
    loading: false,
    error:null,
    createLoading:false,
    updateLoading:false,
    deleteLoading:false,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case FETCH_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CREATE_PRODUCTS_REQUEST:
            return { ...state, createLoading: true };
        case CREATE_PRODUCTS_SUCCESS:
            return { ...state, cretateLoading: false, items: [...state.items, action.payload] };
        case CREATE_PRODUCTS_FAILURE:
            return { ...state, createLoading: false, error: action.payload };

        case UPDATE_PRODUCTS_REQUEST:
            return { ...state, updateLoading: true,};
        case UPDATE_PRODUCTS_SUCCESS:
            return { ...state, updateLoading: false, items: state.items.map((item)=>
            item.id===action.payload.id ? action.payload : item
            ), };
        case UPDATE_PRODUCTS_FAILURE:
            return { ...state, updateLoading: false, error: action.payload };
        case DELETE_PRODUCTS_REQUEST:
            return { ...state, deleteLoading: true, };
        case DELETE_PRODUCTS_SUCCESS:
            return { ...state, deleteLoading: false, items: state.items.filter((item)=>item.id!==action.payload) };
        case DELETE_PRODUCTS_FAILURE:
            return { ...state, deleteLoading: false, error: action.payload };
        
            default:
                return state;
    }
}
export default productReducer;
