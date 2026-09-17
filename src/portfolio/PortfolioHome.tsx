import { useEffect } from "react";
import ReferenceNav from "./ReferenceNav";
import ReferenceJourney from "./ReferenceJourney";
import ReferenceDirectory from "./ReferenceDirectory";
import ReferenceFooter from "./ReferenceFooter";
import { portfolioIdentity } from "../content/portfolioIdentity";

export default function PortfolioHome() {
  // Route-level metadata
  useEffect(() => {
    document.title = "Toni Adreal — Portfolio";
    const desc = document.querySelector('meta[name="description"]');
    const content = portfolioIdentity.thesis;
    if (desc) {
      desc.setAttribute("content", content);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="reference-home">
      <ReferenceNav />
      <main id="main-content">
        <ReferenceJourney />
        <ReferenceDirectory />
      </main>
      <ReferenceFooter />
    </div>
  );
}
