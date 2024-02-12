const submit = document.querySelector('#submit')
const size = document.querySelector('#size')

submit.addEventListener('click', () => {
    //alert(size.value)
    let gridSize = size.value;
    buildGrid(gridSize);
})

let color = "black";

function buildGrid(size){
    let gridSize = 0;
    if(size <16 || size > 100 || isNaN(size))
        gridSize = 16;
    else{
        gridSize = size;
    }
    

}