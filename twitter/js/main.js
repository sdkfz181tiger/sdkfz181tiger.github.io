"use strict";

window.onload = ()=>{
	console.log("Callback to application!!");
	if(location.search !== ""){
		console.log("location.search:" + location.search);
		//location.href="twittersdk://path"+location.search;
	}
};