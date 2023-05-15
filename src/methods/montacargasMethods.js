// methods/montacargasMethods.js
import api from '@/services/api';

const montacargasMethods = {
  async getEmpresas() {
    const response = await api.getEmpresas();
    return response.data;
  },

  async getMontacargas(idEmpresa) {
    const response = await api.getMontacargas(idEmpresa);
    return response.data;
  },

  async createMontacargas(idEmpresa, montacargas) {
    const response = await api.createMontacargas(idEmpresa, montacargas);
    return response.data;
  },

  async updateMontacargas(idEmpresa, montacargas) {
    const response = await api.updateMontacargas(idEmpresa, montacargas);
    return response.data;
  },

  async deleteMontacargas(idEmpresa, idMontacargas) {
    const response = await api.deleteMontacargas(idEmpresa, idMontacargas);
    return response.data;
  },
};

export default montacargasMethods;
