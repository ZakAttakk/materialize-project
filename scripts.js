document.addEventListener('DOMContentLoaded', function() {
    
    var options = {};
    
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
  
  
window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 85);
});


function closeSideNav(){
  var sideNav = document.querySelector("#slide-out");
  var sideNavInstance = M.Sidenav.getInstance(sideNav);
  sideNavInstance.close();
}


var navbarItems = document.querySelectorAll(".sidenavItem");
navbarItems.forEach(x => {
  x.addEventListener("click", closeSideNav);
  
})

document.addEventListener('DOMContentLoaded', function() {
  
  var options = {};
  
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
});


document.addEventListener('DOMContentLoaded', function() {
  var options = {};
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
});


document.addEventListener('DOMContentLoaded', function() {
  
  var options = {};
  
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});