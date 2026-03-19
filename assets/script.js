// let instaImg = document.getElementById("instagram-img");

// instaImg.addEventListener("mouseenter",()=>{
//     instaImg.src="./assets/images/instagram.png"
// })
const animation_elements = document.querySelectorAll(".target_animation");
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      if(entry.target.classList.contains("text-logo")){
      entry.target.classList.add("text-logo-slideIn");
      }
      if(entry.target.classList.contains("perc2")){
        entry.target.classList.add("perc2-animation");
        }
        if(entry.target.classList.contains("perc")){
          entry.target.classList.add("perc-animation");
          }
          if(entry.target.classList.contains("hero-img-overlay")){
            entry.target.classList.add("hero-img-overlay-animation");
            }
            if(entry.target.classList.contains("akash")){
              entry.target.classList.add("akash-animation");
              }
              if(entry.target.classList.contains("akash-rect-overlay")){
                entry.target.classList.add("akash-rect-overlay-animation");
                }
                if(entry.target.classList.contains("biography-line")){
                  entry.target.classList.add("biography-line-animation");
                  }
                  if(entry.target.classList.contains("carousel__headline")){
                    entry.target.classList.add("carouselAnimation");
                    }
                      if(entry.target.classList.contains("biography-para") || entry.target.classList.contains("paralogo")){
                        entry.target.classList.add("biography-paraAnim");
                        }
                        if(entry.target.classList.contains("paralogo")){
                          entry.target.classList.add("biography-paraAnim2");
                          }
                          if(entry.target.classList.contains("contact-group")){
                            entry.target.classList.add("contact-groupAnim");
                            }
      // entry.target.classList.add("myanimation");
    }
    else{
      // entry.target.classList.remove("animate");
    }
  })
},{threshold:0.5})
for(let  i=0;i<animation_elements.length;i++){
  const el = animation_elements[i];
  observer.observe(el);
}
function hover(element, path) {
  element.setAttribute("src", path);
}

function unhover(element, path) {
  element.setAttribute("src", path);
}

window.addEventListener("load", () => {
  const COMPONENT_SELECTOR = ".carousel__wrapper";
  const CONTROLS_SELECTOR = ".carousel__controls";
  const CONTENT_SELECTOR = ".carousel__content";

  const components = document.querySelectorAll(COMPONENT_SELECTOR);

  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    const content = component.querySelector(CONTENT_SELECTOR);
    let x = 0;
    let mx = 0;
    const maxScrollWidth =
      content.scrollWidth - content.clientWidth / 2 - content.clientWidth / 2;
    const nextButton = component.querySelector(".arrow-next");
    const prevButton = component.querySelector(".arrow-prev");

    if (maxScrollWidth !== 0) {
      component.classList.add("has-arrows");
    }

    if (nextButton) {
      nextButton.addEventListener("click", function (event) {
        event.preventDefault();
        x = content.clientWidth / 2 + content.scrollLeft + 0;
        content.scroll({
          left: x,
          behavior: "smooth",
        });
      });
    }

    if (prevButton) {
      prevButton.addEventListener("click", function (event) {
        event.preventDefault();
        x = content.clientWidth / 2 - content.scrollLeft + 0;
        content.scroll({
          left: -x,
          behavior: "smooth",
        });
      });
    }

    /**
     * Mouse move handler.
     *
     * @param {object} e event object.
     */
    const mousemoveHandler = (e) => {
      const mx2 = e.pageX - content.offsetLeft;
      if (mx) {
        content.scrollLeft = content.sx + mx - mx2;
      }
    };

    /**
     * Mouse down handler.
     *
     * @param {object} e event object.
     */
    const mousedownHandler = (e) => {
      content.sx = content.scrollLeft;
      mx = e.pageX - content.offsetLeft;
      content.classList.add("dragging");
    };

    /**
     * Scroll handler.
     */
    const scrollHandler = () => {
      toggleArrows();
    };

    /**
     * Toggle arrow handler.
     */
    const toggleArrows = () => {
      if (content.scrollLeft > maxScrollWidth - 10) {
        nextButton.classList.add("disabled");
      } else if (content.scrollLeft < 10) {
        prevButton.classList.add("disabled");
      } else {
        nextButton.classList.remove("disabled");
        prevButton.classList.remove("disabled");
      }
    };

    /**
     * Mouse up handler.
     */
    const mouseupHandler = () => {
      mx = 0;
      content.classList.remove("dragging");
    };

    content.addEventListener("mousemove", mousemoveHandler);
    content.addEventListener("mousedown", mousedownHandler);
    if (component.querySelector(CONTROLS_SELECTOR) !== undefined) {
      content.addEventListener("scroll", scrollHandler);
    }
    content.addEventListener("mouseup", mouseupHandler);
    content.addEventListener("mouseleave", mouseupHandler);
  }
});

function setMainVideo(url,purl){
    document.getElementById("mainVideo").src = url+"#t=0.5";
    document.getElementById("mainVideo").setAttribute("poster","#");
}
const carouselItemsNew = document.querySelectorAll('.carousel__item');

// Iterate through each carousel item
carouselItemsNew.forEach(item => {
    // Attach click event listener to each item
    item.addEventListener('click', () => {
        // Set window location hash to #videos when clicked
        window.scrollBy(0, -500);
    });
});