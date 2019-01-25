/*
  input:
    id
    artist
    value

    id
    tract
    value

  output:
    "artist": "value"
    "track": ["value"]

   condition:
      - only update if prop is track/artist and value is not empty
      - delete album if value is empty
      - Function returns the entire collection  
 */

var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  var temp = [];

  if (collection[id]) {
    if(prop != "tracks" && value !== "") {
      collection[id][prop] = value;
    } else if (prop === "tracks" && !collection[id].hasOwnProperty(prop)) {
      temp.push(value);
      collection[id][prop] = temp; 
    } else if (prop === "tracks" && value !== "") {
      collection[id][prop].push(value);
    } else {
      delete collection[id][prop];
    } 
  }
  
  return collection;
}

}

// Alter values below to test your code
var result = updateRecords(5439, "artist", "ABBA");
console.log(result);

// tracks should have "Take a Chance on Me" as the last element.
result = updateRecords(5439, "tracks", "Take a Chance on Me"); 
console.log(result);

// tracks should have "Addicted to Love" as the last element.
result = updateRecords(1245, "tracks", "Addicted to Love"); 
console.log(result);

// artist should not be set
result = updateRecords(2548, "artist", "");  
console.log(result);
