const form = document.getElementById(`formName`);
form.addEventListener('submit',() => {
    event.preventDefault();
    addName(form.name.value);
    form.name.value = "";
    form.name.focus();
    
} );

function addName(name){
    const ol = document.getElementById(`nameList`);
    const template = document.getElementById(`templateName`).contentEditable.cloneNode(true);
    const spanName = template.querySelector(`.name`)
    const spanBin = template.querySelector(`.bin`)
    spanName.textContent = none;
    spanBin.textContent = none;
    const li = document.createElement(`li`);
    li.textContent = name
    ol.appendChild(li);
}

function deleteName(event) {
    const element = event.target;
    if (confirm("Are you sure to delete? ")){
        element.parentNode.remove();
    }
    
}

function bindDeleteName(){
    const bins = document.querySelectorAll(".bin");
    bins.forEach((bin) => (bin.onclick = deleteName ));
}

bindDeleteName();


