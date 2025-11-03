import { jokes, quotes } from "./data.js";
$(document).ready(function () {
  $(".fadein").fadeIn(2000);

  $(".sendmsgBox").on("submit", (e) => {
    e.preventDefault();

    if ($(".sendMsg").val() == 1) {
      $(".msgArea").html(
        `${$(".msgArea").html()}
          <div>
            <div class="box" > ${$(".sendMsg").val()} </div>
          </div>
          <div>
            <div class="box" > Send "joke(1-45)" e.g. "joke1" </div>
          </div>`
      );
      $(".sendMsg").val("");
      let chatHistory = document.getElementById("msgArea");
      chatHistory.scrollTop = chatHistory.scrollHeight;
      return;
    } else if ($(".sendMsg").val() == 2) {
      $(".msgArea").html(
        `${$(".msgArea").html()}
          <div>
            <div class="box" > ${$(".sendMsg").val()} </div>
          </div>
          <div>
            <div class="box" > Send "quote(1-45)" e.g. "quote1" </div>
          </div>`
      );
      $(".sendMsg").val("");
      let chatHistory = document.getElementById("msgArea");
      chatHistory.scrollTop = chatHistory.scrollHeight;
      return;
    } else if ($(".sendMsg").val().toUpperCase() == "HELP") {
      $(".msgArea").html(
        `${$(".msgArea").html()}
          <div>
            <div class="box" > ${$(".sendMsg").val()} </div>
          </div>
          <div >
            <div class="box" > For Jokes, send "1".<br> For Quotes, send "2". </div>
          </div>`
      );
      $(".sendMsg").val("");
      let chatHistory = document.getElementById("msgArea");
      chatHistory.scrollTop = chatHistory.scrollHeight;
      return;
    }

    let userMessage = $(".sendMsg").val().trim().toLowerCase();
    let userMessageJokeOrQuoteMatch = userMessage.match(
      /^.*(quote|joke)\D*0*([1-9]|[1-3][0-9]|4[0-5])$/
    );

    if (userMessageJokeOrQuoteMatch) {
      let userMessageJokeOrQuote = userMessageJokeOrQuoteMatch[1];
      let userMessageJokeOrQuoteNumber = userMessageJokeOrQuoteMatch[2];
      let jokeOrQuote = null;

      switch (userMessageJokeOrQuote) {
        case "quote":
          jokeOrQuote = quotes[userMessageJokeOrQuoteNumber];
          break;
        case "joke":
          jokeOrQuote = jokes[userMessageJokeOrQuoteNumber];
          break;
      }
      $(".msgArea").html(
        `${$(".msgArea").html()}
            <div>
               <div class="box" > ${$(".sendMsg").val()} </div>
           </div>
            <div style="max-width:90%">
              <div class="box" > ${jokeOrQuote} </div>
            </div>
            `
      );
      $(".sendMsg").val("");
      let chatHistory = document.getElementById("msgArea");
      chatHistory.scrollTop = chatHistory.scrollHeight;
    } else if ($(".sendMsg").val() != "") {
      $(".msgArea").html(
        `${$(".msgArea").html()}
            <div>
              <div class="box" style="white-space:pre"> ${$(
                ".sendMsg"
              ).val()} </div>
            </div>
            <div style="max-width:90%">
              <div class="box"> Hello ${$(".sendMsg")
                .val()
                .toUpperCase()} ! <br>
                  For Jokes, send "1".<br> For Quotes, send "2".<br>
                  <p style="font-size:14px;font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;color:#d39e00;margin-bottom:0px">To get this at any time, simply send "help".</p>
              </div>
            </div>`
      );
      $(".sendMsg").val("");
      let chatHistory = document.getElementById("msgArea");
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }
  });
});
