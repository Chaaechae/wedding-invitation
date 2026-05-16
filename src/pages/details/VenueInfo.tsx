import {
  LOCATION,
  LOCATION_ADDRESS,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { DetailLayout } from "./DetailLayout"

export const VenueInfo = () => {
  return (
    <DetailLayout title="예식장 정보" subtitle="VENUE & TIME">
      <section className="detail__hero">
        <div className="detail__hero-emoji">💒</div>
        <p className="detail__hero-text">
          {WEDDING_DATE.format(WEDDING_DATE_FORMAT)}
        </p>
      </section>

      <section className="detail__list">
        <div className="detail__row">
          <span className="detail__row-label">장소</span>
          <span className="detail__row-value">{LOCATION}</span>
        </div>
        <div className="detail__row">
          <span className="detail__row-label">주소</span>
          <span className="detail__row-value">{LOCATION_ADDRESS}</span>
        </div>
        <div className="detail__row">
          <span className="detail__row-label">일시</span>
          <span className="detail__row-value">
            {WEDDING_DATE.format("YYYY년 M월 D일 (ddd) A h시 m분")}
          </span>
        </div>
      </section>

      <p className="detail__placeholder">
        ✏️ 지도, 주차, 셔틀버스 정보 등은 곧 추가될 예정입니다.
      </p>
    </DetailLayout>
  )
}
