
const btnTop = document.getElementById("go-to-top");
const btnBottom = document.getElementById("go-to-bottom");

if (btnBottom) {
  btnBottom.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
}

if (btnTop) {
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const botonesPlaneta = document.querySelectorAll(".btn-planeta");
if (botonesPlaneta.length > 0) {
  botonesPlaneta.forEach((btn) => {
    btn.textContent = "Conocer su temperatura";
  });
}


const planetas = {
  sol: {
    nombre: "Sol",
    img: "assets/img/sol.png",
    desc: "La parte más caliente del Sol es su núcleo, donde las temperaturas superan los 27 millones de °F (15 millones de °C). La parte del Sol que llamamos su superficie, la fotosfera, tiene una temperatura relativamente baja de 10 000 °F (5500 °C). En uno de los mayores misterios del Sol, su atmósfera exterior, la corona, se calienta a medida que se aleja de la superficie. La corona alcanza hasta 3,5 millones de °F (2 millones de °C), mucho, muchísimo más caliente que la fotosfera.",
    temp: "🔥 5500 °C",
    modifier: "hot",
  },
  mercurio: {
    nombre: "Mercurio",
    img: "assets/img/mercurio.png",
    desc: "Mercurio se encuentra a unos 57 millones de kilómetros (36 millones de millas) del Sol. Desde esta distancia, la luz solar tarda aproximadamente tres minutos en llegar hasta Mercurio. A pesar de estar relativamente cerca del Sol, Mercurio experimenta temperaturas nocturnas extremadamente bajas. Su temperatura superficial promedio es de 167 °C (333 °F). Durante el día, las temperaturas son mucho más elevadas que el promedio y pueden alcanzar los 430 °C (800 °F). Sin embargo, al carecer de una atmósfera lo suficientemente densa como para retener el calor nocturno, las temperaturas pueden descender hasta los -180 °C (-290 °F).",
    temp: "🌡️ 167 °C promedio",
    modifier: "warm",
  },
  venus: {
    nombre: "Venus",
    img: "assets/img/venus.png",
    desc: "Venus es el planeta más caliente del sistema solar, con temperaturas superficiales que pueden alcanzar los 464 °C (867 °F). Esta alta temperatura se debe a su densa atmósfera compuesta principalmente de dióxido de carbono, que crea un efecto invernadero extremo. La atmósfera de Venus atrapa el calor del Sol, lo que hace que las temperaturas sean tan altas incluso en la noche. Además, la presión atmosférica en la superficie de Venus es aproximadamente 92 veces mayor que la de la Tierra.",
    temp: "🔥 464 °C",
    modifier: "hot",
  },
  tierra: {
    nombre: "Tierra",
    img: "assets/img/tierra.png",
    desc: "Nuestro planeta natal es un planeta dinámico y tormentoso, con todo tipo de fenómenos meteorológicos. La temperatura media de la superficie terrestre es de 15 °C (59 °F). Sin embargo, en la Tierra se registran temperaturas extremas. El Valle de la Muerte ostenta el récord de la temperatura más alta registrada: 56,7 °C (134 °F), en 1913. La temperatura más baja registrada fue de -89,2 °C (-128,6 °F) en la estación Vostok, Antártida, en 1983.",
    temp: "🌍 15 °C promedio",
    modifier: "mild",
  },
  marte: {
    nombre: "Marte",
    img: "assets/img/marte.png",
    desc: "La temperatura media de la superficie de Marte es de -85 °F (-65 °C). Debido a la delgadez de su atmósfera, el calor del Sol se disipa fácilmente. Las temperaturas en el Planeta Rojo oscilan entre los 70 °F (20 °C) y los -225 °F (-153 °C). Ocasionalmente, los vientos en Marte son lo suficientemente fuertes como para generar tormentas de polvo que cubren gran parte del planeta.",
    temp: "❄️ -65 °C",
    modifier: "cold",
  },
  jupiter: {
    nombre: "Júpiter",
    img: "assets/img/jupiter.png",
    desc: "Las franjas y remolinos de Júpiter son hermosos, pero en realidad son nubes frías y ventosas de amoníaco y agua, flotando en una atmósfera de hidrógeno y helio. La icónica Gran Mancha Roja del planeta es una tormenta gigante, más grande que la Tierra, que ha estado activa durante cientos de años. La temperatura media en Júpiter es de -110 °C (-166 °F).",
    temp: "🌪️ -110 °C",
    modifier: "cold",
  },
  saturno: {
    nombre: "Saturno",
    img: "assets/img/saturno.png",
    desc: "Saturno es un gigante gaseoso con una atmósfera compuesta principalmente de hidrógeno y helio. La temperatura media en Saturno es de aproximadamente -140 °C (-220 °F). Esta baja temperatura se debe a su gran distancia del Sol, lo que hace que reciba menos energía solar. Además, la atmósfera de Saturno es muy densa y tiene una presión atmosférica mucho mayor que la de la Tierra, lo que contribuye a su clima frío y ventoso.",
    temp: "❄️ -140 °C",
    modifier: "cold",
  },
  urano: {
    nombre: "Urano",
    img: "assets/img/urano.png",
    desc: "Urano es un gigante helado con una atmósfera compuesta principalmente de hidrógeno, helio y metano. La temperatura media en Urano es de aproximadamente -195 °C (-320 °F), lo que lo convierte en el planeta más frío del sistema solar. Esta baja temperatura se debe a su gran distancia del Sol, lo que hace que reciba muy poca energía solar.",
    temp: "🥶 -195 °C",
    modifier: "frozen",
  },
  neptuno: {
    nombre: "Neptuno",
    img: "assets/img/neptuno.png",
    desc: "Neptuno es un gigante helado con una atmósfera compuesta principalmente de hidrógeno, helio y metano. La temperatura media en Neptuno es de aproximadamente -200 °C (-330 °F), lo que lo convierte en uno de los planetas más fríos del sistema solar. Neptuno tiene una atmósfera muy densa y una presión atmosférica mucho mayor que la de la Tierra.",
    temp: "🌬️ -200 °C",
    modifier: "frozen",
  },
  "55-cancri-e": {
    nombre: "55 Cancri e",
    img: "assets/img/55 Cancri e.png",
    desc: "55 Cancri e es un exoplaneta caliente que orbita una estrella similar al Sol. Su superficie está extremadamente caliente, con temperaturas que pueden superar los 2000 °C. Es un planeta rocoso y su atmósfera es muy densa. Se especula que su composición puede incluir grafito y diamante bajo presión extrema.",
    temp: "🔥 +2000 °C",
    modifier: "hot",
  },
  HD_189733_b: {
    nombre: "HD 189733 b",
    img: "assets/img/HD_189733_b.png",
    desc: "HD 189733 b es un exoplaneta gigante gaseoso que orbita una estrella a unos 63 años luz de la Tierra. Su temperatura media es de aproximadamente 1200 °C, lo que lo convierte en uno de los exoplanetas más calientes conocidos. Tiene un intenso color azul cobalto y llueven cristales de sílice a más de 9000 km/h en su atmósfera mortal.",
    temp: "🔥 1200 °C",
    modifier: "hot",
  },
  "OGLE-2005-BLG-390Lb": {
    nombre: "OGLE-2005-BLG-390Lb",
    img: "assets/img/OGLE-2005-BLG-390Lb.png",
    desc: "OGLE-2005-BLG-390Lb es un exoplaneta frío y lejano que orbita una estrella a unos 21.000 años luz de la Tierra. Conocido como 'Hoth', su temperatura media es de aproximadamente -220 °C, lo que lo convierte en uno de los exoplanetas más fríos conocidos.",
    temp: "🧊 -220 °C",
    modifier: "frozen",
  },
};



const params = new URLSearchParams(window.location.search);
const planetaId = params.get("planeta");

const nombreEl = document.getElementById("nombre-planeta");
const imagenEl = document.getElementById("imagen-planeta");
const descEl = document.getElementById("descripcion-planeta");
const tempEl = document.getElementById("temperatura");
const breadcrumb = document.getElementById("breadcrumb-planeta");

if (
  planetaId &&
  planetas[planetaId] &&
  nombreEl &&
  imagenEl &&
  descEl &&
  tempEl
) {
  const data = planetas[planetaId];

  nombreEl.textContent = data.nombre;
  imagenEl.src = data.img;
  imagenEl.alt = "Imagen de " + data.nombre;
  descEl.textContent = data.desc;
  tempEl.textContent = data.temp;

  if (data.modifier) {
    tempEl.classList.add("place-card__temp-badge--" + data.modifier);
    const colorMap = {
      hot: {
        bg: "rgba(239,68,68,0.25)",
        color: "#fca5a5",
        border: "rgba(239,68,68,0.3)",
      },
      warm: {
        bg: "rgba(249,115,22,0.25)",
        color: "#fdba74",
        border: "rgba(249,115,22,0.3)",
      },
      mild: {
        bg: "rgba(34,197,94,0.2)",
        color: "#86efac",
        border: "rgba(34,197,94,0.3)",
      },
      cold: {
        bg: "rgba(56,189,248,0.2)",
        color: "#7dd3fc",
        border: "rgba(56,189,248,0.3)",
      },
      frozen: {
        bg: "rgba(129,140,248,0.2)",
        color: "#c4b5fd",
        border: "rgba(129,140,248,0.3)",
      },
    };
    const style = colorMap[data.modifier];
    if (style) {
      tempEl.style.background = style.bg;
      tempEl.style.color = style.color;
      tempEl.style.border = "1px solid " + style.border;
    }
  }

  if (breadcrumb) breadcrumb.textContent = data.nombre;

  document.title = data.nombre + " — Exploración Espacial";
}
