/* =========================================================
   Сайт квизовой команды «Генератор неслучайных ответов»
   Логика: статистика, таблица игр, фильтры, карточки
   организаторов, фотоальбомы.
   ========================================================= */

(function () {
  "use strict";

  const MONTHS = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];

  /** Формат даты "2026-10-21" -> "21 октября 2026" */
  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  }

  /** Короткая дата для графиков: "21.10.26" */
  function shortDate(iso) {
    const d = new Date(iso + "T00:00:00");
    const p = (n) => String(n).padStart(2, "0");
    return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${String(d.getFullYear()).slice(2)}`;
  }

  /** Игры, отсортированные по убыванию даты */
  const gamesSorted = [...GAMES].sort((a, b) => b.date.localeCompare(a.date));

  /** Медали и подсветка призовых мест */
  function placeLabel(place) {
    if (place === 1) return "🥇 1 место";
    if (place === 2) return "🥈 2 место";
    if (place === 3) return "🥉 3 место";
    return `${place} место`;
  }

  function placeClass(place) {
    if (place <= 3) return "place-win";
    if (place <= 6) return "place-mid";
    return "place-low";
  }

  /* ---------- Статистика по массиву игр ---------- */
  function computeStats(games) {
    const count = games.length;
    if (!count) return { count: 0 };
    const places = games.map((g) => g.place);
    const wins = places.filter((p) => p <= 3).length;
    const best = Math.min(...places);
    const worst = Math.max(...places);
    const avg = places.reduce((s, p) => s + p, 0) / count;
    return {
      count,
      best,
      worst,
      avg,
      wins,
      winRate: (wins / count) * 100
    };
  }

  /* ---------- Последние результаты в hero ---------- */
  function renderHeroResults() {
    const el = document.getElementById("heroResults");
    const items = gamesSorted.slice(0, 4).map((g) => `
      <li>
        <span class="hero-res-place ${placeClass(g.place)}">${g.place}</span>
        <span class="hero-res-info">
          <strong>${g.organizer}</strong> · ${g.title}
          <small>${formatDate(g.date)}</small>
        </span>
      </li>`).join("");
    el.innerHTML = items;
  }

  /* ---------- Общая статистика ---------- */
  function renderOverallStats() {
    const s = computeStats(GAMES);
    const organizers = new Set(GAMES.map((g) => g.organizer)).size;
    const cards = [
      { value: s.count, label: "сыграно игр" },
      { value: s.wins, label: "призовых мест (топ-3)" },
      { value: `${Math.round(s.winRate)}%`, label: "доля призовых игр" },
      { value: `№${s.best}`, label: "лучший результат" },
      { value: s.avg.toFixed(1), label: "среднее место" },
      { value: organizers, label: "организаторов" }
    ];
    document.getElementById("overallStats").innerHTML = cards.map((c) => `
      <div class="stat-card">
        <div class="stat-value">${c.value}</div>
        <div class="stat-label">${c.label}</div>
      </div>`).join("");
  }

  /* ---------- График мест по играм ---------- */
  function renderPlacesChart() {
    const chart = document.getElementById("placesChart");
    const asc = [...GAMES].sort((a, b) => a.date.localeCompare(b.date));
    const maxPlace = Math.max(...asc.map((g) => g.place));
    const barH = 150; // px шкалы
    chart.innerHTML = asc.map((g) => {
      // Чем лучше место — тем выше столбик
      const h = Math.max(12, ((maxPlace - g.place + 1) / maxPlace) * barH);
      return `
        <div class="bar-col" title="${formatDate(g.date)} — ${g.place} место (${g.organizer})">
          <span class="bar-value">${g.place}</span>
          <div class="bar ${placeClass(g.place)}" style="height:${h}px"></div>
          <span class="bar-date">${shortDate(g.date)}</span>
        </div>`;
    }).join("");
  }

  /* ---------- Распределение результатов ---------- */
  function renderResultBars() {
    const s = computeStats(GAMES);
    const categories = [
      { label: "Призовые места (1–3)", n: GAMES.filter((g) => g.place <= 3).length, cls: "place-win" },
      { label: "Верхняя часть таблицы (4–6)", n: GAMES.filter((g) => g.place >= 4 && g.place <= 6).length, cls: "place-mid" },
      { label: "Нижняя часть таблицы (7+)", n: GAMES.filter((g) => g.place >= 7).length, cls: "place-low" }
    ];
    document.getElementById("resultBars").innerHTML = categories.map((c) => {
      const pct = s.count ? Math.round((c.n / s.count) * 100) : 0;
      return `
        <li>
          <div class="result-bar-head">
            <span>${c.label}</span><strong>${c.n} (${pct}%)</strong>
          </div>
          <div class="progress"><div class="progress-fill ${c.cls}" style="width:${pct}%"></div></div>
        </li>`;
    }).join("");
  }

  /* ---------- Таблица игр + фильтр по организаторам ---------- */
  let currentFilter = "all";

  function renderFilterButtons() {
    const bar = document.getElementById("filterBar");
    const orgs = [...new Set(GAMES.map((g) => g.organizer))];
    orgs.forEach((org) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.filter = org;
      btn.textContent = org;
      bar.appendChild(btn);
    });
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      currentFilter = btn.dataset.filter;
      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b === btn));
      renderGamesTable();
    });
  }

  function renderGamesTable() {
    const tbody = document.getElementById("gamesTableBody");
    const list = gamesSorted.filter((g) => currentFilter === "all" || g.organizer === currentFilter);
    tbody.innerHTML = list.map((g) => `
      <tr>
        <td data-th="Дата">${formatDate(g.date)}</td>
        <td data-th="Организатор"><span class="org-badge">${g.organizer}</span></td>
        <td data-th="Игра">${g.title}</td>
        <td data-th="Площадка">${g.venue}</td>
        <td data-th="Место"><span class="place-badge ${placeClass(g.place)}">${placeLabel(g.place)}</span></td>
        <td data-th="Фото">${
          g.photoUrl
            ? `<a class="photo-link" href="${g.photoUrl}" target="_blank" rel="noopener">📷 Альбом</a>`
            : `<span class="no-photo">—</span>`
        }</td>
      </tr>`).join("");
  }

  /* ---------- Статистика по организаторам ---------- */
  function renderOrganizers() {
    const grid = document.getElementById("organizersGrid");
    const orgNames = [...new Set(GAMES.map((g) => g.organizer))];
    grid.innerHTML = orgNames.map((org) => {
      const games = gamesSorted.filter((g) => g.organizer === org);
      const s = computeStats(games);
      const bestGame = games.reduce((a, b) => (a.place <= b.place ? a : b));
      const rows = games.map((g) => `
        <li>
          <span class="mini-place ${placeClass(g.place)}">${g.place}</span>
          <span class="mini-info">${g.title} · ${g.venue}<br><small>${formatDate(g.date)}</small></span>
        </li>`).join("");
      return `
        <div class="organizer-card">
          <div class="organizer-head">
            <h3>${org}</h3>
            <span class="organizer-count">${s.count} ${pluralize(s.count, "игра", "игры", "игр")}</span>
          </div>
          <div class="organizer-stats">
            <div><strong>№${s.best}</strong><span>лучшее место</span></div>
            <div><strong>${s.avg.toFixed(1)}</strong><span>среднее место</span></div>
            <div><strong>${s.wins}</strong><span>подиумов</span></div>
          </div>
          <p class="organizer-best">Лучший результат: ${bestGame.title} (${bestGame.venue}, ${formatDate(bestGame.date)})</p>
          <ul class="organizer-games">${rows}</ul>
        </div>`;
    }).join("");
  }

  function pluralize(n, one, few, many) {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
    return many;
  }

  /* ---------- Фотоальбомы ---------- */
  function renderPhotos() {
    const grid = document.getElementById("photosGrid");
    const withPhotos = gamesSorted.filter((g) => g.photoUrl);
    grid.innerHTML = withPhotos.map((g, i) => {
      const host = new URL(g.photoUrl).hostname.replace("www.", "");
      return `
        <a class="photo-card" href="${g.photoUrl}" target="_blank" rel="noopener">
          <div class="photo-cover cover-${i % 4}">
            <span class="photo-camera">📷</span>
            <span class="photo-host">${host}</span>
          </div>
          <div class="photo-meta">
            <h3>${g.organizer}: ${g.title}</h3>
            <p>${g.venue} · ${formatDate(g.date)}</p>
            <span class="photo-btn">Открыть фотоальбом →</span>
          </div>
        </a>`;
    }).join("");
  }

  /* ---------- Навигация: активный пункт и мобильное меню ---------- */
  function setupNav() {
    const links = document.querySelectorAll(".nav-link");
    const sections = [...links].map((l) => document.querySelector(l.getAttribute("href")));

    function onScroll() {
      const pos = window.scrollY + 120;
      sections.forEach((sec, i) => {
        if (sec && pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
          links.forEach((l) => l.classList.remove("active"));
          links[i].classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    burger.addEventListener("click", () => nav.classList.toggle("open"));
    nav.addEventListener("click", (e) => {
      if (e.target.matches(".nav-link")) nav.classList.remove("open");
    });
  }

  /* ---------- Инициализация ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    renderHeroResults();
    renderOverallStats();
    renderPlacesChart();
    renderResultBars();
    renderFilterButtons();
    renderGamesTable();
    renderOrganizers();
    renderPhotos();
    setupNav();
  });
})();
