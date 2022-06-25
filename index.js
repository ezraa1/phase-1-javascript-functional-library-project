function myReduce(collection, callback, acc){
    let newCollection = elementsCollection(collection);

    if(!acc){
        acc = newCollection[0]
        newCollection = newCollection.slice(1);
    }

    const nCLength = newCollection.length;
    for (let i=0; i < nCLength; i++){
    acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}

function myFind(collection, predicate){
    const newCollection = elementsCollection(collection);
    for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i]))
        return newCollection[i];
    }
    return undefined;
}

function myFilter(collection, predicate){
    const newCollection =elementsCollection(collection);

    const array = [];
    for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i]))
        array.push(newCollection[i])
    }
    return array;
}

function mySize(collection){
    const newCollection = elementsCollection(collection);
    return newCollection.length;
}

function myFirst(array, stop=false){
    if(stop){
        return array.slice(0, stop)
    }else{
       return array[0]
    }
}

function myLast(array, start=false){
    if(start){
        return array.slice(array.length-start, array.length)
    }else{
        return array[array.length - 1];
    }
}

function myKeys(object){
    const keysArray = [];
    for (let key in object){
        keysArray.push(key);
    }
    return keysArray;
}

function myValues(object){
    const valuesArr = [];
    for(let key in object){
        valuesArr.push(object[key]);
    }
    return valuesArr;
}