function diffArray(arr1, arr2) {
    let differenceArray = []
    arr1.forEach((object) => {
        if (!arr2.includes(object)) differenceArray.push(object)
    })
    arr2.forEach((object) => {
        if (!arr1.includes(object)) differenceArray.push(object)
    })

    return differenceArray
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
