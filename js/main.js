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
    const top6 = places.filter((p) => p <= 6).length;
    const best = Math.min(...places);
    const worst = Math.max(...places);
    const sum = places.reduce((s, p) => s + p, 0);
    const sorted = [...places].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    return {
      count,
      best,
      worst,
      avg: sum / count,
      median,
      wins,
      top6,
      winRate: (wins / count) * 100,
      top6Rate: (top6 / count) * 100,
      firstGold: places.filter((p) => p === 1).length,
      silvers: places.filter((p) => p === 2).length,
      bronzes: places.filter((p) => p === 3).length
    };
  }

  /** Лучшая безголевая/подиумная серия подряд (места 1–3) */
  function bestWinStreak(ascGames) {
    let best = 0, cur = 0;
    ascGames.forEach((g) => {
      if (g.place <= 3) { cur++; best = Math.max(best, cur); }
      else cur = 0;
    });
    return best;
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
    const venues = new Set(GAMES.map((g) => g.venue)).size;
    const cards = [
      { value: s.count, label: pluralize(s.count, "сыгранная игра", "сыгранные игры", "сыгранных игр") },
      { value: `№${s.best}`, label: "лучший результат" },
      { value: `${s.wins} (${Math.round(s.winRate)}%)`, label: "призовых мест (топ-3)" },
      { value: `🥇${s.firstGold} 🥈${s.silvers} 🥉${s.bronzes}`, label: "золото / серебро / бронза" },
      { value: s.avg.toFixed(1), label: "среднее место" },
      { value: s.median % 1 ? s.median.toFixed(1) : s.median, label: "медианное место" },
      { value: `${s.top6} (${Math.round(s.top6Rate)}%)`, label: "попаданий в топ-6" },
      { value: organizers, label: pluralize(organizers, "организатор", "организатора", "организаторов") },
      { value: venues, label: pluralize(venues, "площадка", "площадки", "площадок") }
    ];
    document.getElementById("overallStats").innerHTML = cards.map((c) => `
      <div class="stat-card">
        <div class="stat-value">${c.value}</div>
        <div class="stat-label">${c.label}</div>
      </div>`).join("");
  }

  /* ---------- Достижения команды ---------- */
  function renderAchievements() {
    const el = document.getElementById("achievements");
    if (!el) return;
    const asc = [...GAMES].sort((a, b) => a.date.localeCompare(b.date));
    const s = computeStats(GAMES);
    const bestGame = gamesSorted.reduce((a, b) => (a.place <= b.place ? a : b));
    const streakDesc = bestWinStreak([...gamesSorted]);
    const streakAsc = bestWinStreak(asc);
    const streak = Math.max(streakDesc, streakAsc);
    // Самый результативный организатор — по среднему месту (минимум 2 игры)
    const orgStats = [...new Set(GAMES.map((g) => g.organizer))]
      .map((org) => ({ org, st: computeStats(GAMES.filter((g) => g.organizer === org)) }))
      .filter((o) => o.st.count >= 2)
      .sort((a, b) => a.st.avg - b.st.avg)[0];
    const items = [];
    if (s.firstGold > 0) {
      items.push({ icon: "🏆", text: `Победа в игре ${bestGame.organizer} «${bestGame.title}» (${bestGame.venue}, ${formatDate(bestGame.date)})` });
    }
    if (streak >= 2) {
      items.push({ icon: "🔥", text: `Лучшая серия: ${streak} ${pluralize(streak, "призовое место", "призовых места", "призовых мест")} подряд` });
    }
    if (orgStats) {
      items.push({ icon: "⭐", text: `Стабильнее всего — у организатора ${orgStats.org}: среднее место ${orgStats.st.avg.toFixed(1)} за ${orgStats.st.count} ${pluralize(orgStats.st.count, "игру", "игры", "игр")}` });
    }
    items.push({ icon: "📈", text: `Команда играет с ${formatDate(asc[0].date)} — ${s.count} ${pluralize(s.count, "игра", "игры", "игр")} в активе` });
    el.innerHTML = items.map((i) => `
      <div class="achievement-card">
        <span class="achievement-icon">${i.icon}</span>
        <span>${i.text}</span>
      </div>`).join("");
  }

  /* ---------- Динамика по месяцам ---------- */
  const MONTH_SHORT = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

  function renderMonthTrend() {
    const el = document.getElementById("monthTrend");
    if (!el) return;
    const asc = [...GAMES].sort((a, b) => a.date.localeCompare(b.date));
    // Группируем игры по месяцу (ГГГГ-ММ), считаем среднее место
    const months = [];
    asc.forEach((g) => {
      const key = g.date.slice(0, 7);
      let m = months.find((x) => x.key === key);
      if (!m) { m = { key, label: "", places: [] }; months.push(m); }
      const d = new Date(g.date + "T00:00:00");
      m.label = `${MONTH_SHORT[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`;
      m.places.push(g.place);
    });
    const maxAvg = Math.max(...months.map((m) => m.places.reduce((s, p) => s + p, 0) / m.places.length));
    const chartH = 150;
    el.innerHTML = months.map((m) => {
      const avg = m.places.reduce((s, p) => s + p, 0) / m.places.length;
      // Чем лучше среднее место — тем выше столбик
      const h = Math.max(12, ((maxAvg - avg + 1) / maxAvg) * chartH);
      const cls = avg <= 3 ? "place-win" : avg <= 6 ? "place-mid" : "place-low";
      const tooltip = `${m.places.length} ${pluralize(m.places.length, "игра", "игры", "игр")}, места: ${m.places.join(", ")}`;
      return `
        <div class="bar-col" title="${m.label}: ${tooltip}">
          <span class="bar-value">${avg.toFixed(1)}</span>
          <div class="bar ${cls}" style="height:${h}px"></div>
          <span class="bar-date">${m.label}</span>
        </div>`;
    }).join("");
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

  function renderOrganizers() {
    const grid = document.getElementById("organizersGrid");
    // Организаторы по числу игр (по убыванию)
    const orgNames = [...new Set(GAMES.map((g) => g.organizer))]
      .sort((a, b) => GAMES.filter((g) => g.organizer === b).length - GAMES.filter((g) => g.organizer === a).length);

    // Сводная таблица по организаторам
    const thead = document.getElementById("orgTableHead");
    if (thead) {
      thead.innerHTML = `<tr><th>Организатор</th>${orgNames.map((o) => `<th>${o}</th>`).join("")}</tr>`;
    }
    const tbody = document.getElementById("orgTableBody");
    if (tbody) {
      const rows = [
        { label: "Игр сыграно", get: (st) => st.count },
        { label: "Призовых (топ-3)", get: (st) => `🥇${st.firstGold} · 🥈${st.silvers} · 🥉${st.bronzes}` },
        { label: "Доля подиума", get: (st) => `${Math.round(st.winRate)}%` },
        { label: "Лучшее место", get: (st) => `№${st.best}` },
        { label: "Среднее место", get: (st) => st.avg.toFixed(1) },
        { label: "Медиана", get: (st) => (st.median % 1 ? st.median.toFixed(1) : st.median) }
      ];
      const perOrg = orgNames.map((org) => computeStats(GAMES.filter((g) => g.organizer === org)));
      tbody.innerHTML = rows.map((r) => `
        <tr>
          <td class="org-row-label">${r.label}</td>
          ${perOrg.map((st) => `<td>${r.get(st)}</td>`).join("")}
        </tr>`).join("");
    }

    // Карточки организаторов
    grid.innerHTML = orgNames.map((org) => {
      const games = gamesSorted.filter((g) => g.organizer === org);
      const s = computeStats(games);
      const bestGame = games.reduce((a, b) => (a.place <= b.place ? a : b));
      const MAX_ROWS = 8;
      const shown = games.slice(0, MAX_ROWS);
      const hiddenCount = games.length - shown.length;
      const rows = shown.map((g) => `
        <li>
          <span class="mini-place ${placeClass(g.place)}">${g.place}</span>
          <span class="mini-info">${g.title} · ${g.venue}<br><small>${formatDate(g.date)}</small></span>
        </li>`).join("") +
        (hiddenCount > 0
          ? `<li><span class="mini-place mini-more">…</span><span class="mini-info"><small>и ещё ${hiddenCount} ${pluralize(hiddenCount, "игра", "игры", "игр")} — см. таблицу выше</small></span></li>`
          : "");
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
      const host = g.host || "фотоальбом";
      const medal = g.place <= 3 ? ` <span class="photo-place">${placeLabel(g.place)}</span>` : "";
      const cover = g.photoThumb
        ? `<div class="photo-cover cover-${i % 4} has-thumb">
             <img class="photo-thumb" src="${g.photoThumb}" alt="Превью фотоальбома: ${g.organizer} ${g.title}" loading="lazy">
             <span class="photo-host">${host}</span>
           </div>`
        : `<div class="photo-cover cover-${i % 4}">
             <span class="photo-camera">📷</span>
             <span class="photo-host">${host}</span>
           </div>`;
      return `
        <a class="photo-card" href="${g.photoUrl}" target="_blank" rel="noopener">
          ${cover}
          <div class="photo-meta">
            <h3>${g.organizer}: ${g.title}${medal}</h3>
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
    renderAchievements();
    renderMonthTrend();
    renderPlacesChart();
    renderResultBars();
    renderFilterButtons();
    renderGamesTable();
    renderOrganizers();
    renderPhotos();
    setupNav();
  });
})();
