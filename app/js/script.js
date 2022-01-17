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
const mtUpdate = document.getElementById("#mtUpdate");
const uploadBtn = document.getElementById("uploadBtn");
const formData = new FormData(addRecipesForm);
const reader = new FileReader(mtUpdate);

addRecipesForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const recipiesList = {
    id: new Date().getTime(),
    recipieName: formData.get("RecipeName"),
    foodType: formData.get("Food_type"),
    ingredients: formData.get("Ingredients"),
    stepstoPrepare: formData.get("StepstoPrepare"),
    image: {
      url: formData.get("RecipeImg"),
      altInfo: formData.get("RecipeName") + " " + "Image",
    },
  };

  recipiesLists.push(recipiesList);
  console.log(recipiesLists);
});
