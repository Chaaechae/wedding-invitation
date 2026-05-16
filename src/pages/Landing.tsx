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
    <div className="app-shell landing">
      <div className="landing__sky" />
      <div className="landing__clouds landing__clouds--back" />
      <div className="landing__clouds landing__clouds--front" />

      <header className="landing__header">
        <span className="landing__script-small script">our</span>
        <span className="landing__script-large script">wedding</span>
      </header>

      <div className="landing__stage">
        <div className="laptop" onClick={goHub} role="button" tabIndex={0}>
          <div className="laptop__lid">
            <div className="laptop__screen">
              <div className="laptop__waves" />
              <button className="enter-pill" onClick={goHub}>
                <span>enter</span>
              </button>
            </div>
          </div>
          <div className="laptop__hinge" />
          <div className="laptop__base">
            <div className="laptop__keyboard" />
            <div className="laptop__trackpad" />
          </div>
        </div>
      </div>

      <div className="landing__caption">
        <h1>From this day, forever</h1>
        <p className="landing__tagline">
          {GROOM_FIRSTNAME} &amp; {BRIDE_FIRSTNAME} are getting married
          <span className="landing__cloud-icon">☁️</span>
        </p>
        <p className="landing__date">
          {WEDDING_DATE.format("YYYY. MM. DD")} ·{" "}
          {WEDDING_DATE.format("dddd")}
        </p>
      </div>

      <div className="landing__tap-hint">tap to enter</div>
    </div>
  )
}
