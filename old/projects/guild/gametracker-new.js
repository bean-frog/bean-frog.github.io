/***************************
 Assassins' Guild Game tracker frontend
 To be used with TOM v2
 Made by bean_frog#6968
 If you use this somewhere credit me please thanks (and lmk)
***************************/
var response;
var nocache = Math.floor(Math.random() * 999999999999999999); //pseudo-random integer to prevent json from caching (and serving outdated info)
var nocache2 = Math.floor(Math.random() * 999999999999999999); //2nd pseudo-random integer to prevent json from caching (and serving outdated info)

let statusDisplay = document.getElementById('status');
let gamemodeDisplay = document.getElementById('gamemode');
let modDisplay = document.getElementById('currentMod');
let playersDisplay = document.getElementById('players');
let teams = document.getElementById('teams');
let playerCardsContainer = document.getElementById('playercards');

function toTitleCase(str) { //title case function (for data formatting on display)
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}


var xhr = new XMLHttpRequest();

xhr.open('GET', `https://raw.githubusercontent.com/bean-frog/bean-frog.github.io/main/projects/guildtest/test.json?nocache=${nocache}&nocache2=${nocache2}`, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { //xhr ready
    if (xhr.status === 200) { //file pulled
      //parse json from xhr and define keys
      var response = xhr.responseText;
      var data = JSON.parse(response);
      var gameValue = data.game;
      var gamemode = data.gamemode;
      var currentMod = data.mod;
      const players = data.players;
      var zombie = data.zombie;
      var zombierevealed = data.zombierevealed;
      if (gameValue === true) {
        //game true (all the main stuff below)
        statusDisplay.innerHTML = '<div class="badge badge-success badge-lg gap-2">Game in progress</div>';

        //default game init stuff
        gamemodeDisplay.innerHTML = toTitleCase(gamemode);
        modDisplay.innerHTML = toTitleCase(currentMod);

       // Player cards
players.forEach(player => {
  const cardBackgroundColor = player.status === 'dead' ? 'bg-red-600' : 'bg-gray-900';
  
  const playerCardHTML = `
    <div class="${cardBackgroundColor} rounded-lg shadow-xl shadow-gray-600 p-6 mb-4">
      <h2 class="text-2xl font-bold text-white">${toTitleCase(player.name)}</h2>
      <p class="text-white text-xl"><strong>${player.status}</strong></p>
      <p class="text-white">Class: ${player.class}</p>
      <p class="text-white">Team: ${player.team}</p>
      <p class="text-white">Points: ${player.points}</p>
      <p class="text-white">Last Activity: ${player.lastactivity}</p>
    </div>
  `;

  playerCardsContainer.innerHTML += playerCardHTML;
});

        





        //killfeed
        var killfeedList = document.createElement('ul');
        killfeedList.classList.add('flex', 'flex-col', 'items-center')
        var killfeedDiv = document.getElementById('killfeed');
        data.killfeed.forEach(function(entry) {
          var listItem = document.createElement('li');
          listItem.classList.add('text-xl')
          var names = entry.split('-');
          var entryText = toTitleCase(names[0]) + ' <i class="fa-regular fa-knife-kitchen fa-flip-horizontal"></i> ' + toTitleCase(names[1]);
          listItem.innerHTML = entryText;
          killfeedList.appendChild(listItem);
        });
        killfeedDiv.appendChild(killfeedList);
        //gamemodes
        if (gamemode === "Supercharged Frenzy") {
          
        } else if (gamemode === "Frenzy") {
          
        } else if (gamemode === "Zombies") {
            //show zombie as green if revealed
            if (zombierevealed) {
                var walker = document.createTreeWalker(
                  document.body,
                  NodeFilter.SHOW_TEXT,
                  null,
                  false
                );
                while (walker.nextNode()) {
                  var node = walker.currentNode;
                  var regex = new RegExp(zombie, "g");
                  if (node.textContent.includes(zombie)) {
                    var span = document.createElement("span");
                    span.style.color = "green";
                    span.innerHTML = node.textContent.replace(regex, "<span style='color:green'>$&</span>");
                    node.parentNode.replaceChild(span, node);
                  }
                }
              }
              else {
                return;
              }
              
        } else if (gamemode === "Teams") {
          
        } else if (gamemode === "Oxfords") {
          
        } else if (gamemode === "Last Man Standing") {
          
        } else if (gamemode === "Chaos") {
          
        } else if (gamemode === "Stealth") {
          
        } 




        //boring other stuff below
      } else {
        //No game Badge
        statusDisplay.innerHTML = '<div class="badge badge-error gap-2">No Current Game</div>';
        //clear all data
        playersDisplay.innerHTML = "";
        modDisplay.innerHTML = "";
        gamemodeDisplay.innerHTML = "";
        playerCardsContainer.innerHTML = ""
      }
      //dont mess with anything below (just the rest of the xhr, nothing important)
    } else if (xhr.status === 404) {
      console.log('Error 404 fetching json. Is the link correct?')
    }
  }
}
xhr.send();
