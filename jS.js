const buttonDel = document.getElementById("Clear");
const buttonAdd = document.getElementById("Add");
const newText = document.getElementById("Text")
    function base(){
    if (newText.value!==""){
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.setAttribute('type', 'checkbox');
        const ul = document.querySelector(".list > ul");
        const textNode = document.createTextNode(newText.value);
        li.append(checkbox)
        li.append(textNode);
        ul.append(li);
        console.log(newText);
        newText.value = "";
        console.log(checkbox);
    }
    }

    function buttonDelete(){
        document.querySelector(".list > ul").innerHTML = "";
}

buttonAdd.addEventListener("click", base)
buttonDel.addEventListener("click", buttonDelete)




