// Core Features Slide 
var coreFeaturesSlideIndex = 1;
showCoreFeaturedSlides(coreFeaturesSlideIndex);

function coreFeaturedSlidesNavigation(n) {
  showCoreFeaturedSlides(coreFeaturesSlideIndex += n);
}

function currentCoreFeaturedSlide(n) {
  showCoreFeaturedSlides(coreFeaturesSlideIndex = n);
}

function showCoreFeaturedSlides(n) {
  var i;
  var coreFeaturedSlides = document.getElementsByClassName("core-features-row");
  var coreFeaturedSlidesPagination = document.getElementsByClassName("core-features-pagination");
  if (n > coreFeaturedSlides.length) {
      coreFeaturesSlideIndex = 1
    }    
  if (n < 1) {
      coreFeaturesSlideIndex = coreFeaturedSlides.length
    }
  for (i = 0; i < coreFeaturedSlides.length; i++) {
      coreFeaturedSlides[i].classList.add("hide-content"); 
  }
  for (i = 0; i < coreFeaturedSlidesPagination.length; i++) {
      coreFeaturedSlidesPagination[i].className = coreFeaturedSlidesPagination[i].className.replace(" pagination-active", "");
      coreFeaturedSlides[i].classList.remove("show-content"); 
  }
    coreFeaturedSlides[coreFeaturesSlideIndex-1].classList.add("show-content");
  coreFeaturedSlidesPagination[coreFeaturesSlideIndex-1].className += " pagination-active";
}

// As Featured In Slide
var featuredSlideIndex = 1;
showFeaturedSlides(featuredSlideIndex);

function featuredSlidesNavigation(n) {
  showFeaturedSlides(featuredSlideIndex += n);
}

function currentFeaturedSlide(n) {
  showFeaturedSlides(featuredSlideIndex = n);
}

function showFeaturedSlides(n) {
  var i;
  var featuredSlides = document.getElementsByClassName("featured-container");
  var featuredSlidesPagination = document.getElementsByClassName("featured-pagination");
  if (n > featuredSlides.length) {
      featuredSlideIndex = 1
    }    
  if (n < 1) {
      featuredSlideIndex = featuredSlides.length
    }
  for (i = 0; i < featuredSlides.length; i++) {
      featuredSlides[i].style.display = "none";  
  }
  for (i = 0; i < featuredSlidesPagination.length; i++) {
      featuredSlidesPagination[i].className = featuredSlidesPagination[i].className.replace(" pagination-active", "");
  }
  featuredSlides[featuredSlideIndex-1].style.display = "flex";  
  featuredSlidesPagination[featuredSlideIndex-1].className += " pagination-active";
}

// Investors Slide
var investorsSlideIndex = 1;
showInvestorSlides(investorsSlideIndex);

function investorSlidesNavigation(n) {
  showInvestorSlides(investorsSlideIndex += n);
}

function currentFeaturedSlide(n) {
  showInvestorSlides(investorsSlideIndex = n);
}

function showInvestorSlides(n) {
  var i;
  var investorSlides = document.getElementsByClassName("investors-container");
  var investorSlidesPagination = document.getElementsByClassName("investors-pagination");
  if (n > investorSlides.length) {
      investorsSlideIndex = 1
    }    
  if (n < 1) {
      investorsSlideIndex = investorSlides.length
    }
  for (i = 0; i < investorSlides.length; i++) {
      investorSlides[i].style.display = "none";  
  }
  for (i = 0; i < investorSlidesPagination.length; i++) {
      investorSlidesPagination[i].className = investorSlidesPagination[i].className.replace(" pagination-active", "");
  }
  investorSlides[investorsSlideIndex-1].style.display = "flex";  
  investorSlidesPagination[investorsSlideIndex-1].className += " pagination-active";
}

// Development Timeline
var developmentTimelineRange = document.getElementById("developmentTimelineRange");

// document.getElementById("previousYear").classList.add("show-content");
// document.getElementById("previousYearQ3").classList.add("show-content");
// document.getElementById("previousYearQ4").classList.add("show-content");
// document.getElementById("currentYear").classList.add("show-content");
// document.getElementById("currentYearQ1").classList.add("show-content");
// document.getElementById("currentYearQ2").classList.add("show-content");
// document.getElementById("currentYearQ3").classList.add("show-content");

var output = document.getElementById("demo");
output.innerHTML = developmentTimelineRange.value;

function hideTimelineDates() {
  var children = document.getElementById('timelineDates').getElementsByTagName('*');
  for (i = 0; i < children.length-1; i++){
    children[i].classList.remove("show-content");
  }
}

developmentTimelineRange.oninput = function() {
  output.innerHTML = this.value;
  console.log(this.value);

  // if (this.value <= 35) { 
  //   hideTimelineDates();
  //   document.getElementById("previousYear").classList.add("show-content");
  //   document.getElementById("previousYearQ3").classList.add("show-content");
  //   document.getElementById("previousYearQ4").classList.add("show-content");
  //   document.getElementById("currentYear").classList.add("show-content");
  //   document.getElementById("currentYearQ1").classList.add("show-content");
  //   document.getElementById("currentYearQ2").classList.add("show-content");
  //   document.getElementById("currentYearQ3").classList.add("show-content");
  // } else if (this.value = 40) {
  //   hideTimelineDates();
  //   document.getElementById("previousYearQ3").classList.add("show-content");
  //   document.getElementById("previousYearQ4").classList.add("show-content");
  //   document.getElementById("currentYear").classList.add("show-content");
  //   document.getElementById("currentYearQ1").classList.add("show-content");
  //   document.getElementById("currentYearQ2").classList.add("show-content");
  //   document.getElementById("currentYearQ3").classList.add("show-content");
  //   document.getElementById("currentYearQ4").classList.add("show-content");
  // } else if (this.value = 45) {
  //   hideTimelineDates();
  //   document.getElementById("previousYearQ4").classList.add("show-content");
  //   document.getElementById("currentYear").classList.add("show-content");
  //   document.getElementById("currentYearQ1").classList.add("show-content");
  //   document.getElementById("currentYearQ2").classList.add("show-content");
  //   document.getElementById("currentYearQ3").classList.add("show-content");
  //   document.getElementById("currentYearQ4").classList.add("show-content");
  //   document.getElementById("currentYearQ4").classList.add("show-content");
  //   document.getElementById("nextYear").classList.add("show-content");
  // } else if (this.value = 100) {
  //   hideTimelineDates();
  //   document.getElementById("currentYear").classList.add("show-content");
  //   document.getElementById("currentYearQ1").classList.add("show-content");
  //   document.getElementById("currentYearQ2").classList.add("show-content");
  //   document.getElementById("currentYearQ3").classList.add("show-content");
  //   document.getElementById("currentYearQ4").classList.add("show-content");
  //   document.getElementById("currentYearQ4").classList.add("show-content");
  //   document.getElementById("nextYear").classList.add("show-content");
  //   document.getElementById("nextYearQ1").classList.add("show-content");
  // }
}

