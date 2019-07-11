var typed = new Typed('.typing', {
  strings: ["A UX Designer.", "A UI Designer.", "A Machine Learner.","A Software Developer.", "An Engineer."],
  typeSpeed: 50,
  loop: true,
  backDelay: 1000,
  cursorChar: '',
  backSpeed: 40
});

var $win = $(window);
var aman = $(".chart-bar");

$win.on('scroll',function(){
	var top = $win.scrollTop();
	// var random = Math.round(Math.random()*4+1);
	console.log(top);
	if(top >= 1500 && top <=2100){
		startAnimation('bike-1');
		aman.css({"animation-name":"anim-lightspeed-in"});	
	}
	if(top >= 2700 && top <=3200){
		
	}
	// if(top==2000){
	// 	 endAnimation(() => {
 //            startAnimation('bike-'+random);
 //        });
	// }
});

// const toHome = document.getElementsByClassName('toHome');
// const toAbout = document.getElementsByClassName('toAbout');
// const toWork = document.getElementsByClassName('toWork');
// const toSkills = document.getElementsByClassName('toSkills');
// const toGallery = document.getElementsByClassName('toGallery');
// const toContacts = document.getElementsByClassName('toContacts');
// const Home = document.getElementById('Home');
// const About = document.getElementById('About');
// const Work = document.getElementById('Work');
// const Skills = document.getElementById('Skills');
// const Gallery = document.getElementById('Gallery');
// const Contacts = document.getElementById('Contacts');

// toHome.onClick = function(){
// 	Home.scrollIntoView({behavior:'smooth'});
// };
	
// toAbout.onClick = function(){
// 	About.scrollIntoView({behavior:'smooth'});
// };
	
// toWork.onClick = function(){
// 	Work.scrollIntoView({behavior:'smooth'});
// };
	
// toSkills.onClick = function(){
// 	Skills.scrollIntoView({behavior:'smooth'});
// };
	
// toGallery.onClick = function(){
// Gallery.scrollIntoView({behavior:'smooth'});
// };
// 	

//contactForm
// $('.SubmitForm').click(function(e){
// 	e.preventDefault();
	
// 	var name = $('.input1').val()
// 	var email = $('.input2').val()
// 	var message = $('.input3').val()
// 	console.log('hi i love u');

// })

//counter
$('.counter').counterUp({
    		delay: 100,
    		time: 6000
		});
