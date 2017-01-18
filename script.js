var imgIndex = 0;
currentImg(0);

function showImg(n) {
	var i;
	var imgs = document.getElementsByClassName("slide");
	var thumbnails = document.getElementsByClassName("thumbnail");
	if(n > imgs.length-1) {imgIndex = 0;}
	if(n < 0) {imgIndex = imgs.length-1;}
	for(i = 0; i < imgs.length; i++) {
		imgs[i].style.display = "none";
	}

	for(i = 0; i < thumbnails.length; i++) {
		thumbnails[i].className = thumbnails[i].className.replace(" active", "");
	}

	imgs[imgIndex].style.display = "block";
	thumbnails[imgIndex].className += " active";

}

function nextImg(n) {
	showImg(imgIndex += n);
}

function currentImg(n) {
	showImg(imgIndex = n);
}


//-----end first slider---------------------------------------------------------------


var imgIndex1 = 0;
currentImg1(0);

function showImg1(n) {
	var j;
	var imgs1 = document.getElementsByClassName("slide1");
	var thumbnails1 = document.getElementsByClassName("thumbnail1");
	if(n > imgs1.length-1) {imgIndex1 = 0;}
	if(n < 0) {imgIndex1 = imgs1.length-1;}
	for(j = 0; j < imgs1.length; j++) {
		imgs1[j].style.display = "none";
	}

	for(j = 0; j < thumbnails1.length; j++) {
		thumbnails1[j].className = thumbnails1[j].className.replace(" active", "");
	}

	imgs1[imgIndex1].style.display = "block";
	thumbnails1[imgIndex1].className += " active";

}

function nextImg1(n) {
	showImg1(imgIndex1 += n);
}

function currentImg1(n) {
	showImg1(imgIndex1 = n);
}