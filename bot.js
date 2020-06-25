$(document).ready(function () {
    alert("Developed by 'Luwafemi A.")
  let jokes = [
    {
      41: `Yesterday I saw a guy spill all his Scrabble letters on the road.<br>I asked him, “What’s the word on the street?"`,
      42: `Did you hear about the mathematician who’s afraid of negative numbers?<br>He’ll stop at nothing to avoid them.`,
      3: `Why do we tell actors to break a leg?<br>Because every play has a cast.`,
      4: `Helvetica and Times New Roman walk into a bar<br>“Get out of here!” shouts the bartender. “We don’t serve your type.”`,
      5: `Heard about the new restaurant called Karma?<br>There’s no menu: You get what you deserve.`,
      6: `A woman in labour suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!”<br>“Don’t worry,” said the doctor. “Those are just contractions.”`,
      7: `Did you hear about the claustrophobic astronaut?<br>He just needed a little space.`,
      8: `Why don’t scientists trust atoms?<br>Because they make up everything.`,
      9: `How do you drown a hipster?<br>Throw him in the mainstream.`,
      10: `How does Moses make tea?<br>He brews.`,
      11: `Why can’t you explain puns to kleptomaniacs?<br>They always take things literally.`,
      12: `Why don’t Calculus majors throw house parties?<br>Because you should never drink and derive.`,
      13: `What do you call a parade of rabbits hopping backwards?<br>A receding hare-line.`,
      14: `What’s the difference between a cat and a comma?<br>A cat has claws at the end of paws; A comma is a pause at the end of a clause.`,
      15: `Why should the number 288 never be mentioned?<br>It’s two gross.`,
      16: `What did the bald man exclaim when he received a comb for a present?<br>Thanks— I’ll never part with it!`,
      17: `What did the left eye say to the right eye?<br>Between you and me, something smells.`,
      18: `What do you call a fake noodle?<br>An impasta. `,
      19: `What did the 0 say to the 8?<br>Nice belt!`,
      20: `What did one hat say to the other?<br>You wait here. I’ll go on a head.`,
      21: `What did the shark say when he ate the clownfish?<br>This tastes a little funny.`,
      22: `Why can’t you hear a pterodactyl go to the bathroom?<br>Because the “P” is silent.`,
      23: `What did the pirate say when he turned 80?<br>Aye matey.`,
      24: `Why did the frog take the bus to work today?<br>His car got toad away.`,
      25: `What did the buffalo say when his son left for college?<br>Bison.`,
      26: `What is an astronaut’s favourite part on a computer?<br>The space bar.`,
      27: `What do you call an apology written in dots and dashes?<br>Re-Morse code.`,
      28: `Why can’t male ants sink?<br>They’re buoy-ant.`,
      29: `I told my wife she was drawing her eyebrows too high.<br>She looked at me surprised.`,
      30: `Did you hear about the two people who stole a calendar?<br>They each got six months.`,
      31: `How do poets say hello?<br>Hey, haven’t we metaphor?`,
      32: `Where does Batman go to the bathroom?<br>The batroom.`,
      33: `Why did the Oreo go to the dentist?<br>Because he lost his filling.`,
      34: `What do you get from a pampered cow?<br>Spoiled milk.`,
      35: `What breed of dog can jump higher than buildings?<br>Any dog, because buildings can’t jump.`,
      36: `Why do bees have sticky hair?<br>Because they use honeycombs.`,
      37: `I got my daughter a fridge for her birthday.<br>I can’t wait to see her face light up when she opens it.`,
      38: `I poured root beer in a square glass.<br>Now I just have beer.`,
      39: `Why aren’t koalas actual bears?<br>They don’t meet the koalafications.`,
      40: `Rest in peace to boiling water.<br>You will be mist.`,
      1: `Why did the nurse need a red pen at work?<br>In case she needed to draw blood.`,
      2: `How do you throw a space party?<br>You planet.`,
      43: `The numbers 19 and 20 got into a fight.<br>21.`,
      44: `Why did it get so hot in the baseball stadium after the game?<br>All of the fans left.`,
      45: `Why did the math textbook visit the guidance counsellor?<br>It needed help figuring out its problems.`,
    },
  ];
  let quotes = [
    {
      1: `“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney`,
      2: `“The secret of getting ahead is getting started.” – Mark Twain`,
      3: `“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” – Michael Jordan`,
      4: `“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb`,
      5: `“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’ ” – Leah Busque`,
      6: `“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz`,
      7: `“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” – Arianna Huffington`,
      8: `“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ― William W. Purkey`,
      9: `“Do one thing every day that scares you.”― Eleanor Roosevelt`,
      10: `“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” – Socrates`,
      11: `“Whatever you are, be a good one.” ― Abraham Lincoln`,
      12: `“Impossible is just an opinion.” – Paulo Coelho`,
      13: `“If something is important enough, even if the odds are stacked against you, you should still do it.” – Elon Musk`,
      14: `“One day or day one. You decide.” – Unknown`,
      15: `“Things may come to those who wait, but only the things left by those who hustle.”― Abraham Lincoln`,
      16: `“I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.” – Marissa Mayer`,
      17: `“If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.” – Vincent Van Gogh`,
      18: `“If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.” – Wayne Dyer`,
      19: `“Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.” – Roy T. Bennett`,
      20: `“Opportunity is missed by most people because it is dressed in overalls and looks like work.” – Thomas Edison`,
      21: `“Don’t say you don’t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo Da Vinci, Thomas Jefferson, and Albert Einstein.” – H. Jackson Brown Jr.`,
      22: `“The only difference between ordinary and extraordinary is that little extra.” – Jimmy Johnson`,
      23: `“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.” – Earl Nightingale`,
      24: `“At any given moment you have the power to say: this is not how the story is going to end.” – Unknown`,
      25: `“Whenever you find yourself doubting how far you can go, just remember how far you have come.” – Unknown`,
      26: `“How wonderful it is that nobody need wait a single moment before starting to improve the world.” – Anne Frank`,
      27: `“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.” – Steve Jobs`,
      28: `“Everyone has inside them a piece of good news. The good news is you don’t know how great you can be! How much you can love! What you can accomplish! And what your potential is.” – Anne Frank`,
      29: `“When written in Chinese the word “crisis” is composed of two characters – one represents danger and the other represents opportunity.” – John F Kennedy`,
      30: `“Start where you are. Use what you have. Do what you can.” – Arthur Ashe`,
      31: `“We can do anything we want to if we stick to it long enough.” – Helen Keller`,
      32: `“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.” – Pele`,
      33: `“Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success.” – Thomas J. Watson`,
      34: `“I hated every minute of training, but I said, Don’t quit. Suffer now and live the rest of your life as a champion.” – Muhammad Ali`,
      35: `“Never regret anything that made you smile.” – Mark Twain`,
      36: `“I never lose. Either I win or learn.” – Nelson Mandela`,
      37: `“Great things are done by a series of small things brought together” – Vincent Van Gogh`,
      38: `“Go the extra mile. It’s never crowded there.” – Dr. Wayne D. Dyer`,
      39: `“Focus on being productive instead of busy.” – Tim Ferriss`,
      40: `“She remembered who she was and the game changed.” – Lalah Deliah`,
      41: `“Be so good they can’t ignore you.” – Steve Martin`,
      42: `“Take criticism seriously, but not personally. If there is truth or merit in the criticism, try to learn from it. Otherwise, let it roll right off you.” – Hillary Clinton`,
      43: `"It’s never too late to be what you might’ve been.” – George Eliot`,
      44: `“You can’t go back and change the beginning, but you can start where you are and change the ending.” – C.S. Lewis`,
      45: `“Today is where your book begins, the rest is still unwritten.” – Natasha Bedingfield`,
    },
  ];

  // for (i = 1; i <= 45; i++) console.log(jokes[0][i]);
  //   for (i = 1; i <= 45; i++) console.log(quotes[0][i]);
  $(".fadein").fadeIn(2000);
  $(".sendmsgBox").on("submit", (e) => {
    $(".fadein").fadeIn(2000);

    e.preventDefault();

    for (i = 1; i <= 45; i++) {
      var a = $(".sendMsg").val().toUpperCase().trim() == "QUOTE " + i;
      var b = $(".sendMsg").val().toUpperCase().trim() == "QUOTE" + i;
      var c = $(".sendMsg").val().toUpperCase().trim() == "QUOTES" + i;
      var d = $(".sendMsg").val().toUpperCase().trim() == "QUOTES " + i;

      var e = $(".sendMsg").val().toUpperCase().trim() == "JOKE " + i;
      var f = $(".sendMsg").val().toUpperCase().trim() == "JOKE" + i;
      var g = $(".sendMsg").val().toUpperCase().trim() == "JOKES" + i;
      var h = $(".sendMsg").val().toUpperCase().trim() == "JOKES " + i;

      if (a || b || c || d) {
        $(".msgArea").html(
          $(".msgArea").html() +
            `<div>
        <div class="box fadein" >` +
            $(".sendMsg").val() +
            `</div>
      </div>` +
            `<div style="max-width:90%">
              <div class="box fadein" > ` +
            quotes[0][i] +
            ` </div>
            </div>`
        );
        $(".sendMsg").val("");
        var chatHistory = document.getElementById("msgArea");
        chatHistory.scrollTop = chatHistory.scrollHeight;
      }
      if (e || f || g || h) {
        $(".msgArea").html(
          $(".msgArea").html() +
            `<div>
        <div class="box fadein" >` +
            $(".sendMsg").val() +
            `</div>
      </div>` +
            `<div style="max-width:90%">
              <div class="box fadein" > ` +
            jokes[0][i] +
            ` </div>
            </div>`
        );
        $(".sendMsg").val("");
        var chatHistory = document.getElementById("msgArea");
        chatHistory.scrollTop = chatHistory.scrollHeight;
      }
    }
    // .....................................................................................................

    if ($(".sendMsg").val() == 2) {
      $(".msgArea").html(
        $(".msgArea").html() +
          `<div>
            <div class="box fadein" >` +
          $(".sendMsg").val() +
          `</div>
          </div>` +
          `<div>
                  <div class="box fadein" >
                   Send "quote (1-45)" e.g. "quote 1"
                  </div>
                </div>`
      );
      $(".sendMsg").val("");
      var chatHistory = document.getElementById("msgArea");
      chatHistory.scrollTop = chatHistory.scrollHeight;
    } else if ($(".sendMsg").val() == 1) {
      $(".msgArea").html(
        $(".msgArea").html() +
          `<div>
        <div class="box fadein" >` +
          $(".sendMsg").val() +
          `</div>
      </div>` +
          `<div>
              <div class="box fadein" >
               Send "joke (1-45)" e.g. "joke 1"
              </div>
            </div>`
      );
      $(".sendMsg").val("");
      var chatHistory = document.getElementById("msgArea");
      chatHistory.scrollTop = chatHistory.scrollHeight;
    } else if ($(".sendMsg").val().toUpperCase() == "HELP") {
      $(".msgArea").html(
        $(".msgArea").html() +
          `<div>
        <div class="box fadein" >` +
          $(".sendMsg").val() +
          `</div>
      </div>` +
          `<div>
              <div class="box fadein" > 
                For Jokes, send "1".<br>
                For Quotes, send "2".
            </div>
            </div>`
      );
      $(".sendMsg").val("");
      var chatHistory = document.getElementById("msgArea");
      chatHistory.scrollTop = chatHistory.scrollHeight;
    } else {
      if ($(".sendMsg").val() != "") {
        $(".msgArea").html(
          $(".msgArea").html() +
            `<div>
                <div class="box fadein" style="white-space:pre";margin:auto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     >` +
            $(".sendMsg").val() +
            `</div>
              </div>` +
            `<div style="max-width:90%">
                <div class="box fadein" >
                  Hello ` +
            $(".sendMsg").val().toUpperCase() +
            `! <br>
                  For Jokes, send "1".<br>
                  For Quotes, send "2".<br>
                     <p style="font-size:14px;font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;color:#d39e00;margin-bottom:0px">To get this at any time, simply send "help".</p>
                </div>
              </div>`
        );
        $(".sendMsg").val("");
        var chatHistory = document.getElementById("msgArea");
        chatHistory.scrollTop = chatHistory.scrollHeight;
      }
    }
  });
});
