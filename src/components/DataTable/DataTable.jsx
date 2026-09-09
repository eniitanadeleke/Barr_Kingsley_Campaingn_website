import './DataTable.css'

/** Thin wrapper so tables scroll rather than break the layout on phones. */
export default function DataTable({ children, caption }) {
  return (
    <div className="table-scroll" role="region" aria-label={caption} tabIndex={0}>
      <table className="plain">{children}</table>
    </div>
  )
}
