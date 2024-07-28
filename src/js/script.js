const frases = [
    "Te amo no solo por lo que eres, sino por lo que soy cuando estoy contigo.",
    "Eres la razón por la que sonrío cada día.",
    "No hay nada más bello que compartir mi vida contigo.",
    "Cada día que paso contigo es el mejor día de mi vida.",
    "En el mundo entero, no hay corazón para mí como el tuyo.",
    "Eres mi sueño hecho realidad.",
    "Contigo, he encontrado el amor verdadero.",
    "Eres mi todo y siempre lo serás.",
    "Tu amor es mi mayor tesoro.",
    "No puedo imaginar mi vida sin ti.",
    "Eres la luz que ilumina mi camino.",
    "Sos mi lugar feliz.",
    "Tu amor me hace fuerte.",
    "Eres mi razón de ser.",
    "No hay nada que no haría por ti.",
    "Solo vivo para amarte.",
    "Mi amor por ti es eterno.",
    "Deseo tenerte y besarte toda la vida.",
    "Eres mi niña bonita.",
    "Me encantas.",
    "Perdon por todo, simplemente quiero amarte.",
    "No sabes todas las veces que quiero verte a los ojos y decirte que te amo.",
    "Eres mi todo, hoy y siempre.",
    "Amo todo de ti, tu sonrisa, tus ojos y tu carita.",
    "Cada segundo contigo es invaluable.",
    "Eres mi razón para despertar cada mañana.",
    "Tu amor me llena de paz.",
    "Eres mi mejor amiga y mi amor eterno.",
    "Sin ti, mi vida estaría incompleta.",
    "Eres el amor de mi vida.",
    "Mi corazón late por ti.",
    "Eres mi refugio en la tormenta.",
    "Te amo más allá de las estrellas.",
    "Eres mi sueño hecho realidad.",
    "Eres mi pasado, mi presente y mi futuro.",
    "Tu amor es mi mayor bendición.",
    "Eres mi razón de vivir.",
    "En tus ojos encuentro mi cielo.",
    "Eres el amor que siempre soñé.",
    "Eres la niña con quien siempre soñe.",
    "Mi corazón es tuyo para siempre.",
    "Eres mi amor eterno.",
    "Sin ti, no soy nada.",
    "Te amo con todo mi ser.",
    "Se que no e estado muy presente, pero quiero que jamas olvides que nunca dejare de amarte y siempre estare solo para ti mi amorcito"
];

document.getElementById("love-button").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * frases.length);
    document.getElementById("love-message").textContent = frases[randomIndex];
    document.getElementById("love-message").style.visibility = "visible";
});

document.addEventListener('DOMContentLoaded', () => {
    const ulElement = document.getElementById('wave-menu');
    const audioElement = document.getElementById('background-music');

    ulElement.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    });
});
