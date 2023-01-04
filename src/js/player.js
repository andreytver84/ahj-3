import { GameGoblin } from "./gamegoblin";

export class Player {
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
    } else if (
      !e.target.classList.contains("goblin") &&
      this.startBtn.classList.contains("disabled")
    ) {
      this.life--;
      this.lifeBlock.textContent = this.life;
      if (this.life == 0) {
        alert("Вы проиграли(((");
        this.reset();
      }
    }
  }
}
