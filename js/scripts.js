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
    var friendSum = 0;
    var loveSum = 0;


    for (i = 0; i < friends.length; i++) {
      friendSum += friends[i];
    }

    for (i = 0; i < career.length; i++) {
      careerSum += career[i];
    }

    for (i = 0; i < love.length; i++) {
      loveSum += love[i];
    }



    console.log(careerSum);


    if(loveSum === 10 && careerSum === 10 && friendSum === 10) {
      $('.result-bad').show();
      $('.result-box').empty();
      $('.box-bad').append('<p>' + 'Oh child, you need a lot of help!' + '</p>');
    } else if (loveSum >= 6 || careerSum === 6 && friendSum <= 6 ) {
      $('.result-warn').show();
      $('.box-warn').empty();
      $('.box-warn').append('<p>' + 'Be cautious about something' + '</p>');
    } else if (loveSum >= 2 || careerSum >= 7 || friendSum >=7) {
      $('.result-good').show();
      $('.box-good').empty();
      $('.box-good').append('<p>' + 'Rest easy, you have good fortune coming to you' + '</p>');
    } else if (loveSum === 0 && careerSum === 0 && friendSum === 0) {
      $('.result-bad').show();
      $('.box-bad').empty();
      $('.box-bad').append('<p>' + 'Oh no, you have no questions for Miss Cleo?' + '</p>');
    }
  });

})
