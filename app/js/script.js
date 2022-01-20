const recipiesLists = [
  {
    id: "1642067929941",
    recipieName: "Biriyani",
    foodType: 0,
    ingredients: "hi",
    stepstoPrepare: "hello",
    image: {
      url: "/images/1.jpeg",
      altInfo: "Biriani Images",
    },
  },
  {
    id: "1642070244749",
    recipieName: "Biriyani",
    foodType: 0,
    ingredients: "hi",
    stepstoPrepare: "hello",
    image: {
      url: "/images/1.jpeg",
      altInfo: "Biriani Images",
    },
  },
];

// function img_pathUrl(input) {
//   var fileinput = document.getElementById("mtUpdate");
//   document.getElementById("RecipeImg").value = fileinput.value;
// }

const addRecipesForm = document.querySelector("#AddRecipesForm");
const mtUpdate = document.getElementById("mtUpdate");

const reader = new FileReader(mtUpdate);
var imgurl = "";
var path = "";
// mtUpdate.onchange = function () {
//   let inp = this.files[0];
//   let text;
//   if (inp) {
//     console.log(inp);
//   } else {
//     console.log("Working but file not uploaded");
//   }
// };

mtUpdate.addEventListener("change", function (event) {
  console.log("Working------------->");
  // uploaded_image = this.files[0];

  imgurl = event.target.files[0].name;
  document.getElementById("RecipeImg").value = imgurl;

  path = document.getElementById("mtUpdate").value;
  console.log(path);

  console.log(imgurl);
  //let inpurl = webkitURL(inp);
  if (imgurl) {
    console.log(imgurl);
  } else {
    console.log("Working but file not uploaded");
  }
});

addRecipesForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(addRecipesForm);
  const recipiesList = {
    id: new Date().getTime(),
    recipieName: formData.get("RecipeName"),
    foodType: formData.get("Food_type"),
    ingredients: formData.get("Ingredients"),
    stepstoPrepare: formData.get("StepstoPrepare"),
    image: {
      url: path,
      altInfo: formData.get("RecipeName") + " " + "Image",
    },
  };

  recipiesLists.push(recipiesList);

  sessionStorage.setItem("recipiesList", JSON.stringify(recipiesList));

  console.log(recipiesList);
  if (recipiesList) {
    window.location.href = "./viewRecipes.html";
  } else {
    console.log("Working but file not uploaded");
  }
});
