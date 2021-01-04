import Slider, {button as btn, AutoPlay} from './modules/slider';

const test = new Slider(600, 400, 5);
const test2 = new AutoPlay(800, 600, 10);
test.whoAmI();
test2.play();
console.log(btn());