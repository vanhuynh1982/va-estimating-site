export function Card({ children }) {
  return <div className="rounded-xl shadow-md border">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
