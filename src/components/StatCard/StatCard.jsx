import './StatCard.css'

export default function StatCard({ value, children, className = '' }) {
  return (
    <div className={`stat ${className}`.trim()}>
      <strong className="stat__value">{value}</strong>
      <div className="stat__body">{children}</div>
    </div>
  )
}
