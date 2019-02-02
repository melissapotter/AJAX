  /* global $ */ 
window.onload = function(){
   
   genWrap(function* gen(){
     var tweets = yield $.get("tweets.json");
     console.log(tweets);
     var friends = yield $.get("friends.json");
     console.log(friends);
     var videos = yield $.get("videos.json");
     console.log(videos);
     
     
   });
  function genWrap(generator){
    
    var gen = generator();
    
    function handle(yielded){
      if(!yielded.done){
        yielded.value.then(function(data){
          return handle(gen.next(data));
        });
      }
    }
    return handle(gen.next());
  }

 
};


