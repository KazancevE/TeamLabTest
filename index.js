let memory;

function insert (num) {
    document.form.table.value = document.form.table.value + num;
}

function clean(){
    document.form.table.value = "";
    console.log("удалил")
}

function back(){
    let val = document.form.table.value;
    document.form.table.value = val.substring(0,val.length-1);
    console.log( "Back");
}
function invert() {
    document.form.table.value = -(+document.form.table.value)
}

function equal() {
    let val = document.form.table.value;
    if (val) {
        document.form.table.value = eval(val);
        console.log("Посчитал")
    }
}

function memorySave(){
    let val = document.form.table.value;
    memory = val;
    console.log("Сохранил")
}

function memoryClear(){
    memory = ''
}

function memoryRead() {
    document.form.table.value = memory;
    console.log("Прочитано");
}

function memorySum() {
    document.form.table.value = +document.form.table.value + +memory;
}

function memorySub() {
    document.form.table.value = +memory - +document.form.table.value;
}

console.log(memory)