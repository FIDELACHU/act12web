Vue.component('chuck-card', {
    props: ['value', 'icon_url'],
    template: `
        <div class='card'>
        <img :src="icon_url" alt="Chuck Norris">
            <h4 class='margen'>{{ value }}</h4>
        </div>  `
});

var app = new Vue({
    el: '#app',
    data: {
        chuck: [
        { 
            "icon_url": "https://img.europapress.es/fotoweb/fotonoticia_20150310130850-732359_1200.jpg",
            "value": 'Chuck Norris can skydive into outer space.' },
        { 
            "icon_url": "https://img.europapress.es/fotoweb/fotonoticia_20150310130850-732359_1200.jpg",
            "value": 'The chief export of Chuck Norris is pain.' },
        { 
            "icon_url": "https://img.europapress.es/fotoweb/fotonoticia_20150310130850-732359_1200.jpg",
            "value": 'Chuck Norris doesnt read books. He stares them down until he gets the information he wants.' },
        { 
            "icon_url": "https://img.europapress.es/fotoweb/fotonoticia_20150310130850-732359_1200.jpg",
            "value": 'Time waits for no man. Unless that man is Chuck Norris.' },
        { 
            "icon_url": "https://img.europapress.es/fotoweb/fotonoticia_20150310130850-732359_1200.jpg",
            "value": 'If you spell Chuck Norris in Scrabble, you win. Forever.' }
        ]
    },
});
