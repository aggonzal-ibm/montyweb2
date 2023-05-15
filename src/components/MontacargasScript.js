import montacargasMethods from '@/methods/montacargasMethods';
import empresasMethods from '@/methods/empresaMethods';
import { mapActions } from 'vuex';
import Swal from 'sweetalert2';




export default {
  data() {
     return {
      montacargasImageUrl: 'https://toyotamontacargas.pe/wp-content/uploads/2022/06/Montacargas-1-2.5tn.jpg?x30985',
      empresas: [],
      montacargasList: [],
      selectedEmpresa: null,
      montacargasForm: {
        id: null,
        modelo: '',
        serial_placa_qr: '',
        horas_ini: null,
        fecha_ini: null,
        combustible_ini: null,
        horas_fin: null,
        fecha_fin: null,
        combustible_fin: null
      },
      isEditing: false,
      isAdding: false
    };
  },

	  async mounted() {
    await empresasMethods.getEmpresas();
    // ... cualquier otro código que quieras ejecutar cuando el componente esté montado
  },

  async created() {
    this.empresas = await empresasMethods.getEmpresas();
    this.montacargasList = [
     
    ];
  },

  computed: {
    totalPages() {
      return Math.ceil(this.montacargasList.length / this.itemsPerPage);
    },
    paginatedMontacargas() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.montacargasList.slice(startIndex, endIndex);
    }
  },

  methods: {

		async getEmpresas() {
      this.empresas = await empresasMethods.getEmpresas();
    },
    ...mapActions(['removeToken']),
		  showAddMontacargasForm() {
      this.isAdding = true;
    },

    cancelAddMontacargasForm() {
      this.resetForm();
      this.isAdding = false;
    },

    confirmDeleteMontacargas(idMontacargas) {
      Swal.fire({
        title: 'Eliminar Montacargas',
        text: '¿Estás seguro de que deseas eliminar este montacargas?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteMontacargas(idMontacargas);
        }
      });
    },

    cancelForm(showConfirmation) {
      if (showConfirmation && !confirm('¿Estás seguro de cerrar el formulario?')) {
        return;
      }
      this.resetForm();
      this.isEditing = false;
      this.isAdding = false;
    },

    async deleteMontacargas(idMontacargas) {
      await montacargasMethods.deleteMontacargas(this.selectedEmpresa, idMontacargas);
      this.getMontacargas();
      Swal.fire('Eliminado', 'El montacargas ha sido eliminado exitosamente', 'success');
    },

    async logout() {
      await this.removeToken();
      this.$router.push({ name: 'Login' });
    },

    async getMontacargas() {
      if (this.selectedEmpresa) {
        this.montacargasList = await montacargasMethods.getMontacargas(this.selectedEmpresa);
      }
    },

    editMontacargas(montacargas) {
      this.isEditing = true;
      this.montacargasForm.id = montacargas.id;
      this.montacargasForm.modelo = montacargas.modelo;
      this.montacargasForm.serial_placa_qr = montacargas.serial_placa_qr;
      this.montacargasForm.horas_ini = montacargas.horas_ini;
      this.montacargasForm.fecha_ini = montacargas.fecha_ini;
      this.montacargasForm.combustible_ini = montacargas.combustible_ini;
      this.montacargasForm.horas_fin = montacargas.horas_fin;
      this.montacargasForm.fecha_fin = montacargas.fecha_fin;
      this.montacargasForm.combustible_fin = montacargas.combustible_fin;
    },

    async addMontacargas() {
      await montacargasMethods.createMontacargas(this.selectedEmpresa, this.montacargasForm);
      this.resetForm();
      this.isAdding = false;
      this.getMontacargas();
    },

    async updateMontacargas() {
      await montacargasMethods.updateMontacargas(this.selectedEmpresa, this.montacargasForm);
      this.resetForm();
      this.isEditing = false;
      this.getMontacargas();
    },

    resetForm() {
      this.montacargasForm.id = null
			      this.montacargasForm.modelo = '';
      this.montacargasForm.serial_placa_qr = '';
      this.montacargasForm.horas_ini = null;
      this.montacargasForm.fecha_ini = null;
      this.montacargasForm.combustible_ini = null;
      this.montacargasForm.horas_fin = null;
      this.montacargasForm.fecha_fin = null;
      this.montacargasForm.combustible_fin = null;
    },

    showAddMontacargasForm() {
      this.isAdding = true;
    },

    cancelAddMontacargasForm() {
      this.resetForm();
      this.isAdding = false;
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
};