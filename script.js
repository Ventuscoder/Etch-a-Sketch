function drawCanvas(size) {
    for (let i = 1; i <= size*size; i++) {
        const div = document.createElement("div");
        div.style.color = "#ffffff";
        div.classList.add("box");
        document.querySelector('.container').appendChild(div);
    }
}