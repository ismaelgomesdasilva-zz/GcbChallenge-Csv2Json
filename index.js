const fs = require("fs");
csv = (fs.readFileSync("./exemplo.csv")).toString()

const spliteFile = csv.split("\n")
const [header, ...files] = spliteFile
const arr = []

for(const i of files){
    const spliteFile = i.split("")
    arr.push({
        name:spliteFile[0],
        stack:spliteFile[1]
    })
}
console.log(JSON.stringify(arr))