module.exports = function parseStringASArray(arrayAsString) {
    if(typeof arrayAsString != String) {
        return new Error("Não é uma string")
    } else {
        return arrayAsString.split(',').map(tech => tech.trim());
    }
}
