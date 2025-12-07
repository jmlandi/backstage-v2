import { ref, reactive } from 'vue'

/**
 * Composable for handling contact form submission to Neon Database
 */
export function useContact() {
  const formData = reactive({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const errors = reactive({
    name: '',
    email: '',
    message: ''
  })

  const loading = ref(false)
  const submitMessage = ref(null)

  /**
   * Validate name field
   */
  const validateName = () => {
    if (!formData.name || formData.name.trim().length < 3) {
      errors.name = 'Nome deve ter no mínimo 3 caracteres'
      return false
    }
    errors.name = ''
    return true
  }

  /**
   * Validate email field
   */
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Email inválido'
      return false
    }
    errors.email = ''
    return true
  }

  /**
   * Validate message field
   */
  const validateMessage = () => {
    if (!formData.message || formData.message.trim().length < 10) {
      errors.message = 'Mensagem deve ter no mínimo 10 caracteres'
      return false
    }
    errors.message = ''
    return true
  }

  /**
   * Handle form submission
   */
  const handleSubmit = async () => {
    // Validate all fields
    const isNameValid = validateName()
    const isEmailValid = validateEmail()
    const isMessageValid = validateMessage()

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return
    }

    loading.value = true
    submitMessage.value = null

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit contact form')
      }

      submitMessage.value = {
        type: 'success',
        text: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      }

      // Reset form
      formData.name = ''
      formData.email = ''
      formData.phone = ''
      formData.message = ''
    } catch (error) {
      console.error('Contact form submission error:', error)
      submitMessage.value = {
        type: 'error',
        text: error.message || 'Erro ao enviar mensagem. Tente novamente.'
      }
    } finally {
      loading.value = false
    }
  }

  return {
    formData,
    errors,
    loading,
    submitMessage,
    validateName,
    validateEmail,
    validateMessage,
    handleSubmit
  }
}
