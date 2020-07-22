function isFunction(obj) {
  return typeof(obj) === "function" ? true : false;
}

function isObject(obj) {
  return (obj && typeof(obj) === "object") || isFunction(obj) 
  ? true
  : false;
}

function keys(obj) {
  if (isObject(obj)) {
    let keyArr = [];
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        keyArr.push(key);
      }
    }
  return keyArr;
  }
  return new Error("It is not an object");
}

function allKeys(obj) {
  if (isObject(obj)) {
    let keyArr = [];
    for (key in obj) {
        keyArr.push(key);
    }
    return keyArr;
  }
  return new Error("It is not an object");
}

function values(obj) {
  if (isObject(obj)) {
    let valueArr = [];
    for (value of obj) {
      valueArr.push(value);
    }
    return valueArr;
  }
  return new Error("It is not an object");
}

function pairs(obj) {
  if (isObject(obj)) {
    let pairsArr = [];
    for (key in obj) {
      let arr = [];
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
        pairsArr.push(arr);
      }
    }
    for (let i = 0; i <= pairsArr.length - 1; i++) {
      pairsArr[i].push(obj[pairsArr[i][0]])
    }
    return pairsArr;
  }
  return new Error("It is not an object");
}

function functions(obj) {
  if (isObject(obj)) {
  let funcNamesArr = [];
  for (key of keys(obj)) {
    if (isFunction(obj[key])) {
      funcNamesArr.push(obj[key].name);
    }
  }
  return funcNamesArr.sort();
  }
  return new Error("It is not an object");
}

function bind(func, context, arg1, arg2, argN) {
  let argsArr = [].slice.call(arguments, 2);
  function wrapper() {
    let args = [].slice.call(arguments);
    let concatArgs = argsArr.concat(args);
    return func.apply(context, concatArgs);
  }
  return wrapper;
}
