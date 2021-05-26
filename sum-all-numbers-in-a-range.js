function sumAll(arr) {
    const lowerNumber = Math.min(...arr)
    const higherNumber = Math.max(...arr)
    let sum = 0
    for (let i = lowerNumber; i <= higherNumber; i++) sum += i
    return sum
}

sumAll([1, 4])
