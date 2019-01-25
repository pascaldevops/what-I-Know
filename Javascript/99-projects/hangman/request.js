const getPuzzle = (callback) => {
  const request = new XMLHttpRequest(); // create a new object

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    callback(data.puzzle);
  } else if (e.target.readyState === 4) {
    console.log('An error has taken place.');
  }
})
}