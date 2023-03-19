import Clock from './clock.js';

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 2000,
});

lowResolutionClock.start();
