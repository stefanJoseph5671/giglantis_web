function ShowOnScroll() {
    this.toShow = [];
    this.nextEventY = undefined;
  }

  ShowOnScroll.prototype.show = function (e) {
    e.style.display = "";
  };

  ShowOnScroll.prototype.hide = function (e) {
    e.style.display = "none";
  };

  ShowOnScroll.prototype.getTop = function (e) {
    if (e.Top != undefined && e.Top != 0) {
      return e.Top;
    }
    var top = 0;
    var iter = e;
    do {
      top += iter.offsetTop || 0;
      iter = iter.offsetParent;
    } while (iter);
    e.Top = top;
    return top;
  };

  ShowOnScroll.prototype.onScroll = function () {
    var screenBottom = window.pageYOffset + window.innerHeight;
    if (this.nextEventY == undefined || this.nextEventY > screenBottom) {
      return;
    }
    this.nextEventY = undefined;
    for (var i = 0; i < this.toShow.length; i++) {
      var e = this.toShow[i];
      var top = this.getTop(e);
      if (top < screenBottom) {
        this.show(e);
        this.toShow.shift();
        i--;
      } else {
        this.nextEventY = top;
        break;
      }
    }
  };

  ShowOnScroll.prototype.resetScrolling = function () {
    // Clear state
    var screenBottom = window.pageYOffset + window.innerHeight;
    for (var i = 0; i < this.toShow.length; i++) {
      var e = this.toShow[i];
      this.show(e);
    }
    this.toShow = [];
    this.nextEventY == undefined;

    // Collect items
    var itemsToShowOnScroll = Array.prototype.slice.call(document.getElementsByTagName("*"));
    itemsToShowOnScroll = itemsToShowOnScroll.filter(function (e) {
      return e.getAttribute("show-on-scroll") != undefined;
    });
    var getTop = this.getTop;
    itemsToShowOnScroll.sort(function (a, b) {
      return getTop(a) - getTop(b);
    });
    for (var i = 0; i < itemsToShowOnScroll.length; i++) {
      var e = itemsToShowOnScroll[i];
      var top = this.getTop(e);
      if (top < screenBottom) {
        continue;
      }
      this.toShow.push(e);
      this.hide(e);
      this.nextEventY = this.nextEventY != undefined ? this.nextEventY : top;
    }
  };

  ShowOnScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case "scroll":
        this.onScroll();
        break;
      case "resize":
        this.resetScrolling();
        break;
    }
  };

  ShowOnScroll.prototype.init = function () {
    this.resetScrolling();
    window.addEventListener("scroll", this);
    window.addEventListener("resize", this);
  };

  // After anima-src
  setTimeout(function () {
    var instShowOnScroll = new ShowOnScroll();
    instShowOnScroll.init();
  }, 250);

  function openMobileMenu() {
    document.getElementById("openMenuBtn").style.display = "none";
    document.getElementById("closeMenuBtn").style.display = "block";
    document.getElementById("menuItems").style.display = "flex";
    document.getElementById("mobileMenu").style.width = "100vw";
  }
  
  function closeMobileMenu() {
    document.getElementById("openMenuBtn").style.display = "block";
    document.getElementById("closeMenuBtn").style.display = "none";
    document.getElementById("menuItems").style.display = "none";
    document.getElementById("mobileMenu").style.width = "129px";
  }

  function goToWhyGiglantis() {
    if (window.innerWidth > 1600) {
      window.scrollTo({ top: 1500, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 1134, behavior: 'smooth' });
    }
  }

  function goToProducts() {
    if (window.innerWidth > 1600) {
      window.scrollTo({ top: 2700, behavior: 'smooth' });
    }
    else {
      window.scrollTo({ top: 2000, behavior: 'smooth' });
    }
  }

  function goToFeatures() {
    if (window.innerWidth > 1600) {
      window.scrollTo({ top: 4500, behavior: 'smooth' });
    }
    else {
      window.scrollTo({ top: 3600, behavior: 'smooth' });
    }
  }

  function goToAquaTokens() {
    if (window.innerWidth > 1600) {
      window.scrollTo({ top: 6000, behavior: 'smooth' });
    }
    else {
      window.scrollTo({ top: 5000, behavior: 'smooth' });
    }
  }

  function goToPartners() {
    if (window.innerWidth > 1600) {
      window.scrollTo({ top: 7200, behavior: 'smooth' });    
    }
    else {
      window.scrollTo({ top: 5900, behavior: 'smooth' });
    }
   
  }

  function goToRoadMap() {
    if (window.innerWidth > 1600) {
      window.scrollTo({ top: 9000, behavior: 'smooth' });
    }
    else {
      window.scrollTo({ top: 7300, behavior: 'smooth' });
    }
    
  }

  function goToWhyGiglantisMob() {
    window.scrollTo({ top: 410, behavior: 'smooth' });
    closeMobileMenu();
  }

  function goToProductsMob() {
    window.scrollTo({ top: 650, behavior: 'smooth' });
    closeMobileMenu();
  }

  function goToFeaturesMob() {
    window.scrollTo({ top: 1450, behavior: 'smooth' });
    closeMobileMenu();
  }

  function goToAquaTokensMob() {
    window.scrollTo({ top: 2000, behavior: 'smooth' });
    closeMobileMenu();
  }

  function goToPartnersMob() {
    window.scrollTo({ top: 2600, behavior: 'smooth' });
    closeMobileMenu();
  }

  function goToRoadMapMob() {
    window.scrollTo({ top: 3000, behavior: 'smooth' });
    closeMobileMenu();
  }

  function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
  }