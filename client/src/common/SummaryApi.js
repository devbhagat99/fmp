export const baseURL = import.meta.env.VITE_API_URL

const SummaryApi = {
    register : {
        url : 'https://fmp-g1qj.onrender.com/api/user/register',
        method : 'post'
    },
    login : {
        url : 'https://fmp-g1qj.onrender.com/api/user/login',
        method : 'post'
    },
    forgot_password : {
        url : "https://fmp-g1qj.onrender.com/api/user/forgot-password",
        method : 'put'
    },
    forgot_password_otp_verification : {
        url : 'https://fmp-g1qj.onrender.com/api/user/verify-forgot-password-otp',
        method : 'put'
    },
    resetPassword : {
        url : "https://fmp-g1qj.onrender.com/api/user/reset-password",
        method : 'put'
    },
    refreshToken : {
        url : 'https://fmp-g1qj.onrender.com/api/user/refresh-token',
        method : 'post'
    },
    userDetails : {
        url : 'https://fmp-g1qj.onrender.com/api/user/user-details',
        method : "get"
    },
    logout : {
        url : "https://fmp-g1qj.onrender.com/api/user/logout",
        method : 'get'
    },
    uploadAvatar : {
        url : "https://fmp-g1qj.onrender.com/api/user/upload-avatar",
        method : 'put'
    },
    updateUserDetails : {
        url : 'https://fmp-g1qj.onrender.com/api/user/update-user',
        method : 'put'
    },
    addCategory : {
        url : 'https://fmp-g1qj.onrender.com/api/category/add-category',
        method : 'post'
    },
    uploadImage : {
        url : 'https://fmp-g1qj.onrender.com/api/file/upload',
        method : 'post'
    },
    getCategory : {
        url : 'https://fmp-g1qj.onrender.com/api/category/get',
        method : 'get'
    },
    updateCategory : {
        url : 'https://fmp-g1qj.onrender.com/api/category/update',
        method : 'put'
    },
    deleteCategory : {
        url : 'https://fmp-g1qj.onrender.com/api/category/delete',
        method : 'delete'
    },
    createSubCategory : {
        url : 'https://fmp-g1qj.onrender.com/api/subcategory/create',
        method : 'post'
    },
    getSubCategory : {
        url : 'https://fmp-g1qj.onrender.com/api/subcategory/get',
        method : 'post'
    },
    updateSubCategory : {
        url : 'https://fmp-g1qj.onrender.com/api/subcategory/update',
        method : 'put'
    },
    deleteSubCategory : {
        url : 'https://fmp-g1qj.onrender.com/api/subcategory/delete',
        method : 'delete'
    },
    createProduct : {
        url : 'https://fmp-g1qj.onrender.com/api/product/create',
        method : 'post'
    },
    getProduct : {
        url : 'https://fmp-g1qj.onrender.com/api/product/get',
        method : 'post'
    },
    getProductByCategory : {
        url : 'https://fmp-g1qj.onrender.com/api/product/get-product-by-category',
        method : 'post'
    },
    getProductByCategoryAndSubCategory : {
        url : 'https://fmp-g1qj.onrender.com/api/product/get-pruduct-by-category-and-subcategory',
        method : 'post'
    },
    getProductDetails : {
        url : 'https://fmp-g1qj.onrender.com/api/product/get-product-details',
        method : 'post'
    },
    updateProductDetails : {
        url : "https://fmp-g1qj.onrender.com/api/product/update-product-details",
        method : 'put'
    },
    deleteProduct : {
        url : "https://fmp-g1qj.onrender.com/api/product/delete-product",
        method : 'delete'
    },
    searchProduct : {
        url : 'https://fmp-g1qj.onrender.com/api/product/search-product',
        method : 'post'
    },
    addTocart : {
        url : "https://fmp-g1qj.onrender.com/api/cart/create",
        method : 'post'
    },
    getCartItem : {
        url : 'https://fmp-g1qj.onrender.com/api/cart/get',
        method : 'get'
    },
    updateCartItemQty : {
        url : 'https://fmp-g1qj.onrender.com/api/cart/update-qty',
        method : 'put'
    },
    deleteCartItem : {
        url : 'https://fmp-g1qj.onrender.com/api/cart/delete-cart-item',
        method : 'delete'
    },
    createAddress : {
        url : 'https://fmp-g1qj.onrender.com/api/address/create',
        method : 'post'
    },
    getAddress : {
        url : 'https://fmp-g1qj.onrender.com/api/address/get',
        method : 'get'
    },
    updateAddress : {
        url : 'https://fmp-g1qj.onrender.com/api/address/update',
        method : 'put'
    },
    disableAddress : {
        url : 'https://fmp-g1qj.onrender.com/api/address/disable',
        method : 'delete'
    },
    CashOnDeliveryOrder : {
        url : "https://fmp-g1qj.onrender.com/api/order/cash-on-delivery",
        method : 'post'
    },
    payment_url : {
        url : "https://fmp-g1qj.onrender.com/api/order/checkout",
        method : 'post'
    },
    getOrderItems : {
        url : 'https://fmp-g1qj.onrender.com/api/order/order-list',
        method : 'get'
    }
}

export default SummaryApi





