/*Objetivo: Extração das informações do site da pagina Filho
titulo
link
data da publicao
texto
*/


const axios = require('axios');
const cheerio = require('cheerio');


const url_filho = 'https://www.gov.br/pt-br/noticias/meio-ambiente-e-clima/2023/08/fundo-amazonia-dinamarca-anuncia-doacao-de-r-110-milhoes';
axios.get(url_filho).then(resp=>{
    const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const titulo = $('h1').text();
    const linkimg = $('img').attr('src');
    const data = $('span [class="value"]').first().text();
    const texto = $('#parent-fieldname-text').text();
    const dados = {titulo, linkimg, data, texto}

    console.log(dados)
})