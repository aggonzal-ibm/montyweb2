import empresaMethods from '@/methods/empresaMethods';

export default {
  data() {
    return {
      empresasList: [],
      showForm: false,
      empresaForm: {
        nombre: ''
      }
    }
  },
  methods: {
    async getEmpresas() {
      try {
        this.empresasList = await empresaMethods.getEmpresas();
      } catch (error) {
        console.error("Error getting empresas: ", error);
      }
    },

    async createEmpresa() {
      try {
        const newEmpresa = await empresaMethods.createEmpresa(this.empresaForm);
        this.empresasList.push(newEmpresa);
        this.showForm = false;
        this.empresaForm = {
          name: ''
        };
      } catch (error) {
        console.error("Error creating empresa: ", error);
      }
    },

    showAddEmpresaForm() {
      this.showForm = true;
    },

    async updateEmpresa(empresaData) {
      try {
        const updatedEmpresa = await empresaMethods.updateEmpresa(empresaData);
        const index = this.empresasList.findIndex(empresa => empresa.id === empresaData.id);
        this.empresasList.splice(index, 1, updatedEmpresa);
      } catch (error) {
        console.error("Error updating empresa: ", error);
      }
    },

    async deleteEmpresa(idEmpresa) {
      try {
        await empresaMethods.deleteEmpresa(idEmpresa);
        this.empresasList = this.empresasList.filter(empresa => empresa.id !== idEmpresa);
      } catch (error) {
        console.error("Error deleting empresa: ", error);
      }
    },
  },
  created() {
    this.getEmpresas();
  }
};
