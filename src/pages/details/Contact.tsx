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

const ContactGroup = ({
  heading,
  rows,
}: {
  heading: string
  rows: Row[]
}) => (
  <div className="detail__group">
    <h3 className="detail__group-title">{heading}</h3>
    {rows.map((row) => (
      <div className="detail__contact-row" key={`contact-${row.relation}`}>
        <div className="detail__contact-left">
          <span className="detail__contact-relation">{row.relation}</span>
          <span className="detail__contact-name">{row.name}</span>
        </div>
        <a
          href={`tel:${row.phone}`}
          className="detail__contact-call"
          aria-label="call"
        >
          📞
        </a>
      </div>
    ))}
  </div>
)

const AccountGroup = ({
  heading,
  rows,
}: {
  heading: string
  rows: Row[]
}) => (
  <div className="detail__group">
    <h3 className="detail__group-title">{heading}</h3>
    {rows.map((row) => (
      <div className="detail__account-row" key={`account-${row.relation}`}>
        <div className="detail__account-info">
          <span className="detail__account-relation">
            {row.relation} · {row.name}
          </span>
          <span className="detail__account-detail">{row.account}</span>
        </div>
        <button
          className="detail__copy-btn"
          onClick={() => copy(row.account)}
        >
          복사
        </button>
      </div>
    ))}
  </div>
)

export const Contact = () => {
  return (
    <DetailLayout
      title="Contact Information"
      subtitle="연락처 · 마음 전하기 · 화환"
      accent="var(--pink-deep)"
    >
      <p className="detail__section-label">연락처</p>
      <ContactGroup heading="신랑측" rows={GROOM_INFO} />
      <ContactGroup heading="신부측" rows={BRIDE_INFO} />

      <p className="detail__section-label">마음 전하기</p>
      <AccountGroup heading="신랑측 계좌" rows={GROOM_INFO} />
      <AccountGroup heading="신부측 계좌" rows={BRIDE_INFO} />
      <p className="detail__note">
        축하의 마음을 담아 전해주시는 모든 정성에<br />
        진심으로 감사드립니다.
      </p>

      <p className="detail__section-label">화환 안내</p>
      <p className="detail__note">
        🌸 화환은 정중히 사양합니다.<br />
        보내주시는 마음만으로도 충분히 감사합니다.
      </p>
    </DetailLayout>
  )
}
