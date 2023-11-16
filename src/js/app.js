const inputText = document.querySelector("#input-text");
const btnAdd = document.querySelector("#btn-add");
const doneCount = document.querySelector("#done-count");
const listCount = document.querySelector("#list-count");
const listGroup = document.querySelector("#list-group");

// function

const createList = (text) => {
  const list = document.createElement("div");
//   const id = "ListCheck" + (Math.random()*100000).toFixed(0);
    const id = "listCheck" + Date.now();
  list.classList.add("list");
  list.innerHTML = `
  <div class="border border-neutral-700 p-3 flex justify-between mb-3">
    <div id="content" class="content" flex gap-5">
    <input type="checkbox" name="" id="${id}" />
    <label for="${id}" class="list-text ">${text}</label>
       
    </div>
    <div id="control" class=" flex gap-3">
      <button class="edit-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
      <button class="del-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  </div>`;

  inputText.value = null;
  const delBtn = list.querySelector(".del-btn");
  delBtn.addEventListener("click", () => {
    if (confirm("Are you sure to delet?")) {
      list.remove();
    }
  });
  const content = list.querySelector(".content");
  const editBtn = list.querySelector(".edit-btn");

  editBtn.addEventListener("click", () => {
    const listText = list.querySelector(".list-text");
    const input = document.createElement("input");
    input.value = listText.innerText;
    input.className = "border border-neutral-700 py-1";
    content.innerHTML = "";
    content.append(input);

    input.addEventListener("blur", () => {
      content.innerHTML = ` <input type="checkbox" name="" id="check-box" />
      <label for="check-box" class="list-text">${input.value}</label>`;
    });
  });

  return list;
};

const listCounter = () => {
  const total = document.querySelectorAll(".list").length;
  //   console.log(total);
  listCount.innerText = total;
};

//event-handler

const btnAddHandler = () => {
  if (inputText.value) {
    listGroup.append(createList(inputText.value));
    listCounter();
  }
};

// event-listener
btnAdd.addEventListener("click", btnAddHandler);
