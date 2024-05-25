const localnavMenustate = document.querySelector('.localnav-menustate');
const navbar = document.querySelector('.flyout_nav');
const navbarAnim = document.querySelector('.animated_nav');
const menu = document.querySelector('.menu');
const blurr = document.querySelector('.blur_navbar_container');

const menuItems = document.querySelectorAll('.menu li a');
const mainBannerr = document.querySelector('.main_banner');

if (localnavMenustate && navbar && menu && blurr && menuItems) {

  localnavMenustate.addEventListener('change', () => {
    if (localnavMenustate.checked) {
      navbar.classList.add('expanded');
      menu.classList.add('open');
      blurr.classList.add('blur');
      
    } else {
      navbar.classList.remove('expanded');
      menu.classList.remove('open');
      blurr.classList.remove('blur');
    }

    if (navbarAnim) {
      if (localnavMenustate.checked && !navbarAnim.classList.contains('up_dark')) {
        navbarAnim.classList.add('up_dark');
        navbarAnim.classList.add('up_dark_indicator');
      } 
      if (!localnavMenustate.checked && navbarAnim.classList.contains('up_dark_indicator')) {
        navbarAnim.classList.remove('up_dark');
        navbarAnim.classList.remove('up_dark_indicator');
      } 
    }
    
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if (localnavMenustate.checked) {
        navbar.classList.remove('expanded');
        menu.classList.remove('open');
        blurr.classList.remove('blur');
        localnavMenustate.checked = false;
      }
    });
  });
  document.addEventListener('scroll', () => {
    if (localnavMenustate.checked) {
      navbar.classList.remove('expanded');
      menu.classList.remove('open');
      blurr.classList.remove('blur');
      localnavMenustate.checked = false;
    }
  });
  blurr.addEventListener('click', () => {
    if (localnavMenustate.checked) {
      navbar.classList.remove('expanded');
      menu.classList.remove('open');
      blurr.classList.remove('blur');
      localnavMenustate.checked = false;
    }
  });
}


$(document).ready(function() {
  if ($(".question").length > 0) {
    $(".question").click(function() {
      const answer = $(this).next(".answer");
      answer.slideToggle();
      $(this).find(".toggle-btn").toggleClass("active");
    });
  }

  if ($(".toggle-btn").length > 0) {
    $(".toggle-btn").click(function(e) {
      e.stopPropagation(); 
      const answer = $(this).closest(".faq_item").find(".answer");
      answer.slideToggle();
      $(this).toggleClass("active");
    });
  }
});


var togglePanelButton = document.getElementById('togglePanel');
var sidePanel = document.getElementById('sidePanel');
var content = document.getElementById('content');
var closePanelButton = document.getElementById('closePanel');

if (togglePanelButton) {
  togglePanelButton.addEventListener('click', function() {
    if (sidePanel && content) {
        sidePanel.classList.add('open');
        content.classList.add('shifted');
        document.documentElement.style.overflowY = 'hidden';
    }
  });
} 
if (closePanelButton) {
  closePanelButton.addEventListener('click', function() {
    if (sidePanel && content) {
      sidePanel.classList.remove('open');
      content.classList.remove('shifted');
    } 
    document.documentElement.style.overflowY = 'auto';
  });
} 


const insidePanel = document.getElementById('insidePanel');
const scrollIndicator = document.getElementById('scrollIndicator');

if (insidePanel) {
  insidePanel.addEventListener('scroll', () => {
    const scrollableWidth = insidePanel.scrollWidth - insidePanel.clientWidth;
    const scrollPosition = insidePanel.scrollLeft;
    const indicatorScale = scrollPosition / scrollableWidth;

    if (scrollIndicator) {
      scrollIndicator.style.transform = `scaleX(${indicatorScale})`;
    }
  });
}




// 

// window.addEventListener('scroll', function() {
//   checkVisibility('.main_card.one');
//   checkVisibility('.main_card.two');
//   checkVisibility('.main_card.three');
//   checkVisibility('.main_card.four');

//   checkVisibility('.carousel_section_title');
//   checkVisibility('.carousel_section_undtitle');
//   checkVisibility('.carousel-slide.one');
//   checkVisibility('.carousel-slide.two');

//   checkVisibility('.grey_support_title');
//   checkVisibility('.grey_support_undtitle');
//   checkVisibility('.grey_support_figure');

//   checkVisibility('.gates_title');
//   checkVisibility('.gates_undtitle');
//   checkVisibility('.gates_card.one');
//   checkVisibility('.gates_card.two');
//   checkVisibility('.gates_card.three');
// });

// function checkVisibility(selector) {
//   var card = document.querySelector(selector);
//   if (card) {
//       var rect = card.getBoundingClientRect();
//       if (rect.top <= window.innerHeight - 50) {
//           card.classList.add('up');
//       }
//   }
// }

window.addEventListener('scroll', function() {
  checkVisibility('.main_card');
  checkVisibility('.carousel_section_title');
  checkVisibility('.carousel_section_undtitle');
  checkVisibility('.carousel-slide');
  checkVisibility('.grey_support_title');
  checkVisibility('.grey_support_undtitle');
  checkVisibility('.grey_support_figure');
  checkVisibility('.gates_title');
  checkVisibility('.gates_undtitle');
  checkVisibility('.gates_card');
  checkVisibility('.grey_keygate_figure');
  checkVisibility('.grey_keyrolet_figure');
  checkVisibility('.installation_title');
  checkVisibility('.installation_img');
  checkVisibility('.installation_undtitle');
  checkVisibility('.auto_card');
  checkVisibility('.auto_main_btn');
  checkVisibility('.support_btn');
});

function checkVisibility(selector) {
  var cards = document.querySelectorAll(selector);
  cards.forEach(function(card) {
    var rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 50) {
      card.classList.add('up');
    }
  });
}



// function initScrollEventListener() {
  window.addEventListener('scroll', function() {
    var flyoutNav = document.querySelector('.animated_nav');
    var flyoutNavTwo = document.querySelector('.animated_nav_two');
    var flyoutNavLight = document.querySelector('.flyout_nav.light');
    const navBorderAnim = document.querySelector('.nav_border_anim');
    var barrierHeroSection = document.querySelector('.barrier_hero_section');
    var bodyHeroAnim = document.querySelector('.hero_anim');
    var mainCardContainer = document.querySelector('.main_card_container');

    if(flyoutNav && mainCardContainer) {
      var flyoutNavRect = flyoutNav.getBoundingClientRect();
      var mainCardContainerRect = mainCardContainer.getBoundingClientRect();

      if (flyoutNavRect.bottom >= mainCardContainerRect.top + 1) {
        flyoutNav.classList.add('up_dark');
      } 
      
      if (flyoutNavRect.bottom < mainCardContainerRect.top + 1) {
        flyoutNav.classList.remove('up_dark');
      }
    }

    if(flyoutNavTwo && bodyHeroAnim && barrierHeroSection) {
      var bodyHeroAnimRect = bodyHeroAnim.getBoundingClientRect();
      var barrierHeroSectionRect = barrierHeroSection.getBoundingClientRect();
      
      if (bodyHeroAnimRect.top < -160) {
        flyoutNavTwo.classList.add('up_blur');
      } 
      if (bodyHeroAnimRect.top > -160) {
        flyoutNavTwo.classList.remove('up_blur');
      } 

      if (barrierHeroSectionRect.bottom <= 0) {
        flyoutNavTwo.classList.add('light');
        flyoutNavTwo.classList.add('border');
      } 
      if (barrierHeroSectionRect.bottom > 0) {
        flyoutNavTwo.classList.remove('light');
        flyoutNavTwo.classList.remove('border');
      } 
    }
    if(flyoutNavLight && navBorderAnim) {
      var bodyHeroAnimRect = navBorderAnim.getBoundingClientRect();

      if (bodyHeroAnimRect.top < -5) {
        flyoutNavLight.classList.add('border');
      } 
      if (bodyHeroAnimRect.top > -5) {
        flyoutNavLight.classList.remove('border');
      } 
    }
  });
// }

// Перевіряємо, чи є необхідні елементи перед ініціалізацією
// if (document.querySelector('.main_card_container') && document.querySelector('.flyout_nav')) {
//   initScrollEventListener();
// }



//////////////////// rainbow
function scrolling(startValue, endValue, scrollDistance, containerTop) {
  const scrollValue = Math.min(Math.max(-containerTop, 0), scrollDistance);
  const progress = scrollValue / scrollDistance;
  return startValue + (endValue - startValue) * progress;
}

// 1
// const overviewPhotoWrapperSlideroadElement = document.querySelector('.overview_photo_wrapper_slideroad');
// const overviewPhotoImgScrim = document.querySelector('.overview_photo_img_scrim');
// const overviewPhotoImgContainer = document.querySelector('.overview_photo_img_container');
// const overviewPhotoImg = document.querySelector('.overview_photo_img');
// const overviewPhotoTextContainer = document.querySelector('.overview_photo_text_container');

// 2
const mainBannerElement = document.querySelector('.main_banner');
const mainBannerVideo = document.querySelector('.hero_video');
const mainBannerImgScrim = document.querySelector('.main_banner_img_scrim');
const mainBannerImgBlur = document.querySelector('.main_banner_blur_container');
const title = document.querySelector('.title');
const undtitle = document.querySelector('.undtitle');

// 3
const autoBannerElement = document.querySelector('.auto_banner');
const remoteObjectOne = document.querySelector('.remote_object_one');
const lampObject = document.querySelector('.lamp_object');
const autoTwoObject = document.querySelector('.auto_two_object');
const autoObject = document.querySelector('.auto_object');
const autoThreeObject = document.querySelector('.auto_three_object');
const autoTitle = document.querySelector('.auto_title');

// 4
const roletBannerElement = document.querySelector('.rolet_banner');
const roletHeroVideoContainer = document.querySelector('.rolet_hero_video_container');

// 5
const heroAnimElement = document.querySelector('.hero_anim');
const barrierHeroSection = document.querySelector('.barrier_hero_section');
const barrierHeroUndtitle = document.querySelector('.barrier_hero_undtitle');

let lastTimestamp = 0;



function animate(timestamp) {
  if (!lastTimestamp) lastTimestamp = timestamp;
  lastTimestamp = timestamp;

  // 1
  // if (overviewPhotoWrapperSlideroadElement) {
  //   const overviewPhotoWrapperSlideroadElementTop = overviewPhotoWrapperSlideroadElement.getBoundingClientRect().top;
  //   if (overviewPhotoWrapperSlideroadElementTop <= 0) {
  //     const scrollDistance = 600;
  //     const opacityValue = scrolling(0, 1, scrollDistance, overviewPhotoWrapperSlideroadElementTop);
  //     const transformValue = scrolling(1.22781, 1.0603, scrollDistance, overviewPhotoWrapperSlideroadElementTop);
  //     const marginValue = scrolling(0, 4, scrollDistance, overviewPhotoWrapperSlideroadElementTop);
  //     const scrimOpacityValue = scrolling(0.1, 1, scrollDistance, overviewPhotoWrapperSlideroadElementTop);

  //     overviewPhotoTextContainer.style.opacity = opacityValue;
  //     overviewPhotoImg.style.transform = `matrix(${transformValue}, 0, 0, ${transformValue}, 0, 0)`;
  //     overviewPhotoImgContainer.style.margin = `0 ${marginValue}%`;
  //     overviewPhotoImgScrim.style.opacity = scrimOpacityValue;
  //   } else {
  //     overviewPhotoTextContainer.style.opacity = 0;
  //     overviewPhotoImg.style.transform = 'matrix(1.22781, 0, 0, 1.22781, 0, 0)';
  //     overviewPhotoImgContainer.style.margin = `0 0%`;
  //     overviewPhotoImgScrim.style.opacity = 0.1;
  //   }
  // }

  // 2
  if (mainBannerElement) {
    const mainBannerElementTop = mainBannerElement.getBoundingClientRect().top;
    if (mainBannerElementTop <= 0) {
      const scrollDistance = 600;
      const videoMatrixValue = scrolling(1.0000, 1.19999, scrollDistance, mainBannerElementTop);
      const mainBannerImgScrimOpacityValue = scrolling(0.5, 1, scrollDistance, mainBannerElementTop);
      const undtitleValue = scrolling(0.000, 1, scrollDistance, mainBannerElementTop);
      const titleTransformValue = scrolling(0, -140, scrollDistance, mainBannerElementTop);

      mainBannerVideo.style.transform = `matrix(${videoMatrixValue}, 0, 0, ${videoMatrixValue}, 0, 0)`;
      mainBannerImgScrim.style.opacity = mainBannerImgScrimOpacityValue;
      undtitle.style.opacity = undtitleValue;

      title.style.transform = `translateY(${titleTransformValue}px)`;
      undtitle.style.transform = `translateY(${titleTransformValue}px)`;
    } else {
      title.style.transform = `translateY(0px)`;
      undtitle.style.transform = `translateY(0px)`;

      mainBannerVideo.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
      mainBannerImgScrim.style.opacity = 0.5;
      undtitle.style.opacity = 0;
    }

    if (mainBannerElementTop + 730 <= 0) {
      const scrollDistance = 600;
      const mainBannerImgBlurValue = scrolling(0, 7, scrollDistance, mainBannerElementTop + 730);

      mainBannerImgBlur.style.setProperty('--mainBannerImgBlurValue', mainBannerImgBlurValue + 'px');
    } else {
      mainBannerImgBlur.style.setProperty('--mainBannerImgBlurValue', '0px');
    }
  }

  // 3
  if (autoBannerElement) {
    const autoBannerElementTop = autoBannerElement.getBoundingClientRect().top;
    if (autoBannerElementTop <= 0) {
      const scrollDistance = 500;

      const autoObjectValue = scrolling(-50, 0, scrollDistance, autoBannerElementTop);
      const autoTwoObjectValue = scrolling(50, 0, scrollDistance, autoBannerElementTop);
      const autoThreeObjectValue = scrolling(150, 0, scrollDistance, autoBannerElementTop);
      const lampObjectValue = scrolling(-70, 0, scrollDistance, autoBannerElementTop);
      const remoteObjectOneValue = scrolling(-30, 0, scrollDistance, autoBannerElementTop);

      const autoObjectOpacityValue = scrolling(0, 1, scrollDistance, autoBannerElementTop);

      autoObject.style.transform = `translateY(${autoObjectValue}px)`;

      autoTwoObject.style.transform = `translateY(${autoTwoObjectValue}px)`;
      autoTwoObject.style.opacity = autoObjectOpacityValue;

      autoThreeObject.style.transform = `translateY(${autoThreeObjectValue}px)`;
      autoThreeObject.style.opacity = autoObjectOpacityValue;

      lampObject.style.transform = `translateY(${lampObjectValue}px)`;
      lampObject.style.opacity = autoObjectOpacityValue;

      remoteObjectOne.style.transform = `translateY(${remoteObjectOneValue}px)`;
      remoteObjectOne.style.opacity = autoObjectOpacityValue;

      autoTitle.style.opacity = autoObjectOpacityValue;
    } else {
      autoObject.style.transform = `translateY(-50px)`;

      autoTwoObject.style.transform = `translateY(50px)`;
      autoTwoObject.style.opacity = 0;

      autoThreeObject.style.transform = `translateY(150px)`;
      autoThreeObject.style.opacity = 0;

      lampObject.style.transform = `translateY(-70px)`;
      lampObject.style.opacity = 0;

      remoteObjectOne.style.transform = `translateY(-30px)`;
      remoteObjectOne.style.opacity = 0;

      autoTitle.style.opacity = 0;
    }
  }

  //4
  if (roletBannerElement) {
    const roletBannerElementTop = roletBannerElement.getBoundingClientRect().top;
    if (roletBannerElementTop <= 0) {
      const scrollDistance = 500;

      const roletHeroVideoContainerValue = scrolling(100, 87.5, scrollDistance, roletBannerElementTop);
      const roletHeroVideoContainerRadiusValue = scrolling(0, 28, scrollDistance, roletBannerElementTop);

      roletHeroVideoContainer.style.width = `${roletHeroVideoContainerValue}%`;
      roletHeroVideoContainer.style.borderRadius = `${roletHeroVideoContainerRadiusValue}px`;
    } else {
      roletHeroVideoContainer.style.width = `100%`;
      roletHeroVideoContainer.style.borderRadius = `0px`;
    }
  }

  // 5
  if (heroAnimElement) {
    const heroAnimElementTop = heroAnimElement.getBoundingClientRect().top;
    if (heroAnimElementTop <= 0) {
      const scrollDistance = 600;

      const barrierHeroSectionValue = scrolling(0, -890, scrollDistance, heroAnimElementTop);

      barrierHeroSection.style.transform = `matrix(1, 0, 0, 1, 0, ${barrierHeroSectionValue})`;
    } else {
      barrierHeroSection.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
    }

    if (heroAnimElementTop + 120 <= 0) {
      const scrollDistance = 480;

      const barrierHeroUndtitleValue = scrolling(0, 1, scrollDistance, heroAnimElementTop + 120);

      barrierHeroUndtitle.style.opacity = barrierHeroUndtitleValue;
    } else {
      barrierHeroUndtitle.style.opacity = 0;
    }
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);






const openBtns = document.querySelectorAll('.open_card_oncard');
const cardContainers = document.querySelectorAll('.carousel_open_card_container');
const closeBtns = document.querySelectorAll('.carousel_open_card_btn');
const mainHtml = document.querySelector('.main_html');

if (openBtns) {
  openBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const containerId = btn.getAttribute('data-container');
      const cardContainersReview = document.querySelector(`.carousel_open_card_container[data-container="${containerId}"]`);

      if (cardContainersReview) {
        cardContainersReview.classList.add('card_open');
        mainHtml.classList.add('html_blocked');
      }

    });
  });
}
if (closeBtns) {
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      const containerId = closeBtn.closest('.carousel_open_card_container').getAttribute('data-container');
      const cardContainersReview = document.querySelector(`.carousel_open_card_container[data-container="${containerId}"]`);

      if (cardContainersReview) {
        cardContainersReview.classList.remove('card_open');
        mainHtml.classList.remove('html_blocked');
      }

    });
  });
}


// 

$(".flip-button").click(function () {
  const block = $(this).closest(".auto_card");
  if (block.hasClass("flipped")) {
    block.removeClass("flipped");
    setTimeout(function () {
      block.removeClass("index");
    }, 700);
  } else {
    block.addClass("flipped");
    block.addClass("index");
  }
});