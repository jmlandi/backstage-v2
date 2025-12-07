import { ref, reactive } from 'vue'

/**
 * Composable for handling contact form submission via email
 */
export function useContact() {
  const formData = reactive({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const errors = reactive({
    nome: '',
    email: '',
    mensagem: ''
  })

  const loading = ref(false)
  const submitMessage = ref(null)

  /**
   * Validate name field
   */
  const validateName = () => {
    if (!formData.nome || formData.nome.trim().length < 3) {
      errors.nome = 'Nome deve ter no mínimo 3 caracteres'
      return false
    }
    errors.nome = ''
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
    if (!formData.mensagem || formData.mensagem.trim().length < 10) {
      errors.mensagem = 'Mensagem deve ter no mínimo 10 caracteres'
      return false
    }
    errors.mensagem = ''
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
        let errorMessage = 'Failed to submit contact form'
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch (e) {
          // Response is not JSON, use status text
          errorMessage = response.statusText || errorMessage
        }
        throw new Error(errorMessage)
      }

      const data = await response.json()

      submitMessage.value = {
        type: 'success',
        text: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      }

      // Reset form
      formData.nome = ''
      formData.email = ''
      formData.telefone = ''
      formData.mensagem = ''
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
