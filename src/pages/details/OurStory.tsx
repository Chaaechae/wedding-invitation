import { BRIDE_FIRSTNAME, GROOM_FIRSTNAME } from "../../const"
import { DetailLayout } from "./DetailLayout"

export const OurStory = () => {
  return (
    <DetailLayout title="Our Story" subtitle="우리 이야기" accent="#a378c9">
      <section className="detail__hero">
        <div className="detail__hero-emoji">💗</div>
        <p className="detail__hero-text">
          {GROOM_FIRSTNAME} &amp; {BRIDE_FIRSTNAME}
        </p>
      </section>

      <p className="detail__placeholder">
        💌 두 사람의 이야기는 곧 채워질 예정이에요.
      </p>
    </DetailLayout>
  )
}
