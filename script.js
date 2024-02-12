const submit = document.querySelector('#submit')
const size = document.querySelector('#size')

const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    // alert("cleared grid!");
    cleargrid();
})


submit.addEventListener('click', () => {
    // alert(size.value);
    let gridSize = size.value;
    buildGrid(gridSize);
})

let color = "black";

function cleargrid(){
    document.querySelector('.grid').textContent = '';
}

function buildGrid(size){
    let gridSize = 0;
    if(size <16 || size > 100 || isNaN(size))
        gridSize = 16;
    else{
        gridSize = size;
    }

    //the idea here will to be create a row for block, then add columns to it.
    for(let i = 0; i < size; i++){
        let lines = document.createElement('div');
        lines.classList.add('line')
        document.querySelector('.grid').appendChild(lines);
        for(let j = 0; j < size; j++){

        }

    }


}