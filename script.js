$(document).ready(function() {
  generate();

  function generate() {
    var quotes = ["I was confused about what line I was on!", "I lost my GPS signal..", "\
    What was I supposed to do there was a turkey on the tracks---!", "I hit a small \
    child and got a flat tire?","Damsel in Distress!!!!", "Too much junk in the trunk!", "\
     But.. it's 420", "Loose Caboose!", "I was literally struck by lightning.", " \
      Game of thrones season 6 started tonight", "There was a penny on the track", "\
      Re-routed to Hawaii", "Dazed and Confused", "I swear I saw a squirrel", "LANDSHARKS!", "\
      I was sexting the conductor", "I was going off the rails on a crazy train", "The city \
      of New Orleans","I was trailed by 20 hounds!"];
    randomQuote = quotes[Math.floor(Math.random()*quotes.length)].split(',');
    $('.saying').text(randomQuote[0]);
    }

    $(".button").click(function() {
      generate();
    });

    var currentQuote = randomQuote[0] + "   - Annonymous";

    $("#twitterBtn").click(function() {
      window.open("https://twitter.com/intent/tweet?text=" + currentQuote);
    });
});
