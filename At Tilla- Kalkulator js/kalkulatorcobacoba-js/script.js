function insert(num){
    document.form.textView.value = document.form.textView.value + num;
}

function c(){
    document.form.textView.value = ""
}

function del(){
    var del = document.form.textView.value;
    document.form.textView.value = del.substring(del.length - 1, 0);
}

function equal(){
    var x =   document.form.textView.value;
    if(x ==""){
        alert('Masukkan angka terlebih dahulu');
    }

    if(x){
    document.form.textView.value = eval(x);}
}