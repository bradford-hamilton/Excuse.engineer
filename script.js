$(document).ready(function() {
  makeExcuse();

  function makeExcuse() {
    var excuses = ["I was confused about what line I was on!", "I lost my GPS signal..", "\
    What was I supposed to do there was a turkey on the tracks---!", "I hit a small \
    child and got a flat tire?","Damsel in Distress!!!!", "Too much junk in the trunk!", "\
     But.. it's 420", "Loose Caboose!", "I was literally struck by lightning.", " \
      Game of thrones season 6 started tonight", "There was a penny on the track", "\
      Re-routed to Hawaii", "Dazed and Confused", "I swear I saw a squirrel", "LANDSHARKS!", "\
      I was sexting the conductor", "I was going off the rails on a crazy train", "The city \
      of New Orleans"];
    randomExcuse = excuses[Math.floor(Math.random()*excuses.length)].split(',');
    $('.saying').text(randomExcuse[0]);
    }

    $(".button").click(function() {
      makeExcuse();
    });

    var currentExcuse = randomExcuse[0] + "   - Annonymous";

    $("#twitterBtn").click(function() {
      window.open("https://twitter.com/intent/tweet?text=" + currentExcuse);
    });
});
