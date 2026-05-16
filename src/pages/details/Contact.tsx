import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { DetailLayout } from "./DetailLayout"

const Group = ({
  heading,
  rows,
}: {
  heading: string
  rows: { relation: string; name: string; phone: string }[]
}) => (
  <div className="detail__group">
    <h3 className="detail__group-title">{heading}</h3>
    {rows.map((row) => (
      <div className="detail__contact-row" key={row.relation}>
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

export const Contact = () => {
  return (
    <DetailLayout title="Contact" subtitle="연락처" accent="var(--pink-deep)">
      <Group heading="신랑측" rows={GROOM_INFO} />
      <Group heading="신부측" rows={BRIDE_INFO} />
      <p className="detail__placeholder">
        💌 계좌 정보 (마음 전하기)는 추후 별도 페이지로 추가 예정.
      </p>
    </DetailLayout>
  )
}
