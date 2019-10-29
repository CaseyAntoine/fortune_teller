$(function() {
  $('form').submit(function(event) {
    event.preventDefault();


    var career = [];
    var friends = [];
    var love = [];

    $('input:checkbox[name=Career]:checked').each(function() {
        var careerQuest = parseInt($(this).val());


        career.push(careerQuest);
    });

    $('input:checkbox[name=Friendship]:checked').each(function() {
      var friendQuest = parseInt($(this).val());



      friends.push(friendQuest);

    });

    $('input:checkbox[name=Love]:checked').each(function() {
      var loveQuest = parseInt($(this).val());

      love.push(loveQuest);
    });

    console.log("Career category: " + career);
    console.log("Friends category: " + friends);
    console.log("Love category: " + love);

    var careerSum = 0;

    for (i = 0; i < friends.length; i++) {
      careerSum += friends[i];
    }

    

    console.log(careerSum);


    if(love === 10 && career === 10 && friends === 10) {
      $('.result-bad').show();
      $('.result-bad card-body').append('<p> Oh child, you need a lot of help! </p>');
    }
  });

})
