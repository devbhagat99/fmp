export const baseURL = import.meta.env.VITE_API_URL

const SummaryApi = {
    register : {
        url : 'http://localhost:5000/api/user/register',
        method : 'post'
    },
    login : {
        url : 'http://localhost:5000/api/user/login',
        method : 'post'
    },
    forgot_password : {
        url : "http://localhost:5000/api/user/forgot-password",
        method : 'put'
    },
    forgot_password_otp_verification : {
        url : 'http://localhost:5000/api/user/verify-forgot-password-otp',
        method : 'put'
    },
    resetPassword : {
        url : "http://localhost:5000//api/user/reset-password",
        method : 'put'
    },
    refreshToken : {
        url : 'http://localhost:5000/api/user/refresh-token',
        method : 'post'
    },
    userDetails : {
        url : 'http://localhost:5000/api/user/user-details',
        method : "get"
    },
    logout : {
        url : "http://localhost:5000/api/user/logout",
        method : 'get'
    },
    uploadAvatar : {
        url : "http://localhost:5000/api/user/upload-avatar",
        method : 'put'
    },
    updateUserDetails : {
        url : 'http://localhost:5000/api/user/update-user',
        method : 'put'
    },
    addCategory : {
        url : 'http://localhost:5000/api/category/add-category',
        method : 'post'
    },
    uploadImage : {
        url : 'http://localhost:5000/api/file/upload',
        method : 'post'
    },
    getCategory : {
        url : 'http://localhost:5000/api/category/get',
        method : 'get'
    },
    updateCategory : {
        url : 'http://localhost:5000/api/category/update',
        method : 'put'
    },
    deleteCategory : {
        url : 'http://localhost:5000/api/category/delete',
        method : 'delete'
    },
    createSubCategory : {
        url : 'http://localhost:5000/api/subcategory/create',
        method : 'post'
    },
    getSubCategory : {
        url : 'http://localhost:5000/api/subcategory/get',
        method : 'post'
    },
    updateSubCategory : {
        url : 'http://localhost:5000/api/subcategory/update',
        method : 'put'
    },
    deleteSubCategory : {
        url : 'http://localhost:5000/api/subcategory/delete',
        method : 'delete'
    },
    createProduct : {
        url : 'http://localhost:5000/api/product/create',
        method : 'post'
    },
    getProduct : {
        url : 'http://localhost:5000/api/product/get',
        method : 'post'
    },
    getProductByCategory : {
        url : 'http://localhost:5000/api/product/get-product-by-category',
        method : 'post'
    },
    getProductByCategoryAndSubCategory : {
        url : 'http://localhost:5000/api/product/get-pruduct-by-category-and-subcategory',
        method : 'post'
    },
    getProductDetails : {
        url : 'http://localhost:5000/api/product/get-product-details',
        method : 'post'
    },
    updateProductDetails : {
        url : "http://localhost:5000/api/product/update-product-details",
        method : 'put'
    },
    deleteProduct : {
        url : "http://localhost:5000/api/product/delete-product",
        method : 'delete'
    },
    searchProduct : {
        url : 'http://localhost:5000/api/product/search-product',
        method : 'post'
    },
    addTocart : {
        url : "http://localhost:5000/api/cart/create",
        method : 'post'
    },
    getCartItem : {
        url : 'http://localhost:5000/api/cart/get',
        method : 'get'
    },
    updateCartItemQty : {
        url : 'http://localhost:5000/api/cart/update-qty',
        method : 'put'
    },
    deleteCartItem : {
        url : 'http://localhost:5000/api/cart/delete-cart-item',
        method : 'delete'
    },
    createAddress : {
        url : 'http://localhost:5000/api/address/create',
        method : 'post'
    },
    getAddress : {
        url : 'http://localhost:5000/api/address/get',
        method : 'get'
    },
    updateAddress : {
        url : 'http://localhost:5000/api/address/update',
        method : 'put'
    },
    disableAddress : {
        url : 'http://localhost:5000/api/address/disable',
        method : 'delete'
    },
    CashOnDeliveryOrder : {
        url : "http://localhost:5000/api/order/cash-on-delivery",
        method : 'post'
    },
    payment_url : {
        url : "http://localhost:5000/api/order/checkout",
        method : 'post'
    },
    getOrderItems : {
        url : 'http://localhost:5000/api/order/order-list',
        method : 'get'
    }
}

export default SummaryApi