function button() {
  return 'button';
}

class Slider {
  constructor(width, height, count) {
    this.width = width;
    this.height = height;
    this.count = count;
  }

  nextSlide() {
    console.log('Moving forward');
  }
  prevSlide() {
    console.log('Moving back');
  }
  whoAmI() {
    console.log(this.width, this.height, this.count);
  }
}

class AutoPlay extends Slider {
  constructor(width, height, count, auto) {
    super(height, width, count);
    this.auto = auto;
  }
  play() {
    console.log(`Autoplay: ${this.auto}`);
  }
}

// const slider = new Slider(300, 400, 15),
//       autoPlay = new AutoPlay(200, 200, 10, "auto");
// slider.whoAmI();
// autoPlay.whoAmI();
// autoPlay.play();


export default Slider;
export {button, AutoPlay};