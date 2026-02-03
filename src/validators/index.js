import Joi from 'joi'

const ROLES = ['User', 'Editor', 'Admin']
const STATUSES = ['active', 'inactive']

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Please enter a valid email address',
      'string.empty': 'Email is required',
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters',
      'string.empty': 'Password is required',
    }),
})

export const userSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .trim()
    .required()
    .messages({
      'string.min': 'Name must be at least 2 characters',
      'string.max': 'Name must be less than 100 characters',
      'string.empty': 'Name is required',
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Please enter a valid email address',
      'string.empty': 'Email is required',
    }),
  role: Joi.string()
    .valid(...ROLES)
    .required()
    .messages({
      'any.only': 'Role must be one of: ' + ROLES.join(', '),
    }),
  status: Joi.string()
    .valid(...STATUSES)
    .required()
    .messages({
      'any.only': 'Status must be one of: ' + STATUSES.join(', '),
    }),
})

/**
 * Validate data against a Joi schema.
 * On success returns { value }. On failure returns { error: string, errors: { [field]: message } }.
 * @param {Joi.Schema} schema - Joi schema
 * @param {object} data - Data to validate
 * @returns {{ value?: object, error?: string, errors?: object }}
 */
export function validate(schema, data) {
  const { error, value } = schema.validate(data, { abortEarly: false })
  if (error) {
    const errors = {}
    error.details.forEach((d) => {
      const field = d.path[0]
      if (!errors[field]) errors[field] = d.message
    })
    const message = error.details.map((d) => d.message).join('. ')
    return { error: message, errors }
  }
  return { value }
}
