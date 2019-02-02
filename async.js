window.onload = function(){
  function get(url){
    return new Promise(function(resolve, reject){
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, true);
      xhttp.onload = function(){
        if (xhttp.status ==200){
          resolve(JSON.parse(xhttp.response));
        } else{
          reject(xhttp.statusText);
        }
        
        };
        xhttp.onerror = function(){
          reject(xhttp.statusText);
        };
      xhttp.send();
    });
  }
  
  var promise = get("tweets.json");
  promise.then(function(tweets){
    console.log(tweets);
  });
};


// READY STATES 
// 0 - request not initialized
// 1 - request has been set up
// 2 - request has been sent
// 3 - request is in process 
// 4 - request is complete 