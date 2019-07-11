var Friends = document.getElementById('Friends');
var Designs = document.getElementById('Designs');
var Photos = document.getElementById('Photos');
var	toFriends = document.getElementById('toFriends');
var	toDesigns = document.getElementById('toDesigns');
var	toPhotos = document.getElementById('toPhotos');

toFriends.onclick = function () {
	Friends.style.display = "grid";
	Designs.style.display = "none";
	Photos.style.display = "none";
};
toDesigns.onclick = function () {
	Friends.style.display = "none";
	Designs.style.display = "grid";
	Photos.style.display = "none";
};
toPhotos.onclick = function () {
	Friends.style.display = "none";
	Designs.style.display = "none";
	Photos.style.display = "grid";
};