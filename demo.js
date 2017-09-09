$(document).ready(function(){
    $("#clickId").click(function(){
    var currentTime = Date.now();
    console.log(currentTime);
    currentTime  = new Date(currentTime);
    currentTime = moment(currentTime);
    currentTime = currentTime.tz("Asia/Kolkata")._d;
    console.log(currentTime);
    currentTime = Date.parse(currentTime);


    var givenDate = String($('#dateId').val());
     givenDate = new Date(givenDate);
     givenDate = moment(givenDate);
     //console.log(givenDate)
     givenDate = moment(givenDate).add(1,'days')._d;
     givenDate.setUTCHours(0,0,0);
     console.log(givenDate);
    givenDate = Date.parse(givenDate);

    var givenTime = String($('#timeId').val());
    var givenArray = givenTime.split(':');
    givenTime = givenArray[0]*60*60*1000 + givenArray[1]*60*1000;

    var residualTime = givenDate - currentTime + givenTime;
    console.log(givenDate);
    console.log(givenArray);
    console.log(currentTime);
    console.log(givenTime);
    console.log(residualTime);

    setTimeout(function(){
        console.log("hello");
    },residualTime)
})
  })
