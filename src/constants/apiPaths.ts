const API_PATHS = {
  order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  import: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  bff: 'https://.execute-api.eu-west-1.amazonaws.com/dev'
};

const BASE_API_PATH = 'https://xyxr3kd5v4.execute-api.eu-west-1.amazonaws.com/dev';

const PRODUCTS_API_PATHS = {
  getProducts: `${BASE_API_PATH}/products`,
  getProductById: `${BASE_API_PATH}/product`
};

export default API_PATHS;

export {
  PRODUCTS_API_PATHS
}
