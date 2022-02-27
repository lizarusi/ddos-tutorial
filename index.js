import fetch from 'node-fetch';

(async () => {
  let i = 1;
  while (true) {
    i++;
    if (i % 1000 === 0) {
      console.log(i)
      await new Promise((res) => {
        setTimeout(res, 1000)
      })
    }
    
    fetch('https://www.tinkoff.ru/').catch((e) => e)
  }
})();
