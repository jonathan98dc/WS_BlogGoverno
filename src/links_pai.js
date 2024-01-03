const axios = require('axios');
const cheerio = require('cheerio');


const url_pai = 'https://www.gov.br/pt-br/noticias';

axios.get(url_pai).then(resp=>{
    const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const dados = [];
    $('a[class="summary url"]').each((i,e)=>{
        const link = $(e).attr('href');
        dados.push(link) 
        
    })
    console.log(dados)
})