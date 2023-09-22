


export class Rotas {
    rotas = {}

    adicionarRota(nomeRota, paginaHtml){
        this.rotas[nomeRota] = paginaHtml
    }

    rota(evento){
        evento = evento || window.event

        evento.preventDefault()

        window.history.pushState({}, "", evento.target.href)

        this.handle()
    }

    handle(){

        // Desestruturação (pathname)
        const { pathname } = window.location

        // Pegar a rota
        const rota = this.rotas[pathname] || this.rotas[404]


        document.body.className = pathname.substring(1) // remove a barra inicial (/)

        // Promises
        // Fetch sempre retorna uma promessa
        // fetch ( ir buscar )
        // then ( quando concluir, execute uma função )
        fetch(rota)
        .then( data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}