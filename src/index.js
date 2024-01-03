const axios = require('axios');
const cheerio = require('cheerio');
const url_pai = 'https://www.gov.br/pt-br/noticias';

function extraidados(link){
    axios.get(link).then(resp=>{
        const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const titulo = $('h1').text();
    const linkimg = $('img').attr('src');
    const data = $('span [class="value"]').first().text();
    const texto = $('#parent-fieldname-text').text();
    const dados = {titulo, linkimg, data, texto}

        console.log(dados)
    })
};

const links = axios.get(url_pai).then(resp=>{
    const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const dados = [];
    $('a[class="summary url"]').each((i,e)=>{
        const link = $(e).attr('href');
        dados.push(link) 
        
    })
    return dados
});


async function main(){
    const lnks = await links;
    lnks.map((i,e)=>{
        extraidados(i);
    });
};

main();