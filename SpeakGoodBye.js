(function (window){
	var GoodByeSpeaker={};
	var speakWord="GoodBye";
	GoodByeSpeaker.sayGoodBye=function(name){
       console.log(speakWord + " " + name);
	}

     window.GoodByeSpeaker=GoodByeSpeaker;
})(window);