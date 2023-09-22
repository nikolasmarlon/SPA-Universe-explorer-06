


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

        
        // Remove a classe 'ativo' de todos os botões do menu
        const menuButtons = document.querySelectorAll('.menu-button');
        menuButtons.forEach(button => button.classList.remove('ativo'));
        
        // Adiciona a classe 'ativo' ao botão do menu correspondente à página atual
        const button = document.querySelector(`.menu-button[data-rota="${pathname.substring(1)}"]`);

        console.log(button)
        console.log(pathname)
        
        if (button) {
            button.classList.add('ativo');            
        }
        
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