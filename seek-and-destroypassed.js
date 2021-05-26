function destroyer(arr) {
    const elements = Array.from(arguments).slice(1)
    const result = arr.filter(e => !elements.includes(e))

    return result
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);