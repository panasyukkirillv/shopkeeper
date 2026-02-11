import axios from 'axios'

const API_URL = 'http://localhost:8800'

export const productsService = {
  async getProducts () {
    return await axios.get(`${API_URL}/products`)
  },
  async createProduct (product) {
    return await axios.post(`${API_URL}/products`, product)
  },
  async updateProduct (product) {
    return await axios.put(`${API_URL}/products/${product.id}`, product)
  },
  async updateProductStatus (productID, productStatus) {
    return await axios.patch(`${API_URL}/products/${productID}`, { status: productStatus })
  },
  async deleteProduct (productID) {
    return await axios.delete(`${API_URL}/products/${productID}`)
  }
}
