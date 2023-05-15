import auth from '../services/auth'

export default {
  async login(email, password) {
    try {
      const { data } = await auth.authenticateUser(email, password)
      return data;
    } catch (error) {
      console.error(error)
      throw error;
    }
  }
}

