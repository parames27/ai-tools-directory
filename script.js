/* AI Tools Directory - search and filter logic.
   Data lives in data.js. Nothing is sent over the network. */

const $ = (id) => document.getElementById(id);
const searchInput = $("search"), grid = $("grid"), empty = $("empty"), count = $("count");
const filtersBox = $("filters");
let activeCategory = "all";

function h(tag, text, cls) {
  const e = document.createElement(tag);
  if (text) e.textContent = text;
  if (cls) e.className = cls;
  return e;
}

// Only allow normal web links from the dataset.
function safeLink(url, label) {
  if (typeof url !== "string" || !url.startsWith("https://")) return null;
  const a = h("a", label);
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

// Returns the tools that match the category and every word in the search text.
function filterTools(tools, query, category) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  return tools.filter((t) => {
    if (category !== "all" && t.category !== category) return false;
    const haystack = [t.name, t.purpose, t.classroomUse, CATEGORIES[t.category]].join(" ").toLowerCase();
    return words.every((w) => haystack.includes(w));
  });
}

function labelled(title, node) {
  const box = h("div", null, "field");
  box.appendChild(h("h4", title));
  box.appendChild(node);
  return box;
}

function buildCard(t) {
  const card = h("article", null, "card");
  card.dataset.category = t.category;

  const top = h("div", null, "card-top");
  top.appendChild(h("h3", t.name));
  top.appendChild(h("span", CATEGORIES[t.category], "tag"));
  card.appendChild(top);

  card.appendChild(labelled("Purpose", h("p", t.purpose)));
  card.appendChild(labelled("Classroom use case", h("p", t.classroomUse)));

  // Pricing: shown only when verified.
  const pricing = h("div");
  if (t.pricing) {
    pricing.appendChild(h("p", t.pricing.text));
    const meta = h("p", `Verified on ${t.pricing.checked}. `, "small");
    const src = safeLink(t.pricing.source, "Source");
    if (src) meta.appendChild(src);
    meta.appendChild(document.createTextNode(". May have changed since."));
    pricing.appendChild(meta);
  } else {
    pricing.appendChild(h("p", "Not verified. Check the official website for current pricing.", "muted"));
  }
  card.appendChild(labelled("Pricing", pricing));

  card.appendChild(labelled("Limitations", h("p", t.limitations)));

  const site = safeLink(t.website, "Visit official website");
  const foot = h("div", null, "card-foot");
  if (site) { site.className = "visit"; foot.appendChild(site); }
  else foot.appendChild(h("p", "Official link not listed.", "muted"));
  card.appendChild(foot);
  return card;
}

function update() {
  const results = filterTools(TOOLS, searchInput.value, activeCategory);
  grid.innerHTML = "";
  results.forEach((t) => grid.appendChild(buildCard(t)));
  empty.hidden = results.length > 0;
  count.textContent = `Showing ${results.length} of ${TOOLS.length} tools`;
}

function setCategory(cat) {
  activeCategory = cat;
  filtersBox.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === cat)));
  update();
}

// Build the filter buttons
[["all", "All"], ...Object.entries(CATEGORIES)].forEach(([key, label]) => {
  const b = h("button", label, "chip");
  b.type = "button";
  b.dataset.cat = key;
  b.setAttribute("aria-pressed", String(key === "all"));
  b.addEventListener("click", () => setCategory(key));
  filtersBox.appendChild(b);
});

searchInput.addEventListener("input", update);
$("clear-btn").addEventListener("click", () => {
  searchInput.value = "";
  setCategory("all");
  searchInput.focus();
});

update();
