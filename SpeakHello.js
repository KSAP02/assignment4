(function (window){
	var HelloSpeaker={};
	var speakWord="Hello";
	HelloSpeaker.sayHello=function(name){
       console.log(speakWord + " " + name);
	}

     window.HelloSpeaker=HelloSpeaker;
})(window);