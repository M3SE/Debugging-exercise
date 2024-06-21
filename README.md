# Debugging-exercise

The purpose of this exercise is to test your debugging skills and to see if you can fix some bugs that live in some existing code! Below you will be given some code, and your goal will be to fix it to get the intended result below.

 

Create a folder to house your files to work with this activity.

  - add an index.html file

  - add a javascript file

  - link the two files together

 

const storeOwners = [
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "AZ",
  },
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
  },
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
  },
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
  },
];

const listNumberOfStores = function () {
  for (let i = 0; i < storeOwners.length; i++) {
    let totalLocations = totalLocaions + storeOwners.stores;
  }
  return i;
};

let locations = listNumberOfStores;

function tellMeMyStores() {
  console.log('Hey, can you tell me how many stores you have?');
  if (locations > 0) {
    console.log('Of course, we have ' + locations + ' stores');
  }
}

function hasStore() {
  for (let i = 0; i < storeOwners.length; i++) {
    let person = storeOwners.name;
    let location = storeOwners.location();
    console.log('Yes, {person} has one in {this.location}');
  }

}

tellMeMyStores();
hasStore();
In your JS file paste the above code  


There are several errors in this code sample, use your debugger to track those errors down
 

Your finished output should be something like this:



 

Complete all of the items and submit them via your GitHub repo. It might be a good idea to have one repo for all these JS assignments to push them all to one but only send the link to the file itself, not the whole repo if you do this. 