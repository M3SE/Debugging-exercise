const storeOwners = [
    {
      name: 'Tommy',
      stores: 1,
      location: "NC",
    },
    {
      name: 'Brandon',
      stores: 1,
      location: "OH",
    },
    {
      name: 'Nicholas',
      stores: 1,
      location: "NY",
    },
    {
      name: 'Simon',
      stores: 1,
      location: "MN",
    },
  ];

  const listNumberOfStores = function () {
    let totalLocations = 0;
    for (let i = 0; i < storeOwners.length; i++) {
      totalLocations = totalLocations + storeOwners[i].stores;
    }
    return totalLocations;
  };

  let locations = listNumberOfStores();

  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?')
    if (locations > 0) {
      console.log('Of course, we have ' + locations + ' stores');
    }
  }

  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
      console.log(`Yes, ${person} has one in ${location}`);
    }
}

  tellMeMyStores();
  hasStore();



/*
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
  hasStore(); */