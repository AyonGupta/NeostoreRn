import { Base_Url } from '../Utilities/Constants/ServiceConstant'
const Sub_Base_Url = 'products/getDetail?'

const ProductDetailService = 
{
    GetProductDetails : (id)  =>
    {
        let url = Base_Url + Sub_Base_Url
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
    }
}

export default ProductDetailService