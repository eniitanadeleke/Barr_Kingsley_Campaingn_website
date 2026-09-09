import { useState } from 'react'

/**
 * Client-side validation for the volunteer and contact forms.
 *
 * This validates and reports back to the person filling the form. It
 * does NOT submit anywhere — no backend is connected yet. Wire the
 * `onValid` callback to a real endpoint when one exists, and keep
 * server-side validation as well: this layer is a courtesy to the
 * user, never a security control.
 */
export default function useFormValidation(rules) {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)   // null | 'error' | 'pending'

  const validate = (form) => {
    const found = {}
    for (const [name, rule] of Object.entries(rules)) {
      const field = form.elements[name]
      if (!field) continue
      const value = field.type === 'checkbox' ? field.checked : (field.value || '').trim()
      const message = rule(value)
      if (message) found[name] = message
    }
    return found
  }

  const handleSubmit = (onValid) => (e) => {
    e.preventDefault()
    const found = validate(e.target)
    setErrors(found)

    if (Object.keys(found).length) {
      setStatus('error')
      // Move focus to the first field with a problem.
      const first = e.target.elements[Object.keys(found)[0]]
      if (first && first.focus) first.focus()
      return
    }

    setStatus('pending')
    if (onValid) onValid(e.target)
  }

  const clearField = (name) =>
    setErrors(prev => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })

  return { errors, status, handleSubmit, clearField }
}

/* Reusable rules */
export const required = (label) => (v) => (v ? null : `${label} is required.`)
export const requiredCheck = (msg) => (v) => (v ? null : msg)
export const phone = (v) => {
  if (!v) return 'Phone number is required.'
  return /^[\d\s+()-]{7,}$/.test(v) ? null : 'Enter a valid phone number.'
}
export const email = (v) => {
  if (!v) return 'Email address is required.'
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? null : 'Enter a valid email address.'
}
