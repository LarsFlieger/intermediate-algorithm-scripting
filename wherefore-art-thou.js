function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line

    // Get all keys from source
    const sourceKeys = Object.keys(source)
    
    // Checks for each object if source is present in object
    collection.forEach(object => {
        let isPresent = true
        sourceKeys.forEach(sourceKey => {
            if(object[sourceKey] != source[sourceKey])
                isPresent = false
        })

        // If present add to result array
        if(isPresent)
            arr.push(object)
    })

    // Only change code above this line
    return arr
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))