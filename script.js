(function (window){
  var names=["KSAP","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
  for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)=="J" || names[i].charAt(0)=="j")
      GoodByeSpeaker.sayGoodBye(names[i]);
    else
      HelloSpeaker.sayHello(names[i]);
  }
})(window);
