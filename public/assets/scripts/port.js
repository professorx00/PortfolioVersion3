$(document).ready(function () {

  function getDataInfo(num) {
    switch (true) {
      case (num === "1"):
        $(".card-header").text("Valhalla");
        $(".card-title").text("RPG Character Creator");
        $(".card-subtitle").text("Tech Used: NodeJS, ExpressJS, Passport JS, Bootstrap, EJS layouts, MySQL, Sequelize, AWS");
        $(".card-text").text("Valhalla is a mobile app that allows the user instant access to all their D&D characters in a mobile-friendly interface. Campaign, convention, meetup - no matter where, you can share and play all your characters with other D&D players.")
        $("#cardImg").attr("src","/assets/images/valhalla.png");
        $("#demo").attr("href","https://warm-dusk-48851.herokuapp.com/");
        $("#code").attr("href","https://github.com/professorx00/CriticalCode");
        break;
      case (num === "2"):
        $(".card-header").text("Burger Town");
        $(".card-title").text("Todo List of Burgers");
        $(".card-subtitle").text("Tech Used: NodeJS, ExpressJS, Materialize, Handlebars Layout, MySQL, Sequelize");
        $(".card-text").text("Web App to keep track of which burgers you have and have not eaten.");
        $("#cardImg").attr("src","/assets/images/burger.png");
        $("#demo").attr("href","https://whispering-taiga-49037.herokuapp.com/");
        $("#code").attr("href","https://github.com/professorx00/BurgerApp");
        break;
      case (num === "3"):
        $(".card-header").text("Trivia Quiz Game");
        $(".card-title").text("Quiz Game with Timer");
        $(".card-subtitle").text("Tech Used: Jquery,Ajax,Open Trivia API");
        $(".card-text").text("Web game where it gives you multiple choice questions based on categories.");
        $("#cardImg").attr("src","/assets/images/trivia.jpeg");
        $("#demo").attr("href","https://professorx00.github.io/QuizGame/");
        $("#code").attr("href","https://github.com/professorx00/QuizGame");
        break;
      case (num === "4"):
        $(".card-header").text("NEWT");
        $(".card-title").text("Nutritional Application");
        $(".card-subtitle").text("Tech Used: Jquery,Ajax, Firebase Authentication, Firebase Database");
        $(".card-text").text("A Collaborated project between 4 people. Newt is a web application that removes the friction from healthy meal planning by offering a variety of tools and services that make planning healthy meals easy.");
        $("#cardImg").attr("src","/assets/images/newt.png");
        $("#demo").attr("href","https://cbc-nutrition.web.app/");
        $("#code").attr("href","https://github.com/professorx00/NEWT-Application");
        break;
      case (num === "5"):
        $(".card-header").text("Friend Finder");
        $(".card-title").text("Ricky and Morty Themed");
        $(".card-subtitle").text("Tech Used: Jquery, Node JS, MySQL");
        $(".card-text").text("A search based on how the questions are answered to find the person in the database who answered closest to you.");
        $("#cardImg").attr("src","/assets/images/rickandmorty.jpg");
        $("#demo").attr("href","https://agile-headland-24805.herokuapp.com/");
        $("#code").attr("href","https://github.com/professorx00/FriendFinder2");
        break;
      case (num === "6"):
        $(".card-header").text("Word Finder: Movie Edition");
        $(".card-title").text("Word guess game for movie titles");
        $(".card-subtitle").text("Tech Used: Jquery, Javascript, Bootstrap");
        $(".card-text").text("A simple game of choose a letter to find a word. All of these words are movie titles from IMDB highest grossing movies.");
        $("#cardImg").attr("src","/assets/images/movie.jpeg");
        $("#demo").attr("href","https://professorx00.github.io/What-Movie/");
        $("#code").attr("href","https://github.com/professorx00/What-Movie");
        break;
      case (num === "7"):
        $(".card-header").text("Rock Paper Scissors Lizard Spock");
        $(".card-title").text("RPSLS");
        $(".card-subtitle").text("Tech Used: Jquery, Javascript");
        $(".card-text").text("A Single Player version of a Rock Paper Scissors. The version the show Big Bang created, where you add lizard and spock");
        $("#cardImg").attr("src","/assets/images/rspls.jpg");
        $("#demo").attr("href","https://professorx00.github.io/RockPaperScissorsLizardSpock/");
        $("#code").attr("href","https://github.com/professorx00/RockPaperScissorsLizardSpock");
        break;
      case (num === "8"):
        $(".card-header").text("Train Tracker");
        $(".card-title").text("Logs and tracks trains");
        $(".card-subtitle").text("Tech Used: Jquery, Javascript, MySQL");
        $(".card-text").text("Allows user to add a train and see when the next arrival time would be.");
        $("#cardImg").attr("src","/assets/images/train.jpeg");
        $("#demo").attr("href","https://traintimelogger.web.app/");
        $("#code").attr("href","https://github.com/professorx00/Train-Tracker-Logger");
        break;
      case (num === "9"):
        $(".card-header").text("GIF Retriever");
        $(".card-title").text("Get the right GIF");
        $(".card-subtitle").text("Tech Used: Jquery, Javascript,Giphy API");
        $(".card-text").text("Allows user to enter words which are store at the top which they can press to get GIF's related to the words.");
        $("#cardImg").attr("src","/assets/images/gif.jpeg");
        $("#demo").attr("href","https://professorx00.github.io/Gif-Retreiver/");
        $("#code").attr("href","https://github.com/professorx00/Gif-Retreiver");
        break;
      case (num === "10"):
        $(".card-header").text("Smash Brothers Fighter");
        $(".card-title").text("Turn Base Fighting Game");
        $(".card-subtitle").text("Tech Used: Jquery, Javascript");
        $(".card-text").text("Allows user to choose 3 enemies to fight. Go through turn by turn seeing who wins each fight.");
        $("#cardImg").attr("src","/assets/images/smash.jpg");
        $("#demo").attr("href","https://professorx00.github.io/Smash_Brother_Fighter_Clicker/");
        $("#code").attr("href","https://github.com/professorx00/Smash_Brother_Fighter_Clicker");
        break;
    }
  }


  $(".page-link").on("click", (event) => {
    let obj = $(event.target);
    let oldActive = $(".active");
    obj.parent().addClass("active");
    oldActive.removeClass("active");
    switch (true) {
      case (obj.attr("id") === "1"):
        getDataInfo("1");
        break;
      case (obj.attr("id") === "2"):
        getDataInfo("2");
        break;
      case (obj.attr("id") === "3"):
        getDataInfo("3");
        break;
      case (obj.attr("id") === "4"):
        getDataInfo("4");
        break;
      case (obj.attr("id") === "5"):
        getDataInfo("5");
        break;
      case (obj.attr("id") === "6"):
        getDataInfo("6");
        break;
      case (obj.attr("id") === "7"):
        getDataInfo("7");
        break;
      case (obj.attr("id") === "8"):
        getDataInfo("8");
        break;
      case (obj.attr("id") === "9"):
        getDataInfo("9");
        break;
      case (obj.attr("id") === "10"):
        getDataInfo("10");
        break;
      case (obj.attr("id") === ">"):
        let currentActive = oldActive.children().attr("id")
        let nextActive = parseInt(currentActive) + 1;
        if (nextActive < 11) {
          getDataInfo(`${nextActive}`);
          $(".active").removeClass("active")
          $(`#${nextActive}`).parent().addClass("active")
        } else {
          getDataInfo("1");
          $(".active").removeClass("active")
          $("#1").parent().addClass("active")
        }
        break;
      case (obj.attr("id") === "<"):
        let cActive = oldActive.children().attr("id")
        let prevActive = parseInt(cActive)-1;
        console.log(prevActive);
        if (prevActive > 0) {
          getDataInfo(`${prevActive}`);
          $(".active").removeClass("active")
          $(`#${prevActive}`).parent().addClass("active")
        } else {
          getDataInfo("10");
          $(".active").removeClass("active")
          $("#10").parent().addClass("active")
        }
        break;
      default:
        console.log("default");
        break;
    }
  })

});