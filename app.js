const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());

// const div = document.querySelector('#feed');



app.get('/', (req, res) => {
    const url = 'https://www.polisensimhopp.se/start/?ID=27902&logoutSA=1';
    let articles = [];
    axios(url).then(response => {
        const html = response.data;
        // console.log(html);
        const $ = cheerio.load(html);
        $('.inner', html).each(function () {
            console.log($(this).text());

            // articles.push({
            //     title: $(this).text(),
            //     url: $(this).find('a').attr('href')
            // })
            res.json({
                title: $(this).text(),
            })
        });
    }).catch(err => console.log(err));
});

// div.innerHTML = articles.map(article => `
//     <div>
//         <a href="${article.url}">${article.title}</a>
//     </div>
// `).join('')

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));