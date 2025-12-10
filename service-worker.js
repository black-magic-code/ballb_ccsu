self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/economics-2023.pdf',
        '/economics--2022.pdf',
'/economics-2021.pdf',
'/economics-2020.pdf',
'/economics-2019.pdf',
'/economics-2018.pdf',
'/economics-2017.pdf',
'/economics-2016.pdf',
'/general-english-2024.pdf',
'/general-english-2023.pdf',
'/general-english-2022.pdf',
'/general-english-2022_2.pdf',
'/general-english-2021.pdf',
'/general-english-2020.pdf',
'/general-english-2019.pdf',
'/general-english-2018.pdf',
'/general-english-2016.pdf',
'/indian-history-2023.pdf',
'/indian-history-2022.pdf',
'/indian-history-np-2021.pdf',
'/indian-history-np-2020.pdf',
'/indian-history-2019.pdf',
'/indian-history-2018.pdf',
'/indian-history-2017.pdf',
'/indian-history-2016.pdf',
'/political-2022.pdf',
'/2political-2022.pdf',
'/political-2021.pdf',
'/political-2020.pdf',
'/political-2019.pdf',
'/political-science-2018.pdf',
'/political-science-2017.pdf',
'/political-science-2016.pdf',
'/sociology-2023.pdf',
'/sociology-2021.pdf',
'/sociology-2020.pdf',
'/sociology-2019.pdf',
'/sociology-2018.pdf',
'/sociology-2017.pdf',
'/sociology-2016.pdf',


 
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
