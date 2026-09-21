const enterBtn =
    document.getElementById("enterBtn");

const intro =
    document.getElementById("intro");

const flowerSpace =
    document.getElementById("flowerSpace");

const noteContainer =
    document.getElementById("noteContainer");

const closeNote =
    document.getElementById("closeNote");

const noteTitle =
    document.getElementById("noteTitle");

const noteText =
    document.getElementById("noteText");

const noteNumber =
    document.getElementById("noteNumber");

const notePhoto =
    document.getElementById("notePhoto");

const typingCursor =
    document.getElementById("typingCursor");

const petalsContainer =
    document.getElementById("petals");

const heartsContainer =
    document.getElementById("hearts");

const mouseLight =
    document.getElementById("mouseLight");

const shootingStars =
    document.getElementById("shootingStars");

const journeyCounter =
    document.getElementById("journeyCounter");

const journeyHint =
    document.getElementById("journeyHint");

const centralFlower =
    document.getElementById("centralFlower");

const finalContainer =
    document.getElementById("finalContainer");

const secretButton =
    document.getElementById("secretButton");

const secretMessage =
    document.getElementById("secretMessage");

const musicButton =
    document.getElementById("musicButton");

const musicText =
    document.getElementById("musicText");

const backgroundMusic =
    document.getElementById("backgroundMusic");


/* =========================
   VARIABLES
========================= */

let nextFlower = 1;

let typingTimer = null;

let musicPlaying = false;


/* =========================
   LUZ DEL MOUSE
========================= */

document.addEventListener(
    "mousemove",
    (event) => {

        mouseLight.style.left =
            event.clientX + "px";

        mouseLight.style.top =
            event.clientY + "px";

    }
);


/* =========================
   CREAR PÉTALOS
========================= */

const petalSymbols = [
    "✦",
    "✧",
    "❈",
    "✿",
    "❋",
    "✦",
    "✧",
    "❈",
    "✿",
    "❋"
];


petalSymbols.forEach(
    (symbol) => {

        const petal =
            document.createElement(
                "span"
            );

        petal.classList.add(
            "petal"
        );

        petal.textContent =
            symbol;

        petalsContainer.appendChild(
            petal
        );

    }
);


/* =========================
   ESTRELLAS FUGACES
========================= */

function createShootingStar() {

    const star =
        document.createElement(
            "span"
        );

    star.classList.add(
        "shooting-star"
    );


    const startX =
        40 +
        Math.random() * 60;


    const startY =
        Math.random() * 45;


    star.style.left =
        startX + "%";


    star.style.top =
        startY + "%";


    const size =
        2 +
        Math.random() * 3;


    star.style.width =
        size + "px";


    star.style.height =
        size + "px";


    shootingStars.appendChild(
        star
    );


    setTimeout(
        () => {

            star.remove();

        },
        1600
    );

}


function startShootingStars() {

    const randomTime =
        2500 +
        Math.random() * 5000;


    setTimeout(
        () => {

            createShootingStar();

            startShootingStars();

        },
        randomTime
    );

}


startShootingStars();


/* =========================
   MENSAJES + FOTOS
========================= */

const notes = {

    1: {
        title:
            "Una flor para ti 🌻",

        text:
            "Te amo por tu forma de ser, eres única y lo supe desde que nos vimos y fuimos a aquel mirador.",

        image:
            "fotos/foto1.jpg.jpeg"
    },


    2: {
        title:
            "Lo que vendrá 💛",

        text:
            "Sé que no son las rosas que querías, pero pasarán los malos momentos y, a la larga, espero estabilizarnos para poder hacer todo lo planeado.",

        image:
            "fotos/foto2.jpg.jpeg"
    },


    3: {
        title:
            "Por todo lo vivido ✨",

        text:
            "Te amo por cada tiempo dedicado, por los altos y bajos que han pasado.",

        image:
            "fotos/foto3.jpg.jpeg"
    },


    4: {
        title:
            "Lo que puedo darte 💛",

        text:
            "No es la gran cosa lo que te brindo, pero espero sea lo necesario para que no me dejes de querer.",

        image:
            "fotos/foto4.jpg.jpeg"
    },


    5: {
        title:
            "Nuestros caminos 🌌",

        text:
            "Entre millones de personas, millones de estrellas y millones de historias, me alegra que nuestros caminos se hayan encontrado.",

        image:
            "fotos/foto5.jpg.jpeg"
    },


    6: {
        title:
            "Un pequeño motivo 🌻",

        text:
            "Cada flor que ves aquí representa un pequeño motivo por el que pienso en ti.",

        image:
            "fotos/foto6.jpg.jpeg"
    },


    7: {
        title:
            "Tu sonrisa 💛",

        text:
            "Hay días grises que cambian completamente cuando apareces tú. Tu sonrisa tiene esa forma especial de iluminarlo todo.",

        image:
            "fotos/foto7.jpg.jpeg"
    },


    8: {
        title:
            "Un momento contigo ✨",

        text:
            "Si pudiera guardar un momento para repetirlo una y otra vez, elegiría uno en el que estuvieras sonriendo conmigo.",

        image:
            "fotos/foto8.jpg.jpeg"
    },


    9: {
        title:
            "Quiero más tiempo contigo 💛",

        text:
            "Quisiera pasar tanto tiempo contigo, no tener que despedirme por días, pero confío en el proceso.",

        image:
            "fotos/foto9.jpg.jpeg"
    },


    10: {
        title:
            "Lo que viene 🌟",

        text:
            "Se vienen cosas grandes y lo más grande que va pasando es conocerte, Henn. I LOVE YOU.",

        image:
            "fotos/foto10.jpg.jpeg"
    },


    11: {
        title:
            "¿Por qué 11? 🌻",

        text:
            "Te preguntarás por qué 11 rosas. Prestando atención a tus palabras, 11 es el número que más usas. Y aparte, para que no veas que esto no es un simple archivo descargado, sino algo creado especialmente para ti.",

        image:
            "fotos/foto11.jpg.jpeg"
    },


    central: {
        title:
            "Para ti, Hennelly 💛",

        text:
            "Después de recorrer cada una de las flores, llegaste hasta aquí. Y si todo esto tenía un propósito, era poder decirte de una manera diferente algo que quiero que recuerdes: TE AMO HENNELLY."
    }

};


/* =========================
   FLORES
========================= */

const flowers =
    document.querySelectorAll(
        ".flower"
    );


flowers.forEach(
    (flower) => {

        flower.classList.add(
            "locked"
        );

    }
);


/* =========================
   ACTIVAR FLOR
========================= */

function activateFlower(number) {

    flowers.forEach(
        (flower) => {

            const id =
                Number(
                    flower.getAttribute(
                        "data-note"
                    )
                );


            if (
                id === number
            ) {

                flower.classList.remove(
                    "locked"
                );

                flower.classList.add(
                    "active"
                );

            }

        }
    );


    journeyCounter.textContent =
        `${number} / 11`;


    journeyHint.textContent =
        `Sigue el camino hasta la flor número ${number} 🌻`;

}


/* =========================
   PRIMERA FLOR
========================= */

activateFlower(1);


/* =========================
   MÚSICA
========================= */

async function startMusic() {

    try {

        backgroundMusic.volume = 0.35;

        await backgroundMusic.play();

        musicPlaying = true;

        musicButton.classList.add(
            "playing"
        );

        musicText.textContent =
            " Música ON";

    } catch (error) {

        console.log(
            "No se pudo reproducir la música:",
            error
        );

    }

}


function pauseMusic() {

    backgroundMusic.pause();

    musicPlaying = false;

    musicButton.classList.remove(
        "playing"
    );

    musicText.textContent =
        " Música";

}


/* =========================
   BOTÓN MÚSICA
========================= */

musicButton.addEventListener(
    "click",
    async () => {

        if (
            musicPlaying
        ) {

            pauseMusic();

        } else {

            await startMusic();

        }

    }
);


/* =========================
   ENTRAR
========================= */

enterBtn.addEventListener(
    "click",
    async () => {

        intro.classList.add(
            "hide"
        );


        /*
         * La música comienza
         * al pulsar Entrar.
         */

        await startMusic();


        setTimeout(
            () => {

                flowerSpace.classList.add(
                    "show"
                );

            },
            600
        );

    }
);


/* =========================
   EFECTO ESCRITURA
========================= */

function typeText(text) {

    clearInterval(
        typingTimer
    );


    noteText.textContent =
        "";


    typingCursor.style.display =
        "inline-block";


    let index = 0;


    typingTimer =
        setInterval(
            () => {

                if (
                    index <
                    text.length
                ) {

                    noteText.textContent +=
                        text.charAt(index);

                    index++;

                } else {

                    clearInterval(
                        typingTimer
                    );

                    typingCursor.style.display =
                        "none";

                }

            },
            28
        );

}


/* =========================
   ABRIR CARTA
========================= */

function openNote(
    number,
    note
) {

    noteNumber.textContent =
        number === "central"
            ? "Final 💛"
            : `Flor ${number} de 11`;


    noteTitle.textContent =
        note.title;


    noteText.textContent =
        "";


    /*
     * FOTO
     *
     * Las flores 1-11 tienen
     * una fotografía propia.
     *
     * La carta central no tiene
     * fotografía.
     */

    if (
        note.image
    ) {

        notePhoto.src =
            note.image;

        notePhoto.alt =
            `Foto de nosotros - Flor ${number}`;

        notePhoto.style.display =
            "block";

    } else {

        notePhoto.src =
            "";

        notePhoto.alt =
            "";

        notePhoto.style.display =
            "none";

    }


    typingCursor.style.display =
        "inline-block";


    noteContainer.classList.add(
        "show"
    );


    setTimeout(
        () => {

            typeText(
                note.text
            );

        },
        450
    );


    createHearts();

}


/* =========================
   CORAZONES
========================= */

function createHearts() {

    const totalHearts = 22;


    for (
        let i = 0;
        i < totalHearts;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.classList.add(
            "heart"
        );


        heart.textContent =
            Math.random() > .5
                ? "💛"
                : "♡";


        heart.style.left =
            (
                45 +
                Math.random() * 10
            ) + "%";


        heart.style.top =
            (
                45 +
                Math.random() * 10
            ) + "%";


        const moveX =
            (
                Math.random() - .5
            ) * 350;


        const moveY =
            -80 -
            Math.random() * 300;


        heart.style.setProperty(
            "--move-x",
            moveX + "px"
        );


        heart.style.setProperty(
            "--move-y",
            moveY + "px"
        );


        heart.style.animationDelay =
            (
                Math.random() * .5
            ) + "s";


        heartsContainer.appendChild(
            heart
        );


        setTimeout(
            () => {

                heart.remove();

            },
            3500
        );

    }

}


/* =========================
   CLIC EN FLORES
========================= */

flowers.forEach(
    (flower) => {

        flower.addEventListener(
            "click",
            () => {

                const id =
                    Number(
                        flower.getAttribute(
                            "data-note"
                        )
                    );


                if (
                    id !== nextFlower
                ) {

                    if (
                        id > nextFlower
                    ) {

                        noteNumber.textContent =
                            "Sigue el camino 🌻";


                        noteTitle.textContent =
                            "Todavía no 💛";


                        noteText.textContent =
                            `Primero descubre la flor número ${nextFlower}. Cada una tiene algo que quiero decirte.`;


                        notePhoto.src =
                            "";

                        notePhoto.style.display =
                            "none";


                        typingCursor.style.display =
                            "none";


                        noteContainer.classList.add(
                            "show"
                        );

                    }

                    return;

                }


                const note =
                    notes[id];


                flower.classList.remove(
                    "active"
                );


                flower.classList.add(
                    "visited"
                );


                openNote(
                    id,
                    note
                );


                nextFlower++;


                if (
                    nextFlower <= 11
                ) {

                    setTimeout(
                        () => {

                            activateFlower(
                                nextFlower
                            );

                        },
                        1000
                    );


                    journeyCounter.textContent =
                        `${id} / 11`;


                    journeyHint.textContent =
                        `Ahora busca la flor número ${nextFlower} ✨`;

                }


                if (
                    nextFlower > 11
                ) {

                    completeJourney();

                }

            }
        );

    }
);


/* =========================
   CERRAR CARTA
========================= */

function closeLetter() {

    clearInterval(
        typingTimer
    );


    noteContainer.classList.remove(
        "show"
    );

}


closeNote.addEventListener(
    "click",
    closeLetter
);


/* =========================
   CLIC FUERA
========================= */

noteContainer.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            noteContainer
        ) {

            closeLetter();

        }

    }
);


/* =========================
   COMPLETAR LAS 11
========================= */

function completeJourney() {

    flowers.forEach(
        (flower) => {

            flower.classList.remove(
                "active"
            );

            flower.classList.add(
                "visited"
            );

        }
    );


    journeyCounter.textContent =
        "11 / 11";


    journeyHint.textContent =
        "Completaste el camino... 💛";


    centralFlower.classList.remove(
        "locked-central"
    );


    centralFlower.classList.add(
        "unlocked"
    );


    createFinalHearts();


    flowerSpace.classList.add(
        "journey-complete"
    );

}


/* =========================
   CORAZONES FINALES
========================= */

function createFinalHearts() {

    for (
        let i = 0;
        i < 70;
        i++
    ) {

        setTimeout(
            () => {

                const heart =
                    document.createElement(
                        "span"
                    );


                heart.classList.add(
                    "heart"
                );


                heart.textContent =
                    Math.random() > .5
                        ? "💛"
                        : "♡";


                heart.style.left =
                    (
                        10 +
                        Math.random() * 80
                    ) + "%";


                heart.style.top =
                    (
                        40 +
                        Math.random() * 20
                    ) + "%";


                const moveX =
                    (
                        Math.random() - .5
                    ) * 600;


                const moveY =
                    -100 -
                    Math.random() * 500;


                heart.style.setProperty(
                    "--move-x",
                    moveX + "px"
                );


                heart.style.setProperty(
                    "--move-y",
                    moveY + "px"
                );


                heartsContainer.appendChild(
                    heart
                );


                setTimeout(
                    () => {

                        heart.remove();

                    },
                    3500
                );

            },
            i * 35
        );

    }

}


/* =========================
   CLIC RAMO CENTRAL
========================= */

centralFlower.addEventListener(
    "click",
    () => {

        if (
            nextFlower <= 11
        ) {

            noteNumber.textContent =
                "El camino continúa 🌻";


            noteTitle.textContent =
                "Todavía falta algo 💛";


            noteText.textContent =
                `Primero tienes que descubrir las 11 flores. Te falta la número ${nextFlower}.`;


            notePhoto.src =
                "";

            notePhoto.style.display =
                "none";


            typingCursor.style.display =
                "none";


            noteContainer.classList.add(
                "show"
            );


            return;

        }


        openNote(
            "central",
            notes.central
        );


        setTimeout(
            () => {

                closeLetter();


                setTimeout(
                    () => {

                        finalContainer.classList.add(
                            "show"
                        );

                    },
                    900
                );

            },
            5000
        );

    }
);


/* =========================
   BOTÓN FINAL
========================= */

secretButton.addEventListener(
    "click",
    () => {

        secretMessage.classList.add(
            "show"
        );


        secretButton.style.opacity =
            "0";


        secretButton.style.pointerEvents =
            "none";


        createFinalHearts();

    }
);