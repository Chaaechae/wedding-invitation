import {
  BRIDE_FIRSTNAME,
  GROOM_FIRSTNAME,
  WEDDING_DATE,
} from "../const"

const goHub = () => {
  window.location.hash = "#/hub"
}

export const Landing = () => {
  return (
    <div className="app-shell landing" onClick={goHub} role="button">
      <div className="landing__sky" />
      <div className="landing__cloud landing__cloud--top" />
      <div className="landing__cloud landing__cloud--bottom" />

      <header className="landing__header">
        <p className="landing__kicker">you&apos;re invited to</p>
      </header>

      <div className="landing__stage">
        <div className="envelope">
          <div className="envelope__flap" />
          <div className="envelope__card">
            <p className="envelope__title script">the new chapter</p>
            <span className="envelope__divider" />
            <p className="envelope__names">
              {GROOM_FIRSTNAME} <span>&amp;</span> {BRIDE_FIRSTNAME}
            </p>
          </div>
          <div className="envelope__body">
            <div className="envelope__fold envelope__fold--left" />
            <div className="envelope__fold envelope__fold--right" />
          </div>
        </div>
      </div>

      <div className="landing__caption">
        <p className="landing__date">
          {WEDDING_DATE.format("YYYY. MM. DD")}
        </p>
        <p className="landing__date-sub">
          {WEDDING_DATE.format("dddd · A h:mm")}
        </p>
      </div>

      <div className="landing__tap-hint">tap to open</div>
    </div>
  )
}
