function throttle(func, ms) {
  let isThrottled = false;
  let savedArguments;
  let savedThis;

  function inner() {
    if (isThrottled) {
      savedArguments = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;

      if (savedArgs) {
        inner.apply(savedThis, savedArguments);
        savedArguments = null;
        savedThis = null;
      }
    }, ms);
  }

  return inner;
}
