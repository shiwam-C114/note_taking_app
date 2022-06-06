let notes = []
async function saveNotes() {
    let head = document.getElementById("note-heading").value
    console.log(head)
    let body = document.getElementById("note-body").value
    console.log(body)
    let payload = {
        "heading":head,
        "note":body
    }
    notes.push(payload)
    showNotes()
}

function showNotes() {
    let parentCard = document.querySelector(".display")
    parentCard.innerHTML = ""
    notes.forEach((e,i) => {
        console.log(e)
        let card = document.createElement('div')
        card.setAttribute("class","notes-card")
        let srNo = document.createElement('p')
        let H = document.createElement('h2')
        H.setAttribute("id","note-heading")
        let B = document.createElement('p')
        B.setAttribute("id","note-body")
        srNo.innerText =`notes id:${i+1}` 
        H.innerText = e.heading
        B.innerText = e.note
        card.append(srNo,H,B)
        parentCard.appendChild(card)
    });
}