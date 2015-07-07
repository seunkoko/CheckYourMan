

var x = {
    handsome: true,
    funny: true,
    mercedes: true
};

var y = {
    handsome: true,
    funny: false,
    mercedes: true
};

var z = {
    handsome: false,
    funny: true,
    mercedes: false
};

function happy(obj){
    return (obj.handsome && obj.funny && obj.mercedes);
}

function comfortable(obj){
    return (obj.handsome && !obj.funny && obj.mercedes);
}

function will_try(obj){
    return (obj.funny && !obj.handsome && !obj.mercedes);
}

function test_me(test_obj){
    if(happy(test_obj)){
        console.log("I am happy");
    }else if(comfortable(test_obj)){
        console.log("I am comfortable");
    }else if(will_try(test_obj)){
        console.log("I will try");
    }else{
        console.log("Not manageable");
    }
}

test_me(x);
test_me(y);
test_me(z);