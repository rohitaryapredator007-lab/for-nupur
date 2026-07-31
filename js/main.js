/* =========================================================
   BASIC ELEMENTS
========================================================= */

const loadingScreen =
    document.getElementById("loading-screen");

const landingPage =
    document.getElementById("landing-page");

const progressBar =
    document.getElementById("loading-progress");

const percentageText =
    document.getElementById("loading-percent");

const beginButton =
    document.getElementById("begin-button");

const chapterOne =
    document.getElementById("chapter-one");

const chapterTwo =
    document.getElementById("chapter-two");

const chapterThree =
    document.getElementById("chapter-three");

const chapterTwoButton =
    document.getElementById("chapter-two-button");

const chapterThreeButton =
    document.getElementById("chapter-three-button");


/* =========================================================
   LOADING
========================================================= */

let loadingProgress = 0;

const loadingInterval =
    setInterval(() => {

        loadingProgress++;

        progressBar.style.width =
            `${loadingProgress}%`;

        percentageText.textContent =
            `${loadingProgress}%`;

        if (loadingProgress >= 100) {

            clearInterval(loadingInterval);

            setTimeout(() => {

                loadingScreen.classList.add("hidden");

                landingPage.classList.add("visible");

            }, 700);
        }

    }, 35);


/* =========================================================
   CHAPTER NAVIGATION
========================================================= */

beginButton.addEventListener(
    "click",
    () => {

        chapterOne.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);


chapterTwoButton.addEventListener(
    "click",
    () => {

        chapterTwo.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);


chapterThreeButton.addEventListener(
    "click",
    () => {

        chapterThree.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                if (
                    entry.target.classList.contains(
                        "timeline-memory"
                    )
                ) {

                    entry.target.classList.add("active");
                }

                revealObserver.unobserve(entry.target);

            });

        },

        {
            threshold: 0.16
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   TIMELINE PROGRESS
========================================================= */

const timeline =
    document.querySelector(".timeline");

const timelineProgress =
    document.querySelector(".timeline-progress");


function updateTimeline() {

    if (!timeline || !timelineProgress) {
        return;
    }

    const rect =
        timeline.getBoundingClientRect();

    const travelled =
        window.innerHeight * 0.55 - rect.top;

    const percentage =
        travelled / rect.height;

    const clamped =
        Math.max(
            0,
            Math.min(1, percentage)
        );

    timelineProgress.style.height =
        `${clamped * 100}%`;
}


window.addEventListener(
    "scroll",
    updateTimeline,
    { passive: true }
);

window.addEventListener(
    "resize",
    updateTimeline
);

updateTimeline();


/* =========================================================
   CHAPTER ONE MEMORIES
========================================================= */

const memories = [

    {
        id: "meeting",

        number: "MEMORY 01",

        date:
            "5 AUGUST 2023 · 11:30 AM",

        title:
            "The Day We Met",

        location:
            "Class S117",

        image:
            "assets/photos/chapter1/meeting.jpg",

        alt:
            "A memory from the day our story began",

        story: `
            <p>
                It started in the most ordinary
                way possible.
            </p>

            <p>
                Class S117.
                Sunil Malvatkar Sir's class.
                We were filling out our
                anti-ragging forms.
            </p>

            <p>
                Nothing about that moment looked
                like the beginning of something
                extraordinary.
            </p>

            <p>
                But somewhere in that classroom
                was the girl who would eventually
                become one of the most important
                parts of my life.
            </p>

            <p class="story-highlight">
                I didn't know it then,
                but our story had already begun.
            </p>
        `
    },


    {
        id: "first-confession",

        number: "MEMORY 02",

        date:
            "20 SEPTEMBER 2023 · WEDNESDAY",

        title:
            "My First Confession",

        location:
            "EIM Lecture",

        image:
            "assets/photos/chapter1/confession.jpg",

        alt:
            "A memory from my first confession",

        story: `
            <p>
                This one was a little complicated.
            </p>

            <p>
                It was one-sided.
                It happened during an EIM lecture.
            </p>

            <p>
                And somehow...
                I confessed in Japanese. 😭
            </p>

            <p>
                Maybe it wasn't some perfect
                movie confession.
            </p>

            <p>
                Maybe our story wasn't ready
                to begin just yet.
            </p>

            <p>
                But it was the first time
                I put those feelings into words.
            </p>

            <p class="story-highlight">
                Our story hadn't officially started,
                but my heart had already
                made its decision.
            </p>
        `
    },


    {
        id: "ring",

        number: "MEMORY 03",

        date:
            "5 OCTOBER 2023",

        title:
            "The Ring",

        location:
            "A little sign that something was changing",

        image:
            "assets/photos/chapter1/ring.jpg",

        alt:
            "The ring that became part of our story",

        story: `
            <p>
                Then came October 5th.
            </p>

            <p>
                You gave me a ring.
            </p>

            <p>
                Such a small thing to hold
                in my hand, yet somehow it carried
                a feeling much bigger than itself.
            </p>

            <p>
                Maybe we still hadn't said
                everything that needed to be said.
            </p>

            <p>
                But something between us
                was changing.
            </p>

            <p class="story-highlight">
                And I think we both knew it. ❤️
            </p>
        `
    },


    {
        id: "became-us",

        number:
            "THE MOMENT EVERYTHING CHANGED",

        date:
            "20 OCTOBER 2023 · 3:30 PM",

        title:
            "The Day We Became Us",

        location:
            "Near NSQ → College Garba",

        image:
            "assets/photos/chapter1/became-us.jpg",

        alt:
            "A memory from the day we became us",

        special: true,

        story: `
            <p>
                And then came the day
                I'll never forget.
            </p>

            <p>
                <strong>
                    20 October 2023.
                </strong>
            </p>

            <p>
                Around 3:30 PM,
                near NSQ,
                I finally confessed to you.
            </p>

            <p>
                Was it smooth?
                Absolutely not. 😭
            </p>

            <p>
                It was awkward,
                nervous,
                and probably nothing like
                the perfect confession
                I'd imagined.
            </p>

            <p>
                But I wouldn't change it.
            </p>

            <p>
                Because it was mine.
                My first real confession.
            </p>

            <p class="story-highlight">
                And hopefully,
                the only one I'll ever
                need to make.
            </p>

            <p>
                But the story wasn't
                finished yet...
            </p>

            <p>
                Later that day,
                surrounded by music,
                lights and Garba,
                you gave me the answer
                I'd been waiting for.
            </p>

            <p class="story-highlight">
                "YES." ❤️
            </p>

            <p>
                And suddenly...
            </p>

            <p class="story-highlight">
                there was an us.
            </p>
        `
    }

];


/* =========================================================
   MEMORY VIEWER ELEMENTS
========================================================= */

const memoryViewer =
    document.getElementById("memory-viewer");

const memoryBackdrop =
    document.getElementById("memory-backdrop");

const memoryClose =
    document.getElementById("memory-close");

const viewerContainer =
    document.querySelector(".memory-viewer-container");

const viewerImageWrapper =
    document.getElementById("viewer-image-wrapper");

const viewerImage =
    document.getElementById("viewer-image");

const viewerNumber =
    document.getElementById("viewer-number");

const viewerDate =
    document.getElementById("viewer-date");

const viewerTitle =
    document.getElementById("viewer-title");

const viewerLocation =
    document.getElementById("viewer-location");

const viewerStory =
    document.getElementById("viewer-story");

const previousMemoryButton =
    document.getElementById("previous-memory");

const nextMemoryButton =
    document.getElementById("next-memory");

const viewerPosition =
    document.getElementById("viewer-position");


let currentMemoryIndex = 0;


/* =========================================================
   OPEN MEMORY
========================================================= */

function openMemory(memoryId) {

    const index =
        memories.findIndex(
            memory =>
                memory.id === memoryId
        );

    if (index === -1) {
        return;
    }

    currentMemoryIndex = index;

    updateMemoryViewer();

    memoryViewer.classList.add("open");

    memoryViewer.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("viewer-open");

    setTimeout(() => {

        memoryClose.focus();

    }, 100);
}


/* =========================================================
   CLOSE MEMORY
========================================================= */

function closeMemory() {

    memoryViewer.classList.remove("open");

    memoryViewer.classList.remove("special");

    memoryViewer.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("viewer-open");
}


/* =========================================================
   UPDATE MEMORY VIEWER
========================================================= */

function updateMemoryViewer() {

    const memory =
        memories[currentMemoryIndex];


    viewerNumber.textContent =
        memory.number;

    viewerDate.textContent =
        memory.date;

    viewerTitle.textContent =
        memory.title;

    viewerLocation.textContent =
        memory.location;

    viewerStory.innerHTML =
        memory.story;


    viewerPosition.textContent =
        `${currentMemoryIndex + 1} / ${memories.length}`;


    previousMemoryButton.disabled =
        currentMemoryIndex === 0;

    nextMemoryButton.disabled =
        currentMemoryIndex === memories.length - 1;


    memoryViewer.classList.toggle(
        "special",
        Boolean(memory.special)
    );


    viewerImage.classList.remove("loaded");

    viewerImageWrapper.classList.remove("hidden");

    viewerContainer.classList.remove("no-image");


    viewerImage.onload = () => {

        viewerImageWrapper.classList.remove("hidden");

        viewerContainer.classList.remove("no-image");

        requestAnimationFrame(() => {

            viewerImage.classList.add("loaded");

        });
    };


    viewerImage.onerror = () => {

        viewerImageWrapper.classList.add("hidden");

        viewerContainer.classList.add("no-image");
    };


    viewerImage.src =
        memory.image;

    viewerImage.alt =
        memory.alt;

    viewerContainer.scrollTop = 0;
}


/* =========================================================
   MEMORY EVENTS
========================================================= */

document
    .querySelectorAll(".memory-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openMemory(
                    button.dataset.memory
                );

            }
        );

    });


previousMemoryButton.addEventListener(
    "click",
    () => {

        if (currentMemoryIndex <= 0) {
            return;
        }

        currentMemoryIndex--;

        updateMemoryViewer();
    }
);


nextMemoryButton.addEventListener(
    "click",
    () => {

        if (
            currentMemoryIndex >=
            memories.length - 1
        ) {
            return;
        }

        currentMemoryIndex++;

        updateMemoryViewer();
    }
);


memoryClose.addEventListener(
    "click",
    closeMemory
);


memoryBackdrop.addEventListener(
    "click",
    closeMemory
);


/* =========================================================
   POLAROID FLIPS
========================================================= */

const polaroids =
    document.querySelectorAll(".polaroid");


polaroids.forEach(polaroid => {

    const flipper =
        polaroid.querySelector(".polaroid-flipper");


    function flipPolaroid() {

        polaroid.classList.toggle("flipped");

    }


    flipper.addEventListener(
        "click",
        flipPolaroid
    );


    flipper.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                flipPolaroid();
            }

        }
    );

});


/* =========================================================
   CHAPTER THREE — REASONS
========================================================= */

const reasons = [

    "Your beautiful black eyes. I could look into them forever.",

    "Your smile. Especially when it's the kind you can't hide.",

    "I love how beautiful you are even when you're not trying to be.",

    "I love your kindness.",

    "I love how caring you are.",

    "I love the way you treat people with respect.",

    "I love that you don't need to put someone else down to feel good about yourself.",

    "I love your soft side.",

    "I love your laugh.",

    "I love seeing you genuinely happy.",

    "I love how cute you can be without even realizing it.",

    "I love your little expressions.",

    "I love the way you look at me.",

    "I love how peaceful it can feel just being beside you.",

    "I love listening to you talk about something you actually care about.",

    "I love that you enjoy travelling and discovering new places.",

    "I love your foodie side. 😭❤️",

    "I love that something as simple as eating together can become a memory with you.",

    "I love that you enjoy reading and have your own little world inside your mind.",

    "I love the person you are when nobody is asking you to be anything.",

    "You make me feel at home.",

    "You make me feel safe.",

    "You make me feel loved.",

    "You make me feel like I'm enough.",

    "You make ordinary days feel important.",

    "Being around you makes me happy.",

    "Sometimes seeing you is enough to make a bad day better.",

    "I love how comfortable I've become around you.",

    "I love that I can be stupid around you. 😂",

    "I love that I don't have to pretend to be someone else with you.",

    "I love how much one message from you can change my mood.",

    "I love the excitement I still get before seeing you.",

    "I love missing you because it reminds me how much your presence means to me.",

    "I love how peaceful silence can feel when it's with you.",

    "I love how a hug from you can make everything else disappear for a moment.",

    "I love how close I feel to you when we're together.",

    "I love that you became someone I naturally want to tell things to.",

    "I love that your happiness matters to me.",

    "I love that somewhere along the way, caring about you stopped being something I had to think about.",

    "I love how life feels a little different because you're part of it.",

    "I love that our story started in Class S117 of all places. 😭",

    "I love that an anti-ragging form somehow belongs to the beginning of our love story.",

    "I love remembering the first time I realized I had feelings for you.",

    "I love that my first confession to you somehow happened in Japanese. 😂",

    "I love that even the awkward parts of our story are memories I wouldn't erase.",

    "I love the ring you gave me.",

    "I love what that tiny ring meant to me.",

    "I love 20 October 2023.",

    "I love that I somehow found the courage to confess near NSQ.",

    "I love that my confession was awkward because now it feels perfectly ours.",

    "I love remembering the college Garba.",

    "I love remembering the moment your answer became YES. ❤️",

    "I love that 20 October turned two separate stories into ours.",

    "I love remembering you hugging my hand before the Diwali vacation. 😂❤️",

    "I love that I can technically call that our first hug because your hand argument isn't beating mine.",

    "I love remembering coming back to Pune and seeing you again on 27 November.",

    "I love remembering our first proper hug.",

    "I love that somehow those 30 seconds became a memory I've carried with me.",

    "I love 8 December and the time we got to spend together.",

    "I love that there are dates on a calendar that mean something completely different to me now because of you.",

    "I love our first ride together.",

    "I love that we went for misal pav and, for the purpose of this website, everyone else who came with us does not exist. 😂",

    "I love our first cheek kiss.",

    "I love that my first thought afterward involved the salty Lakmé moisturizer. 😭",

    "I love that you kissed my cheek too.",

    "I love remembering our first kiss.",

    "I love all the awkward moments that eventually became funny stories.",

    "I love our random conversations.",

    "I love our stupid conversations even more.",

    "I love our inside jokes that would make absolutely no sense to anyone else.",

    "I love the tiny moments nobody took a picture of.",

    "I love the memories that exist only in our heads.",

    "I love the photos of us that aren't perfect.",

    "I love looking back and realizing how much we've already experienced together.",

    "I love that after all those memories, I still want more.",

    "I love that we've grown together.",

    "I love that our relationship hasn't always needed perfect moments to be meaningful.",

    "I love that we've had disagreements and still found our way back to each other.",

    "I love that we're learning how to communicate better.",

    "I love that we're learning each other.",

    "I love that I know more about you now than the guy sitting in S117 ever could have imagined.",

    "I love that there is still so much about you I want to discover.",

    "I love watching you grow.",

    "I love being proud of you.",

    "I love that you've stayed beside me through different versions of me.",

    "I love that I get to be beside you while you become the person you want to be.",

    "I love that we're not perfect.",

    "I love that what we have is real enough to require effort.",

    "I love that we can choose to work through things instead of running from them.",

    "I love that after everything, I still choose you.",

    "I want to discover new places with you.",

    "I want more peaceful dates with you.",

    "I want more ice creams together.",

    "I want more rides where the destination barely matters.",

    "I want to watch the Northern Lights with you someday.",

    "I want to celebrate the little milestones and the huge ones with you.",

    "I want us to look back years from now and laugh at the two people who had no idea what they were starting in 2023.",

    "I want to keep discovering new reasons to love you that aren't anywhere on this list.",

    "Because when I imagine the memories I haven't made yet, I want you in them.",

    "Because you're you."

];


/* =========================================================
   REASON ELEMENTS
========================================================= */

const reasonHeart =
    document.getElementById("reason-heart");

const revealReasonButton =
    document.getElementById("reveal-reason-button");

const reasonButtonText =
    document.getElementById("reason-button-text");

const reasonCard =
    document.getElementById("reason-card");

const reasonNumber =
    document.getElementById("reason-number");

const reasonText =
    document.getElementById("reason-text");

const reasonProgressText =
    document.getElementById("reason-progress-text");

const reasonsProgressBar =
    document.getElementById("reasons-progress-bar");

const reasonsProgressMessage =
    document.getElementById("reasons-progress-message");

const reasonDots =
    document.getElementById("reason-dots");

const reasonMilestone =
    document.getElementById("reason-milestone");

const milestoneCount =
    document.getElementById("milestone-count");

const milestoneTitle =
    document.getElementById("milestone-title");

const milestoneMessage =
    document.getElementById("milestone-message");

const milestoneContinue =
    document.getElementById("milestone-continue");

const finalReason =
    document.getElementById("final-reason");

const closeFinalReason =
    document.getElementById("close-final-reason");


/* =========================================================
   REASON STATE
========================================================= */

let discoveredReasons = [];

let remainingReasons = [];

let reasonIsChanging = false;

let finalReasonDiscovered = false;


/* =========================================================
   SHUFFLE REASONS 1–99
========================================================= */

function prepareReasons() {

    remainingReasons =
        Array.from(
            { length: 99 },
            (_, index) => index
        );


    for (
        let i = remainingReasons.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            remainingReasons[i],
            remainingReasons[randomIndex]
        ] =
        [
            remainingReasons[randomIndex],
            remainingReasons[i]
        ];

    }

}


prepareReasons();


/* =========================================================
   CREATE 100 DOTS
========================================================= */

function createReasonDots() {

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const dot =
            document.createElement("span");

        dot.classList.add("reason-dot");

        reasonDots.appendChild(dot);

    }

}


createReasonDots();


/* =========================================================
   REVEAL REASON
========================================================= */

function revealReason() {

    if (reasonIsChanging) {
        return;
    }


    if (discoveredReasons.length >= 99) {

        openFinalReason();

        return;
    }


    reasonIsChanging = true;


    reasonHeart.classList.add("pulse");


    setTimeout(() => {

        reasonHeart.classList.remove("pulse");

    }, 550);


    reasonCard.classList.add("changing");


    setTimeout(() => {

        const reasonIndex =
            remainingReasons.pop();


        discoveredReasons.push(reasonIndex);


        reasonNumber.textContent =
            `REASON #${String(
                reasonIndex + 1
            ).padStart(2, "0")}`;


        reasonText.textContent =
            reasons[reasonIndex];


        updateReasonsProgress();


        reasonCard.classList.remove("changing");


        reasonButtonText.textContent =
            "Discover Another Reason";


        reasonIsChanging = false;


        checkReasonMilestone();

    }, 350);

}


/* =========================================================
   UPDATE REASON PROGRESS
========================================================= */

function updateReasonsProgress() {

    const discovered =
        discoveredReasons.length;


    reasonProgressText.textContent =
        `${discovered} / 100`;


    reasonsProgressBar.style.width =
        `${discovered}%`;


    const dots =
        reasonDots.querySelectorAll(".reason-dot");


    if (discovered > 0) {

        dots[
            discovered - 1
        ].classList.add("discovered");

    }


    if (discovered < 10) {

        reasonsProgressMessage.textContent =
            "We're only getting started.";

    }

    else if (discovered < 25) {

        reasonsProgressMessage.textContent =
            "And there are still so many left.";

    }

    else if (discovered < 50) {

        reasonsProgressMessage.textContent =
            "Turns out loving you gives me a lot to write about.";

    }

    else if (discovered < 75) {

        reasonsProgressMessage.textContent =
            "More than halfway through, and I'm still not out of reasons.";

    }

    else if (discovered < 90) {

        reasonsProgressMessage.textContent =
            "You really kept clicking. 😭❤️";

    }

    else if (discovered < 99) {

        reasonsProgressMessage.textContent =
            "We're getting very close to the last one...";

    }

    else {

        reasonsProgressMessage.textContent =
            "There is one reason left.";

        reasonButtonText.textContent =
            "Discover Reason #100";

    }

}


/* =========================================================
   MILESTONES
========================================================= */

const milestones = {

    10: {

        title:
            "Still counting?",

        message:
            "You really thought I'd stop at 10?"

    },


    25: {

        title:
            "Twenty-five. ❤️",

        message:
            "And somehow this still doesn't feel like enough."

    },


    50: {

        title:
            "Halfway there.",

        message:
            "50 reasons down. I could still keep going."

    },


    75: {

        title:
            "You actually clicked 75 times? 😭",

        message:
            "I love you too. Keep going — we're almost there."

    }

};


function checkReasonMilestone() {

    const discovered =
        discoveredReasons.length;


    if (!milestones[discovered]) {
        return;
    }


    const milestone =
        milestones[discovered];


    milestoneCount.textContent =
        `${discovered} REASONS DISCOVERED`;


    milestoneTitle.textContent =
        milestone.title;


    milestoneMessage.textContent =
        milestone.message;


    reasonMilestone.classList.add("open");


    reasonMilestone.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add("viewer-open");

}


/* =========================================================
   CLOSE MILESTONE
========================================================= */

milestoneContinue.addEventListener(
    "click",
    () => {

        reasonMilestone.classList.remove("open");

        reasonMilestone.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove("viewer-open");

    }
);


/* =========================================================
   FINAL REASON
========================================================= */

function openFinalReason() {

    finalReason.classList.add("open");


    finalReason.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add("viewer-open");


    if (!finalReasonDiscovered) {

        finalReasonDiscovered = true;

        reasonProgressText.textContent =
            "100 / 100";

        reasonsProgressBar.style.width =
            "100%";


        const dots =
            reasonDots.querySelectorAll(".reason-dot");


        if (dots[99]) {

            dots[99].classList.add("discovered");

        }


        reasonButtonText.textContent =
            "Read Reason #100 Again ❤️";


        reasonsProgressMessage.textContent =
            "And somehow, I could still write more.";

    }

}


/* =========================================================
   CLOSE FINAL
========================================================= */

closeFinalReason.addEventListener(
    "click",
    () => {

        finalReason.classList.remove("open");

        finalReason.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove("viewer-open");

    }
);


/* =========================================================
   REASON BUTTONS
========================================================= */

reasonHeart.addEventListener(
    "click",
    revealReason
);


revealReasonButton.addEventListener(
    "click",
    revealReason
);


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    event => {


        /* Final reason */

        if (
            finalReason.classList.contains("open")
        ) {

            if (event.key === "Escape") {

                finalReason.classList.remove("open");

                finalReason.setAttribute(
                    "aria-hidden",
                    "true"
                );

                document.body.classList.remove("viewer-open");

            }

            return;
        }


        /* Milestone */

        if (
            reasonMilestone.classList.contains("open")
        ) {

            if (
                event.key === "Escape" ||
                event.key === "Enter"
            ) {

                reasonMilestone.classList.remove("open");

                reasonMilestone.setAttribute(
                    "aria-hidden",
                    "true"
                );

                document.body.classList.remove("viewer-open");

            }

            return;
        }


        /* Memory viewer */

        if (
            !memoryViewer.classList.contains("open")
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeMemory();

            return;
        }


        if (
            event.key === "ArrowRight" &&
            currentMemoryIndex < memories.length - 1
        ) {

            currentMemoryIndex++;

            updateMemoryViewer();

        }


        if (
            event.key === "ArrowLeft" &&
            currentMemoryIndex > 0
        ) {

            currentMemoryIndex--;

            updateMemoryViewer();

        }

    }
);

// =========================================================
// CHAPTER FOUR — YOUR VOICE
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("her-voice-note");
  const playButton = document.getElementById("voice-play-button");
  const playIcon = playButton?.querySelector(".voice-play-icon");
  const card = document.querySelector(".voice-note-card");

  const track = document.getElementById("voice-progress-track");
  const fill = document.getElementById("voice-progress-fill");
  const thumb = document.getElementById("voice-progress-thumb");

  const currentTimeEl = document.getElementById("voice-current-time");
  const durationEl = document.getElementById("voice-duration");

  // Stop if Chapter 4 elements are not present.
  if (!audio || !playButton || !track) {
    return;
  }

  // ---------------------------------------------------------
  // FORMAT AUDIO TIME
  // ---------------------------------------------------------

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) {
      return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${String(secs).padStart(2, "0")}`;
  };

  // ---------------------------------------------------------
  // UPDATE PROGRESS BAR
  // ---------------------------------------------------------

  const setProgress = (percent) => {
    const safePercent = Math.max(
      0,
      Math.min(100, percent || 0)
    );

    if (fill) {
      fill.style.width = `${safePercent}%`;
    }

    if (thumb) {
      thumb.style.left = `${safePercent}%`;
    }

    track.setAttribute(
      "aria-valuenow",
      String(Math.round(safePercent))
    );
  };

  const updateProgress = () => {
    const percent = audio.duration
      ? (audio.currentTime / audio.duration) * 100
      : 0;

    setProgress(percent);

    if (currentTimeEl) {
      currentTimeEl.textContent = formatTime(
        audio.currentTime
      );
    }
  };

  // ---------------------------------------------------------
  // SEEK THROUGH AUDIO
  // ---------------------------------------------------------

  const seekFromClientX = (clientX) => {
    if (!audio.duration) {
      return;
    }

    const rect = track.getBoundingClientRect();

    const ratio = Math.max(
      0,
      Math.min(
        1,
        (clientX - rect.left) / rect.width
      )
    );

    audio.currentTime = ratio * audio.duration;

    updateProgress();
  };

  // ---------------------------------------------------------
  // AUDIO METADATA
  // ---------------------------------------------------------

  audio.addEventListener("loadedmetadata", () => {
    if (durationEl) {
      durationEl.textContent = formatTime(
        audio.duration
      );
    }

    updateProgress();
  });

  audio.addEventListener("durationchange", () => {
    if (durationEl) {
      durationEl.textContent = formatTime(
        audio.duration
      );
    }
  });

  // ---------------------------------------------------------
  // PLAY / PAUSE BUTTON
  // ---------------------------------------------------------

  playButton.addEventListener("click", async () => {
    try {

      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }

    } catch (error) {
      console.error(
        "Could not play the voice note:",
        error
      );
    }
  });

  // ---------------------------------------------------------
  // WHEN AUDIO STARTS PLAYING
  // ---------------------------------------------------------

  audio.addEventListener("play", () => {

    card?.classList.add("playing");

    if (playIcon) {
      playIcon.textContent = "❚❚";
    }

    playButton.setAttribute(
      "aria-label",
      "Pause voice note"
    );
  });

  // ---------------------------------------------------------
  // WHEN AUDIO IS PAUSED
  // ---------------------------------------------------------

  audio.addEventListener("pause", () => {

    card?.classList.remove("playing");

    if (playIcon) {
      playIcon.textContent = "▶";
    }

    playButton.setAttribute(
      "aria-label",
      "Play voice note"
    );
  });

  // ---------------------------------------------------------
  // LIVE AUDIO PROGRESS
  // ---------------------------------------------------------

  audio.addEventListener(
    "timeupdate",
    updateProgress
  );

  // ---------------------------------------------------------
  // WHEN VOICE NOTE FINISHES
  // ---------------------------------------------------------

  audio.addEventListener("ended", () => {

    card?.classList.remove("playing");

    if (playIcon) {
      playIcon.textContent = "↻";
    }

    playButton.setAttribute(
      "aria-label",
      "Replay voice note"
    );

    setProgress(100);
  });

  // ---------------------------------------------------------
  // CLICK PROGRESS BAR TO SEEK
  // ---------------------------------------------------------

  track.addEventListener("click", (event) => {
    seekFromClientX(event.clientX);
  });

  // ---------------------------------------------------------
  // KEYBOARD CONTROLS
  // Left arrow  = -5 seconds
  // Right arrow = +5 seconds
  // ---------------------------------------------------------

  track.addEventListener("keydown", (event) => {

    if (!audio.duration) {
      return;
    }

    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowLeft"
    ) {

      event.preventDefault();

      const change =
        event.key === "ArrowRight"
          ? 5
          : -5;

      audio.currentTime = Math.max(
        0,
        Math.min(
          audio.duration,
          audio.currentTime + change
        )
      );

      updateProgress();
    }
  });

  // ---------------------------------------------------------
  // HANDLE CACHED AUDIO METADATA
  // ---------------------------------------------------------

  if (audio.readyState >= 1) {

    if (durationEl) {
      durationEl.textContent = formatTime(
        audio.duration
      );
    }

    updateProgress();
  }
}
);