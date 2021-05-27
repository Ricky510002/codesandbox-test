import "/src/styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  createTodoList(inputText);
};

const createTodoList = (text) => {
  const li = document.createElement("li");
  li.className = "listLow";

  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  document.getElementById("todoList").appendChild(li);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = deleteButton.parentNode;
    document.getElementById("todoList").removeChild(completeTarget);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const p = document.createElement("p");
    p.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document.getElementById("finishList").removeChild(backTarget);

      const text = backTarget.firstElementChild.innerText;
      createTodoList(text);
    });

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    document.getElementById("finishList").appendChild(addTarget);
  });
  li.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    alert("本当に削除していい？");
    document.getElementById("todoList").removeChild(deleteTarget);
  });
  li.appendChild(deleteButton);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
