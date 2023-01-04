/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/gamegoblin.js
class GameGoblin {
  static createGoblin() {
    this.goblin = document.createElement("div");
    this.goblin.classList.add("goblin");
  }
  static removeGoblin() {
    clearTimeout(this.timerId);
    this.goblin.remove();
  }
  static getNumb(n) {
    return Math.floor(Math.random() * n);
  }
  static addGoblin() {
    let number = this.getNumb(this.gameTds.length);
    if (this.gameTds[number].classList.contains("active")) {
      //console.log("повтор");
      number = number !== this.gameTds.length - 1 ? number + 1 : 0;
    }
    this.gameTds.forEach(item => item.classList.remove("active"));
    //console.log(number);
    this.gameTds[number].classList.add("active");
    //console.log(Number(this.gameTds[number].getAttribute("data-id")) - 1);
    this.gameTds[number].append(this.goblin);
    this.update(this.goblin);
  }
  static update(td) {
    this.timerId = setTimeout(() => {
      td.remove();
      this.addGoblin();
    }, 1000);
  }
}
GameGoblin.gameTds = document.querySelectorAll(".game-td");
GameGoblin.goblin = "";
GameGoblin.timerId = "";
;// CONCATENATED MODULE: ./src/js/player.js

class Player {
  constructor() {
    this.name = "Not set";
    this.score = 0;
    this.life = 5;
    this.infoBlock = document.querySelector(".info");
    this.scoreBlock = this.infoBlock.querySelector(".player-score span");
    this.lifeBlock = this.infoBlock.querySelector(".player-life span");
    this.startBtn = this.infoBlock.querySelector(".start");
    this.btnClickOn = this.btnClickOn.bind(this);
    document.querySelector("main").addEventListener("click", this.btnClickOn);
  }
  setInfo(playerName) {
    this.name = playerName || this.name;
    this.infoBlock.querySelector(".player-name").textContent = this.name;
    this.setScore(0);
    this.setLife(5);
  }
  askName() {
    if (this.name == "Not set") {
      const answer = prompt("Ваше имя");
      this.setInfo(answer);
    } else {
      this.setInfo(this.name);
    }
  }
  setScore(scores) {
    //this.score = scores ?? this.score;
    //this.scoreBlock.textContent = this.score;
    this.score = scores || scores == 0 ? scores : this.score;
    this.scoreBlock.textContent = this.score;
  }
  setLife(lifes) {
    //this.life = lifes ?? this.life;
    //this.lifeBlock.textContent = this.life;
    this.life = lifes ? lifes : this.score;
    this.lifeBlock.textContent = this.life;
  }
  reset() {
    this.startBtn.classList.remove("disabled");
    GameGoblin.removeGoblin();
    this.setInfo();
  }
  btnClickOn(e) {
    if (e.target.classList.contains("start")) {
      e.target.classList.add("disabled");
      this.askName();
      GameGoblin.createGoblin();
      GameGoblin.addGoblin();
    } else if (e.target.classList.contains("reset")) {
      this.reset();
    } else if (e.target.classList.contains("goblin")) {
      GameGoblin.goblin.remove();
      this.score++;
      this.scoreBlock.textContent = this.score;
      if (this.score == 5) {
        alert(`Вы попали ${this.score} раз и это ПОБЕДА!!!`);
        this.reset();
      }
    } else if (!e.target.classList.contains("goblin") && this.startBtn.classList.contains("disabled")) {
      this.life--;
      this.lifeBlock.textContent = this.life;
      if (this.life == 0) {
        alert("Вы проиграли(((");
        this.reset();
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const player = new Player();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;