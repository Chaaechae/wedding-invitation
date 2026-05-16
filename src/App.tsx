import { useEffect, useState } from "react"
import "./App.scss"
import { Landing } from "./pages/Landing"
import { Hub } from "./pages/Hub"
import { VenueInfo } from "./pages/details/VenueInfo"
import { VenueMenu } from "./pages/details/VenueMenu"
import { Gallery } from "./pages/details/Gallery"
import { OurStory } from "./pages/details/OurStory"
import { About } from "./pages/details/About"
import { Contact } from "./pages/details/Contact"

const parseRoute = () => {
  const hash = window.location.hash.replace(/^#\/?/, "")
  return hash || "landing"
}

function App() {
  const [route, setRoute] = useState<string>(parseRoute)

  useEffect(() => {
    const handler = () => {
      setRoute(parseRoute())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener("hashchange", handler)
    return () => window.removeEventListener("hashchange", handler)
  }, [])

  switch (route) {
    case "hub":
      return <Hub />
    case "venue":
      return <VenueInfo />
    case "menu":
      return <VenueMenu />
    case "gallery":
      return <Gallery />
    case "story":
      return <OurStory />
    case "about":
      return <About />
    case "contact":
      return <Contact />
    case "landing":
    default:
      return <Landing />
  }
}

export default App
