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

  /** Медали и подсветка призовых мест; place === null — место не указано */
  function placeLabel(place) {
    if (place == null) return "—";
    if (place === 1) return "🥇 1 место";
    if (place === 2) return "🥈 2 место";
    if (place === 3) return "🥉 3 место";
    return `${place} место`;
  }

  function placeClass(place) {
    if (place == null) return "place-none";
    if (place <= 3) return "place-win";
    if (place <= 6) return "place-mid";
    return "place-low";
  }

  /* ---------- Статистика по массиву игр ---------- */
  function computeStats(games) {
    const count = games.length;
    if (!count) return { count: 0 };
    // В расчёт рейтинговых метрик берутся только игры с указанным местом
    const places = games.map((g) => g.place).filter((p) => p != null);
    if (!places.length) return { count, best: null, worst: null, avg: 0, median: null, wins: 0, top6: 0, winRate: 0, rankCount: 0, top6Rate: 0, firstGold: 0, silvers: 0, bronzes: 0 };
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
      avg: places.length ? sum / places.length : 0,
      median,
      wins,
      top6,
      winRate: places.length ? (wins / places.length) * 100 : 0,
      rankCount: places.length,
      top6Rate: places.length ? (top6 / places.length) * 100 : 0,
      firstGold: places.filter((p) => p === 1).length,
      silvers: places.filter((p) => p === 2).length,
      bronzes: places.filter((p) => p === 3).length
    };
  }

  /** Лучшая безголевая/подиумная серия подряд (места 1–3) */
  function bestWinStreak(ascGames) {
    let best = 0, cur = 0;
    ascGames.forEach((g) => {
      if (g.place != null && g.place <= 3) { cur++; best = Math.max(best, cur); }
      else cur = 0;
    });
    return best;
  }

  /* ---------- Последние результаты в hero ---------- */
  function hasRoundResults(g) {
    return !!(g.results && Array.isArray(g.results.standings) && g.results.standings.length > 0);
  }

  function renderHeroResults() {
    const el = document.getElementById("heroResults");
    const items = gamesSorted.slice(0, 4).map((g, i) => `
      <li class="hero-res-item" data-hero-game="${i}" role="link" tabindex="0"
          title="${hasRoundResults(g) ? "Показать результаты по турам →" : "Показать игру в таблице «Наши игры» →"}">
        <span class="hero-res-place ${placeClass(g.place)}">${g.place == null ? "—" : g.place}</span>
        <span class="hero-res-info">
          <strong>${g.organizer}</strong> · ${g.title}
          <small>${formatDate(g.date)}</small>
        </span>
        <span class="hero-res-hint">${hasRoundResults(g) ? "Туры →" : "Игра →"}</span>
      </li>`).join("");
    el.innerHTML = items;

    // Клик / Enter по карточке — переход к строке игры в «Наших играх» и раскрытие аккордеона
    el.querySelectorAll(".hero-res-item").forEach((item) => {
      const handler = () => jumpToGameRow(gamesSorted[Number(item.dataset.heroGame)]);
      item.addEventListener("click", handler);
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handler(); }
      });
    });
  }

  function jumpToGameRow(game) {
    if (!game) return;
    currentFilter = "all";           // чтобы игра гарантированно была в таблице
    renderGamesTable();
    const idx = gamesSorted.indexOf(game);
    const row = document.querySelector(`tr.game-row[data-results-target="all-${idx}"]`)
      || [...document.querySelectorAll("#gamesTableBody tr.game-row")][idx];
    if (!row) return;
    // раскрываем аккордеон с результатами, если он есть и ещё закрыт
    const targetId = row.dataset.resultsTarget;
    if (targetId) {
      const panel = document.getElementById(targetId);
      if (panel && panel.hidden) row.click();
    }
    row.scrollIntoView({ behavior: "smooth", block: "center" });
    row.classList.add("row-flash");
    setTimeout(() => row.classList.remove("row-flash"), 1600);
  }

  /* ---------- Общая статистика (краткая сводка) ---------- */
  function renderOverallStats() {
    const s = computeStats(GAMES);
    const organizers = new Set(GAMES.map((g) => g.organizer)).size;
    const medianLabel = s.median % 1 ? s.median.toFixed(1) : s.median;
    const cards = [
      { value: s.count, label: pluralize(s.count, "сыгранная игра", "сыгранные игры", "сыгранных игр") },
      { value: s.wins, label: "призовых мест (топ-3)" },
      { value: `${Math.round(s.winRate)}%`, label: "доля призовых мест (топ-3)" },
      { value: medianLabel, label: "медианное место" },
      { value: organizers, label: pluralize(organizers, "организатор", "организатора", "организаторов") }
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
    const ranked = gamesSorted.filter((g) => g.place != null);
    const bestGame = ranked.reduce((a, b) => (a.place <= b.place ? a : b));
    const streakDesc = bestWinStreak([...gamesSorted]);
    const streakAsc = bestWinStreak(asc);
    const streak = Math.max(streakDesc, streakAsc);
    // Самый результативный организатор — по среднему месту (минимум 2 игры)
    const orgStats = [...new Set(ranked.map((g) => g.organizer))]
      .map((org) => ({ org, st: computeStats(ranked.filter((g) => g.organizer === org)) }))
      .filter((o) => o.st.rankCount >= 2)
      .sort((a, b) => a.st.avg - b.st.avg)[0];
    const items = [];
    if (s.firstGold > 0) {
      items.push({ icon: "🏆", text: `Победа в игре ${bestGame.organizer} «${bestGame.title}» (${bestGame.venue}, ${formatDate(bestGame.date)})` });
    }
    if (streak >= 2) {
      items.push({ icon: "🔥", text: `Лучшая серия: ${streak} ${pluralize(streak, "призовое место", "призовых места", "призовых мест")} подряд` });
    }
    if (orgStats) {
      items.push({ icon: "⭐", text: `Стабильнее всего — у организатора ${orgStats.org}: среднее место ${orgStats.st.avg.toFixed(1)} за ${orgStats.st.rankCount} ${pluralize(orgStats.st.rankCount, "игру", "игры", "игр")}` });
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
    // Группируем игры по месяцу (ГГГГ-ММ), считаем среднее место (только с указанным местом)
    const months = [];
    asc.forEach((g) => {
      const key = g.date.slice(0, 7);
      let m = months.find((x) => x.key === key);
      if (!m) { m = { key, label: "", places: [], noPlace: 0 }; months.push(m); }
      const d = new Date(g.date + "T00:00:00");
      m.label = `${MONTH_SHORT[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`;
      if (g.place == null) m.noPlace++; else m.places.push(g.place);
    });
    const avgOf = (m) => m.places.reduce((s, p) => s + p, 0) / m.places.length;
    const withAvg = months.filter((m) => m.places.length > 0);
    const maxAvg = Math.max(...withAvg.map(avgOf));
    const chartH = 150;
    el.innerHTML = months.map((m) => {
      if (!m.places.length) {
        // Месяц без указанных мест — пустой столбик
        return `
        <div class="bar-col" title="${m.label}: ${m.noPlace} ${pluralize(m.noPlace, "игра", "игры", "игр")}, места не указаны">
          <span class="bar-value">—</span>
          <div class="bar place-none" style="height:8px"></div>
          <span class="bar-date">${m.label}</span>
        </div>`;
      }
      const avg = avgOf(m);
      // Чем лучше среднее место — тем выше столбик
      const h = Math.max(12, ((maxAvg - avg + 1) / maxAvg) * chartH);
      const cls = avg <= 3 ? "place-win" : avg <= 6 ? "place-mid" : "place-low";
      const tooltip = `${m.places.length} ${pluralize(m.places.length, "игра", "игры", "игр")}, места: ${m.places.join(", ")}${m.noPlace ? `, без места: ${m.noPlace}` : ""}`;
      return `
        <div class="bar-col" title="${m.label}: ${tooltip}">
          <span class="bar-value">${avg.toFixed(1)}</span>
          <div class="bar ${cls}" style="height:${h}px"></div>
          <span class="bar-date">${m.label}</span>
        </div>`;
    }).join("");
    el.scrollLeft = el.scrollWidth; // ползунок справа — видны последние месяцы
  }

  /* ---------- График мест по играм ---------- */
  function renderPlacesChart() {
    const chart = document.getElementById("placesChart");
    const asc = [...GAMES].sort((a, b) => a.date.localeCompare(b.date));
    const maxPlace = Math.max(...asc.map((g) => g.place).filter((p) => p != null));
    const barH = 150; // px шкалы
    chart.innerHTML = asc.map((g) => {
      const noPlace = g.place == null;
      // Чем лучше место — тем выше столбик; для игр без места — пустой столбик
      const h = noPlace ? 8 : Math.max(12, ((maxPlace - g.place + 1) / maxPlace) * barH);
      const canJump = hasRoundResults(g);
      const tip = noPlace
        ? `${formatDate(g.date)} — место не указано (${g.organizer})`
        : `${formatDate(g.date)} — ${g.place} место (${g.organizer})`;
      const attrs = canJump
        ? ` data-game-idx="${gamesSorted.indexOf(g)}" role="link" tabindex="0" title="${tip} — показать результаты по турам"`
        : ` title="${tip}"`;
      return `
        <div class="bar-col${canJump ? " bar-clickable" : ""}"${attrs}>
          <span class="bar-value">${noPlace ? "—" : g.place}</span>
          <div class="bar ${placeClass(g.place)}" style="height:${h}px"></div>
          <span class="bar-date">${shortDate(g.date)}</span>
        </div>`;
    }).join("");
    chart.scrollLeft = chart.scrollWidth; // ползунок справа — видны последние игры

    // Клик по столбику — переход к строке игры в «Наших играх» и раскрытие аккордеона
    chart.querySelectorAll(".bar-clickable").forEach((col) => {
      const handler = () => jumpToGameRow(gamesSorted[Number(col.dataset.gameIdx)]);
      col.addEventListener("click", handler);
      col.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handler(); }
      });
    });
  }

  /* ---------- Распределение результатов ---------- */
  function renderResultBars() {
    const s = computeStats(GAMES);
    const categories = [
      { label: "Призовые места (1–3)", n: GAMES.filter((g) => g.place != null && g.place <= 3).length, cls: "place-win" },
      { label: "Верхняя часть таблицы (4–6)", n: GAMES.filter((g) => g.place != null && g.place >= 4 && g.place <= 6).length, cls: "place-mid" },
      { label: "Нижняя часть таблицы (7+)", n: GAMES.filter((g) => g.place != null && g.place >= 7).length, cls: "place-low" },
      { label: "Место не указано", n: GAMES.filter((g) => g.place == null).length, cls: "place-none" }
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
  let gamesExpanded = false;
  const GAMES_INITIAL = 10;   // сколько последних игр видно сразу

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
      gamesExpanded = false;
      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b === btn));
      renderGamesTable();
    });
  }

  function fmtScore(v) {
    if (v == null || v === "") return "";
    return String(v).replace(".", ",");
  }

  // Аккордеон с подробными результатами по турам (если у игры есть поле results)
  function resultsRow(g, idx) {
    const res = g.results;
    if (!res || !Array.isArray(res.standings) || res.standings.length === 0) return "";
    // Поддержка двух форматов строк таблицы: team/rounds и name/scores (GO!Квиз)
    const teamOf = (s) => s.team ?? s.name ?? "";
    const roundsOf = (s) => Array.isArray(s.rounds) ? s.rounds : (Array.isArray(s.scores) ? s.scores : []);
    const roundCount = res.roundCount
      || (Array.isArray(res.roundLabels) ? res.roundLabels.length : 0)
      || Math.max(...res.standings.map((s) => roundsOf(s).length));
    const roundHeads = Array.from({ length: roundCount }, (_, i) => {
      const label = Array.isArray(res.roundLabels) && res.roundLabels[i] ? res.roundLabels[i] : `Тур ${i + 1}`;
      return `<th class="round-col">${label}</th>`;
    }).join("");
    const bodyRows = res.standings.map((s) => {
      const usName = res.team || res.teamName || "Генератор неслучайных ответов";
      const isUs = teamOf(s) === usName || (g.place != null && s.place === g.place);
      const cells = Array.from({ length: roundCount }, (_, i) => {
        const v = roundsOf(s)[i];
        return `<td class="round-col${v == null ? " round-empty" : ""}">${fmtScore(v)}</td>`;
      }).join("");
      return `
        <tr class="${isUs ? "results-us" : ""}">
          <td>${s.place}</td>
          <td class="results-team">${teamOf(s)}${isUs ? " 🎲" : ""}</td>
          ${cells}
          <td class="results-total">${fmtScore(s.total) || "—"}</td>
        </tr>`;
    }).join("");
    return `
      <tr class="results-row" id="results-${idx}" hidden>
        <td colspan="2">
          <div class="results-panel">
            ${res.note ? `<p class="results-note">${res.note}</p>` : ""}
            <div class="results-scroll">
              <table class="results-table">
                <thead>
                  <tr><th>Место</th><th>Команда</th>${roundHeads}<th>Итого</th></tr>
                </thead>
                <tbody>${bodyRows}</tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>`;
  }

  function gameRow(g, idx) {
    const hasResults = g.results && Array.isArray(g.results.standings) && g.results.standings.length > 0;
    return `
      <tr class="game-row${hasResults ? " has-results" : ""}"${hasResults ? ` data-results-target="results-${idx}" title="Показать результаты по турам"` : ""}>
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
        <td data-th="">${hasResults ? `<span class="expand-icon">▸</span>` : ""}</td>
      </tr>
      ${resultsRow(g, idx)}`;
  }

  function bindGamesAccordion(tbody) {
    tbody.querySelectorAll("tr.has-results").forEach((row) => {
      row.addEventListener("click", (e) => {
        if (e.target.closest("a")) return; // клик по ссылке альбома не сворачивает аккордеон
        const panel = tbody.querySelector(`#${row.dataset.resultsTarget}`);
        if (!panel) return;
        const isOpen = !panel.hidden;
        panel.hidden = isOpen;
        row.classList.toggle("expanded", !isOpen);
        try { window.goatcounter && window.goatcounter.count({ path: location.pathname + "#game-results", noReferrer: true }); } catch (_) {}
      });
    });
  }

  function renderGamesTable() {
    const tbody = document.getElementById("gamesTableBody");
    const wrap = tbody.closest(".games-table-wrap");
    const list = gamesSorted.filter((g) => currentFilter === "all" || g.organizer === currentFilter);
    const shown = gamesExpanded ? list : list.slice(0, GAMES_INITIAL);
    tbody.innerHTML = shown.map((g, i) => gameRow(g, `${currentFilter}-${i}`)).join("");
    bindGamesAccordion(tbody);

    // Кнопка «показать ещё»
    let moreBtn = wrap.parentElement.querySelector(".show-more-btn");
    const hiddenCount = list.length - shown.length;
    if (hiddenCount > 0) {
      if (!moreBtn) {
        moreBtn = document.createElement("button");
        moreBtn.className = "show-more-btn";
        wrap.insertAdjacentElement("afterend", moreBtn);
      }
      moreBtn.textContent = `Показать ещё ${hiddenCount} ${pluralize(hiddenCount, "игру", "игры", "игр")} ↓`;
      moreBtn.onclick = () => { gamesExpanded = true; renderGamesTable(); };
    } else if (moreBtn) {
      moreBtn.remove();
    }
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
      // Сумма баллов команды по играм организатора (из подробных результатов)
      const totalPoints = (org) => GAMES
        .filter((g) => g.organizer === org && g.results)
        .reduce((sum, g) => {
          const ours = g.results.standings.find(
            (row) => (row.team ?? row.name) === (g.results.team || g.results.teamName || "Генератор неслучайных ответов")
          );
          return sum + (ours && typeof ours.total === "number" ? ours.total : 0);
        }, 0);
      const fmtPoints = (v) => {
        if (!v) return "—";
        const num = Math.round(v * 10) / 10;
        return (num % 1 ? num.toFixed(1) : String(num)).replace(".", ",");
      };
      const rows = [
        { label: "Игр сыграно", get: (st, org) => st.count },
        { label: "Призовых (топ-3)", get: (st) => `🥇${st.firstGold} · 🥈${st.silvers} · 🥉${st.bronzes}` },
        { label: "Доля подиума", get: (st) => `${Math.round(st.winRate)}%` },
        { label: "Лучшее место", get: (st) => st.best == null ? "—" : `№${st.best}` },
        { label: "Сумма баллов", get: (st, org) => fmtPoints(totalPoints(org)) },
        { label: "Медиана", get: (st) => st.median == null ? "—" : (st.median % 1 ? st.median.toFixed(1) : st.median) },
        { label: "Без места", get: (st) => st.count - st.rankCount || "—" }
      ];
      const perOrg = orgNames.map((org) => computeStats(GAMES.filter((g) => g.organizer === org)));
      tbody.innerHTML = rows.map((r) => `
        <tr class="game-row">
          <td class="org-row-label" data-th="Метрика">${r.label}</td>
          ${perOrg.map((st, i) => `<td data-th="${orgNames[i]}">${r.get(st, orgNames[i])}</td>`).join("")}
        </tr>`).join("");
    }

    // Карточки организаторов (по 3 последние игры, остальные — по кнопке)
    const ORG_INITIAL = 3;
    grid.innerHTML = orgNames.map((org) => {
      const games = gamesSorted.filter((g) => g.organizer === org);
      const s = computeStats(games);
      const rankedGames = games.filter((g) => g.place != null);
      const bestGame = rankedGames.length ? rankedGames.reduce((a, b) => (a.place <= b.place ? a : b)) : null;
      const shown = games.slice(0, ORG_INITIAL);
      const hiddenCount = games.length - shown.length;
      const miniPlace = (g) => `<span class="mini-place ${placeClass(g.place)}">${g.place == null ? "—" : g.place}</span>`;
      const rows = shown.map((g) => `
        <li>
          ${miniPlace(g)}
          <span class="mini-info">${g.title} · ${g.venue}<br><small>${formatDate(g.date)}</small></span>
        </li>`).join("");
      return `
        <div class="organizer-card" data-games="${encodeURIComponent(JSON.stringify(games))}">
          <div class="organizer-head">
            <h3>${org}</h3>
            <span class="organizer-count">${s.count} ${pluralize(s.count, "игра", "игры", "игр")}</span>
          </div>
          <div class="organizer-stats">
            <div><strong>${s.best == null ? "—" : "№" + s.best}</strong><span>лучшее место</span></div>
            <div><strong>${s.avg.toFixed(1)}</strong><span>среднее место</span></div>
            <div><strong>${s.wins}</strong><span>подиумов</span></div>
          </div>
          ${bestGame ? `<p class="organizer-best">Лучший результат: ${bestGame.title} (${bestGame.venue}, ${formatDate(bestGame.date)})</p>` : `<p class="organizer-best">Места в играх не указаны</p>`}
          <ul class="organizer-games">${rows}</ul>
          ${hiddenCount > 0
            ? `<button class="show-more-btn show-more-small" data-hidden="${hiddenCount}">Показать ещё ${hiddenCount} ${pluralize(hiddenCount, "игру", "игры", "игр")} ↓</button>`
            : ""}
        </div>`;
    }).join("");

    // Раскрытие скрытых игр в карточках организаторов
    grid.querySelectorAll(".show-more-small").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".organizer-card");
        const all = JSON.parse(decodeURIComponent(card.dataset.games));
        const list = card.querySelector(".organizer-games");
        list.innerHTML = all.map((g) => `
          <li>
            <span class="mini-place ${placeClass(g.place)}">${g.place}</span>
            <span class="mini-info">${g.title} · ${g.venue}<br><small>${formatDate(g.date)}</small></span>
          </li>`).join("");
        btn.remove();
      });
    });
  }

  function pluralize(n, one, few, many) {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
    return many;
  }

  /* ---------- Фотоальбомы (8 последних, остальные — по кнопке) ---------- */
  const PHOTOS_INITIAL = 8;
  let photosExpanded = false;

  function photoCard(g, i) {
    const host = g.host || "фотоальбом";
    const medal = g.place != null && g.place <= 3 ? ` <span class="photo-place">${placeLabel(g.place)}</span>` : "";
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
  }

  function renderPhotos() {
    const section = document.getElementById("photos").querySelector(".container");
    const grid = document.getElementById("photosGrid");
    const withPhotos = gamesSorted.filter((g) => g.photoUrl);
    const shown = photosExpanded ? withPhotos : withPhotos.slice(0, PHOTOS_INITIAL);
    grid.innerHTML = shown.map(photoCard).join("");

    let moreBtn = section.querySelector("#photosGrid + .show-more-btn");
    const hiddenCount = withPhotos.length - shown.length;
    if (hiddenCount > 0) {
      if (!moreBtn) {
        moreBtn = document.createElement("button");
        moreBtn.className = "show-more-btn";
        grid.insertAdjacentElement("afterend", moreBtn);
      }
      moreBtn.textContent = `Показать ещё ${hiddenCount} ${pluralize(hiddenCount, "альбом", "альбома", "альбомов")} ↓`;
      moreBtn.onclick = () => { photosExpanded = true; renderPhotos(); };
    } else if (moreBtn) {
      moreBtn.remove();
    }
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
