const sumCategories = document.querySelectorAll("#categories li.item");

function calcCategories(element) {
  console.log(`Number of categories: ${element.length}`);
  element.forEach((el) => {
    console.log(`Category: ${el.children[0].textContent}`);
    console.dir(`Elements: ${el.children[1].children.length}`);
  });
}

calcCategories(sumCategories);
