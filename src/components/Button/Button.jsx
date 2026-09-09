import { Link } from 'react-router-dom'
import './Button.css'

/**
 * variant: "primary" | "secondary" | "dark"
 * Renders a router Link when `to` is given, an <a> when `href` is
 * given, and a real <button> otherwise.
 */
export default function Button({
  variant = 'primary',
  to,
  href,
  type = 'button',
  children,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (to) return <Link className={classes} to={to} {...rest}>{children}</Link>
  if (href) return <a className={classes} href={href} {...rest}>{children}</a>
  return <button className={classes} type={type} {...rest}>{children}</button>
}
