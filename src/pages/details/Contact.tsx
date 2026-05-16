import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { DetailLayout } from "./DetailLayout"

type Row = {
  relation: string
  name: string
  phone: string
  account: string
}

const copy = (text: string) => {
  if (navigator.clipboard) {
    void navigator.clipboard.writeText(text)
  }
}

const Group = ({ heading, rows }: { heading: string; rows: Row[] }) => (
  <div className="detail__group">
    <h3 className="detail__group-title">{heading}</h3>
    {rows.map((row) => (
      <div className="detail__merged-row" key={row.relation}>
        <div className="detail__merged-head">
          <div className="detail__merged-left">
            <span className="detail__merged-relation">{row.relation}</span>
            <span className="detail__merged-name">{row.name}</span>
          </div>
          <a
            href={`tel:${row.phone}`}
            className="detail__contact-call"
            aria-label="call"
          >
            📞
          </a>
        </div>
        <div className="detail__merged-account">
          <span className="detail__account-detail">{row.account}</span>
          <button
            className="detail__copy-btn"
            onClick={() => copy(row.account)}
          >
            복사
          </button>
        </div>
      </div>
    ))}
  </div>
)

export const Contact = () => {
  return (
    <DetailLayout
      title="Contact Information"
      subtitle="연락처 / 계좌정보"
      accent="var(--pink-deep)"
    >
      <Group heading="신랑측" rows={GROOM_INFO} />
      <Group heading="신부측" rows={BRIDE_INFO} />
    </DetailLayout>
  )
}
