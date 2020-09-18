window.onload = function () {
    let initialbuses = [];
    if (localStorage.getItem("buses") == null) {
        localStorage.setItem("buses", JSON.stringify(initialbuses));
      }
    };
function display(superarray = undefined) {
    let tabledata = "";
    let buses;
    if (superarray == undefined) {
        buses = JSON.parse(localStorage.getItem("buses"));
    } else {
        buses = superarray;
    }
  
    buses.forEach(function (bus, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.num}</td>
        <td>${bus.cap}</td>
        </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display();
  
  function addBus(e) {
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let num = document.getElementById("num").value;
    let cap = document.getElementById("cap").value;
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.num = num;
    bus.cap = Number(cap);
  
    //   buses.push(bus);
  
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("num").value = "";
    document.getElementById("cap").value = "";
  }

  function searchBySource() {
    let searchValue = document.getElementById("searchSource").value;
  
    let newdata = persons.filter(function (person) {
      return (
        person.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

  function searchByDestination() {
    let searchValue = document.getElementById("searchDestination").value;
  
    let newdata = persons.filter(function (person) {
      return (
        person.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

//   function deleteBus(index) {
//     initialbuses.splice(index, 1);
//     display(initialbuses);
//   }
  