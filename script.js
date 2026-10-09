/* =========================================================
   CONTENT — edit everything here
   ========================================================= */
const LINKS = {
  github:   "https://github.com/sujii07",
  linkedin: "https://www.linkedin.com/in/sujithiyappan16122007/",
  instagram:"https://www.instagram.com/sujit.haze/",
  email:    "mailto:isujith2324@gmail.com"
};

// Replace each `code` URL with the exact repo link when you have it.
const PROJECTS = [
  {
    id: "movie-recommender",
    title: "Movie Recommendation System",
    kind: "CodSoft Task",
    tags: ["Python", "TF-IDF", "Cosine Similarity"],
    cover: "assets/movie.svg",
    short: "Content-based movie recommendations from textual features.",
    summary: "A content-based recommendation system that suggests movies by comparing their textual features using TF-IDF vectors and cosine similarity.",
    built: [
      "Turned each movie's textual features into TF-IDF vectors.",
      "Ranked similar titles with cosine similarity.",
      "Returns the closest matches for any movie you pick."
    ],
    stack: "Python · TF-IDF · Cosine Similarity",
    team: "Solo", when: "Aug – Sep 2026", service: "AI / Machine Learning",
    code: LINKS.github + "?tab=repositories"
  },
  {
    id: "tictactoe-minimax",
    title: "Tic-Tac-Toe AI using Minimax",
    kind: "CodSoft Task",
    tags: ["Python", "Minimax", "Game AI"],
    cover: "assets/tictactoe.svg",
    short: "A game-playing AI that evaluates board states to pick optimal moves.",
    summary: "A game-playing AI built on the Minimax algorithm. It evaluates board states and selects the optimal move at every turn.",
    built: [
      "Modelled the game as a search tree of board states.",
      "Implemented Minimax to score each possible move.",
      "The AI picks the move with the best guaranteed outcome."
    ],
    stack: "Python · Minimax",
    team: "Solo", when: "Aug – Sep 2026", service: "AI / Game Logic",
    code: LINKS.github + "?tab=repositories"
  },
  {
    id: "rule-based-chatbot",
    title: "Rule-Based Chatbot",
    kind: "CodSoft Task",
    tags: ["Python", "Chatbot", "NLP Basics"],
    cover: "assets/chatbot.svg",
    short: "Conversational bot with rule-based replies and graceful exits.",
    summary: "A conversational chatbot driven by rule-based responses. It handles greetings, user information, common queries and ending the conversation.",
    built: [
      "Greets the user and remembers basic user information.",
      "Answers common queries using predefined rules.",
      "Ends the conversation cleanly on exit phrases."
    ],
    stack: "Python · Rule-based responses",
    team: "Solo", when: "Aug – Sep 2026", service: "Conversational AI",
    code: LINKS.github + "?tab=repositories"
  },
  {
    id: "iot-project",
    title: "IoT Project",
    kind: "IoT",
    tags: ["IoT", "Sensors", "Embedded"],
    cover: "assets/iot.svg",
    short: "Connected-device project — full write-up coming soon.",
    summary: "An Internet-of-Things project that connects hardware sensors to software. Full write-up, circuit and code are being added — check the repository for the latest.",
    built: [
      "Reads real-world data from connected sensors.",
      "Processes the data in software.",
      "Detailed breakdown coming soon."
    ],
    stack: "IoT · Sensors · Microcontroller",
    team: "Solo", when: "2026", service: "IoT Prototyping",
    code: LINKS.github + "?tab=repositories"
  }
];

const SERVICES = [
  { t: "AI & ML Development",   d: "Recommendation engines, game-playing AI and chatbots built on core ML fundamentals like TF-IDF, cosine similarity and Minimax.", p: "movie-recommender" },
  { t: "Python Development",    d: "Clean, readable Python projects and automation — from small tools to complete mini-applications.", p: "rule-based-chatbot" },
  { t: "Data Science",          d: "Turning text and data into insight — feature extraction, similarity search and model-driven decisions.", p: "movie-recommender" },
  { t: "IoT Prototyping",       d: "Connecting sensors and devices to software to collect, process and act on real-world data.", p: "iot-project" }
];

const EXPERIENCE = [
  { org: "CodSoft", role: "Artificial Intelligence Intern", when: "Aug 2026 – Sep 2026", note: "30 days · Chatbot, Minimax AI, Recommender", img: "assets/movie.svg", href: LINKS.github },
  { org: "JNN Institute of Engineering", role: "B.Tech — Artificial Intelligence & Data Science", when: "Expected 2029", note: "CGPA 8.0 / 10 · 12th: 86%", img: "assets/tictactoe.svg", href: LINKS.linkedin }
];

const SKILLS = ["Python", "C", "C++", "Java (Beginner)", "MongoDB", "TF-IDF", "Cosine Similarity", "Minimax", "Git", "GitHub", "GitHub Copilot", "Generative AI"];

const CERTS = [
  ["AI & Python Development — Instructors School of AI", "58 hrs · Aug 2026"],
  ["GitHub Copilot – The Complete Guide 2026", "7 hrs · Aug 2026"],
  ["Python Certification — Infosys Springboard", ""],
  ["C++ Certification", ""],
  ["MongoDB Basics for Students", ""],
  ["CRUD Operations in MongoDB", ""],
  ["Building RAG Apps Using MongoDB", ""],
  ["Building AI-Powered Search with MongoDB Vector Search", ""],
  ["Building AI Agents with MongoDB", ""],
  ["AI and Innovation: How MongoDB Enables a Resilient AI Strategy", ""]
];

/* =========================================================
   RENDER
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const byId = id => PROJECTS.find(p => p.id === id);

// work grid
$("#grid").innerHTML = PROJECTS.map((p, i) => `
  <a class="card" href="#/project/${p.id}" data-kind="${p.kind}" data-reveal style="--d:${i * .08}s">
    <div class="cover"><img src="${p.cover}" alt="${p.title} cover" loading="lazy"><span class="badge">${p.kind}</span></div>
    <h3>${p.title}</h3>
    <ul class="tags">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
  </a>`).join("");

// services
$("#acc").innerHTML = SERVICES.map((s, i) => {
  const p = byId(s.p);
  return `<li data-reveal style="--d:${i * .07}s">
    <button class="head" aria-expanded="false">${s.t}<span class="ic">↗</span></button>
    <div class="body"><div><div class="inner">
      <div><p>${s.d}</p><a class="btn" href="#/project/${p.id}">See related work <span class="ar">↗</span></a></div>
      <img src="${p.cover}" alt="" loading="lazy">
    </div></div></div></li>`;
}).join("");

// experience
$("#rows").innerHTML = EXPERIENCE.map(e => `
  <li data-reveal><a href="${e.href}" target="_blank" rel="noopener" data-img="${e.img}">
    <div><h4>${e.org}</h4><small>${e.role}</small><small>${e.note}</small></div>
    <span class="when">${e.when}</span></a></li>`).join("");
$("#skills").innerHTML = SKILLS.map(s => `<li>${s}</li>`).join("");
$("#certs").innerHTML = CERTS.map(c => `<li data-reveal><a href="${LINKS.linkedin}" target="_blank" rel="noopener">${c[0]}<span>${c[1]}</span></a></li>`).join("");
$("#yr").textContent = new Date().getFullYear();
$$(".nav sup")[0].textContent = String(PROJECTS.length).padStart(2, "0");
$$(".nav sup")[1].textContent = String(SERVICES.length).padStart(2, "0");

/* filters */
$("#tabs").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  $$(".tab").forEach(t => t.classList.toggle("on", t === b));
  $$(".card").forEach(c => c.classList.toggle("hide", b.dataset.f !== "all" && c.dataset.kind !== b.dataset.f));
  measure();
});

/* accordion */
$("#acc").addEventListener("click", e => {
  const h = e.target.closest(".head"); if (!h) return;
  const li = h.parentElement, was = li.classList.contains("open");
  $$("#acc li").forEach(x => { x.classList.remove("open"); $(".head", x).setAttribute("aria-expanded", "false"); });
  if (!was) { li.classList.add("open"); h.setAttribute("aria-expanded", "true"); }
  setTimeout(measure, 560);
});

/* hover preview (experience) */
const hp = $("#hoverPrev"), hpi = $("img", hp);
$("#rows").addEventListener("mousemove", e => {
  const a = e.target.closest("a"); if (!a) return;
  if (hpi.getAttribute("src") !== a.dataset.img) hpi.src = a.dataset.img;
  hp.style.left = e.clientX + 150 + "px"; hp.style.top = e.clientY + "px"; hp.classList.add("on");
});
$("#rows").addEventListener("mouseleave", () => hp.classList.remove("on"));

/* contact form -> opens email client with the message filled in */
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:isujith2324@gmail.com?subject=${encodeURIComponent("Portfolio enquiry from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
});

/* =========================================================
   STACKED-PAGE TRANSITIONS
   Each panel sticks, the next slides over it; the one underneath
   shrinks and dims like in the reference video.
   ========================================================= */
const panels = $$("[data-panel]");
let tops = [];
function measure() {
  const vh = innerHeight;
  let acc = 0; tops = [];
  panels.forEach(p => {
    p.style.top = Math.min(0, vh - p.offsetHeight) + "px";
    tops.push(acc); acc += p.offsetHeight;
  });
  update();
}
function update() {
  const vh = innerHeight;
  panels.forEach((p, i) => {
    const nxt = panels[i + 1];
    if (!nxt) return;
    const r = nxt.getBoundingClientRect();
    const prog = Math.min(1, Math.max(0, 1 - r.top / vh));
    // only while the previous panel is pinned
    const pinned = p.getBoundingClientRect().bottom <= vh + 2;
    const k = pinned ? prog : 0;
    p.style.transform = k ? `scale(${1 - .06 * k})` : "";
    p.style.setProperty("--dim", (.35 * k).toFixed(3));
  });
}
addEventListener("scroll", update, { passive: true });
addEventListener("resize", measure);
addEventListener("load", measure);
document.fonts && document.fonts.ready.then(measure);
$$("img").forEach(i => i.addEventListener("load", measure));
measure();

/* anchor navigation (works with stacked layout) */
function goto(id) {
  const i = panels.findIndex(p => p.id === id); if (i < 0) return;
  scrollTo({ top: i === 0 ? 0 : tops[i], behavior: "smooth" });
}
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const h = a.getAttribute("href");
  if (h.startsWith("#/")) return;
  const id = h.slice(1);
  if (id === "back") return;
  e.preventDefault();
  if (detail.classList.contains("open")) closeDetail(false);
  goto(id);
});

/* reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
$$("[data-reveal]").forEach(el => io.observe(el));

/* =========================================================
   PROJECT DETAIL VIEW  (#/project/<id>)
   ========================================================= */
const detail = $("#detail"), body = $("#detailBody");
let savedY = 0, coverT;

function renderDetail(p) {
  const i = PROJECTS.indexOf(p), nx = PROJECTS[(i + 1) % PROJECTS.length];
  body.innerHTML = `
    <div class="d-head">
      <div>
        <ul class="tags" style="margin-left:0">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
        <h1>${p.title}<em>/${p.kind}</em></h1>
        <p>${p.summary}</p>
        <div class="row">
          <a class="btn dark" href="${p.code}" target="_blank" rel="noopener">View Code <span class="ar">↗</span></a>
          <a class="btn white" href="mailto:isujith2324@gmail.com?subject=${encodeURIComponent("About: " + p.title)}">Contact Me</a>
        </div>
      </div>
      <div class="d-meta">
        <div><small>Service</small><span>${p.service}</span></div>
        <div><small>When</small><span>${p.when}</span></div>
        <div><small>Team</small><span>${p.team}</span></div>
      </div>
    </div>
    <div class="d-cover"><img src="${p.cover}" alt="${p.title}"></div>
    <div class="d-sec"><h3>Overview</h3><p>${p.short} Built as part of the CodSoft AI internship track where applicable, with a focus on clear logic and clean code.</p></div>
    <div class="d-sec"><h3>What I built</h3><ul>${p.built.map(b => `<li>${b}</li>`).join("")}</ul></div>
    <div class="d-sec"><h3>Tech stack</h3><p>${p.stack}</p></div>
    <a class="d-next" href="#/project/${nx.id}"><div><small>Next project</small><b>${nx.title}</b></div><span class="ar">→</span></a>`;
  detail.scrollTop = 0;
}
function openDetail(p) {
  if (!detail.classList.contains("open")) savedY = scrollY;
  renderDetail(p);
  detail.classList.add("open"); detail.setAttribute("aria-hidden", "false");
  document.body.classList.add("lock");
  clearTimeout(coverT); coverT = setTimeout(() => document.body.classList.add("covered"), 850);
}
function closeDetail(restore = true) {
  detail.classList.remove("open"); detail.setAttribute("aria-hidden", "true");
  clearTimeout(coverT); document.body.classList.remove("lock", "covered");
  if (restore) scrollTo(0, savedY);
}
function route() {
  const m = location.hash.match(/^#\/project\/([\w-]+)/);
  const p = m && byId(m[1]);
  if (p) openDetail(p); else if (detail.classList.contains("open")) closeDetail();
}
addEventListener("hashchange", route);
$("#back").addEventListener("click", e => {
  e.preventDefault();
  if (location.hash.startsWith("#/project/")) history.replaceState(null, "", location.pathname + location.search);
  closeDetail();
});
addEventListener("keydown", e => { if (e.key === "Escape" && detail.classList.contains("open")) $("#back").click(); });
route();
