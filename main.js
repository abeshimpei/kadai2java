let result = document.getElementById("result");

function number(target) {
    if (result.value == "0") {
            result.value = target.value;
        } else if (result.value == "00") {
          result.value = target.value;
        } else {
          result.value += target.value;
            }
};

function operator(target) {
    if (result.value.slice(-1) == "+"){
    return;
    } else if (result.value.slice(-1) == "-") {
    return;
    } else if (result.value.slice(-1) == "*") {
    return;
    } else if (result.value.slice(-1) == "/") {
    return;
    } else if (result.value.slice(-1) == ".") {
    return;
    } else {
     result.value += target.value;
    }
};

function acBtn(){
result.value = '0';
}

function equalBtn() {
   result.value = new Function("return " + result.value)();
};
    


