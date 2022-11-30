const input = document.querySelector(".input-bar");
const btn = document.querySelector(".btn");
let table=document.getElementById('table-body');

btn.addEventListener("click", () => {
  const ans = findCaliforniaCafes(input.value);
  // console.log(ans);
  table.innerHTML ="";
  ans.forEach((objects,index) => {
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
  input.value = "";
});
function findCaliforniaCafes(searchString) {
  // You can store the given arrays in 2 internal letiables
  const cafes = [
    {
      name: "Bazaar Cafe",
      place_id: "kjk234g4gcvfx8usg1l33pi",
    },
    {
      name: "Ashley's Cafe",
      place_id: "12hydbdf76sljfts87sbfis",
    },
    {
      name: "Avenue Cafe",
      place_id: "skjd86svvfdrsv55svbvf3f",
    },
    {
      name: "Hi-Lo Cafe",
      place_id: "mjdhgetr4pojfyts22fzfsh",
    },
    {
      name: "California Chicken Cafe",
      place_id: "12hydbdf76sljfts87sbfis",
    },
    {
      name: "Avenue Bakery Cafe",
      place_id: "jahgde7wgdiau8ewsahgosd",
    },
    {
      name: "Philz Coffee",
      place_id: "urhw3837ehalod7w02b7835",
    },
  ];
  const places = [
    {
      id: "jahgde7wgdiau8ewsahgosd",
      street_no: "60H",
      locality: "Solomos Island Road",
      postal_code: "20688",
      lat: "36.7783 N",
      long: "119.4179 W",
    },
    {
      id: "12hydbdf76sljfts87sbfis",
      street_no: "1B",
      locality: "Macarthur Blvd",
      postal_code: "20619",
      lat: "38.1781 N",
      long: "118.4171 W",
    },
    {
      id: "kjk234g4gcvfx8usg1l33pi",
      street_no: "45250",
      locality: "Worth Avenue, Unit A",
      postal_code: "20619",
      lat: "36.1152",
      long: "117.521",
    },
    {
      id: "saswe3s6yydtdr52hsd72yst",
      street_no: "1X",
      locality: "Macarthur Blvd",
      postal_code: "20687",
      lat: "36.7783",
      long: "119.4179",
    },
    {
      id: "skjd86svvfdrsv55svbvf3f",
      street_no: "7S",
      locality: "Three Notch Road",
      postal_code: "20619",
      lat: "36.83",
      long: "119.6",
    },
    {
      id: "mjdhgetr4pojfyts22fzfsh",
      street_no: "22803",
      locality: "Gunston Dr Lexington Park",
      postal_code: "20688",
      lat: "35.7788",
      long: "119.979",
    },
    {
      id: "urhw3837ehalod7w02b7835",
      street_no: "225",
      locality: "Macarthur Blvd",
      postal_code: "20687",
      lat: "35.77813",
      long: "119.41791",
    },
  ];
  // Your code goes here

  const result = [];
  const cafeMatchingWithSearchString = cafes.filter(
    (cafe) => cafe.name.toLowerCase().search(searchString.toLowerCase()) !== -1
  );
  for (let i = 0; i < cafeMatchingWithSearchString.length; i++) {
    for (let j = 0; j < places.length; j++) {
      if (places[j].id === cafeMatchingWithSearchString[i].place_id) {
        const cafeObject = Object.assign({}, places[j]);
        delete cafeObject.id;
        cafeObject.name = cafeMatchingWithSearchString[i].name;
        result.push(cafeObject);
        break;
      }
    }
  }
  return result;
}
