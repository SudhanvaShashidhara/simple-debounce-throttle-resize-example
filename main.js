const nonOptimisedDataField = document.getElementById('non-optimization-data');
const debouncedDataField = document.getElementById('debounced-data');
const throttledDataField = document.getElementById('throttled-data');

let nonoptimisedVal = 0,
  debouncedVal = 0,
  throttledVal = 0;

const debounce = (func, delayTime) => {
  let debouncer;
  return function() {
    clearTimeout(debouncer);
    debouncer = setTimeout(() => func.apply(this, arguments), delayTime);
  };
};

const throttle = (func, delayTime) => {
  let throttler;
  return function() {
    if (!throttler) {
      throttler = true;
      func.apply(this, arguments);
      setTimeout(() => (throttler = false), delayTime);
    }
  };
};

window.addEventListener('resize', function() {
  nonoptimisedVal += 1;
  nonOptimisedDataField.textContent = nonoptimisedVal;
  console.log(
    '%c Non Optimised Call : ' + debouncedVal,
    'background-color: black; color: red;'
  );
});

window.addEventListener(
  'resize',
  debounce(function() {
    debouncedVal += 1;
    debouncedDataField.textContent = debouncedVal;
    console.log(
      '%c Debounced Call : ' + debouncedVal,
      'background-color: red; color: #fff;'
    );
  }, 1000)
);

window.addEventListener(
  'resize',
  throttle(function() {
    throttledVal += 1;
    throttledDataField.textContent = throttledVal;
    console.log(
      '%c Throttled Call : ' + throttledVal,
      'background-color: blue; color: #fff;'
    );
  }, 1000)
);
