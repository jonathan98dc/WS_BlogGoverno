/*Objetivo: Extração das informações do site da pagina Filho
titulo
link
data da publicao
texto
*/


const axios = require('axios');
const cheerio = require('cheerio');


const url_filho = 'https://agenciagov.ebc.com.br/noticias/202401/inmetro-celebra-conquista-com-projeto-selecionado-no-programa-rota-2030';

axios.get(url_filho).then(resp=>{
    const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const titulo = $('h1').text();
    const linkimg = $('img').attr('src');
    const data = $('#data-publicacao').text();
    const texto = $('[class="texto-conteudo"]').text();
    const dados = {titulo, linkimg, data, texto}

    console.log(dados)
})