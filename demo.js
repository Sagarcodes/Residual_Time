$(document).ready(function(){
    $("#clickId").click(function(){
    var currentTime = Date.now();

    currentTime  = new Date(currentTime);
    currentTime = moment(currentTime);
    currentTime = currentTime.tz("Asia/Kolkata")._d;
    currentTime = Date.parse(currentTime);


    var givenDate = String($('#dateId').val());
     givenDate = new Date(givenDate);
     givenDate = moment(givenDate);
     givenDate = moment(givenDate).add(1,'days')._d;
     givenDate.setUTCHours(0,0,0);
     console.log(givenDate);
     givenDate = Date.parse(givenDate);
     console.log(givenDate);

    var givenTime = String($('#timeId').val());
    var givenArray = givenTime.split(':');
    givenTime = givenArray[0]*60*60*1000 + givenArray[1]*60*1000;

    var residualTime = givenDate - currentTime + givenTime;
    console.log(residualTime);

    setTimeout(function(){
        console.log("hello");
    },residualTime)
})
  })

