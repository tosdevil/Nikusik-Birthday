let content = document.querySelector('.text_block');
let video = document.querySelector('.myVideo');


function ShowPerformance() {
	content.classList.add("hidden");
	video.classList.remove("halfhidden");
	video.currentTime = 0;
	video.muted = false;
}