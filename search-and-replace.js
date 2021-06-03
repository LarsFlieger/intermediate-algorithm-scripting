function myReplace(str, before, after) {
    console.time("for")
    const isUpperCase = before != before.toLowerCase()
    let result = ""

    if(isUpperCase)
        result = str.replaceAll(before, after.substring(0, 1).toUpperCase() + after.substring(1))
    else
        result = str.replaceAll(before, after.substring(0, 1).toLowerCase() + after.substring(1))

    console.timeEnd("for")    
    return result
}

fetch("message.txt").then(response => response.text()).then(data => myReplace(data, "Lorem", "Ficken"))