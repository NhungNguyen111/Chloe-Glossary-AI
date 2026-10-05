const STORAGE_KEY = "nhung-glossary-v1";
const THEME_STORAGE_KEY = "nhung-glossary-theme-v1";
const DOMAIN_STORAGE_KEY = "nhung-glossary-domains-v1";
const TEST_HISTORY_KEY = "nhung-glossary-test-history-v1";
const THEMES = new Set(["default", "soft-pink", "baby-blue"]);

const domainGroups = [
  { name: "Automotive", icon: "AU", aliases: ["automotive"] },
  { name: "Web", icon: "WE", aliases: ["web", "backend", "networking"] },
  { name: "AI", icon: "AI", aliases: ["ai", "ai/ml", "artificial intelligence", "machine learning", "generative ai", "llm"] },
  { name: "Presale", icon: "PR", aliases: ["presale", "presales", "pre-sales", "presales/solution", "solution consulting"] },
  { name: "Sale", icon: "SA", aliases: ["sale", "sales", "sales/crm"] },
  { name: "Project management", icon: "PM", aliases: ["project management", "project/product", "project", "pm", "project manager"] },
  { name: "Architecture & Systems", icon: "AS", aliases: ["distributed systems", "software", "architecture"] },
  { name: "Business analysis", icon: "BA", aliases: ["business analysis", "ba"] },
  { name: "Testing & QA", icon: "QA", aliases: ["testing/qa", "testing", "qa"] },
  { name: "DevOps & Cloud", icon: "DC", aliases: ["devops", "cloud", "sre"] },
  { name: "Data", icon: "DA", aliases: ["data", "data engineering", "database", "analytics"] },
  { name: "Security", icon: "SE", aliases: ["security", "cybersecurity"] }
];

const starterTerms = [
  {
    id: "term-api", term: "API", full_form: "Application Programming Interface", pronunciation: "/ˌeɪ.piːˈaɪ/",
    meaning_vi: "Giao diện cho phép các ứng dụng giao tiếp và trao đổi dữ liệu với nhau.",
    definition_en: "A set of rules that lets software systems communicate with each other.",
    part_of_speech: "noun", domains: ["Web", "Backend"], roles: ["Developer", "BA"], difficulty: "Beginner",
    context: "Thường gặp khi frontend, backend và dịch vụ bên ngoài cần kết nối.",
    examples: [{ en: "The mobile app calls the API to retrieve the user's profile.", vi: "Ứng dụng di động gọi API để lấy hồ sơ người dùng." }],
    related_terms: ["endpoint", "request", "response"], common_mistakes: "API không phải là một ứng dụng; nó là giao ước để các ứng dụng giao tiếp.",
    tags: ["interface", "integration"], source: "Curated", status: "learning", favorite: true,
    created_at: "2026-09-18T10:00:00.000Z", updated_at: "2026-09-25T10:00:00.000Z"
  },
  {
    id: "term-idempotency", term: "Idempotency", full_form: "", pronunciation: "/ˌaɪ.dəmˈpoʊ.tən.si/",
    meaning_vi: "Tính chất giúp một thao tác có thể được thực hiện lặp lại mà kết quả vẫn như khi thực hiện một lần.",
    definition_en: "The property of producing the same result when an operation is repeated.",
    part_of_speech: "noun", domains: ["Web", "Distributed Systems"], roles: ["Backend Developer", "Architect"], difficulty: "Advanced",
    context: "Hay dùng cho API thanh toán, retry request và xử lý sự kiện trong hệ thống phân tán.",
    examples: [{ en: "The payment API must support idempotency.", vi: "API thanh toán phải hỗ trợ tính idempotency." }],
    related_terms: ["retry", "duplicate request", "distributed systems"], common_mistakes: "Idempotent không có nghĩa là request chỉ chạy một lần; request có thể lặp lại nhưng không tạo thêm tác động.",
    tags: ["api", "reliability", "backend"], source: "GPT", status: "new", favorite: false,
    created_at: "2026-09-23T10:00:00.000Z", updated_at: "2026-09-23T10:00:00.000Z"
  },
  {
    id: "term-latency", term: "Latency", full_form: "", pronunciation: "/ˈleɪ.tən.si/",
    meaning_vi: "Độ trễ từ lúc gửi yêu cầu đến lúc nhận được phản hồi.",
    definition_en: "The time delay between an action and its response.",
    part_of_speech: "noun", domains: ["Networking", "Cloud"], roles: ["DevOps Engineer", "Developer"], difficulty: "Beginner",
    context: "Thường dùng để đánh giá tốc độ phản hồi của mạng, API hoặc ứng dụng.",
    examples: [{ en: "High latency makes the dashboard feel slow.", vi: "Độ trễ cao khiến bảng điều khiển có cảm giác chậm." }],
    related_terms: ["throughput", "response time"], common_mistakes: "Latency là thời gian trễ; throughput là lượng dữ liệu xử lý được trong một khoảng thời gian.",
    tags: ["performance", "network"], source: "Curated", status: "learning", favorite: false,
    created_at: "2026-09-19T10:00:00.000Z", updated_at: "2026-09-24T10:00:00.000Z"
  },
  {
    id: "term-observability", term: "Observability", full_form: "", pronunciation: "/əbˌzɝː.vəˈbɪl.ə.ti/",
    meaning_vi: "Khả năng hiểu trạng thái bên trong của một hệ thống dựa trên đầu ra như log, metrics và traces.",
    definition_en: "The ability to understand a system's internal state from its outputs.",
    part_of_speech: "noun", domains: ["DevOps", "Cloud"], roles: ["SRE", "DevOps Engineer"], difficulty: "Intermediate",
    context: "Giúp đội vận hành tìm nguyên nhân sự cố mà không cần truy cập từng máy chủ.",
    examples: [{ en: "Good observability helps the team find the source of production errors.", vi: "Observability tốt giúp nhóm tìm nguồn lỗi trên môi trường production." }],
    related_terms: ["logging", "metrics", "tracing"], common_mistakes: "Observability rộng hơn monitoring; monitoring theo dõi chỉ số đã biết, observability hỗ trợ điều tra điều chưa biết.",
    tags: ["monitoring", "operations"], source: "GPT", status: "new", favorite: true,
    created_at: "2026-09-21T10:00:00.000Z", updated_at: "2026-09-21T10:00:00.000Z"
  },
  {
    id: "term-regression", term: "Regression testing", full_form: "", pronunciation: "",
    meaning_vi: "Kiểm thử lại để đảm bảo thay đổi mới không làm hỏng các chức năng đã hoạt động trước đó.",
    definition_en: "Testing existing features again to make sure a change has not broken them.",
    part_of_speech: "noun", domains: ["Testing/QA", "Software"], roles: ["QA Engineer", "Developer"], difficulty: "Beginner",
    context: "Thường chạy sau khi sửa bug, thêm tính năng hoặc cập nhật thư viện.",
    examples: [{ en: "We run regression tests before every release.", vi: "Chúng tôi chạy kiểm thử hồi quy trước mỗi đợt phát hành." }],
    related_terms: ["smoke testing", "test suite", "bug"], common_mistakes: "Regression testing là mục tiêu kiểm thử, không phải một cấp độ kiểm thử riêng.",
    tags: ["testing", "quality"], source: "Curated", status: "mastered", favorite: false,
    created_at: "2026-09-17T10:00:00.000Z", updated_at: "2026-09-22T10:00:00.000Z"
  },
  {
    id: "term-traceability", term: "Traceability", full_form: "", pronunciation: "/ˌtreɪ.səˈbɪl.ə.ti/",
    meaning_vi: "Khả năng lần theo mối liên hệ giữa yêu cầu, thiết kế, công việc triển khai và kiểm thử.",
    definition_en: "The ability to follow a requirement through design, implementation, and testing.",
    part_of_speech: "noun", domains: ["Automotive", "Testing/QA", "Project"], roles: ["BA", "QA Engineer", "Project Manager"], difficulty: "Intermediate",
    context: "Quan trọng trong các dự án cần chứng minh mỗi yêu cầu đã được triển khai và kiểm thử.",
    examples: [{ en: "The traceability matrix links each requirement to its test case.", vi: "Ma trận truy vết liên kết mỗi yêu cầu với ca kiểm thử tương ứng." }],
    related_terms: ["RTM", "acceptance criteria", "test coverage"], common_mistakes: "Traceability không chỉ là danh sách yêu cầu; nó thể hiện được các mối liên kết qua các giai đoạn.",
    tags: ["requirements", "testing", "delivery"], source: "Curated", status: "learning", favorite: false,
    created_at: "2026-09-16T10:00:00.000Z", updated_at: "2026-09-20T10:00:00.000Z"
  },
  {
    id: "term-stakeholder", term: "Stakeholder", full_form: "", pronunciation: "/ˈsteɪkˌhoʊl.dɚ/",
    meaning_vi: "Cá nhân hoặc nhóm có ảnh hưởng đến dự án, bị ảnh hưởng bởi dự án, hoặc quan tâm đến kết quả dự án.",
    definition_en: "A person or group that can affect or is affected by a project.",
    part_of_speech: "noun", domains: ["Business Analysis", "Project"], roles: ["BA", "Project Manager"], difficulty: "Beginner",
    context: "PM và BA thường xác định stakeholder để thu thập yêu cầu và quản lý kỳ vọng.",
    examples: [{ en: "The project manager scheduled interviews with key stakeholders.", vi: "Quản lý dự án lên lịch phỏng vấn với các bên liên quan chính." }],
    related_terms: ["sponsor", "end user", "requirement"], common_mistakes: "Stakeholder không đồng nghĩa với end user; người tài trợ hoặc quản lý vẫn có thể là stakeholder.",
    tags: ["people", "requirements"], source: "Curated", status: "mastered", favorite: false,
    created_at: "2026-09-15T10:00:00.000Z", updated_at: "2026-09-18T10:00:00.000Z"
  },
  {
    id: "term-deployment", term: "Deployment", full_form: "", pronunciation: "/dɪˈplɔɪ.mənt/",
    meaning_vi: "Quá trình đưa phiên bản phần mềm lên môi trường để người dùng hoặc hệ thống khác sử dụng.",
    definition_en: "The process of making a software version available in an environment.",
    part_of_speech: "noun", domains: ["DevOps", "Cloud"], roles: ["Developer", "DevOps Engineer"], difficulty: "Beginner",
    context: "Có thể deploy lên development, staging hoặc production; mỗi môi trường có mục đích khác nhau.",
    examples: [{ en: "The deployment to production is scheduled for Friday.", vi: "Đợt triển khai lên production được lên lịch vào thứ Sáu." }],
    related_terms: ["release", "build", "rollback"], common_mistakes: "Deployment là đưa phần mềm vào môi trường; release thường nhấn mạnh việc phát hành cho người dùng.",
    tags: ["release", "delivery"], source: "Curated", status: "new", favorite: false,
    created_at: "2026-09-14T10:00:00.000Z", updated_at: "2026-09-14T10:00:00.000Z"
  }
];

const additionalStarterTerms = [
  ["Sprint", "/sprɪnt/", "A short, fixed period in which a team completes planned work.", "Một chu kỳ ngắn, cố định để nhóm hoàn thành công việc đã lên kế hoạch.", "Project management", "The team plans the next sprint during the review meeting."],
  ["Backlog", "/ˈbæk.lɔːɡ/", "A prioritized list of work that still needs to be done.", "Danh sách ưu tiên các công việc vẫn cần được thực hiện.", "Project management", "The product owner reordered the backlog before planning."],
  ["Milestone", "/ˈmaɪl.stoʊn/", "An important point or achievement in a project timeline.", "Một mốc quan trọng trong tiến độ hoặc thành tựu của dự án.", "Project management", "Launching the beta version was a major milestone."],
  ["Requirement", "/rɪˈkwaɪər.mənt/", "A condition or capability that a product must satisfy.", "Điều kiện hoặc khả năng mà sản phẩm phải đáp ứng.", "Business Analysis", "The analyst documented each requirement with acceptance criteria."],
  ["Acceptance criteria", "/əkˈsep.təns kraɪˈtɪr.i.ə/", "Conditions that must be met for a requirement to be accepted.", "Các điều kiện phải đạt để một yêu cầu được chấp nhận.", "Business Analysis", "The story cannot be closed until its acceptance criteria are met."],
  ["User story", "/ˈjuː.zər ˌstɔːr.i/", "A short description of a feature from a user's perspective.", "Mô tả ngắn về một tính năng từ góc nhìn người dùng.", "Business Analysis", "The team refined the user story before estimating it."],
  ["Endpoint", "/ˈend.pɔɪnt/", "A specific URL or interface where an API receives requests.", "URL hoặc giao diện cụ thể nơi API nhận request.", "Web", "The mobile app calls the login endpoint."],
  ["Throughput", "/ˈθruː.pʊt/", "The amount of data or work processed in a given time.", "Lượng dữ liệu hoặc công việc được xử lý trong một khoảng thời gian.", "Architecture & Systems", "The new queue design increased throughput during peak hours."],
  ["Scalability", "/ˌskeɪ.ləˈbɪl.ə.ti/", "The ability of a system to handle more load by adding resources.", "Khả năng hệ thống xử lý tải lớn hơn khi bổ sung tài nguyên.", "Architecture & Systems", "Horizontal scalability helps the service handle more traffic."],
  ["Containerization", "/kənˌteɪ.nər.aɪˈzeɪ.ʃən/", "Packaging software with its dependencies into an isolated container.", "Đóng gói phần mềm cùng dependency trong một container biệt lập.", "DevOps & Cloud", "Containerization makes the service easier to run consistently."],
  ["Rollback", "/ˈroʊl.bæk/", "A return to a previous stable version after a problematic change.", "Việc quay về phiên bản ổn định trước đó sau thay đổi có vấn đề.", "DevOps & Cloud", "The team performed a rollback after the incident."],
  ["Vulnerability", "/ˌvʌl.nər.əˈbɪl.ə.ti/", "A weakness that could be exploited to harm a system.", "Điểm yếu có thể bị khai thác để gây hại cho hệ thống.", "Security", "The scan found a vulnerability in the outdated library."],
  ["Encryption", "/ɪnˈkrɪp.ʃən/", "The process of converting data into a form that unauthorized people cannot read.", "Quá trình chuyển dữ liệu sang dạng người không được phép không thể đọc.", "Security", "Encryption protects the data while it is in transit."],
  ["Schema", "/ˈskiː.mə/", "The structure that defines how data is organized and related.", "Cấu trúc định nghĩa cách dữ liệu được tổ chức và liên kết.", "Data", "The team updated the database schema for the new field."],
  ["Insight", "/ˈɪn.saɪt/", "A useful understanding gained from data or experience.", "Sự hiểu biết hữu ích rút ra từ dữ liệu hoặc kinh nghiệm.", "Data", "The dashboard gave the team an insight into user behavior."]
].map(([term, pronunciation, definition_en, meaning_vi, domain, example]) => ({
  id: `seed-${term.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`, term, full_form: "", pronunciation,
  meaning_vi, definition_en, part_of_speech: "noun", domains: [domain], roles: [], difficulty: "Intermediate",
  context: example, examples: [{ en: example, vi: meaning_vi }], related_terms: [], common_mistakes: "",
  tags: [domain.toLowerCase()], source: "Starter library", status: "new", favorite: false,
  created_at: "2026-10-01T10:00:00.000Z", updated_at: "2026-10-01T10:00:00.000Z"
}));

const elements = {
  termList: document.querySelector("#term-list"), search: document.querySelector("#search-input"),
  domainLinks: document.querySelector("#domain-links"), sort: document.querySelector("#sort-select"),
  library: document.querySelector("#library-view"), review: document.querySelector("#review-view"),
  detailDialog: document.querySelector("#detail-dialog"), detailContent: document.querySelector("#detail-content"),
  settingsDialog: document.querySelector("#settings-dialog"),
  termDialog: document.querySelector("#term-dialog"), termForm: document.querySelector("#term-form"),
  toast: document.querySelector("#toast"), fileInput: document.querySelector("#file-input")
};

let terms = loadTerms();
let customDomains = loadCustomDomains();
let activeCollection = "all";
let activeDomain = "";
let currentView = "library";
let activeTermId = null;
let activeTheme = loadTheme();
let reviewQueue = [];
let reviewIndex = 0;
let answerVisible = false;
let toastTimer;
let activeReviewSection = "review-history";
let testQuestions = [];
let testIndex = 0;
let testScore = 0;
let testSelected = [];
let testStartedAt = null;

function loadCustomDomains() {
  try {
    const stored = JSON.parse(localStorage.getItem(DOMAIN_STORAGE_KEY) || "[]");
    return Array.isArray(stored) ? stored.filter(item => typeof item === "string" && item.trim()) : [];
  } catch (error) {
    return [];
  }
}

function saveCustomDomains() {
  localStorage.setItem(DOMAIN_STORAGE_KEY, JSON.stringify(customDomains));
}

function loadTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  return THEMES.has(storedTheme) ? storedTheme : "default";
}

function applyTheme(theme) {
  activeTheme = THEMES.has(theme) ? theme : "default";
  document.body.dataset.theme = activeTheme;
  document.querySelectorAll('input[name="theme"]').forEach(input => {
    input.checked = input.value === activeTheme;
  });
  const themeColor = {
    default: "#ffffff",
    "soft-pink": "#fff8f0",
    "baby-blue": "#f3f8fc"
  }[activeTheme];
  document.querySelector('meta[name="theme-color"]').content = themeColor;
}

function loadTerms() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return structuredClone([...starterTerms, ...additionalStarterTerms]);
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return structuredClone([...starterTerms, ...additionalStarterTerms]);
    const existingIds = new Set(parsed.map(term => term.id));
    const missingSeeds = additionalStarterTerms.filter(term => !existingIds.has(term.id));
    return [...parsed.map(migrateStarterCopy), ...structuredClone(missingSeeds)];
  } catch (error) {
    return structuredClone([...starterTerms, ...additionalStarterTerms]);
  }
}

function migrateStarterCopy(record) {
  const term = normalizeTerm(record);
  const starter = starterTerms.find(item => item.id === term.id);
  if (!starter) return term;
  for (const field of ["meaning_vi", "context", "common_mistakes"]) {
    if (normalizeText(term[field]) === normalizeText(starter[field])) term[field] = starter[field];
  }
  term.examples = term.examples.map((example, index) => {
    const starterExample = starter.examples[index];
    if (!starterExample || example.en !== starterExample.en) return example;
    return normalizeText(example.vi) === normalizeText(starterExample.vi)
      ? { ...example, vi: starterExample.vi }
      : example;
  });
  return term;
}

function normalizeTerm(term) {
  return {
    id: term.id || makeId(), term: String(term.term || "").trim(), full_form: term.full_form || "",
    pronunciation: term.pronunciation || "", meaning_vi: term.meaning_vi || "", definition_en: term.definition_en || "",
    part_of_speech: term.part_of_speech || "", domains: toArray(term.domains), roles: toArray(term.roles),
    difficulty: ["Beginner", "Intermediate", "Advanced"].includes(term.difficulty) ? term.difficulty : "Beginner",
    context: term.context || "", examples: Array.isArray(term.examples) ? term.examples : [],
    related_terms: toArray(term.related_terms), common_mistakes: term.common_mistakes || "", tags: toArray(term.tags),
    source: term.source || "Personal", status: ["new", "learning", "mastered"].includes(term.status) ? term.status : "new",
    favorite: Boolean(term.favorite), created_at: term.created_at || new Date().toISOString(),
    updated_at: term.updated_at || new Date().toISOString()
  };
}

function toArray(value) {
  if (Array.isArray(value)) return value.map(item => String(item).trim()).filter(Boolean);
  return String(value || "").split(/[,|]/).map(item => item.trim()).filter(Boolean);
}

function makeId() {
  return globalThis.crypto?.randomUUID?.() || `term-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function saveTerms() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(terms));
  render();
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function normalizeText(value = "") {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[đĐ]/g, "d").toLocaleLowerCase();
}

function render() {
  updateCounts();
  renderDomainLinks();
  updateSidebarSelection();
  renderTerms();
  if (currentView === "review") {
    renderReviewCard();
    renderReviewStats();
  }
}

function updateCounts() {
  const counts = {
    all: terms.length,
    favorites: terms.filter(term => term.favorite).length,
    new: terms.filter(term => term.status === "new").length,
    learning: terms.filter(term => term.status === "learning").length,
    mastered: terms.filter(term => term.status === "mastered").length
  };
  document.querySelector("#count-favorites").textContent = counts.favorites;
  document.querySelector("#count-new").textContent = counts.new;
  document.querySelector("#count-mastered").textContent = counts.mastered;
  document.querySelector("#stat-total").textContent = counts.all;
  document.querySelector("#stat-learned").textContent = counts.mastered;
  document.querySelector("#footer-count").textContent = `${counts.all} TỪ`;
}

function getDomainGroups() {
  const knownAliases = new Set(domainGroups.flatMap(group => group.aliases.map(normalizeText)));
  const extraDomains = [...new Set(terms.flatMap(term => term.domains || []))]
    .filter(domain => !knownAliases.has(normalizeText(domain)))
    .sort((first, second) => first.localeCompare(second));
  const savedDomains = customDomains.filter(name => !knownAliases.has(normalizeText(name)) && !extraDomains.some(item => normalizeText(item) === normalizeText(name)));
  return [...domainGroups, ...extraDomains.map(name => ({ name, icon: "IT", aliases: [name] })), ...savedDomains.map(name => ({ name, icon: "IT", aliases: [name] }))];
}

function matchesDomain(term, groupName) {
  const group = domainGroups.find(item => item.name === groupName);
  const aliases = new Set((group?.aliases || [groupName]).map(normalizeText));
  return term.domains.some(domain => aliases.has(normalizeText(domain)));
}

function renderDomainLinks() {
  elements.domainLinks.innerHTML = getDomainGroups().map(group => {
    const count = terms.filter(term => matchesDomain(term, group.name)).length;
    const selected = activeDomain === group.name;
    return `<button class="side-link domain-link ${selected ? "active" : ""}" data-domain="${escapeHtml(group.name)}" type="button" aria-pressed="${selected}"><span class="side-icon blue-icon">${escapeHtml(group.icon)}</span><span>${escapeHtml(group.name)}</span><span class="side-count">${count}</span></button>`;
  }).join("");
}

function updateSidebarSelection() {
  document.querySelectorAll(".side-link[data-collection]").forEach(button => {
    const selected = !activeDomain && button.dataset.collection === activeCollection;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelectorAll(".domain-link").forEach(button => {
    const selected = button.dataset.domain === activeDomain;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function visibleTerms() {
  const query = normalizeText(elements.search.value.trim());
  let result = terms.filter(term => {
    if (activeCollection === "favorites" && !term.favorite) return false;
    if (["new", "learning", "mastered"].includes(activeCollection) && term.status !== activeCollection) return false;
    if (activeDomain && !matchesDomain(term, activeDomain)) return false;
    if (!query) return true;
    const searchable = [term.term, term.full_form, term.meaning_vi, term.definition_en, term.context, ...(term.domains || []), ...(term.roles || []), ...(term.tags || [])].join(" ");
    return normalizeText(searchable).includes(query);
  });
  if (elements.sort.value === "az") result.sort((a, b) => a.term.localeCompare(b.term));
  else if (elements.sort.value === "difficulty") {
    const order = { Beginner: 0, Intermediate: 1, Advanced: 2 };
    result.sort((a, b) => order[a.difficulty] - order[b.difficulty] || a.term.localeCompare(b.term));
  } else result.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  return result;
}

function renderTerms() {
  const visible = visibleTerms();
  document.querySelector("#results-count").textContent = `${visible.length} từ`;
  const collectionNames = { all: "Từ điển", favorites: "Yêu thích", new: "Mới thêm", learning: "Đang học", mastered: "Đã nắm vững" };
  document.querySelector("#active-filter-label").textContent = activeDomain || collectionNames[activeCollection];
  if (!visible.length) {
    const domainIsEmpty = activeDomain && !terms.some(term => matchesDomain(term, activeDomain));
    const title = domainIsEmpty ? `Chưa có từ trong ${activeDomain}` : terms.length ? "Chưa tìm thấy từ phù hợp" : "Từ đầu tiên đang chờ bạn";
    const message = domainIsEmpty ? `Thêm thuật ngữ đầu tiên vào lĩnh vực ${activeDomain}.` : terms.length ? "Thử đổi từ khóa hoặc bỏ bớt bộ lọc để thấy các mục phù hợp." : "Bắt đầu với một từ bạn vừa gặp trong công việc hoặc khi học.";
    elements.termList.innerHTML = `<div class="empty-state"><span class="empty-orbit" aria-hidden="true">G</span><h3>${title}</h3><p>${message}</p><button class="primary-button" data-action="add" type="button">＋ Thêm một từ</button></div>`;
    return;
  }
  elements.termList.innerHTML = visible.map(term => {
    const domainBadges = term.domains.slice(0, 2).map(domain => `<span class="badge domain-badge">${escapeHtml(domain)}</span>`).join("");
    const statusLabel = { new: "Mới", learning: "Đang học", mastered: "Đã nhớ" }[term.status];
    return `<article class="term-row" data-term-id="${escapeHtml(term.id)}" tabindex="0" aria-label="Mở mục từ ${escapeHtml(term.term)}">
      <div class="term-name"><strong>${escapeHtml(term.term)}</strong><span class="term-pronunciation">${escapeHtml(term.pronunciation || term.full_form || statusLabel)}</span></div>
      <div class="term-meaning">${escapeHtml(term.meaning_vi || term.definition_en || "Chưa có định nghĩa.")}</div>
      <div class="term-badges">${domainBadges || `<span class="badge">${escapeHtml(statusLabel)}</span>`}</div>
      <button class="favorite-button ${term.favorite ? "is-favorite" : ""}" data-action="favorite" data-term-id="${escapeHtml(term.id)}" type="button" aria-label="${term.favorite ? "Bỏ yêu thích" : "Thêm yêu thích"}" aria-pressed="${term.favorite}">${term.favorite ? "♥" : "♡"}</button>
    </article>`;
  }).join("");
}

function openDetail(id) {
  const term = terms.find(item => item.id === id);
  if (!term) return;
  activeTermId = id;
  const examples = (term.examples || []).map(example => `<div class="example-block"><p class="example-copy">${escapeHtml(example.en || "")}</p><p class="example-copy">${escapeHtml(example.vi || "")}</p>${example.code ? `<p><code>${escapeHtml(example.code)}</code></p>` : ""}</div>`).join("");
  const related = (term.related_terms || []).map(item => `<button class="related-term" data-related="${escapeHtml(item)}" type="button">${escapeHtml(item)}</button>`).join("");
  const badges = [...term.domains, ...term.roles.slice(0, 2), term.difficulty].map(item => `<span class="badge">${escapeHtml(item)}</span>`).join("");
  elements.detailContent.innerHTML = `<div class="detail-body">
    <div class="detail-title-line"><div><h2 id="detail-term">${escapeHtml(term.term)}</h2><p class="detail-pronunciation">${escapeHtml(term.pronunciation)}${term.full_form ? ` · ${escapeHtml(term.full_form)}` : ""}${term.part_of_speech ? ` · ${escapeHtml(term.part_of_speech)}` : ""}</p></div></div>
    <div class="detail-badges">${badges}</div>
    <section class="detail-section"><h3>Nghĩa tiếng Việt</h3><p>${escapeHtml(term.meaning_vi || "Chưa cập nhật.")}</p></section>
    ${term.definition_en ? `<section class="detail-section"><h3>Định nghĩa tiếng Anh đơn giản</h3><p class="detail-english">${escapeHtml(term.definition_en)}</p></section>` : ""}
    ${term.context ? `<section class="detail-section"><h3>Ngữ cảnh</h3><p class="detail-note">${escapeHtml(term.context)}</p></section>` : ""}
    ${examples ? `<section class="detail-section"><h3>Ví dụ</h3>${examples}</section>` : ""}
    ${term.common_mistakes ? `<section class="detail-section"><h3>Dễ nhầm hoặc lưu ý</h3><p class="detail-note">${escapeHtml(term.common_mistakes)}</p></section>` : ""}
    ${related ? `<section class="detail-section"><h3>Từ liên quan</h3><div class="related-list">${related}</div></section>` : ""}
    <section class="detail-section"><h3>Nguồn và ngày cập nhật</h3><p>${escapeHtml(term.source || "Cá nhân")} · ${new Date(term.updated_at).toLocaleDateString("vi-VN")}</p></section>
    <div class="detail-actions"><select id="detail-status" aria-label="Trạng thái học"><option value="new" ${term.status === "new" ? "selected" : ""}>Mới thêm</option><option value="learning" ${term.status === "learning" ? "selected" : ""}>Đang học</option><option value="mastered" ${term.status === "mastered" ? "selected" : ""}>Đã nắm vững</option></select>
      <button class="quiet-button" data-action="edit" type="button">Chỉnh sửa</button><button class="quiet-button" data-action="detail-favorite" type="button">${term.favorite ? "♥ Đã yêu thích" : "♡ Yêu thích"}</button><button class="danger-button" data-action="delete" type="button">Xóa từ</button></div>
  </div>`;
  elements.detailDialog.showModal();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => elements.toast.classList.remove("visible"), 2600);
}

function openForm(term = null) {
  elements.termForm.reset();
  document.querySelector("#form-error").textContent = "";
  document.querySelector("#form-title").textContent = term ? "Chỉnh sửa từ" : "Thêm từ mới";
  document.querySelector("#term-id").value = term?.id || "";
  document.querySelector("#field-term").value = term?.term || "";
  document.querySelector("#field-full-form").value = term?.full_form || "";
  document.querySelector("#field-pronunciation").value = term?.pronunciation || "";
  document.querySelector("#field-meaning").value = term?.meaning_vi || "";
  document.querySelector("#field-definition").value = term?.definition_en || "";
  document.querySelector("#field-domains").value = (term?.domains || []).join(", ");
  document.querySelector("#field-roles").value = (term?.roles || []).join(", ");
  document.querySelector("#field-difficulty").value = term?.difficulty || "Beginner";
  document.querySelector("#field-status").value = term?.status || "new";
  document.querySelector("#field-context").value = term?.context || "";
  document.querySelector("#field-example-en").value = term?.examples?.[0]?.en || "";
  document.querySelector("#field-example-vi").value = term?.examples?.[0]?.vi || "";
  document.querySelector("#field-mistakes").value = term?.common_mistakes || "";
  document.querySelector("#field-tags").value = (term?.tags || []).join(", ");
  elements.termDialog.showModal();
  document.querySelector("#field-term").focus();
}

function onSubmitTerm(event) {
  event.preventDefault();
  const id = document.querySelector("#term-id").value;
  const name = document.querySelector("#field-term").value.trim();
  const duplicate = terms.find(term => normalizeText(term.term) === normalizeText(name) && term.id !== id);
  if (duplicate) {
    document.querySelector("#form-error").textContent = `Từ "${duplicate.term}" đã có trong thư viện.`;
    return;
  }
  const existing = terms.find(term => term.id === id);
  const exampleEn = document.querySelector("#field-example-en").value.trim();
  const exampleVi = document.querySelector("#field-example-vi").value.trim();
  const updated = normalizeTerm({
    ...existing,
    id: id || makeId(), term: name,
    full_form: document.querySelector("#field-full-form").value.trim(),
    pronunciation: document.querySelector("#field-pronunciation").value.trim(),
    meaning_vi: document.querySelector("#field-meaning").value.trim(),
    definition_en: document.querySelector("#field-definition").value.trim(),
    domains: toArray(document.querySelector("#field-domains").value),
    roles: toArray(document.querySelector("#field-roles").value),
    difficulty: document.querySelector("#field-difficulty").value,
    status: document.querySelector("#field-status").value,
    context: document.querySelector("#field-context").value.trim(),
    examples: exampleEn || exampleVi ? [{ en: exampleEn, vi: exampleVi }] : [],
    related_terms: existing?.related_terms || [],
    common_mistakes: document.querySelector("#field-mistakes").value.trim(),
    tags: toArray(document.querySelector("#field-tags").value),
    source: existing?.source || "Personal", favorite: existing?.favorite || false,
    created_at: existing?.created_at || new Date().toISOString(), updated_at: new Date().toISOString()
  });
  if (existing) terms = terms.map(term => term.id === id ? updated : term);
  else terms.unshift(updated);
  saveTerms();
  elements.termDialog.close();
  if (elements.detailDialog.open && activeTermId === updated.id) openDetail(updated.id);
  showToast(existing ? "Đã cập nhật từ vựng." : "Đã thêm từ mới vào thư viện.");
}

function setView(view) {
  currentView = view;
  elements.library.hidden = view !== "library";
  elements.review.hidden = view !== "review";
  document.querySelector("#library-sidebar").hidden = view !== "library";
  document.querySelector("#review-sidebar").hidden = view !== "review";
  document.querySelector(".page-heading").hidden = view === "review";
  document.querySelector("#sidebar-title").textContent = view === "review" ? "Ôn tập" : "Thư viện";
  document.querySelectorAll(".nav-button").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  document.querySelector("#page-title").textContent = view === "review" ? "Góc ôn tập" : activeDomain || "Từ điển";
  document.querySelector("#page-subtitle").textContent = view === "review" ? "Theo dõi bài test, nhận xét và tiến độ ghi nhớ của bạn." : "Tra cứu thuật ngữ theo chủ đề và lưu lại từ cần học.";
  if (view === "review") {
    activeReviewSection = "review-history";
    buildReviewQueue();
    renderReviewStats();
    setReviewSection(activeReviewSection);
  }
}

function addTopic(name) {
  const cleanName = name.trim();
  const exists = getDomainGroups().some(group => normalizeText(group.name) === normalizeText(cleanName));
  if (exists) return false;
  customDomains.push(cleanName);
  saveCustomDomains();
  activeDomain = cleanName;
  activeCollection = "all";
  setView("library");
  render();
  showToast(`Đã thêm chủ đề "${cleanName}".`);
  return true;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - .5);
}

function loadTestHistory() {
  try {
    const value = JSON.parse(localStorage.getItem(TEST_HISTORY_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function saveTestHistory(history) {
  localStorage.setItem(TEST_HISTORY_KEY, JSON.stringify(history.slice(-12)));
}

function makeOptions(correct, distractors, multi = false) {
  const unique = [...new Set([correct, ...distractors].filter(Boolean))].slice(0, 4);
  return shuffle(unique).map(text => ({ text, correct: text === correct }));
}

function buildTestQuestions() {
  const pool = terms.filter(term => term.term && (term.definition_en || term.meaning_vi));
  if (!pool.length) return [];
  const questions = [];
  const pick = index => pool[index % pool.length];
  for (let index = 0; index < Math.min(8, pool.length); index++) {
    const term = pick(index);
    questions.push({ type: "Meaning", prompt: `What does “${term.term}” mean?`, multi: false, termId: term.id,
      options: makeOptions(term.definition_en || term.meaning_vi, pool.filter(item => item.id !== term.id).map(item => item.definition_en || item.meaning_vi)) });
  }
  const pronunciationPool = pool.filter(term => term.pronunciation);
  for (let index = 0; index < Math.min(3, pronunciationPool.length); index++) {
    const term = pronunciationPool[index];
    questions.push({ type: "Pronunciation", prompt: `Which pronunciation best matches “${term.term}”?`, multi: false, termId: term.id,
      options: makeOptions(term.pronunciation, pronunciationPool.filter(item => item.id !== term.id).map(item => item.pronunciation)) });
  }
  const contextPool = pool.filter(term => term.examples?.[0]?.en);
  for (let index = 0; index < Math.min(2, contextPool.length); index++) {
    const term = contextPool[index];
    const correctOne = term.examples[0].en;
    const correctTwo = `The team discussed the ${term.term} during the project meeting.`;
    const options = shuffle([{ text: correctOne, correct: true }, { text: correctTwo, correct: true }, ...contextPool.filter(item => item.id !== term.id).slice(0, 2).map(item => ({ text: item.examples[0].en, correct: false }))]);
    questions.push({ type: "Context", prompt: `Which TWO sentences use “${term.term}” correctly in context?`, multi: true, termId: term.id, options });
  }
  for (let index = 0; index < Math.min(2, contextPool.length); index++) {
    const term = contextPool[(index + 2) % contextPool.length];
    const wrong = `The ${term.term} is a type of coffee served in a restaurant.`;
    const options = shuffle([{ text: wrong, correct: true }, { text: term.examples[0].en, correct: false }, { text: `The team reviewed the ${term.term} before the release.`, correct: false }, { text: `We documented the ${term.term} for the next project step.`, correct: false }]);
    questions.push({ type: "Wrong use", prompt: `Which sentence uses “${term.term}” incorrectly?`, multi: false, termId: term.id, options });
  }
  return shuffle(questions).slice(0, 15);
}

function renderReviewStats() {
  const history = loadTestHistory();
  const historyContent = document.querySelector("#test-history-content");
  const insightContent = document.querySelector("#test-insights-content");
  if (!history.length) {
    historyContent.innerHTML = `<p class="review-empty">Chưa có bài test nào. Điểm và ngày làm bài sẽ được lưu tại đây.</p>`;
    insightContent.innerHTML = `<p>Bắt đầu làm bài test để app phân tích xu hướng sai và gợi ý mẹo nhớ phù hợp.</p><div class="insight-tags"><span>Phân tích xu hướng sai</span><span>Mẹo nhớ từ vựng</span></div>`;
  } else {
    historyContent.innerHTML = `<div class="history-list">${history.slice().reverse().map(item => `<div class="history-row"><strong>${item.score}/${item.total} · ${Math.round(item.score / item.total * 100)}%</strong><span>${new Date(item.date).toLocaleString("vi-VN")} · ${formatDuration(item.durationSeconds)}</span></div>`).join("")}</div>`;
    const latest = history[history.length - 1];
    const previous = history[history.length - 2];
    const trend = previous ? (latest.score >= previous.score ? "Điểm đang có xu hướng tăng. Hãy tiếp tục ôn các từ trả lời sai." : "Điểm giảm nhẹ ở lần gần nhất. Hãy xem lại các câu sai và ôn theo ngữ cảnh.") : "Lần test đầu tiên đã được ghi nhận. App sẽ phân tích xu hướng sau các lần tiếp theo.";
    insightContent.innerHTML = `<p>${trend}</p><div class="insight-tags"><span>${latest.wrongTypes?.join(", ") || "Ôn lại từ chưa chắc"}</span><span>Mẹo nhớ qua ngữ cảnh</span><span>Ôn lại bằng cách đặt câu</span></div>`;
  }
  const chart = document.querySelector("#score-chart");
  const chartSummary = document.querySelector("#test-chart-summary");
  chartSummary.innerHTML = history.length ? `<p>Đã hoàn thành <strong>${history.length}</strong> bài test · Điểm gần nhất: <strong>${history[history.length - 1].score}/${history[history.length - 1].total}</strong> · Thời gian: <strong>${formatDuration(history[history.length - 1].durationSeconds)}</strong></p>` : `<p class="review-empty">Chưa có dữ liệu điểm.</p>`;
  chart.innerHTML = history.length ? history.slice(-6).map((item, index) => `<span style="height: ${Math.max(12, Math.round(item.score / item.total * 100))}%"><b>${Math.round(item.score / item.total * 100)}%</b><small>Lần ${history.length - Math.min(5, history.length - 1) + index}</small></span>`).join("") : `<p class="review-empty">Chưa có dữ liệu điểm.</p>`;
}

function formatDuration(seconds = 0) {
  const totalSeconds = Math.max(0, Math.round(Number(seconds) || 0));
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return minutes ? `${minutes} phút ${remainingSeconds} giây` : `${remainingSeconds} giây`;
}

function setReviewSection(section) {
  activeReviewSection = section;
  document.querySelectorAll(".review-panel").forEach(panel => { panel.hidden = panel.id !== section; });
  const reviewView = document.querySelector("#review-view");
  const dashboard = document.querySelector(".review-dashboard");
  const quickReview = document.querySelector("#quick-review-section");
  quickReview.hidden = section !== "review-test";
  if (section === "review-test") reviewView.insertBefore(quickReview, dashboard);
  else reviewView.appendChild(quickReview);
  document.querySelectorAll(".review-side-link").forEach(item => item.classList.toggle("active", item.dataset.reviewSection === section));
  if (section === "review-history" || section === "review-insights" || section === "review-chart") renderReviewStats();
}

function startTest() {
  testQuestions = buildTestQuestions();
  testIndex = 0;
  testScore = 0;
  testSelected = [];
  testStartedAt = Date.now();
  if (!testQuestions.length) { showToast("Thư viện chưa có đủ dữ liệu để tạo bài test."); return; }
  document.querySelector("#test-question-view").hidden = false;
  document.querySelector("#test-result").hidden = true;
  renderTestQuestion();
  document.querySelector("#test-dialog").showModal();
}

function renderTestQuestion() {
  const question = testQuestions[testIndex];
  document.querySelector("#test-progress").textContent = `Question ${testIndex + 1} / ${testQuestions.length}`;
  document.querySelector("#test-type").textContent = question.type;
  document.querySelector("#test-instruction").textContent = question.prompt;
  document.querySelector("#test-error").textContent = "";
  document.querySelector("#test-options").innerHTML = question.options.map((option, index) => `<label class="test-option"><input type="${question.multi ? "checkbox" : "radio"}" name="test-answer" value="${index}"><span>${escapeHtml(option.text)}</span></label>`).join("");
  document.querySelector("#test-next").textContent = testIndex === testQuestions.length - 1 ? "Submit test" : "Next question";
}

function renderTestResult() {
  const result = document.querySelector("#test-result");
  result.innerHTML = `<div class="test-result-header"><p class="eyebrow"><span class="eyebrow-line"></span> TEST RESULT</p><h2>${testScore} / ${testQuestions.length} correct</h2><p>You can review every answer below.</p></div><div class="test-result-list">${testQuestions.map((question, questionIndex) => {
    const selected = new Set(question._selected || []);
    const answerRows = question.options.map((option, optionIndex) => {
      const isSelected = selected.has(optionIndex);
      const stateClass = option.correct ? "result-correct" : isSelected ? "result-wrong" : "";
      const stateText = option.correct ? "Correct answer" : isSelected ? "Your answer" : "";
      return `<div class="result-answer ${stateClass}"><span>${escapeHtml(option.text)}</span>${stateText ? `<small>${stateText}</small>` : ""}</div>`;
    }).join("");
    return `<article class="result-question ${question._answeredCorrectly ? "is-correct" : "is-wrong"}><div class="result-question-title"><strong>${questionIndex + 1}. ${escapeHtml(question.prompt)}</strong><span>${question._answeredCorrectly ? "Correct" : "Review"}</span></div><div class="result-answers">${answerRows}</div></article>`;
  }).join("")}</div><div class="form-actions"><button class="primary-button" id="test-result-close" type="button">Back to review</button></div>`;
  document.querySelector("#test-question-view").hidden = true;
  result.hidden = false;
  document.querySelector("#test-result-close").addEventListener("click", () => document.querySelector("#test-dialog").close());
}

function finishTest() {
  const wrongTypes = testQuestions.filter((question, index) => !question._answeredCorrectly).map(question => question.type).filter((value, index, array) => array.indexOf(value) === index);
  const history = loadTestHistory();
  history.push({ date: new Date().toISOString(), score: testScore, total: testQuestions.length, durationSeconds: Math.max(1, Math.round((Date.now() - testStartedAt) / 1000)), wrongTypes });
  saveTestHistory(history);
  renderTestResult();
  renderReviewStats();
  showToast(`Bạn đạt ${testScore}/${testQuestions.length} câu đúng.`);
}

function submitTestAnswer() {
  const question = testQuestions[testIndex];
  const selected = [...document.querySelectorAll("#test-options input:checked")].map(input => Number(input.value)).sort();
  if (!selected.length) { document.querySelector("#test-error").textContent = "Please choose an answer before continuing."; return; }
  const correct = question.options.map((option, index) => option.correct ? index : null).filter(index => index !== null).sort();
  question._selected = selected;
  question._answeredCorrectly = selected.length === correct.length && selected.every((value, index) => value === correct[index]);
  if (question._answeredCorrectly) testScore++;
  if (testIndex === testQuestions.length - 1) finishTest();
  else { testIndex++; renderTestQuestion(); }
}

function buildReviewQueue() {
  reviewQueue = terms.filter(term => term.status !== "mastered");
  reviewIndex = 0;
  answerVisible = false;
  renderReviewCard();
}

function renderReviewCard() {
  const term = reviewQueue[reviewIndex];
  const controls = document.querySelector(".review-controls");
  if (!term) {
    document.querySelector("#flashcard-domain").textContent = "SẴN SÀNG";
    document.querySelector("#flashcard-position").textContent = "0 / 0";
    document.querySelector("#flashcard-term").textContent = terms.length ? "Đã ôn hết từ chưa thuộc" : "Thư viện đang trống";
    document.querySelector("#flashcard-answer").hidden = true;
    document.querySelector("#flashcard-hint").textContent = terms.length ? "Thêm từ mới hoặc bắt đầu lại" : "Thêm vài từ để bắt đầu ôn tập";
    controls.querySelector("#mark-mastered").disabled = true;
    return;
  }
  controls.querySelector("#mark-mastered").disabled = false;
  document.querySelector("#flashcard-domain").textContent = term.domains[0] || "IT";
  document.querySelector("#flashcard-position").textContent = `${reviewIndex + 1} / ${reviewQueue.length}`;
  document.querySelector("#flashcard-term").textContent = term.term;
  document.querySelector("#flashcard-label").textContent = "TỪ";
  document.querySelector("#flashcard-answer").textContent = term.meaning_vi || term.definition_en || "Chưa có định nghĩa.";
  document.querySelector("#flashcard-answer").hidden = !answerVisible;
  document.querySelector("#flashcard-hint").textContent = answerVisible ? "Đã nhớ chưa? Cập nhật trạng thái ở bên dưới." : "Chạm để xem nghĩa";
  document.querySelector("#reveal-card").textContent = answerVisible ? "Ẩn nghĩa" : "Hiện nghĩa";
}

function moveReview(step) {
  if (!reviewQueue.length) return;
  reviewIndex = (reviewIndex + step + reviewQueue.length) % reviewQueue.length;
  answerVisible = false;
  renderReviewCard();
}

function exportJson() {
  downloadFile("glossary-terms.json", JSON.stringify(terms, null, 2), "application/json");
}

function exportCsv() {
  const columns = ["term", "full_form", "meaning_vi", "definition_en", "domains", "roles", "difficulty", "context", "status", "tags", "source"];
  const quote = value => `"${String(value ?? "").replaceAll('"', '""')}"`;
  const rows = [columns.join(","), ...terms.map(term => columns.map(column => quote(Array.isArray(term[column]) ? term[column].join(" | ") : term[column])).join(","))];
  downloadFile("glossary-terms.csv", "\uFEFF" + rows.join("\r\n"), "text/csv;charset=utf-8");
}

function downloadFile(name, content, type) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([content], { type }));
  link.download = name;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast(`Đã xuất ${terms.length} từ.`);
}

function parseCsv(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let index = 0; index < text.length; index++) {
    const character = text[index];
    if (quoted && character === '"' && text[index + 1] === '"') { field += '"'; index++; }
    else if (character === '"') quoted = !quoted;
    else if (character === "," && !quoted) { row.push(field); field = ""; }
    else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && text[index + 1] === "\n") index++;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += character;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const headers = (rows.shift() || []).map(header => header.trim().toLowerCase());
  return rows.filter(values => values.some(value => value.trim())).map(values => Object.fromEntries(headers.map((header, index) => [header, values[index] || ""])));
}

function importRecords(records) {
  if (!Array.isArray(records)) throw new Error("File JSON cần là một danh sách từ vựng.");
  const existing = new Set(terms.map(term => normalizeText(term.term)));
  let added = 0, skipped = 0;
  for (const record of records) {
    if (!record || typeof record.term !== "string" || !record.term.trim()) { skipped++; continue; }
    const key = normalizeText(record.term);
    if (existing.has(key)) { skipped++; continue; }
    terms.unshift(normalizeTerm({ ...record, id: makeId(), source: record.source || "Import" }));
    existing.add(key); added++;
  }
  saveTerms();
  showToast(`Đã nhập ${added} từ${skipped ? `, bỏ qua ${skipped} mục trùng hoặc thiếu tên` : ""}.`);
}

document.querySelectorAll(".nav-button").forEach(button => button.addEventListener("click", () => {
  if (button.dataset.view === "library") {
    activeDomain = "";
    activeCollection = "all";
  }
  setView(button.dataset.view);
  render();
}));
document.querySelector(".sidebar").addEventListener("click", event => {
  const button = event.target.closest(".side-link");
  if (!button || button.id === "add-topic-button") return;
  if (button.dataset.domain) {
    activeDomain = button.dataset.domain;
    activeCollection = "all";
  } else {
    activeCollection = button.dataset.collection;
    activeDomain = "";
  }
  setView("library");
  render();
});
document.querySelector("#add-topic-button").addEventListener("click", () => {
  document.querySelector("#topic-form").reset();
  document.querySelector("#topic-error").textContent = "";
  document.querySelector("#topic-dialog").showModal();
  document.querySelector("#topic-name").focus();
});
document.querySelector("#topic-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector("#topic-name");
  if (!addTopic(input.value)) {
    document.querySelector("#topic-error").textContent = "Chủ đề này đã tồn tại trong thư viện.";
    return;
  }
  document.querySelector("#topic-dialog").close();
});
document.querySelector("#review-sidebar").addEventListener("click", event => {
  const button = event.target.closest("[data-review-section]");
  if (!button) return;
  setReviewSection(button.dataset.reviewSection);
});
document.querySelector("#start-test-button").addEventListener("click", () => {
  startTest();
});
document.querySelector("#test-next").addEventListener("click", submitTestAnswer);
document.querySelector("#test-cancel").addEventListener("click", () => document.querySelector("#test-dialog").close());
elements.search.addEventListener("input", renderTerms);
elements.sort.addEventListener("change", renderTerms);
document.querySelector("#add-button").addEventListener("click", () => openForm());
document.querySelector("#settings-button").addEventListener("click", () => elements.settingsDialog.showModal());
document.querySelectorAll('input[name="theme"]').forEach(input => input.addEventListener("change", () => {
  if (!input.checked) return;
  localStorage.setItem(THEME_STORAGE_KEY, input.value);
  applyTheme(input.value);
}));
document.querySelector("#import-button").addEventListener("click", () => elements.fileInput.click());
document.querySelector("#export-button").addEventListener("click", exportJson);
document.querySelector("#term-form").addEventListener("submit", onSubmitTerm);
document.querySelector("#shuffle-button").addEventListener("click", () => { reviewQueue.sort(() => Math.random() - .5); reviewIndex = 0; answerVisible = false; renderReviewCard(); });
document.querySelector("#previous-card").addEventListener("click", () => moveReview(-1));
document.querySelector("#next-card").addEventListener("click", () => moveReview(1));
document.querySelector("#reveal-card").addEventListener("click", () => { answerVisible = !answerVisible; renderReviewCard(); });
document.querySelector("#flashcard").addEventListener("click", () => { if (reviewQueue.length) { answerVisible = !answerVisible; renderReviewCard(); } });
document.querySelector("#flashcard").addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.currentTarget.click(); } });
document.querySelector("#mark-mastered").addEventListener("click", () => {
  const term = reviewQueue[reviewIndex];
  if (!term) return;
  terms = terms.map(item => item.id === term.id ? { ...item, status: "mastered", updated_at: new Date().toISOString() } : item);
  reviewQueue = reviewQueue.filter(item => item.id !== term.id);
  reviewIndex = reviewQueue.length ? reviewIndex % reviewQueue.length : 0;
  saveTerms();
  renderReviewCard();
  showToast(`Đã đánh dấu "${term.term}" là đã nắm vững.`);
});

elements.termList.addEventListener("click", event => {
  const actionButton = event.target.closest("button[data-action]");
  if (actionButton?.dataset.action === "favorite") {
    event.stopPropagation();
    const id = actionButton.dataset.termId;
    terms = terms.map(term => term.id === id ? { ...term, favorite: !term.favorite, updated_at: new Date().toISOString() } : term);
    saveTerms();
    return;
  }
  if (actionButton?.dataset.action === "add") { openForm(); return; }
  const row = event.target.closest("[data-term-id]");
  if (row) openDetail(row.dataset.termId);
});
elements.termList.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".term-row")) { event.preventDefault(); openDetail(event.target.dataset.termId); }
});

elements.detailContent.addEventListener("click", event => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "edit") {
    const term = terms.find(item => item.id === activeTermId);
    elements.detailDialog.close();
    openForm(term);
  } else if (action === "delete") {
    const term = terms.find(item => item.id === activeTermId);
    if (term && window.confirm(`Xóa "${term.term}" khỏi từ điển?`)) {
      terms = terms.filter(item => item.id !== term.id);
      elements.detailDialog.close();
      saveTerms();
      showToast("Đã xóa từ vựng.");
    }
  } else if (action === "detail-favorite") {
    terms = terms.map(term => term.id === activeTermId ? { ...term, favorite: !term.favorite, updated_at: new Date().toISOString() } : term);
    saveTerms();
    openDetail(activeTermId);
  } else {
    const relatedButton = event.target.closest("[data-related]");
    if (relatedButton) { elements.search.value = relatedButton.dataset.related; elements.detailDialog.close(); setView("library"); renderTerms(); }
  }
});

elements.detailContent.addEventListener("change", event => {
  if (event.target.id !== "detail-status") return;
  terms = terms.map(term => term.id === activeTermId ? { ...term, status: event.target.value, updated_at: new Date().toISOString() } : term);
  saveTerms();
  showToast("Đã cập nhật trạng thái học.");
});

document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", () => document.getElementById(button.dataset.close).close()));
document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); }));

elements.fileInput.addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    if (file.name.toLowerCase().endsWith(".csv")) importRecords(parseCsv(text));
    else importRecords(JSON.parse(text));
  } catch (error) {
    showToast(error instanceof SyntaxError ? "Tệp không đúng định dạng JSON/CSV." : error.message || "Không thể đọc tệp.");
  }
  event.target.value = "";
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) && !elements.termDialog.open && !elements.detailDialog.open) {
    event.preventDefault(); elements.search.focus();
  }
});

applyTheme(activeTheme);
render();
