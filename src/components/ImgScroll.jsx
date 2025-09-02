import { useEffect } from "react";
import java from "../pics/javacute.svg";
import html from "../pics/htmlcute.svg";
import css from "../pics/csscute.svg"
import javascript from "../pics/jscute.svg";
import react from "../pics/reactcute.svg";

const icons = [
  { src: java, alt: "Java Icon in Cute Style" },
  { src: react, alt: "React Icon in Cute Style" },
  { src: javascript, alt: "JavaScript Icon in Cute Style" },
  { src: html, alt: "HTML Icon in Cute Style" },
  { src: css, alt: "CSS Icon in Cute Style" },
];

const ImgScroll = () => {

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

    const scrollerBanner = scroller.querySelector(".scrollerBanner");
    const bannerImgs = Array.from(scrollerBanner.children);

    bannerImgs.forEach(icon => {
        const duplicatedItem = icon.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
    })
    });
}
  }, []);

    return <>
        <div className="scroller">
            <div className="scrollerBanner"> 
                {icons.map((icon, i) => (
                <img key={`icon-${i}`} src={icon.src} alt={icon.alt} className="icon" />
                 ))}
                {icons.map((icon, i) => (
                    <img
                        key={`dup-${i}`}
                        src={icon.src}
                        alt=""
                        aria-hidden="true"
                        className="icon"
                    />
                ))}
              </div>
              </div>
              </>
}

export default ImgScroll;