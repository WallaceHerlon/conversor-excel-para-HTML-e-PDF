var Reader = require('./Reader')

var leitor = new Reader()

async function main() {
    var dados = leitor.Read('./users.csv')
    console.log(dados)
}

main()
