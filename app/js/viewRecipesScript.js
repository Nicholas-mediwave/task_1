recipiesList = JSON.parse(sessionStorage.getItem("recipiesList"));

console.log(recipiesList);

function viewrecipes(recipiesList) {
  const h2 = document.createElement("h2");
  h2.textContent = recipiesList.recipieName;
  div.appendChild(h2);


  document.getElementById("").value = imgurl;
}
