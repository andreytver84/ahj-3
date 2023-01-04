export class GameGoblin {
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
    this.gameTds.forEach((item) => item.classList.remove("active"));
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
