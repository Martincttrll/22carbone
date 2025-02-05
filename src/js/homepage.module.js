import LocomotiveScroll from "locomotive-scroll";
import "/node_modules/locomotive-scroll/dist/locomotive-scroll.css";

export default function initScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smartphone: {
      smooth: true
  }
  });
}
