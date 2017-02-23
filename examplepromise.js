/*
function getTempCallback (location, callback){
  callback(undefined, 78);
  callback('city not found');
}

getTempCallback('Philadelphia' function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location){
  return new new Promise(function(resolve, reject) {
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('Philadelphia').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('error', err);
});

*/

function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
    } else {
      reject('its not a number u dumb');
    }
  });
}

addPromise('e', 'o').then(function(temp) {
  console.log(temp);
}, function (err) {
  console.log(err);
});
