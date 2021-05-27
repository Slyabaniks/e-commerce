
window.addEventListener("DOMContentLoaded", function() {
document.querySelector("button").onclick =function(){
	const links = document.querySelector(".links");

	links.classList.toggle("show");
	
}
	const links = document.querySelector(".links");
document.querySelectorAll('.nav_link').forEach(function(nav){
	nav.onclick = function(){
	links.classList.remove('show')
	console.log(nav);

};
});

});

