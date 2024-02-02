const getRandomCat = require('random-cat-img');
(async () => {
    const data = await getRandomCat();
    console.log(data.message); // https://cdn.sefinek.net/images/animals/cat/cat-1362565-min.jpg
})();