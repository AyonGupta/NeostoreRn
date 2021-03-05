import { Base_Url } from '../Utilities/Constants/ServiceConstant'
const Sub_Base_Url = 
{
    DETAIL : 'products/getDetail?',
    BUY : 'addToCart'
}

const ProductDetailService = 
{
    GetProductDetails : (id)  =>
    {
        let url = Base_Url + Sub_Base_Url.DETAIL
        const product_category_id = 'product_id=' + id
        url = url + product_category_id

        const requestOptions = {
            method: 'GET',
            headers: {}
        };
        
        return fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
    },
    AddToCart : (id, quantity) => 
    {
        let url = Base_Url + Sub_Base_Url.BUY

        let formData = new FormData()
        formData.append ('product_id', id)
        formData.append ('quantity', quantity)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'multipart/form-data', 'access_token' : '60363d1f0f412'},
            body: formData
        };

        return fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            return data
        });
    }
}

export default ProductDetailService