import { ReactNode } from "react"

type Props = {
  title: string
  subtitle?: string
  accent?: string
  children: ReactNode
}

export const DetailLayout = ({
  title,
  subtitle,
  accent = "var(--orange-deep)",
  children,
}: Props) => {
  return (
    <div className="app-shell detail">
      <header className="detail__header">
        <button
          className="detail__back"
          onClick={() => {
            window.location.hash = "#/hub"
          }}
          aria-label="back"
        >
          ←
        </button>
        <div className="detail__heading">
          <p className="detail__subtitle" style={{ color: accent }}>
            {subtitle}
          </p>
          <h1 className="detail__title">{title}</h1>
        </div>
      </header>
      <main className="detail__body">{children}</main>
    </div>
  )
}
