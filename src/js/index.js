function makeRow(v = 0) {
    const array = new Array(9);
    array.fill(v);
    return array;
}
function makeMatrix(v = 0) {
    return Array.from({ length: 9 }).map(() => makeRow(v));    
}

function shuffle(array) {
    const endIndexs = array.length - 2  //最后一个下标数
    for (let i = 0; i <= endIndexs; i++) {
        const j = Math.floor(Math.random() * (array.length - i));
        [array[i], array[j]] = [array[j], array[i]]
    }
    console.log(array);

    return array
}

const a = makeMatrix();
const b = Array.from({length:9},(v,i)=>i);
console.log(b);
shuffle(b)



