// methods/empresaMethods.js
import api from '@/services/api';

const empresaMethods = {
  async getEmpresas() {
    const response = await api.getEmpresas(); // Añade los paréntesis después de getEmpresas
    return response.data;
  },


    async createEmpresa(empresa) {
    const response = await api.createEmpresa(empresa);
    return response.data;
  },
}

export default empresaMethods;
