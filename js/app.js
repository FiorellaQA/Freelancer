var lastScrollTop = 0;
window.addEventListener("scroll", function(){
	var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
	if(currentScroll==0 || lastScrollTop==0){
		document.getElementById("nav-header").classList.remove("navSmall");
		document.getElementById("nav-header").classList.add("content");
    }
   	if(currentScroll > lastScrollTop){ //Cuando bajas
   		document.getElementById("nav-header").classList.remove("content");
    	document.getElementById("nav-header").classList.add("navSmall");
   	}
   lastScrollTop = currentScroll;
}, false);