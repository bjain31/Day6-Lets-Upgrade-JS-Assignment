let persons = [
    {
      name: "Rahul",
      age: 34,
      city: "Pune",
      salary: "60K",
    },
    {
      name: "Rohit",
      age: 28,
      city: "Mumbai",
      salary: "45K",
    },
    {
      name: "Vivek",
      age: 33,
      city: "Bangalore",
      salary: "50K",
    },
    {
        name: "Abhishek",
        age: 34,
        city: "Kolkata",
        salary: "40K",
    },
    {
        name: "Ishan",
        age: 29,
        city: "Gurgaon",
        salary: "30K",
    },
  ];

  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (person, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${person.name}</td>
      <td>${person.age}</td>
      <td>${person.city}</td>
      <td>${person.salary}</td>
      <td>
      <button onclick='deletePerson(${index})'>Delete</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display(persons);

  function deletePerson(index) {
    persons.splice(index, 1);
    display(persons);
  }

  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = persons.filter(function (person) {
      return (
        person.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

  function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
  
    let newdata = persons.filter(function (person) {
      return (
        person.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }