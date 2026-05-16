import { DetailLayout } from "./DetailLayout"

export const VenueMenu = () => {
  return (
    <DetailLayout title="예식장 메뉴" subtitle="MENU" accent="#e08a6f">
      <section className="detail__hero">
        <div className="detail__hero-emoji">🍽️</div>
        <p className="detail__hero-text">소중한 분들을 위한 만찬</p>
      </section>

      <section className="detail__list">
        <div className="detail__row">
          <span className="detail__row-label">메뉴</span>
          <span className="detail__row-value">곧 공개됩니다</span>
        </div>
      </section>

      <p className="detail__placeholder">
        🍷 코스 구성, 식음료 정보 등은 추후 업데이트 됩니다.
      </p>
    </DetailLayout>
  )
}
