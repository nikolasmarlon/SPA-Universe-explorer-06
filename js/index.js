import { Rotas } from "./rotas.js";



// Instanciando um objeto
const rotas = new Rotas()

rotas.adicionarRota('/', '/pages/home.html')
rotas.adicionarRota('/universo', '/pages/universo.html')
rotas.adicionarRota('/explorar', '/pages/explorar.html')
rotas.adicionarRota( 404, '/pages/404.html')


rotas.handle()

window.onpopstate = () => rotas.handle()

