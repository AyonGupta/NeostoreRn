import { Base_Url } from '../Utilities/Constants/ServiceConstant'
const Sub_Base_Url = 'products/getList?'

const ProductService = 
{
    GetProducts : (id, limit, page)  =>
    {
        let url = Base_Url + Sub_Base_Url
        const product_category_id = 'product_category_id=' + id
        const limitUrl = '&limit=' + limit
        const pageUrl =  '&page' + page
        url = url + product_category_id + limitUrl + pageUrl

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

export default ProductService