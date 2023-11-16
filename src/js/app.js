const inputText = document.querySelector("#input-text");
const btnAdd = document.querySelector("#btn-add");
const doneCount = document.querySelector("#done-count")
const listCount = document.querySelector("#list-count");
const listGroup = document.querySelector("#list-group");

//event-handler

const btnAddHandler = () => {
    console.log(inputText.value);
}

// event-listener 
btnAdd.addEventListener("click",btnAddHandler)