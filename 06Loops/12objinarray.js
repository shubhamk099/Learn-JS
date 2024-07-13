

const myCoding = [
    {
        languageName: "JavaScript",
        extension: "js"
    },
    {
        languageName: "Python",
        extension: "py"
    },
    {
        languageName: "Ruby",
        extension: "rb"
    }
]

myCoding.forEach( (item)=> {                    // item will point to each object at each iteration
    console.log(`language name is ${item.languageName} and extension is ${item.extension}`);
})
