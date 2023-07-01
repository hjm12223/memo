function displayMemo(memo){
    const ul = document.querySelector("#memo-ul");
    const li = document.createElement("li");
    li.innerText = `${memo.id} : ${memo.content}`;
    ul.appendChild(li);
}



async function readMemo(){
    const res = await fetch('/memos') /// <-- GET  
    const jsonRes = await res.json();
    const ul = document.querySelector("#memo-ul");
    ul.innerHTML = "";
    ///jsonREs = [{id :123, content : "블라블라"}]
    jsonRes.forEach(displayMemo);
}




async function createMemo(value) {
        const res = await fetch("/memos",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify ({
                id : "홍종민",
                content : value,
            }),
        }); 
        readMemo();
    }

function handleSubmit(event) {
    event.preventDefault();
    const input = document.querySelector("#memo-input");
    createMemo(input.value);
    input.value ="";
}



const form = document.querySelector('#memo-form')
form.addEventListener("submit",handleSubmit);

readMemo();