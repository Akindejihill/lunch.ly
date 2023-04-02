const searchField = document.getElementById("search");
const searchData = document.getElementById("search-data");
searchField.onkeyup = function(){
  axios.get (`/search?term=${searchField.value}`)
  .then(customers => {
    for(let customer in customers){
        let option = document.createElement("option");
        option.setAttribute("value", customer.id);
        option.innerText = customer.fullname();
        searchData.append(option);
    }
  })
  .catch(error => {
    console.log(error);
  })
}