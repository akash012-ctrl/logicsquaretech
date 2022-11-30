const getCafes = () => {
  const api =
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json";
  return fetch(api).then((response) => {
    return response.json();
  });
};
var cafes = [];
getCafes().then((result) => {
  cafes = Array.from(result.cafes);
  // console.log(cafes[1]);
});

const getPlaces = () => {
  const api =
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json";
  return fetch(api).then((response) => {
    return response.json();
  });
};
var places = [];
getPlaces().then((result) => {
  places = Array.from(result.places);
  // console.log(places[1]);
});

function searching() {
  let inp = document.getElementById("search").value;
  inp = inp.toUpperCase();
  Result = calc(inp);
  var table = document.getElementById("table-body");
  table.innerHTML="";
  Result.forEach((objects,index) => {
    const t1 = document.createElement('td');
    const t2 = document.createElement('td');
    const t3 = document.createElement('td');
    const t4 = document.createElement('td');
    const t5 = document.createElement('td');
    const t6 = document.createElement('td');

    t1.classList.add("column1")
    t2.classList.add("column2")
    t3.classList.add("column3")
    t4.classList.add("column4")
    t5.classList.add("column5")
    t6.classList.add("column6")
    


    t1.textContent = `${index+1}`
    t2.textContent = `${objects.name}`
    t3.textContent = `${objects.locality}`
    t4.textContent = `${objects.postal_code}`
    t5.textContent = `${objects.lat}`
    t6.textContent = `${objects.long}`

    
    const tr = document.createElement('tr');
    tr.appendChild(t1);
    tr.appendChild(t2);
    tr.appendChild(t3);
    tr.appendChild(t4);
    tr.appendChild(t5);
    tr.appendChild(t6);


    table.appendChild(tr);
  });

  // console.log(Result);
}

function calc(inp) {
  arr = [];
  for (let i = 0; i < cafes.length; i++) {
    if (cafes[i].name.toUpperCase().startsWith(inp) === true) {
      let id1 = cafes[i].location_id;
      //   console.log('hi:'+inp);
      for (let j = 0; j < places.length; j++) {
        if (places[j].id === id1) {
          var obj = Object.assign({}, places[j]);
          obj["name"] = cafes[i].name;
          delete obj.id;
          arr.push(obj);
        }
      }
    }
  }
  return arr;
}
