function curriedAdd() {
    let sum = 0;
    function inner(val){
        if(val === undefined){
            return sum
        }else{
            sum += val;
            return inner
        }
    }

    return inner(...arguments);
}

module.exports = { curriedAdd };
