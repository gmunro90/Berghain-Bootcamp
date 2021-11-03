class Countdown {
    constructor() {
      this.currentTime = 10;
      this.intervalId = null;
    }

    start(callback) {
        this.intervalId = setInterval(() => {
          
          if(callback) callback()
          this.currentTime -= 1;
          //this.currentTime++
        }, 1000);

    getSeconds() {
    return Math.floor(this.currentTime % 60);
    }


