/**
 * Данные об играх квизовой команды «Генератор неслучайных ответов» (Москва).
 * Чтобы добавить новую игру — допишите объект в массив GAMES.
 * date — в формате ГГГГ-ММ-ДД; organizer, title, venue, place — суть игры.
 * photoUrl — ссылка на фотоальбом; photoThumb — превью альбома (необязательно);
 * host — хост альбома, заполняется автоматически из photoUrl в main.js.
 */
const GAMES = [
  /* ================= 2026 (октябрь) ================= */
  {
    date: "2026-10-21", organizer: "Squiz", title: "#1018.2",
    venue: "Золберг", place: 1, photoUrl: "", photoThumb: "",
    results: {
      note: "21 октября 2026, среда • Москва",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1,  team: "Генератор неслучайных ответов", rounds: [5, 12, 4, 4, 7.5, 6, 18],   total: 56.5 },
        { place: 2,  team: "Who knew, как говорится",       rounds: [4, 10, 5, 5, 6, 8, 13],      total: 51 },
        { place: 3,  team: "Q&j",                           rounds: [6, 10, 4, 4, 4.5, 7, 15],    total: 50.5 },
        { place: 4,  team: "Найроби",                       rounds: [5, 12, 5, 3, 3, 6, 15],      total: 49 },
        { place: 5,  team: "Шиба(ри)-Ину",                  rounds: [6, 10, 4, 3.5, 6, 6, 13],    total: 48.5 },
        { place: 6,  team: "Атомный паяльник",              rounds: [4, 10, 6, 4.5, 3, 7, 13],    total: 47.5 },
        { place: 7,  team: "Агамемношная",                  rounds: [4, 9, 3, 4, 3, 7, 13],       total: 43 },
        { place: 8,  team: "19.05",                         rounds: [5, 9, 2, 2.5, 7.5, 3, 11],   total: 40 },
        { place: 9,  team: "Политровая мышь",               rounds: [4, 7, 5, 4.5, 3, 4, 8],      total: 35.5 },
        { place: 10, team: "Не такие уж и умные",           rounds: [5, 3, 4, 4, 3, 4, 8],        total: 31 },
        { place: 11, team: "Жуки завозники",                rounds: [1, 2, 4, 2.5, 1.5],          total: null }
      ]
    }
  },
  {
    date: "2026-09-19", organizer: "Squiz", title: "#451 (онлайн)",
    venue: "Савеловская (Online)", place: 34, photoUrl: "", photoThumb: "",
    results: {
      note: "19 сентября 2026, суббота • Squiz Online • Игра #451 (полная таблица, 83 команды)",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Вежливые оптималисты", rounds: [7, 12, 7, 6, 9, 10, 18], total: 69 },
        { place: 2, team: "Пустая трата бремени", rounds: [7, 12, 7, 5.5, 9, 10, 18], total: 68.5 },
        { place: 2, team: "Розенкранц и Гильденстерн", rounds: [7, 12, 7, 5.5, 9, 10, 18], total: 68.5 },
        { place: 4, team: "А мы думали сова", rounds: [7, 12, 7, 5, 9, 10, 18], total: 68 },
        { place: 5, team: "Утренний свояк", rounds: [7, 12, 7, 6, 9, 9, 18], total: 68 },
        { place: 6, team: "А Снегг не знал и падал", rounds: [6, 12, 7, 5.5, 9, 10, 18], total: 67.5 },
        { place: 7, team: "Квизом по голове", rounds: [7, 12, 7, 5.5, 9, 9, 18], total: 67.5 },
        { place: 8, team: "Нет и балла", rounds: [7, 12, 6, 5, 9, 10, 18], total: 67 },
        { place: 9, team: "Пьяная помятая пионервожатая", rounds: [7, 10, 6, 6, 9, 10, 18], total: 66 },
        { place: 10, team: "Группен колбасен", rounds: [7, 10, 7, 5.5, 9, 9, 18], total: 65.5 },
        { place: 11, team: "TBD", rounds: [6, 12, 6, 5.5, 9, 9, 18], total: 65.5 },
        { place: 12, team: "mucho мимо", rounds: [6, 10, 6, 6, 9, 10, 18], total: 65 },
        { place: 13, team: "Жгучие коалы", rounds: [6, 10, 7, 6, 9, 9, 18], total: 65 },
        { place: 14, team: "Непостоянство памяти", rounds: [7, 12, 7, 5.5, 9, 9, 15], total: 64.5 },
        { place: 15, team: "Казанские невозвращенцы", rounds: [7, 8, 7, 5.5, 7.5, 10, 18], total: 63 },
        { place: 16, team: "Оливье Жиру", rounds: [7, 12, 6, 5.5, 9, 10, 13], total: 62.5 },
        { place: 17, team: "Пыльные гантели", rounds: [7, 10, 6, 6, 9, 9, 15], total: 62 },
        { place: 18, team: "iKazus", rounds: [7, 10, 6, 5.5, 9, 9, 15], total: 61.5 },
        { place: 19, team: "Мимо проходил", rounds: [6, 10, 5, 5.5, 9, 9, 16], total: 60.5 },
        { place: 20, team: "Квизмараули", rounds: [7, 12, 6, 5.5, 9, 8, 13], total: 60.5 },
        { place: 21, team: "Пиво в пятницу. И котики", rounds: [7, 12, 6, 5.5, 9, 9, 12], total: 60.5 },
        { place: 22, team: "Последняя извилина", rounds: [7, 8, 7, 5, 9, 9, 15], total: 60 },
        { place: 23, team: "Кадык Тыгыдык", rounds: [6, 10, 7, 4.5, 9, 7, 16], total: 59.5 },
        { place: 24, team: "Спорная солянка", rounds: [6, 10, 6, 5.5, 9, 9, 14], total: 59.5 },
        { place: 25, team: "Арт Бонд", rounds: [6, 10, 7, 5.5, 9, 9, 13], total: 59.5 },
        { place: 26, team: "Галя, у нас отменно!", rounds: [7, 10, 6, 4.5, 7.5, 9, 15], total: 59 },
        { place: 27, team: "саквоёжики", rounds: [7, 10, 6, 6, 9, 8, 13], total: 59 },
        { place: 28, team: "Атомная МОЩЬ", rounds: [6, 10, 7, 5, 9, 8, 12], total: 57 },
        { place: 29, team: "Мир грибов", rounds: [6, 10, 7, 5, 7.5, 8, 13], total: 56.5 },
        { place: 30, team: "Тётушка Агата", rounds: [7, 7, 7, 5.5, 9, 9, 12], total: 56.5 },
        { place: 31, team: "Середина наполовину", rounds: [6, 10, 7, 5, 7.5, 9, 12], total: 56.5 },
        { place: 32, team: "Слабоалкогольный интеллект", rounds: [7, 6, 6, 5, 9, 10, 13], total: 56 },
        { place: 33, team: "команда Улечки", rounds: [7, 6, 6, 6, 9, 10, 12], total: 56 },
        { place: 34, team: "Генератор неслучайных ответов", rounds: [4, 8, 6, 5.5, 9, 8, 15], total: 55.5 },
        { place: 35, team: "Жизнь и грабля", rounds: [6, 10, 6, 5.5, 9, 9, 10], total: 55.5 },
        { place: 36, team: "Просто поиграть", rounds: [6, 10, 7, 5, 9, 9, 9], total: 55 },
        { place: 37, team: "Позор Маджулы", rounds: [6, 6, 4, 5, 9, 6, 18], total: 54 },
        { place: 38, team: "Занесённые ветром", rounds: [4, 9, 6, 5, 9, 9, 12], total: 54 },
        { place: 39, team: "Какие-то люди", rounds: [6, 7, 6, 5, 9, 9, 12], total: 54 },
        { place: 40, team: "Двое против ведра", rounds: [6, 6, 6, 5.5, 9, 8, 13], total: 53.5 },
        { place: 41, team: "The Wassermans", rounds: [7, 8, 5, 4.5, 9, 10, 8], total: 51.5 },
        { place: 42, team: "Покорми Пухлю!", rounds: [7, 9, 6, 4.5, 9, 9, 7], total: 51.5 },
        { place: 43, team: "Вандерлэнд", rounds: [7, 5, 6, 4.5, 7.5, 9, 12], total: 51 },
        { place: 44, team: "Очумелы", rounds: [7, 9, 5, 4.5, 7.5, 9, 9], total: 51 },
        { place: 45, team: "Ялта. Август", rounds: [6, 4, 5, 4, 7.5, 9, 15], total: 50.5 },
        { place: 46, team: "Дарвин был не прав ", rounds: [5, 9, 6, 4.5, 9, 7, 10], total: 50.5 },
        { place: 47, team: "Эукариоты", rounds: [6, 8, 6, 5, 9, 8, 8], total: 50 },
        { place: 48, team: "Седьмой слой сумрака", rounds: [7, 8, 6, 4, 9, 8, 8], total: 50 },
        { place: 49, team: "Пошебуршим?", rounds: [6, 6, 7, 6, 9, 10, 6], total: 50 },
        { place: 50, team: "Превосходство ёжика", rounds: [5, 10, 5, 4.5, 9, 6, 10], total: 49.5 },
        { place: 51, team: "Зачем он это спросил?", rounds: [5, 8, 5, 5.5, 9, 9, 8], total: 49.5 },
        { place: 52, team: "Маша и медведи", rounds: [6, 10, 5, 5.5, 9, 9, 5], total: 49.5 },
        { place: 53, team: "Retriever Band", rounds: [6, 8, 6, 4, 9, 7, 9], total: 49 },
        { place: 54, team: "Псевдодуховные алкаши", rounds: [6, 10, 6, 5, 7.5, 7, 7], total: 48.5 },
        { place: 55, team: "Хильперт Шмульцен", rounds: [7, 7, 6, 4, 9, 8, 7], total: 48 },
        { place: 56, team: "Let eat bee", rounds: [6, 10, 5, 4.5, 9, 7, 6], total: 47.5 },
        { place: 57, team: "Истина внутри", rounds: [5, 5, 4, 4, 9, 7, 13], total: 47 },
        { place: 58, team: "Пузырь, соломинка и лапоть", rounds: [5, 6, 6, 3.5, 9, 10, 7], total: 46.5 },
        { place: 59, team: "Дружки-пирожки", rounds: [2, 6, 6, 5, 9, 9, 9], total: 46 },
        { place: 60, team: "Орден Капушкиных", rounds: [6, 5, 5, 4.5, 6, 6, 12], total: 44.5 },
        { place: 61, team: "Это Песец!", rounds: [5, 4, 6, 4.5, 7.5, 7, 10], total: 44 },
        { place: 62, team: "Галетки", rounds: [6, 8, 6, 4.5, 7.5, 5, 7], total: 44 },
        { place: 63, team: "9 метров шланга", rounds: [6, 7, 5, 3, 9, 8, 6], total: 44 },
        { place: 64, team: "Культурные пельмешки", rounds: [6, 7, 6, 3, 7.5, 9, 5], total: 43.5 },
        { place: 65, team: "Токсичное ТЗ", rounds: [7, 10, 3, 4, 7.5, 5, 6], total: 42.5 },
        { place: 66, team: "Дискотека Бавария", rounds: [4, 7, 4, 3.5, 7.5, 6, 9], total: 41 },
        { place: 67, team: "Девочки отдыхают", rounds: [6, 6, 7, 3, 9, 7, 3], total: 41 },
        { place: 68, team: "Мозжечок с ноготок", rounds: [4, 6, 3, 3, 4.5, 7, 13], total: 40.5 },
        { place: 69, team: "не команда", rounds: [6, 4, 5, 1, 7.5, 7, 9], total: 39.5 },
        { place: 70, team: "Алкологика", rounds: [5, 5, 6, 3.5, 4.5, 7, 8], total: 39 },
        { place: 71, team: "Кошарики", rounds: [7, 5, 5, 2, 7.5, 6, 4], total: 36.5 },
        { place: 72, team: "Утка уже в духовке", rounds: [6, 9, 6, 2.5, 6, 6, 1], total: 36.5 },
        { place: 73, team: "40 Ватт", rounds: [5, 8, 3, 4.5, 3, 10, 1], total: 34.5 },
        { place: 74, team: "Вторая лига", rounds: [6, 7, 4, 4, 3, 6, 4], total: 34 },
        { place: 75, team: "Семейка Косов", rounds: [7, 4, 4, 3.5, 3, 8, 4], total: 33.5 },
        { place: 76, team: "Фон вакано", rounds: [7, 3, 5, 4.5, 1.5, 7, 3], total: 31 },
        { place: 77, team: "Шоколадные кексы", rounds: [5, 3, 5, 4.5, 4.5, 8, 0], total: 30 },
        { place: 78, team: "Печеньки осени", rounds: [5, 5, 4, 2.5, 4.5, 7, 0], total: 28 },
        { place: 79, team: "Кеса не треба", rounds: [6, 5, 5, 4.5, 1.5, 6, -2], total: 26 },
        { place: 80, team: "Кирстен данс", rounds: [4, 4, 3, 2, 6, 6, 0], total: 25 },
        { place: 81, team: "Могучая девятка", rounds: [6, 5, 3, 3.5, 1.5, 7, -1], total: 25 },
        { place: 82, team: "Душный кусь", rounds: [4, 2, 4, 3, 4.5, 6, 1], total: 24.5 },
        { place: 83, team: "Кружатся диски", rounds: [4, 2, 4, 4, 4.5, 4, 1], total: 23.5  }
      ]
    }
  },
  {
    date: "2026-10-18", organizer: "Квизиум", title: "«Обо всём» #915",
    venue: "Lions Head Pub", place: 7,
    photoUrl: "https://findquiz.ru/event/quizium/photo/352210-obo-vsem-915",
    photoThumb: "https://sun9-71.userapi.com/s/v1/ig2/L79hcsnQIDPmYbnmHBzgJEmjzTc343DoWHZQv2ekm8iN4ujAT550w5eOTqJDFAUORiAr1IeuVx3Wv2ocgqmR3SoN.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=640x0",
    results: {
      note: "18 октября 2026, воскресенье • Lion's Head Pub • КВИЗИУМ #915.3",
      roundCount: 8,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1,  team: "А мы думали сова",                rounds: [6, 5, 7, 4, 5, 9, 6, 15],     total: 57 },
        { place: 2,  team: "Прости, Ярослав",                 rounds: [5, 2, 8, 6, 4, 8, 6, 17],     total: 56 },
        { place: 3,  team: "Эффект Гибсона-Макконахи",        rounds: [5, 4, 7, 5, 4.5, 7, 6, 17],   total: 55.5 },
        { place: 4,  team: "Брызги интеллекта",               rounds: [3, 6, 7, 6, 3, 8, 6, 15],     total: 54 },
        { place: 5,  team: "В ожидании бордо",                rounds: [4, 4, 7, 4, 4.5, 6, 6, 18],   total: 53.5 },
        { place: 6,  team: "Сущности в виде гномиков",        rounds: [4, 3, 9, 3, 4.5, 8, 4, 16],   total: 51.5 },
        { place: 7,  team: "Генератор неслучайных ответов",   rounds: [3, 5, 7, 5, 4, 6, 4, 17],     total: 51 },
        { place: 8,  team: "Грибочки",                        rounds: [5, 4, 7, 3, 4, 7, 4, 16],     total: 50 },
        { place: 9,  team: "Пока звучит регби",               rounds: [4, 5, 7, 3, 5, 8, 4, 14],     total: 50 },
        { place: 10, team: "Не за ту пили",                   rounds: [5, 3, 5, 5, 3.5, 8, 6, 14],   total: 49.5 },
        { place: 11, team: "Мокрые усы",                       rounds: [4, 2, 7, 4, 5, 9, 4, 14],    total: 49 },
        { place: 12, team: "Эчпочмак пряничный",              rounds: [3, 3, 8, 5, 4.5, 6, 6, 11],   total: 46.5 },
        { place: 13, team: "Пунктумофобия.",                  rounds: [3, 4, 6, 1, 3, 8, 4, 11],     total: 40 },
        { place: 14, team: "Носохвост",                       rounds: [1, 3, 6, 5, 3, 2, 6, 12],     total: 38 },
        { place: 15, team: "Не придумали",                    rounds: [0, 1, 6, 5, 3.5, 8, 4, 9],    total: 36.5 },
        { place: 16, team: "Команда",                         rounds: [3, 2, 5, 2, 3.5, 5, 4, 9],    total: 33.5 },
        { place: 17, team: "Дети ошибаются, родители платят.", rounds: [2, 3, 7, 1, 1, 5, 4, 7],     total: 30 },
        { place: 18, team: "ПРОФиТРОЛИ",                      rounds: [2, 3, 2, 4, 3.5, 4, 4, 6],    total: 28.5 },
        { place: 19, team: "Пара",                            rounds: [0, 2, 1, 3, 3, 4, 0, 9],      total: 22 },
        { place: 20, team: "Туфелька и Каблучок",             rounds: [0, 1, 2, 0, 1, 0, 2, 7],      total: 13 }
      ]
    }
  },
  {
    date: "2026-09-12", organizer: "Squiz", title: "#448 (онлайн)",
    venue: "Савеловская (Online)", place: 56, photoUrl: "", photoThumb: "",
    results: {
      note: "12 сентября 2026, суббота • Squiz Online • Игра #448 (полная таблица, 162 команды)",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Ни слова о работе", rounds: [7, 12, 7, 6, 9, 9, 18], total: 68 },
        { place: 1, team: "Шкодники 21", rounds: [7, 12, 7, 6, 9, 9, 18], total: 68 },
        { place: 3, team: "Квизмараули", rounds: [7, 12, 7, 5.5, 9, 9, 18], total: 67.5 },
        { place: 4, team: "Мухи творчества", rounds: [7, 12, 6, 6, 9, 9, 18], total: 67 },
        { place: 5, team: "Ю-Питер", rounds: [7, 12, 7, 6, 9, 8, 18], total: 67 },
        { place: 6, team: "Святые булочки", rounds: [7, 12, 6, 5.5, 9, 9, 18], total: 66.5 },
        { place: 7, team: "А Снегг не знал и падал", rounds: [7, 10, 6, 6, 9, 10, 18], total: 66 },
        { place: 8, team: "Ума палатка", rounds: [7, 9, 7, 6, 9, 9, 18], total: 65 },
        { place: 9, team: "Корки Бучек", rounds: [7, 12, 5, 6, 9, 8, 18], total: 65 },
        { place: 10, team: "Мы погреться", rounds: [7, 12, 6, 5, 9, 8, 18], total: 65 },
        { place: 11, team: "mucho мимо", rounds: [7, 12, 6, 6, 9, 7, 18], total: 65 },
        { place: 11, team: "Булочки Шу", rounds: [7, 12, 6, 6, 9, 7, 18], total: 65 },
        { place: 13, team: "Шорты Малфоя", rounds: [7, 8, 7, 5.5, 9, 9, 18], total: 63.5 },
        { place: 14, team: "IPAтерапия", rounds: [7, 8, 7, 6, 9, 8, 18], total: 63 },
        { place: 15, team: "PSOV", rounds: [7, 7, 6, 6, 9, 9, 18], total: 62 },
        { place: 16, team: "Вагановские уДачники", rounds: [7, 7, 7, 6, 9, 8, 18], total: 62 },
        { place: 17, team: "Мир грибов", rounds: [6, 10, 6, 6, 9, 7, 18], total: 62 },
        { place: 18, team: "Казанские невозвращенцы", rounds: [7, 12, 7, 6, 9, 8, 13], total: 62 },
        { place: 19, team: "Тупак в Тупике", rounds: [7, 9, 4, 5.5, 9, 9, 18], total: 61.5 },
        { place: 20, team: "Драконы по четвергам", rounds: [7, 8, 7, 4.5, 9, 8, 18], total: 61.5 },
        { place: 21, team: "Пиво в пятницу. И котики", rounds: [6, 10, 6, 5.5, 9, 7, 18], total: 61.5 },
        { place: 22, team: "Однако", rounds: [6, 12, 4, 5.5, 9, 7, 18], total: 61.5 },
        { place: 23, team: "Розенкранц и Гильденстерн", rounds: [7, 7, 6, 6, 9, 8, 18], total: 61 },
        { place: 24, team: "Стартап", rounds: [6, 10, 6, 5.5, 9, 9, 15], total: 60.5 },
        { place: 25, team: "Непостоянство памяти", rounds: [6, 9, 5, 6, 9, 7, 18], total: 60 },
        { place: 26, team: "Йогурт без даты", rounds: [7, 8, 5, 6, 9, 7, 18], total: 60 },
        { place: 27, team: "Duo S.N.", rounds: [6, 10, 4, 6, 9, 7, 18], total: 60 },
        { place: 28, team: "Утренний свояк", rounds: [6, 8, 7, 5, 9, 7, 18], total: 60 },
        { place: 29, team: "Корюшка по-боярски", rounds: [7, 9, 5, 5, 9, 7, 18], total: 60 },
        { place: 30, team: "Кошкин дом", rounds: [7, 7, 6, 5.5, 9, 7, 18], total: 59.5 },
        { place: 31, team: "Imaginary friends", rounds: [7, 7, 5, 6, 9, 10, 15], total: 59 },
        { place: 32, team: "Милфы древней Греции", rounds: [7, 10, 6, 6, 9, 6, 15], total: 59 },
        { place: 33, team: "Середина наполовину", rounds: [7, 9, 6, 6, 9, 9, 13], total: 59 },
        { place: 34, team: "Горные козочки", rounds: [7, 10, 7, 6, 9, 7, 13], total: 59 },
        { place: 35, team: "Мимо проходил", rounds: [6, 8, 5, 5.5, 9, 7, 18], total: 58.5 },
        { place: 36, team: "Слабоалкогольный интеллект", rounds: [5, 8, 6, 5, 9, 7, 18], total: 58 },
        { place: 37, team: "Галя, у нас отменно!", rounds: [7, 7, 6, 6, 9, 10, 13], total: 58 },
        { place: 38, team: "Операция \"Прокрастинация\"", rounds: [6, 5, 5, 5.5, 9, 9, 18], total: 57.5 },
        { place: 39, team: "Пуля", rounds: [7, 7, 5, 4.5, 9, 7, 18], total: 57.5 },
        { place: 40, team: "Хмель", rounds: [6, 7, 6, 5.5, 9, 6, 18], total: 57.5 },
        { place: 41, team: "Обратный космос", rounds: [7, 10, 4, 5.5, 9, 9, 13], total: 57.5 },
        { place: 42, team: "Икьсис Икьсисам", rounds: [7, 5, 4, 6, 9, 8, 18], total: 57 },
        { place: 43, team: "2 лобстера", rounds: [5, 9, 4, 5, 9, 7, 18], total: 57 },
        { place: 44, team: "Псевдодуховные алкаши", rounds: [6, 9, 4, 5, 9, 9, 15], total: 57 },
        { place: 45, team: "Союз на импорте", rounds: [7, 7, 7, 5, 9, 7, 15], total: 57 },
        { place: 46, team: "Уикенд с тренером", rounds: [7, 8, 3, 4.5, 9, 7, 18], total: 56.5 },
        { place: 47, team: "Кекесы", rounds: [5, 7, 6, 5.5, 9, 9, 15], total: 56.5 },
        { place: 48, team: "TBD", rounds: [7, 9, 4, 5.5, 9, 7, 15], total: 56.5 },
        { place: 49, team: "Дефективы", rounds: [7, 9, 6, 5.5, 9, 5, 15], total: 56.5 },
        { place: 50, team: "Вежливые оптималисты", rounds: [7, 8, 7, 5.5, 9, 7, 13], total: 56.5 },
        { place: 51, team: "Запись Дюны", rounds: [5, 8, 5, 5.5, 7.5, 7, 18], total: 56 },
        { place: 52, team: "Сплетчицы", rounds: [7, 5, 6, 5, 9, 6, 18], total: 56 },
        { place: 53, team: "Намоточная", rounds: [7, 7, 5, 4, 9, 6, 18], total: 56 },
        { place: 54, team: "Соль", rounds: [7, 7, 5, 6, 9, 7, 15], total: 56 },
        { place: 55, team: "Творческий потанцевал", rounds: [6, 9, 5, 5, 9, 7, 15], total: 56 },
        { place: 56, team: "Генератор неслучайных ответов", rounds: [7, 7, 6, 6, 9, 6, 15], total: 56 },
        { place: 57, team: "А мы думали сова", rounds: [4, 7, 6, 5.5, 9, 9, 15], total: 55.5 },
        { place: 58, team: "Пупсики хаюпсики", rounds: [5, 7, 4, 5, 9, 7, 18], total: 55 },
        { place: 59, team: "Геннадий Хазанов", rounds: [7, 5, 6, 5, 9, 8, 15], total: 55 },
        { place: 60, team: "саквоёжики", rounds: [7, 7, 3, 4.5, 9, 6, 18], total: 54.5 },
        { place: 61, team: "Кадык Тыгыдык", rounds: [4, 9, 4, 5, 9, 5, 18], total: 54 },
        { place: 62, team: "КопебараШ", rounds: [6, 8, 3, 5, 9, 5, 18], total: 54 },
        { place: 63, team: "Атомная МОЩЬ", rounds: [7, 6, 5, 5, 9, 9, 13], total: 54 },
        { place: 64, team: "Баклажан и точка", rounds: [6, 3, 3, 5.5, 9, 9, 18], total: 53.5 },
        { place: 65, team: "Занесённые ветром", rounds: [6, 5, 5, 5.5, 9, 5, 18], total: 53.5 },
        { place: 66, team: "Жена городского сумасшедшего", rounds: [6, 6, 5, 4.5, 9, 8, 15], total: 53.5 },
        { place: 67, team: "9 метров шланга", rounds: [6, 10, 5, 5.5, 9, 5, 13], total: 53.5 },
        { place: 68, team: "Пузырь, соломинка и лапоть", rounds: [5, 4, 3, 5, 9, 9, 18], total: 53 },
        { place: 69, team: "Город  засыпает", rounds: [null, 10, 5, 6, 7.5, 6, 18], total: 52.5 },
        { place: 70, team: "Говори тише, нас услышат", rounds: [6, 6, 6, 5.5, 9, 7, 13], total: 52.5 },
        { place: 71, team: "Их улей?", rounds: [7, 8, 3, 5.5, 9, 8, 12], total: 52.5 },
        { place: 72, team: "Оливье Жиру", rounds: [7, 10, 5, 4, 7.5, 9, 10], total: 52.5 },
        { place: 73, team: "Узнали? Согласны?", rounds: [6, 9, 6, 5.5, 9, 8, 9], total: 52.5 },
        { place: 74, team: "Велобос", rounds: [6, 3, 3, 6, 9, 7, 18], total: 52 },
        { place: 75, team: "Зачем он это спросил?", rounds: [6, 6, 5, 6, 9, 7, 13], total: 52 },
        { place: 76, team: "Крысы", rounds: [7, 10, 4, 6, 9, 8, 8], total: 52 },
        { place: 77, team: "WWZ", rounds: [7, 8, 7, 6, 9, 7, 8], total: 52 },
        { place: 78, team: "40 Ватт", rounds: [7, 10, 6, 5, 9, 7, 8], total: 52 },
        { place: 79, team: "Египетские волки", rounds: [6, 5, 7, 6, 7.5, 6, 14], total: 51.5 },
        { place: 80, team: "UnoFamily", rounds: [6, 7, 5, 5.5, 9, 7, 12], total: 51.5 },
        { place: 81, team: "Duality", rounds: [7, 7, 6, 5.5, 9, 7, 10], total: 51.5 },
        { place: 82, team: "Мы со Светой ходим парой, ищем в пары санитаров", rounds: [4, 6, 7, 5, 9, 7, 13], total: 51 },
        { place: 83, team: "Хмели Сумели", rounds: [6, 2, 3, 5.5, 9, 7, 18], total: 50.5 },
        { place: 84, team: "Мародеры Растчека", rounds: [5, 7, 4, 4.5, 9, 8, 13], total: 50.5 },
        { place: 85, team: "Retriever Band", rounds: [5, 9, 3, 4.5, 9, 7, 13], total: 50.5 },
        { place: 86, team: "Эклер", rounds: [6, 9, 3, 4.5, 9, 6, 13], total: 50.5 },
        { place: 87, team: "Дружки-пирожки", rounds: [6, 7, 5, 5, 7.5, 8, 12], total: 50.5 },
        { place: 88, team: "Муся это ты?", rounds: [5, 9, 3, 5.5, 9, 7, 12], total: 50.5 },
        { place: 89, team: "Тётушка Агата", rounds: [7, 6, 6, 5, 7.5, 7, 12], total: 50.5 },
        { place: 90, team: "Очумелы", rounds: [6, 7, 6, 5.5, 9, 5, 12], total: 50.5 },
        { place: 91, team: "Гедонисты из Крюково", rounds: [6, 8, 5, 5.5, 9, 7, 10], total: 50.5 },
        { place: 92, team: "The Wassermans", rounds: [6, 8, 5, 5.5, 9, 8, 9], total: 50.5 },
        { place: 93, team: "Пошебуршим?", rounds: [5, 9, 4, 5, 6, 7, 14], total: 50 },
        { place: 94, team: "Ялта. Август", rounds: [4, 7, 2, 5, 9, 10, 13], total: 50 },
        { place: 95, team: "1+1+0,5", rounds: [4, 4, 3, 6, 7.5, 7, 18], total: 49.5 },
        { place: 96, team: "Жгучие коалы", rounds: [6, 6, 6, 5, 7.5, 7, 12], total: 49.5 },
        { place: 97, team: "Галетки", rounds: [6, 12, 6, 5.5, 9, 2, 9], total: 49.5 },
        { place: 98, team: "Столица Брунея", rounds: [7, 5, 2, 4.5, 7.5, 5, 18], total: 49 },
        { place: 99, team: "Взрослые, забытые в торговом центре", rounds: [5, 6, 4, 5, 9, 5, 15], total: 49 },
        { place: 100, team: "Это кожа убийцы, Белла", rounds: [7, 7, 5, 5, 9, 9, 7], total: 49 },
        { place: 101, team: "807-й км", rounds: [5, 4, 4, 5.5, 9, 6, 15], total: 48.5 },
        { place: 102, team: "Покорми Пухлю!", rounds: [5, 4, 6, 4, 9, 7, 13], total: 48 },
        { place: 103, team: "Невинный погребок", rounds: [7, 7, 5, 6, 9, 6, 8], total: 48 },
        { place: 104, team: "Серийные упийцы", rounds: [7, 9, 7, 5, 9, 4, 7], total: 48 },
        { place: 105, team: "Гранёное стаккато", rounds: [7, 7, 6, 4, 6, 7, 10], total: 47 },
        { place: 106, team: "Предки Фрухтиков", rounds: [6, 10, 3, 5, 9, 5, 9], total: 47 },
        { place: 107, team: "Дарвин был не прав ", rounds: [6, 5, 5, 4.5, 9, 5, 12], total: 46.5 },
        { place: 108, team: "Темные головы", rounds: [7, 5, 4, 4.5, 9, 7, 10], total: 46.5 },
        { place: 109, team: "Пенсия близко", rounds: [6, 8, 3, 4.5, 9, 6, 10], total: 46.5 },
        { place: 110, team: "Екатерина Михайловна", rounds: [6, 4, 5, 5, 9, 7, 10], total: 46 },
        { place: 111, team: "Сомелье фрилансер", rounds: [4, 5, 5, 3, 7.5, 6, 15], total: 45.5 },
        { place: 112, team: "Часы с кукушкой", rounds: [4, 7, 4, 4, 7.5, 4, 15], total: 45.5 },
        { place: 113, team: "Команда К", rounds: [3, 7, 3, 5, 7.5, 6, 13], total: 44.5 },
        { place: 114, team: "Сколько-сколько?", rounds: [4, 7, 4, 5.5, 7.5, 3, 13], total: 44 },
        { place: 115, team: "Какие-то странные люди", rounds: [4, 6, 4, 6, 9, 7, 8], total: 44 },
        { place: 116, team: "Утка уже в духовке", rounds: [6, 5, 6, 4.5, 7.5, 4, 10], total: 43 },
        { place: 117, team: "Дуэт А. В", rounds: [7, 5, 4, 5, 9, 8, 5], total: 43 },
        { place: 118, team: "Игогошки", rounds: [6, 2, 4, 2, 9, 4, 15], total: 42 },
        { place: 119, team: "Превосходство ёжика", rounds: [5, 3, 3, 4, 9, 5, 13], total: 42 },
        { place: 120, team: "Распродажи галактики", rounds: [4, 5, 3, 5, 9, 6, 10], total: 42 },
        { place: 121, team: "Вторая лига", rounds: [5, 6, 3, 4, 9, 5, 10], total: 42 },
        { place: 122, team: "Массовый междусобойчик", rounds: [4, 4, 4, 4, 9, 8, 9], total: 42 },
        { place: 123, team: "Проект \"Квиз\"", rounds: [5, 4, 5, 5, 9, 5, 9], total: 42 },
        { place: 124, team: "Ветром голову надуло", rounds: [4, 5, 4, 5, 7.5, 3, 13], total: 41.5 },
        { place: 125, team: "Название команды", rounds: [6, 4, 4, 3.5, 7.5, 4, 12], total: 41 },
        { place: 126, team: "Вечером фыр-фыр-фыр", rounds: [5, 4, 3, 4.5, 9, 5, 10], total: 40.5 },
        { place: 127, team: "Танцоры Минск", rounds: [4, 4, 5, 3.5, 9, 6, 9], total: 40.5 },
        { place: 128, team: "Могучая девятка", rounds: [6, 4, 6, 4.5, 6, 5, 9], total: 40.5 },
        { place: 129, team: "Мексиканский тушканчик", rounds: [6, 2, 2, 3.5, 7.5, 6, 13], total: 40 },
        { place: 130, team: "Девочки отдыхают", rounds: [7, 2, 5, 5, 7.5, 4, 9], total: 39.5 },
        { place: 131, team: "Гениальная Тусовка", rounds: [7, 3, 5, 4.5, 7.5, 5, 7], total: 39 },
        { place: 132, team: "Семейка Косов", rounds: [7, 4, 3, 4, 9, 6, 6], total: 39 },
        { place: 133, team: "Азартный Парамоша", rounds: [7, 3, 3, 4.5, 9, 4, 7], total: 37.5 },
        { place: 134, team: "Дедуктивный метод", rounds: [5, 1, 4, 3.5, 7.5, 4, 12], total: 37 },
        { place: 135, team: "Мозжечок с ноготок", rounds: [5, 2, 3, 3.5, 9, 4, 10], total: 36.5 },
        { place: 136, team: "Кружатся диски", rounds: [6, 4, 4, 4.5, 9, 6, 3], total: 36.5 },
        { place: 137, team: "Пыльные гантели", rounds: [4, 4, 4, 3.5, 4.5, 3, 13], total: 36 },
        { place: 138, team: "Алкологика", rounds: [4, 3, 4, 3.5, 7.5, 7, 7], total: 36 },
        { place: 139, team: "175", rounds: [5, 2, 5, 6, 6, 5, 7], total: 36 },
        { place: 140, team: "Парный Парадокс", rounds: [3, 3, 2, 3.5, 9, 6, 9], total: 35.5 },
        { place: 141, team: "Личи и По", rounds: [6, 3, 3, 3, 7.5, 4, 9], total: 35.5 },
        { place: 142, team: "Неконтактный зоопарк", rounds: [5, 3, null, 1, 7.5, 1, 16], total: 33.5 },
        { place: 143, team: "Богатый внутренний мир", rounds: [5, 3, 4, 4.5, 6, 5, 6], total: 33.5 },
        { place: 144, team: "Выворотни", rounds: [3, 3, 3, 4, 9, 7, 4], total: 33 },
        { place: 145, team: "Культурные пельмешки", rounds: [4, 5, 2, 3.5, 6, 5, 7], total: 32.5 },
        { place: 146, team: "ИВВИ", rounds: [null, 1, 4, 5.5, 9, 8, 5], total: 32.5 },
        { place: 147, team: "Микс в квадрате", rounds: [3, 3, 4, 3.5, 7.5, 6, 5], total: 32 },
        { place: 148, team: "Тревожный чемоданчик", rounds: [5, 2, 5, 3, 7.5, 4, 5], total: 31.5 },
        { place: 149, team: "29 region", rounds: [5, 5, 6, 6, 6, 3, 0], total: 31 },
        { place: 150, team: "Кошарики", rounds: [2, 3, 4, 3, 6, 7, 5], total: 30 },
        { place: 151, team: "Пубертатные язвы", rounds: [4, 5, 3, 5.5, 4.5, 4, 4], total: 30 },
        { place: 152, team: "Истина внутри", rounds: [3, 2, 3, 4.5, 9, 2, 6], total: 29.5 },
        { place: 153, team: "Брэндон Флауэрс", rounds: [6, 2, 4, 5, 7.5, 3, 2], total: 29.5 },
        { place: 154, team: "А нас рать", rounds: [5, 8, 4, 3.5, 3, 4, 1], total: 28.5 },
        { place: 155, team: "Кирстен данс", rounds: [4, 6, 2, 2.5, 1.5, 5, 6], total: 27 },
        { place: 156, team: "Рассчитывай на себя", rounds: [3, 1, 0, 3.5, 6, 1, 12], total: 26.5 },
        { place: 157, team: "Хильперт Шмульцен", rounds: [7, 4, 4, 3.5, 9, null, -2], total: 25.5 },
        { place: 158, team: "3+2", rounds: [null, null, null, 5, 9, 3, 7], total: 24 },
        { place: 159, team: "Казарити", rounds: [null, null, null, null, 7.5, 5, 4], total: 16.5 },
        { place: 160, team: "Триманула", rounds: [6, 4, 3, 3, null, null, null], total: 16 },
        { place: 161, team: "D-Team", rounds: [null, null, null, null, null, null, 3], total: 3 },
        { place: 162, team: "Точка GE", rounds: [2, null, null, null, null, null, null], total: 2  }
      ]
    }
  },
  {
    date: "2026-10-11", organizer: "Квизиум", title: "«Обо всём» #913",
    venue: "The Tipsy Pub", place: 8,
    photoUrl: "https://findquiz.ru/event/quizium/photo/351058-obo-vsem-913",
    photoThumb: "https://sun9-54.userapi.com/s/v1/ig2/XEOcWYEk3oRwi_x_-C6UH_MbN9kDI8oYU7SXayFTzE4aL7aEw3-q1gw7Vh2GUjG7sTTFKcBuefkpQw_vrUEr8anT.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x854,1440x961,2400x1601&from=bu&cs=640x0",
    results: {
      note: "11 октября 2026, воскресенье • The Tipsy Pub • КВИЗИУМ #913.3",
      roundCount: 8,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1,  team: "Кот Шрёдингера",               rounds: [5, 6, 6, 3, 5, 8, 8, 16],     total: 57 },
        { place: 2,  team: "Беседка",                       rounds: [4, 6, 6, 3, 4, 9, 8, 15],    total: 55 },
        { place: 3,  team: "Шумелка мышь",                  rounds: [4, 6, 6, 3, 4.5, 7, 8, 16],  total: 54.5 },
        { place: 4,  team: "Наутилус",                      rounds: [3, 5, 5, 4, 4, 9, 6, 16],    total: 52 },
        { place: 5,  team: "Злопастный Брандашмыг",         rounds: [5, 6, 6, 3, 3.5, 6, 4, 17],  total: 50.5 },
        { place: 6,  team: "Партия будет доиграна",         rounds: [4, 5, 6, 5, 3.5, 5, 6, 13],  total: 47.5 },
        { place: 7,  team: "Носохвост",                     rounds: [5, 6, 5, 3, 2, 4, 8, 14],    total: 47 },
        { place: 8,  team: "Генератор неслучайных ответов", rounds: [5, 5, 6, 2, 2.5, 5, 8, 13],  total: 46.5 },
        { place: 9,  team: "Чикен Макнаггетс",              rounds: [4, 3, 4, 4, 3.5, 9, 6, 5],   total: 38.5 },
        { place: 10, team: "ШишкИ",                         rounds: [3, 2, 4, 2, 1.5, -1, 2, 12], total: 25.5 },
        { place: 11, team: "Нананасти",                     rounds: [2, 2, 4, 4, 2, -1, 2, 7],    total: 22 },
        { place: 12, team: "Отдел по содействию коррупциим",rounds: [1, 0, 1, 3, 0.5, 0, 0, 0],   total: 5.5 }
      ]
    }
  },

  /* ================= 2026 (сентябрь) ================= */
  {
    date: "2026-09-23", organizer: "Squiz", title: "#1010.3",
    venue: "Summer Punch", place: 2,
    photoUrl: "https://squiz.ru/photos/260923-rxf",
    photoThumb: "https://squiz.ru/storage/v1/object/public/game-photos/113818e3-c08e-46c2-ac73-5efe7bc1abe9/0e9bcdd5-edb0-46e9-8578-1b6c20f5efa4_thumb.jpg",
    results: {
      note: "23 сентября 2026, среда • Москва • Squiz #1010.3",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1,  team: "Prosecco lovers social club",     rounds: [5, 12, 3, 5.5, 9, 7, 7],     total: 48.5 },
        { place: 2,  team: "Генератор неслучайных ответов",   rounds: [7, 12, 4, 5.5, 7.5, 7, 2],   total: 45 },
        { place: 3,  team: "СИЛА В ПЛАВКАХ",                  rounds: [6, 10, 6, 5, 6, 5, 5],       total: 43 },
        { place: 4,  team: "Общество безответственности",     rounds: [7, 10, 4, 5.5, 3, 5, 7],     total: 41.5 },
        { place: 5,  team: "Отдел закадр",                    rounds: [7, 6, 5, 6, 7.5, 8, 0],      total: 39.5 },
        { place: 6,  team: "Последняя извилина",              rounds: [7, 10, 4, 5.5, 7.5, 9, -6],  total: 37 },
        { place: 7,  team: "Снова 17",                        rounds: [5, 7, 3, 6, 4.5, 5, 3],      total: 33.5 },
        { place: 8,  team: "Агамемношная",                    rounds: [7, 8, 5, 6, 1.5, 7, -1],     total: 33.5 },
        { place: 9,  team: "Легенды Птахи",                   rounds: [7, 10, 6, 5, 0, 7, -2],      total: 33 },
        { place: 10, team: "Молчание опят",                   rounds: [7, 7, 5, 5, 6, 5, -3],        total: 32 },
        { place: 11, team: "Эмпатия",                         rounds: [5, 5, 4, 5.5, 6, 6, -1],      total: 30.5 },
        { place: 12, team: "19.05",                           rounds: [6, 8, 4, 5.5, 1.5, 5, 0],     total: 30 },
        { place: 13, team: "По семейным обстоятельствам",     rounds: [7, 5, 4, 5, 1.5, 6, 1],       total: 29.5 },
        { place: 14, team: "Who knew, как говорится",         rounds: [6, 6, 5, 5.5, 3, 6, -2],      total: 29.5 }
      ]
    }
  },
  {
    date: "2026-09-20", organizer: "Эйнштейн Party", title: "Классика №541_1",
    venue: "OldSchool Pub Маяковская", place: 8, score: 51,
    photoUrl: "https://findquiz.ru/event/einstein-party/photo/344258-klassika-541-1",
    photoThumb: "https://sun9-65.userapi.com/s/v1/ig2/2LY8Yp1VAwZiwokRxVohfoEyjXUBp_MW8g75CXsYUt3Z2OWq4ULmoI11t6wfLVeF3VW6_-eU5sM4SniSepalDBPW.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=640x0",
    results: {
      note: "20 сентября 2026, воскресенье • Old School Pub • Эйнштейн Party — Классика №541_1",
      roundsCount: 8,
      roundLabels: ["ТУР №1", "ТУР №2", "ТУР №3", "ТУР №4", "ТУР №5", "ТУР №6", "ТУР №7", "ТУР КЭП"],
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "OnlyFuns", rounds: [9, 6, 12, 10, 18, 12, 6, 2], total: 75 },
        { place: 2, team: "Первое деепричастие", rounds: [8, 6, 12, 8, 13, 12, 6, 6], total: 71 },
        { place: 3, team: "Алибидерчи", rounds: [10, 5, 12, 7, 18, 12, 4, 2], total: 70 },
        { place: 4, team: "Квиз up", rounds: [8, 6, 12, 6, 3, 12, 6, 2], total: 55 },
        { place: 5, team: "КСББ", rounds: [9, 6, 8, 6, 7, 12, 4, 2], total: 54 },
        { place: 6, team: "Сами своего рода знатоки", rounds: [5, 5, 10, 5, 13, 8, 2, 4], total: 52 },
        { place: 7, team: "Послица, министерский советник и банкир", rounds: [6, 6, 12, 8, 8, 8, 2, 2], total: 52 },
        { place: 8, team: "Генератор неслучайных ответов", rounds: [7, 5, 10, 6, 9, 8, 4, 2], total: 51 },
        { place: 9, team: "Некультурные клетки", rounds: [7, 5, 12, 7, 8, 5, 4, 2], total: 50 },
        { place: 10, team: "69 корочек от пиццы", rounds: [7, 5, 6, 8, 1, 12, 4, 0], total: 43 },
        { place: 11, team: "Кто? Куда? Зачем?", rounds: [7, 6, 6, 6, 3, 8, 4, 2], total: 42 },
        { place: 12, team: "Отдых грибника", rounds: [9, 4, 10, 4, 8, 0, 4, 0], total: 39 },
        { place: 13, team: "Драчливые киски", rounds: [3, 5, 6, 5, 3, 1, 2, 2], total: 27 },
        { place: 14, team: "Шелдон Групп", rounds: [4, 4, 5, 4, 6, 0, 2, 2], total: 27 },
        { place: 15, team: "Один человек", rounds: [7, 4, 2, 4, 5, 2, 2, 0], total: 26 },
        { place: 16, team: "Огородники", rounds: [7, 4, 5, 5, -1, -4, 4, 2], total: 22 },
        { place: 17, team: "Фазенда женская", rounds: [0, 3, 4, 2, 3, 0, 2, 0], total: 14 },
        { place: 18, team: "Фазенда мужская", rounds: [4, 4, 4, 4, -9, 0, 0, 0], total: 7 }
      ]
    },
    results: {
      note: "2026-09-20 • Эйнштейн Party — Классика №541_1 (источник: albertparty.ru/game/28430)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "OnlyFuns", rounds: [9, 6, 12, 10, 18, 12, 6, 2], total: 75 },
      { place: 2, team: "Первое деепричастие", rounds: [8, 6, 12, 8, 13, 12, 6, 6], total: 71 },
      { place: 3, team: "Алибидерчи", rounds: [10, 5, 12, 7, 18, 12, 4, 2], total: 70 },
      { place: 4, team: "Квиз up", rounds: [8, 6, 12, 6, 3, 12, 6, 2], total: 55 },
      { place: 5, team: "КСББ", rounds: [9, 6, 8, 6, 7, 12, 4, 2], total: 54 },
      { place: 6, team: "Сами своего рода знатоки", rounds: [5, 5, 10, 5, 13, 8, 2, 4], total: 52 },
      { place: 7, team: "Послица, министерский советник и банкир", rounds: [6, 6, 12, 8, 8, 8, 2, 2], total: 52 },
      { place: 8, team: "Генератор неслучайных ответов", rounds: [7, 5, 10, 6, 9, 8, 4, 2], total: 51 },
      { place: 9, team: "Некультурные клетки", rounds: [7, 5, 12, 7, 8, 5, 4, 2], total: 50 },
      { place: 10, team: "69 корочек от пиццы", rounds: [7, 5, 6, 8, 1, 12, 4, 0], total: 43 },
      { place: 11, team: "Кто? Куда? Зачем?", rounds: [7, 6, 6, 6, 3, 8, 4, 2], total: 42 },
      { place: 12, team: "Отдых грибника", rounds: [9, 4, 10, 4, 8, 0, 4, 0], total: 39 },
      { place: 13, team: "Драчливые киски", rounds: [3, 5, 6, 5, 3, 1, 2, 2], total: 27 },
      { place: 14, team: "Шелдон Групп", rounds: [4, 4, 5, 4, 6, 0, 2, 2], total: 27 },
      { place: 15, team: "Один человек", rounds: [7, 4, 2, 4, 5, 2, 2, 0], total: 26 },
      { place: 16, team: "Огородники", rounds: [7, 4, 5, 5, -1, -4, 4, 2], total: 22 },
      { place: 17, team: "Фазенда женская", rounds: [0, 3, 4, 2, 3, 0, 2, 0], total: 14 },
      { place: 18, team: "Фазенда мужская", rounds: [4, 4, 4, 4, -9, 0, 0, 0], total: 7 }
      ]
    }
  },

  /* ================= 2026 (август) ================= */
  {
    date: "2026-08-27", organizer: "Квизиум", title: "Азартный #50",
    venue: "O'Donoghue's Pub", place: 3,
    photoUrl: "https://findquiz.ru/event/quizium/photo/343222-azartnyy-50",
    photoThumb: "https://sun9-46.userapi.com/s/v1/ig2/IlrlW-RouGKI2buAIwzBgXV6KnPvK8UEZxQqkIH5AFCoev_DqOPW9dgCbTEV6oDc07lInPXcnRYQlkHWsizQFCtX.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2402x1802&from=bu&cs=640x0"
  },
  {
    date: "2026-08-22", organizer: "Squiz", title: "Игра 1004.1",
    venue: "Liberty", place: 6,
    photoUrl: "https://findquiz.ru/event/squiz/photo/339351-igra-1004-1",
    photoThumb: "https://squiz.ru/storage/v1/object/public/game-photos/f31ee4f4-2019-4485-b080-bb0038d559ca/3488f224-0346-4c46-b00a-923484a95255_thumb.jpg",
    results: {
      note: "22 августа 2026, суббота • Liberty • Squiz #1004.1",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Внутренняя интеллигентность", rounds: [7, 8, 7, 5, 9, 9, 18], total: 63 },
        { place: 2, team: "Халдеев, Налдеев и Пепермалдеев", rounds: [7, 10, 5, 6, 9, 8, 18], total: 63 },
        { place: 3, team: "Здесь - это вам не тут", rounds: [7, 8, 6, 5.5, 9, 9, 18], total: 62.5 },
        { place: 4, team: "OnlyFuns", rounds: [7, 8, 7, 5, 9, 9, 13], total: 58 },
        { place: 5, team: "Тот самый Лев", rounds: [7, 8, 6, 6, 1.5, 8, 18], total: 54.5 },
        { place: 6, team: "Генератор неслучайных ответов", rounds: [7, 7, 6, 4.5, 7.5, 9, 13], total: 54 },
        { place: 7, team: "Сборная Швейцарии", rounds: [6, 9, 5, 5.5, 1.5, 9, 15], total: 51 },
        { place: 8, team: "Более лимения", rounds: [6, 6, 6, 4.5, 4.5, 7, 15], total: 49 },
        { place: 9, team: "Метод тыка", rounds: [5, 6, 6, 5, 7.5, 7, 10], total: 46.5 },
        { place: 10, team: "Запускайте гуся", rounds: [6, 6, 6, 5, 1.5, 8, 13], total: 45.5 },
        { place: 11, team: "Если б мы знали что это такое", rounds: [5, 7, 6, 5.5, 3, 6, 13], total: 45.5 },
        { place: 12, team: "Отдых грибника", rounds: [5, 8, 5, 3.5, 7.5, 8, 8], total: 45 },
        { place: 13, team: "Славик и Даша против всех", rounds: [5, 5, 4, 4, 3, 9, 4], total: 34 },
        { place: 14, team: "Квиздец", rounds: [5, 3, 5, 4.5, 1.5, 8, 6], total: 33 },
        { place: 15, team: "Струя бобра", rounds: [5, 5, 6, 5.5, 3, 8, 0], total: 32.5 },
        { place: 16, team: "Ангелы Бухарли", rounds: [6, 3, 5, 4.5, 3, 7, 2], total: 30.5 },
        { place: 17, team: "Девушки Бонда", rounds: [6, 2, 6, 4.5, 3, 8, 1], total: 30.5 },
        { place: 18, team: "Казашки", rounds: [5, 3, 5, 4.5, 0, 8, 4], total: 29.5 },
        { place: 19, team: "Медиакомики", rounds: [6, 6, 5, 4, 3, 9, -5], total: 28 },
        { place: 20, team: "Ча-ча-чай", rounds: [7, 2, 5, 4, 1.5, 8, -2], total: 25.5 },
        { place: 21, team: "Иллюминаты", rounds: [4, 4, 5, 2.5, 0, 6, 2], total: 23.5 },
        { place: 22, team: "Alpha  team", rounds: [5, 1, 5, 4, 0, 6, 1], total: 22 },
        { place: 23, team: "Король казаков", rounds: [6, 1, 4, 4, 3, 8, -4], total: 22 },
        { place: 24, team: "Бабушкинские ребята", rounds: [0, 3, 3, 5.5, 3, 9, -7], total: 16.5 },
        { place: 25, team: "маленькие", rounds: [6, 2, 1, 3.5, 0, 6, -6], total: 12.5 }
      ]
    }
  },
  {
    date: "2026-08-22", organizer: "GO!Квиз", title: "Назад в СССР (повтор от 12.08)",
    venue: "Пражка", place: 3,
    photoUrl: "https://findquiz.ru/event/go-quiz/photo/341498-nazad-v-sssr-povtor-ot-12-08",
    photoThumb: "https://sun9-6.userapi.com/s/v1/ig2/H9BHevjkFcjl1eDW3AminBS_sDx7IsfuwipcmIYBpxLYm3MOMbn-FE0v-W1fOLwy8z2RwFsJVcJ5kqUxqT13rwZF.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=640x0"
  },

  /* ================= 2026 (июль) ================= */
  {
    date: "2026-07-23", organizer: "Squiz", title: "#996.3",
    venue: "Summer Punch", place: 3,
    photoUrl: "https://squiz.ru/photos/260723-efy",
    photoThumb: "https://squiz.ru/storage/v1/object/public/game-photos/e7e6ad52-90a5-4aba-89d8-30091793273e/fb9d5b35-d80d-4b82-a0b7-212ecad70fe8_thumb.jpg"
  },
  {
    date: "2026-07-18", organizer: "Квизиум", title: "«Обо всём» #889",
    venue: "Lions Head Pub", place: 5,
    photoUrl: "https://findquiz.ru/event/quizium/photo/337161-obo-vsem-889",
    photoThumb: "https://sun9-49.userapi.com/s/v1/ig2/0PZ4MTux_453HSGhe6vbnUJpJifjF-kfU0NF24CA9ctHxLGpWaKH9Q8_yffzV0Trne3YgP8V_u8tJYaCids1g2-5.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=640x0"
  },

  /* ================= 2026 (июнь) ================= */
  {
    date: "2026-06-26", organizer: "Квизиум", title: "«Обо всём» #882",
    venue: "Lions Head Pub", place: 2,
    photoUrl: "https://findquiz.ru/event/quizium/photo/334020-obo-vsem-882",
    photoThumb: "https://sun9-66.userapi.com/s/v1/ig2/eXl9qr2YpdJtaAcbV9pbnRL_rc6m4PejhM9lifSX7D9x3NezCSRAokIKrUL4XcFOEgQYTJiV_sFQKVAAXmadY2ua.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=640x0",
    results: {
      note: "26 июня 2026, пятница • Lion's Head Pub • КВИЗИУМ #882.3",
      roundCount: 8,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1,  team: "Badminton",                     rounds: [6, 5, 4, 3, 4.5, 8, 2, 18],   total: 50.5 },
        { place: 2,  team: "Генератор неслучайных ответов", rounds: [4, 5, 4, 4, 4, 9, 4, 15],     total: 49 },
        { place: 3,  team: "Ползком к победе",              rounds: [5, 5, 6, 3, 3.5, 5, 6, 15],   total: 48.5 },
        { place: 4,  team: "Вот, во мху енот",              rounds: [4, 5, 6, 1, 3, 3, 4, 19],     total: 45 },
        { place: 5,  team: "Тень сырка",                    rounds: [4, 4, 6, 4, 2, 3, 2, 9],      total: 34 },
        { place: 6,  team: "Пупки",                         rounds: [4, 5, 3, 3, 2.5, 3, 0, 12],   total: 32.5 },
        { place: 7,  team: "Кукушка в панике",              rounds: [3, 4, 1, 3, 2, 1, 2, 10],     total: 26 },
        { place: 8,  team: "Серийные убийцы",               rounds: [3, 3, 4, 2, 2, 3, 0, 8],      total: 25 },
        { place: 9,  team: "РАНЕЕ",                         rounds: [2, 4, 4, 1, 1.5, 1, 0, 11],   total: 24.5 },
        { place: 10, team: "Бумсланг в тунике",             rounds: [3, 3, 3, 1, 0.5, 5, 0, 9],    total: 24.5 },
        { place: 11, team: "Подлизы от Лизы",               rounds: [1, 3, 2, 1, 1.5, 6, 0, 9],    total: 23.5 },
        { place: 12, team: "Зайчатки разума",               rounds: [1, 1, 2, 3, 2, 8, 0, 3],      total: 20 },
        { place: 13, team: "ДАЛЕЕ",                         rounds: [4, 3, 2, 4, 1.5, 0, 0, 5],    total: 19.5 },
        { place: 14, team: "Игры и смыслы",                 rounds: [4, 1, 1, 3, 2.5, 3, 0, 4],    total: 18.5 }
      ]
    }
  },
  {
    date: "2026-06-20", organizer: "Квизиум", title: "«Обо всём» #881",
    venue: "The Tipsy Pub", place: 2,
    photoUrl: "https://findquiz.ru/event/quizium/photo/333524-obo-vsem-881",
    photoThumb: "https://sun9-83.userapi.com/s/v1/ig2/VcBvI6PdIsGyCPdV77euImr6LmJ7EVKspg6sV9IX84Rw1fptr4sQ3mvc5B2oVHl-pQ10gwTDABIoNs4uQJap_GeP.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=640x0",
    results: {
      note: "20 июня 2026, суббота • The Tipsy Pub • КВИЗИУМ #881.2",
      roundCount: 8,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1,  team: "Badminton",                     rounds: [5, 6, 6, 5, 3.5, 6, 6, 16],   total: 53.5 },
        { place: 2,  team: "Генератор неслучайных ответов", rounds: [6, 5, 4, 4, 3.5, 10, 2, 16],   total: 50.5 },
        { place: 3,  team: "Дураков. net",                  rounds: [6, 6, 6, 4, 2, 9, 2, 15],     total: 50 },
        { place: 4,  team: "Мама сказала, что я умный",     rounds: [4, 6, 5, 5, 4.5, 6, 2, 14],   total: 46.5 },
        { place: 5,  team: "Будьте бобры",                  rounds: [6, 6, 2, 4, 3.5, 6, 4, 12],   total: 43.5 },
        { place: 6,  team: "Лос бандитос",                  rounds: [4, 6, 5, 3, 4, 3, 2, 14],     total: 41 },
        { place: 7,  team: "Мозги в кубе",                  rounds: [4, 5, 4, 4, 1.5, 7, 2, 13],   total: 40.5 },
        { place: 8,  team: "Масонская ложачка",             rounds: [4, 5, 6, 2, 3.5, 7, 4, 9],    total: 40.5 },
        { place: 9,  team: "Якоря не бросать",              rounds: [4, 5, 4, 2, 2.5, 3, 0, 15],   total: 35.5 },
        { place: 10, team: "Близкие",                       rounds: [5, 4, 1, 2, 2.5, 7, 0, 12],   total: 33.5 },
        { place: 11, team: "Первые с конца",                rounds: [3, 3, 1, 1, 2.5, 2, 2, 9],    total: 23.5 },
        { place: 12, team: "ХиХимики",                      rounds: [4, 2, 2, 2, 0.5, 0, 0, 11],   total: 21.5 },
        { place: 13, team: "Даня в малине",                 rounds: [6, 2, 2, 0, 3, 0, 0, 6],      total: 19 }
      ]
    }
  },
  {
    date: "2026-06-07", organizer: "Эйнштейн Party", title: "Классика №526_1",
    venue: "OldSchool Pub Маяковская", place: 11, score: 47,
    photoUrl: "https://findquiz.ru/event/einstein-party/photo/330755-klassika-526-1",
    photoThumb: "",
    results: {
      note: "2026-06-07 • Эйнштейн Party — Классика №526_1 (источник: albertparty.ru/game/27052)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "OnlyFuns", rounds: [10, 6, 12, 9, 15, 12, 2, 6], total: 72 },
      { place: 2, team: "Немолодые ветра", rounds: [10, 6, 12, 9, 6, 12, 4, 6], total: 65 },
      { place: 3, team: "Голландские рулевые", rounds: [9, 5, 10, 8, 9, 8, 4, 6], total: 59 },
      { place: 4, team: "Некие", rounds: [9, 4, 10, 6, 15, 4, 4, 6], total: 58 },
      { place: 5, team: "Послица, министерский советник и банкир", rounds: [7, 5, 8, 9, 9, 8, 4, 6], total: 56 },
      { place: 6, team: "Новая кассета Малежика", rounds: [8, 4, 10, 7, 15, 4, 2, 4], total: 54 },
      { place: 7, team: "Алибидерчи", rounds: [10, 6, 12, 10, 0, 12, 2, 2], total: 54 },
      { place: 8, team: "Небеса и блинчик", rounds: [7, 5, 10, 7, 10, 4, 6, 4], total: 53 },
      { place: 9, team: "Velochicks", rounds: [8, 5, 6, 8, 10, 8, 2, 4], total: 51 },
      { place: 10, team: "Сами своего рода знатоки", rounds: [9, 5, 10, 8, 9, -4, 6, 4], total: 47 },
      { place: 11, team: "Генератор неслучайных ответов", rounds: [9, 4, 10, 7, 7, 4, 2, 4], total: 47 },
      { place: 12, team: "Mortal Combat", rounds: [8, 3, 9, 6, 9, 0, 4, 4], total: 43 },
      { place: 13, team: "Пупка за Лупку", rounds: [6, 5, 6, 6, 12, -4, 0, 4], total: 35 },
      { place: 14, team: "Липецкая Мафия", rounds: [5, 5, 4, 5, 8, 4, 4, 0], total: 35 },
      { place: 15, team: "Кот и Ученый", rounds: [7, 4, 9, 5, 9, 0, 0, 0], total: 34 },
      { place: 16, team: "Два в уме", rounds: [6, 4, 4, 5, 9, 2, 2, 0], total: 32 },
      { place: 17, team: "Делириа", rounds: [6, 5, 6, 6, 6, 0, 2, 0], total: 31 },
      { place: 18, team: "Двое в лодке и питомец", rounds: [5, 3, 4, 6, 3, 3, 2, 2], total: 28 },
      { place: 19, team: "CUMьюнити триперов", rounds: [5, 2, 4, 6, -3, 4, 4, 0], total: 22 }
      ]
    }
  },

  /* ================= 2026 (май) ================= */
  {
    date: "2026-05-23", organizer: "Квизиум", title: "«Обо всём» [Новички] #873",
    venue: "Lions Head Pub", place: 4,
    photoUrl: "https://findquiz.ru/event/quizium/photo/329374-obo-vsem-novichki-873",
    photoThumb: ""
  },
  {
    date: "2026-05-16", organizer: "GO!Квиз", title: "Классика_353.1",
    venue: "Пражка", place: 3,
    photoUrl: "https://findquiz.ru/event/go-quiz/photo/326584-klassika-353-1",
    photoThumb: "https://sun9-39.userapi.com/s/v1/ig2/ILySU_hahdMarttbSF2fXb1S8U27reEbBbPnEeHzjbzweHRZIC8av8PhWo1cE79V6g5koVMiV9MiujLdhxNJL4rY.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x426,720x480,1080x720,1280x853,1440x960,2560x1706&from=bu&cs=640x0",
    results: {
      note: "16 мая 2026, суббота • Пражка • GO!Квиз Классика_353.1",
      rounds: 7,
      roundLabels: ["РАУНД 1", "РАУНД 2", "РАУНД 3", "РАУНД 4", "РАУНД 5", "РАУНД 6", "РАУНД 7"],
      teamName: "Генератор неслучайных ответов",
      standings: [
        { place: 1, name: "Меньше думаем", scores: [7, 6, 5, 3, 12, 3, 13], total: 49 },
        { place: 2, name: "Moonlight", scores: [6, 2, 5, 4, 10, 3, 17], total: 47 },
        { place: 3, name: "Генератор неслучайных ответов", scores: [7, 3, 5, 2, 12, 1, 15], total: 45 },
        { place: 4, name: "Катька и ко", scores: [7, 3, 5, 3, 12, 1, 11], total: 42 },
        { place: 5, name: "Новый курс", scores: [7, 1, 6, 3, 8, 1, 13], total: 39 },
        { place: 6, name: "Полли хочет пряник", scores: [7, 2, 4, 3, 12, -2, 11], total: 37 },
        { place: 7, name: "Общество безответственности", scores: [7, 3, 5, 3, 12, -2, 8], total: 36 },
        { place: 8, name: "Сила безумия", scores: [7, 5, 5, 2, 8, 1, 1], total: 29 },
        { place: 9, name: "[Поколение X:Y:Z]", scores: [8, 1, 3, 2, 9, 0, 4], total: 27 },
        { place: 10, name: "Дивергент", scores: [6, 1, 2, 2, 5, 1, 1], total: 18 },
        { place: 11, name: "Тамбовские", scores: [3, 0, 0, 1, 2, 0, 1], total: 7 }
      ]
    }
  },
  {
    date: "2026-05-01", organizer: "Квизиум", title: "«Обо всём» #866",
    venue: "The Tipsy Pub", place: 6,
    photoUrl: "https://findquiz.ru/event/quizium/photo/325356-obo-vsem-866",
    photoThumb: "https://sun9-8.userapi.com/s/v1/ig2/oj9_YALzQQB0Pxbl3eGrsx_l1qAl8NJS7UM99yDQUtZE6yaAVGEqpAS_xsqqWrQynicH97BcUNahK5smSmWJdM2k.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=640x0",
    results: {
      note: "01 мая 2026, пятница • The Tipsy Pub • КВИЗИУМ #866.3",
      roundCount: 8,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Лёд", rounds: [6, 5, 4, 6, 5, 9, 4, 14], total: 53 },
        { place: 2, team: "#sorgutum", rounds: [6, 5, 6, 2, 4, 9, 6, 12], total: 50 },
        { place: 3, team: "Космонавты", rounds: [5, 5, 4, 4, 3, 8, 6, 14], total: 49 },
        { place: 4, team: "Желтый гуталин", rounds: [6, 4, 5, 2, 4.5, 10, 4, 13], total: 48.5 },
        { place: 5, team: "Братство Квизца", rounds: [4, 5, 4, 4, 4, 9, 4, 11], total: 45 },
        { place: 6, team: "Генератор неслучайных ответов", rounds: [5, 5, 4, 3, 2, 4, 8, 9], total: 40 },
        { place: 7, team: "КСК и ЧК", rounds: [4, 6, 4, 1, 3, 4, 6, 11], total: 39 },
        { place: 8, team: "Орбит без сахара", rounds: [3, 5, 2, 3, 3.5, 8, 4, 8], total: 36.5 },
        { place: 9, team: "Фантастические твари", rounds: [5, 5, 4, 2, 2, 3, 2, 12], total: 35 },
        { place: 10, team: "Игристая семья", rounds: [5, 4, 4, 4, 3.5, 5, 4, 5], total: 34.5 },
        { place: 11, team: "Два капитана", rounds: [3, 5, 2, 4, 2.5, 4, 4, 9], total: 33.5 },
        { place: 12, team: "Несвятая троица", rounds: [3, 3, 1, 2, 2, 4, 2, 7], total: 24 },
        { place: 13, team: "Хотим шампанское!", rounds: [2, 3, 1, 2, 1, 0, 4, 1], total: 14 },
        { place: 14, team: "У команды нет имени", rounds: [2, 3, 3, 1, 0.5, 1, 2, 1], total: 13.5 },
        { place: 15, team: "Гармония", rounds: [2, 2, 0, 2, 2, 1, 0, 0], total: 9 }
      ]
    }
  },

  /* ================= 2026 (апрель) ================= */
  {
    date: "2026-04-30", organizer: "Эйнштейн Party", title: "FUN #359_2",
    venue: "Lions Head Pub", place: 13, score: 47.5,
    photoUrl: "https://findquiz.ru/event/einstein-party/photo/320190-fun-359-2",
    photoThumb: "https://sun9-84.userapi.com/s/v1/ig2/PhJ-CAgJpLLUvRtkCpC_eflADByktQpB4y-ZcPKz81PlkxqVqcWOrhj2YoB9Y4URnrGaxcfOr7HpFt8PqF5rBms9.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920&from=bu&cs=640x0",
    results: {
      note: "2026-04-30 • Эйнштейн Party — FUN #359_2 (источник: albertparty.ru/game/26162)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Послица, министерский советник и банкир", rounds: [6, 6, 5, 4.5, 6, 12, 12, 5], total: 56.5 },
      { place: 2, team: "мАшины машИны", rounds: [5, 6, 6, 4.5, 6, 12, 12, 4.5], total: 56 },
      { place: 3, team: "Мы из Гуглича", rounds: [6, 6, 5, 4.5, 5, 12, 12, 5], total: 55.5 },
      { place: 4, team: "4 черненьких чумазеньких чертёнка", rounds: [5, 6, 5, 4, 6, 12, 12, 5], total: 55 },
      { place: 5, team: "Вялые питоны", rounds: [6, 6, 4, 4.5, 5, 12, 12, 5], total: 54.5 },
      { place: 6, team: "ДжиПиТим", rounds: [5, 6, 4, 4.5, 5, 12, 12, 4], total: 52.5 },
      { place: 7, team: "Tea party muting", rounds: [5, 6, 6, 5, 5, 12, 8, 5], total: 52 },
      { place: 8, team: "Корица", rounds: [4, 5, 4, 4.5, 5, 12, 12, 5], total: 51.5 },
      { place: 9, team: "Галина, бланки!", rounds: [4, 6, 6, 4.5, 6, 12, 8, 5], total: 51.5 },
      { place: 10, team: "Рогатые трупоеды", rounds: [4, 5, 5, 5, 2, 12, 12, 5], total: 50 },
      { place: 11, team: "Лунный свет", rounds: [5, 6, 4, 4.5, 5, 12, 10, 3], total: 49.5 },
      { place: 12, team: "Руст и Ко", rounds: [5, 5, 3, 4.5, 6, 12, 8, 5], total: 48.5 },
      { place: 13, team: "Генератор неслучайных ответов", rounds: [5, 6, 3, 4, 5, 12, 8, 4.5], total: 47.5 },
      { place: 14, team: "Море Лаптевых", rounds: [5, 5, 5, 4, 5, 12, 7, 3.5], total: 46.5 },
      { place: 15, team: "Risk Decisions", rounds: [5, 6, 5, 4, 5, 12, 4, 5], total: 46 },
      { place: 16, team: "Отсортированные", rounds: [5, 4, 4, 3.5, 6, 12, 8, 3.5], total: 46 },
      { place: 17, team: "Случайная встреча", rounds: [4, 5, 3, 5, 5, 10, 10, 3], total: 45 },
      { place: 18, team: "АПЧХИ!", rounds: [4, 4, 2, 1.5, 3, 12, 9, 3.5], total: 39 },
      { place: 19, team: "Юпитер в 5 доме", rounds: [5, 5, 2, 4, 5, 12, 3, 3], total: 39 },
      { place: 20, team: "Тропические пингвины", rounds: [5, 6, 2, 4, 3, 10, 7, 2], total: 39 },
      { place: 21, team: "Мешки с песком", rounds: [5, 5, 4, 2, 6, 12, 3, 2], total: 39 },
      { place: 22, team: "Apple Pie", rounds: [5, 5, 4, 4, 4, 8, 5, 3.5], total: 38.5 },
      { place: 23, team: "Афарсек", rounds: [4, 5, 4, 4, 5, 9, 4, 1.5], total: 36.5 },
      { place: 24, team: "Лексиконовая долина", rounds: [4, 5, 3, 2, 6, 12, 0, 3.5], total: 35.5 },
      { place: 25, team: "Педанты", rounds: [2, 3, 1, 1.5, 4, 5, 1, 1], total: 18.5 }
      ]
    }
  },
  {
    date: "2026-04-18", organizer: "Квизиум", title: "«Обо всём» #863",
    venue: "Lions Head Pub", place: 4,
    photoUrl: "https://findquiz.ru/event/quizium/photo/324118-obo-vsem-863",
    photoThumb: "https://sun9-2.userapi.com/s/v1/ig2/HIYFhMCO2VOxeuKkEW11NnC32gXOyY8pyyiRbdeJZmK0XhtI528HO7VpKXy0IvHk_wkDysR-lwiHRl3jqggj42GU.jpg?quality=95&as=32x40,48x60,72x90,108x135,160x200,240x300,360x450,480x600,540x675,640x800,720x900,1080x1350,1280x1600,1440x1800,1592x1990&from=bu&cs=640x0",
    results: {
      note: "18 апреля 2026, суббота • Lion's Head Pub • КВИЗИУМ #863.2",
      roundCount: 8,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1,  team: "Badminton",                       rounds: [5, 6, 6, 6, 4, 8, 6, 16],     total: 57 },
        { place: 2,  team: "Каферейсеры",                     rounds: [5, 5, 1, 5, 5, 11, 6, 12],    total: 50 },
        { place: 3,  team: "Немолодые ветра",                 rounds: [6, 6, 6, 3, 3, 3, 4, 14],     total: 45 },
        { place: 4,  team: "Генератор неслучайных ответов",   rounds: [4, 5, 1, 4, 4, 6, 6, 13],     total: 43 },
        { place: 5,  team: "Геронтофилы",                     rounds: [3, 5, 3, 1, 3.5, 7, 4, 15],   total: 41.5 },
        { place: 6,  team: "Молью Поязанные",                 rounds: [6, 6, 3, 4, 3, 6, 0, 11],     total: 39 },
        { place: 7,  team: "СерокСюшеСветоНастеЭмилеАндрей",  rounds: [5, 5, 2, 4, 3.5, 7, 0, 11],   total: 37.5 },
        { place: 8,  team: "Пришли за пивом, а тут вопросы.", rounds: [3, 6, 3, 3, 3, 8, 0, 9],      total: 35 },
        { place: 9,  team: "Невыразимый космический ужас",    rounds: [5, 4, 2, 2, 3.5, 6, 2, 10],   total: 34.5 },
        { place: 10, team: "Кукушка в панике",                rounds: [4, 4, 2, 5, 4, 5, 4, 5],      total: 33 },
        { place: 11, team: "Широкая на широкую",              rounds: [4, 4, 3, 4, 3.5, 6, 0, 8],    total: 32.5 },
        { place: 12, team: "Шумелка мышь",                    rounds: [4, 5, 6, 3, 3, 4, 4, 1],      total: 30 },
        { place: 13, team: "Меаniеs",                         rounds: [4, 5, 2, 0, 2.5, 2, 4, 9],    total: 28.5 },
        { place: 14, team: "Ленивцы+",                        rounds: [4, 4, 2, 3, 3, 3, 0, 9],      total: 28 },
        { place: 15, team: "Homo Scutiens",                   rounds: [5, 4, 1, 3, 2.5, 3, 0, 7],    total: 25.5 },
        { place: 16, team: "Не корову проигрываем",           rounds: [5, 2, 4, 3, 2.5, 2, 0, 7],    total: 25.5 },
        { place: 17, team: "Блестящие",                       rounds: [4, 3, 2, 3, 2, 5, 0, 6],      total: 25 },
        { place: 18, team: "Уральские пельмени",              rounds: [4, 1, 0, 2, 2.5, 0, 2, 2],    total: 13.5 },
        { place: 19, team: "Маркис де Коте",                  rounds: [4, 2, 1, 1, 1.5, 3, 0, 1],    total: 13.5 }
      ]
    }
  },
  {
    date: "2026-04-12", organizer: "Квизиум", title: "«Обо всём» #861",
    venue: "Lions Head Pub", place: null, photoUrl: "", photoThumb: ""
  },

  /* ================= 2026 (март) ================= */
  {
    date: "2026-03-26", organizer: "ИГРА", title: "ИГРА #45",
    venue: "Temple Bar", place: null, photoUrl: "", photoThumb: ""
  },
  {
    date: "2026-03-14", organizer: "Квизиум", title: "Азартный [Новички] #46",
    venue: "Lions Head Pub", place: 4, photoUrl: "", photoThumb: ""
  },

  /* ================= 2026 (февраль) ================= */
  {
    date: "2026-02-28", organizer: "ИГРА", title: "ИГРА #40.2",
    venue: "Perepel", place: 9,
    photoUrl: "https://findquiz.ru/event/thegame/photo/317529-igra-40-2",
    photoThumb: "https://sun9-46.userapi.com/s/v1/ig2/hSZzJsFXMGl2TnU8sWdwwlUp_uQkxXhDGw-6XFcIOls0H5_9pE-zlsIc-o3VyjmW0UZOZeFXpdT6-YrVJYQsYQjD.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x426,720x480,1080x720,1280x853,1440x960,2560x1706&from=bu&cs=640x0",
    results: {
      note: "28 февраля 2026, суббота • Perepel • ИГРА #40.2",
      roundLabels: ["Тур 1", "Тур 2", "Тур 3", "Тур 4", "Тур 5", "Тур 6", "Тур 7"],
      team: "Генератор НЕСЛУЧАЙНЫХ ответов",
      standings: [
        { place: 1, team: "Эль Шмель", rounds: [80, 120, 70, 140, 80, 120, 230], total: 840 },
        { place: 2, team: "Собрались внезапно", rounds: [70, 120, 70, 140, 80, 100, 190], total: 770 },
        { place: 3, team: "Мокрый трансформатор", rounds: [90, 100, 70, 160, 85, 100, 150], total: 755 },
        { place: 4, team: "Внутренняя интеллигентность", rounds: [80, 120, 80, 100, 75, 120, 140], total: 715 },
        { place: 5, team: "Отказной гамбит бельгийского Шлёпы", rounds: [95, 100, 60, 120, 75, 120, 130], total: 700 },
        { place: 6, team: "Ворон", rounds: [90, 120, 30, 140, 55, 100, 160], total: 695 },
        { place: 7, team: "Нашатырь", rounds: [100, 120, 30, 140, 65, 100, 140], total: 695 },
        { place: 8, team: "Ближневосточный гектар", rounds: [60, 120, 50, 140, 70, 100, 140], total: 680 },
        { place: 9, team: "Генератор НЕСЛУЧАЙНЫХ ответов", rounds: [80, 120, 30, 100, 65, 120, 150], total: 665 },
        { place: 10, team: "Весенние салаты", rounds: [70, 20, 10, 120, 90, 120, 130], total: 560 },
        { place: 11, team: "Чертов Тупица Джонсон", rounds: [70, 100, 50, 120, 60, 100, 60], total: 560 },
        { place: 12, team: "69 корочек от пиццы", rounds: [65, 100, 40, 120, 45, 100, 80], total: 550 },
        { place: null, team: "ChatGPT", rounds: [75, 80, 70, 100, 60, 60, 60], total: 505 },
        { place: 13, team: "Брокколи", rounds: [75, 100, 20, 120, 65, 40, 70], total: 490 },
        { place: 14, team: "Твой котик", rounds: [80, 80, 20, 40, 80, 80, 90], total: 470 },
        { place: 15, team: "Компот", rounds: [30, 20, 30, 40, 25, 100, 80], total: 325 },
        { place: 16, team: "Лихие Ответчики", rounds: [70, 40, 20, 100, 40, 40, -10], total: 300 }
      ]
    }
  },
  {
    date: "2026-02-23", organizer: "Квизиум", title: "«Обо всём» #847",
    venue: "The Tipsy Pub", place: 5, photoUrl: "", photoThumb: ""
  },
  {
    date: "2026-02-14", organizer: "Квизиум", title: "«Обо всём» #845",
    venue: "Lions Head Pub", place: 5, photoUrl: "", photoThumb: ""
  },

  /* ================= 2026 (январь) ================= */
  {
    date: "2026-01-31", organizer: "Квизиум", title: "«Обо всём» #841",
    venue: "The Tipsy Pub", place: 3, photoUrl: "", photoThumb: ""
  },
  {
    date: "2026-01-31", organizer: "Квизиум", title: "«Обо всем» [Новички] #841",
    venue: "Жажда", place: 3, photoUrl: "", photoThumb: ""
  },

  /* ================= 2026 (июнь) — Суперигра ================= */
  {
    date: "2026-06-30", organizer: "Квизиум", title: "Супер игра",
    venue: "The Tipsy Pub & O'Donoghue's", place: 23,
    photoUrl: "https://vk.ru/album-147697500_311381147",
    photoThumb: "https://sun9-6.vkuserphoto.ru/s/v1/ig2/XV8PnfVuP6n_XFhGasW9Agb-Gs03N-Zsus_zW85rXzvNFSuV8ykYQ0gcKvaPSxJ8riJiLea_r2eX5fPsNdYbV0y7.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
    results: {
      note: "30 июня 2026, вторник • The Tipsy Pub & O'Donoghue's • КВИЗИУМ • СУПЕР ИГРА",
      roundCount: 8,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1,  team: "Завтрак у Кролика",                rounds: [4, 5, 7.5, 5, 4, 10, 6, 17],   total: 58.5 },
        { place: 2,  team: "Вот, во мху енот",                 rounds: [5, 6, 7.5, 5, 4.5, 10, 6, 14], total: 58 },
        { place: 3,  team: "Новая кассета Малежика",           rounds: [5, 6, 6, 4, 4, 7, 8, 17],      total: 57 },
        { place: 4,  team: "Badminton",                        rounds: [4, 5, 6, 4, 3.5, 9, 6, 18],    total: 55.5 },
        { place: 5,  team: "Волшебный пендельтюр",             rounds: [4, 5, 6, 4, 3.5, 10, 6, 13],   total: 51.5 },
        { place: 6,  team: "Запись дубля",                     rounds: [4, 6, 2.5, 5, 3.5, 11, 2, 13], total: 47 },
        { place: 7,  team: "Ползком к победе",                 rounds: [2, 4, 2.5, 4, 4.5, 7, 4, 18],  total: 46 },
        { place: 8,  team: "Возвращение Жирослава",            rounds: [4, 3, 6, 3, 4, 8, 4, 14],      total: 46 },
        { place: 9,  team: "Булочки в животе",                 rounds: [2, 4, 7.5, 5, 3, 10, 2, 12],   total: 45.5 },
        { place: 10, team: "Летом в баре Светофор",            rounds: [1, 4, 6, 5, 3.5, 10, 4, 10],   total: 43.5 },
        { place: 11, team: "Тупайи",                           rounds: [4, 3, 1.5, 4, 3.5, 9, 4, 13],  total: 42 },
        { place: 12, team: "На боЛИДЕ Рысь",                   rounds: [2, 2, 2, 4, 2.5, 9, 4, 13],    total: 38.5 },
        { place: 13, team: "Наутилус",                         rounds: [3, 4, 1.5, 3, 3, 6, 4, 12],    total: 36.5 },
        { place: 14, team: "Быка за рога",                     rounds: [3, 2, 1.5, 3, 3, 9, 4, 11],    total: 36.5 },
        { place: 15, team: "Повелители Шаров",                 rounds: [1, 3, 6, 4, 2.5, 7, 2, 10],    total: 35.5 },
        { place: 16, team: "1С:Рагнарёк",                      rounds: [3, 3, 2, 3, 5, 8, 2, 9],       total: 35 },
        { place: 17, team: "Котики",                           rounds: [4, 3, 1.5, 4, 2, 8, 0, 12],    total: 34.5 },
        { place: 18, team: "Запасной состав Вягры",            rounds: [0, 3, 1.5, 4, 3, 8, 4, 11],    total: 34.5 },
        { place: 19, team: "Ковчег",                           rounds: [2, 3, 1, 4, 3, 8, 2, 11],      total: 34 },
        { place: 20, team: "Мои друзья и другие звери",        rounds: [4, 3, 1, 4, 3, 9, 2, 8],       total: 34 },
        { place: 21, team: "ПальцемВНебо",                     rounds: [3, 3, 2, 4, 4, 8, 4, 5],       total: 33 },
        { place: 22, team: "Низкий IQ",                        rounds: [2, 3, 6, 1, 2.5, 3, 6, 9],     total: 32.5 },
        { place: 23, team: "Генератор неслучайных ответов",    rounds: [4, 4, 2, 4, 2.5, 3, 2, 9],     total: 30.5 },
        { place: 24, team: "Пёс да Лис",                       rounds: [5, 1, 1, 3, 4, 6, 2, 6],       total: 28 },
        { place: 25, team: "Стивен сигнал, прыгал, ногу поломал", rounds: [2, 1, 3, 4, 2, 6, 2, 4],    total: 24 }
      ]
    }
  },

  /* ================= 2025 (декабрь) ================= */
  {
    date: "2025-12-30", organizer: "Эйнштейн Party", title: "Классика №503_3",
    venue: "Lions Head Pub", place: 2, score: 72, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-12-30 • Эйнштейн Party — Классика №503_3 (источник: albertparty.ru/game/24307)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Задняя шкаторина", rounds: [10, 5, 12, 8, 18, 12, 4, 6], total: 75 },
      { place: 2, team: "Генератор неслучайных ответов", rounds: [10, 5, 12, 8, 15, 12, 4, 6], total: 72 },
      { place: 3, team: "Ночной Кошмар", rounds: [9, 5, 12, 9, 18, 8, 6, 4], total: 71 },
      { place: 4, team: "Eine Hälfte des Kleinbusses", rounds: [10, 5, 10, 7, 18, 4, 6, 6], total: 66 },
      { place: 5, team: "Ни к чему не обязанные", rounds: [9, 5, 10, 6, 15, 8, 4, 6], total: 63 },
      { place: 6, team: "Сова на глобусе", rounds: [7, 2, 4, 7, 18, 8, 6, 6], total: 58 },
      { place: 7, team: "Маршрут построен", rounds: [8, 5, 9, 7, 15, 4, 6, 2], total: 56 },
      { place: 8, team: "Очень дальние родственники", rounds: [9, 3, 8, 5, 12, 4, 6, 4], total: 51 },
      { place: 9, team: "Дочки-матери", rounds: [7, 4, 4, 9, 12, 4, 6, 4], total: 50 },
      { place: 10, team: "Трутовик Трудовика", rounds: [5, 6, 4, 9, 9, 8, 4, 4], total: 49 },
      { place: 11, team: "Сомнительно, но окэй", rounds: [7, 5, 8, 6, 12, 3, 4, 4], total: 49 },
      { place: 12, team: "Геннадий Геннадьевич", rounds: [8, 2, 6, 9, 9, 3, 4, 6], total: 47 },
      { place: 13, team: "Успехов Даниил", rounds: [5, 5, 7, 6, 11, 4, 6, 2], total: 46 },
      { place: 14, team: "CerebroBonito", rounds: [7, 2, 5, 8, 6, 8, 6, 2], total: 44 },
      { place: 15, team: "Номер 5", rounds: [6, 3, 3, 8, 6, 4, 6, 4], total: 40 },
      { place: 16, team: "3 хача и пури", rounds: [7, 3, 3, 6, 12, -6, 4, 6], total: 35 },
      { place: 17, team: "Завтра Новый год!", rounds: [5, 3, 3, 8, 9, 3, 2, 2], total: 35 },
      { place: 18, team: "Это 100%", rounds: [4, 1, 5, 7, 7, 3, 4, 2], total: 33 },
      { place: 19, team: "Некогда думать!", rounds: [3, 2, 4, 7, 3, 4, 6, 2], total: 31 },
      { place: 20, team: "Кухххня", rounds: [4, 3, 3, 2, 5, 0, 2, 2], total: 21 },
      { place: 21, team: "ПРИС", rounds: [4, 0, 1, 5, 4, 0, 2, 4], total: 20 }
      ]
    }
  },
  {
    date: "2025-12-18", organizer: "Квизиум", title: "«Обо всём» #828",
    venue: "The Tipsy Pub", place: 9,
    photoUrl: "https://findquiz.ru/event/quizium/photo/305260-obo-vsem-828",
    photoThumb: "",
    results: {
      note: "18 декабря 2025, четверг • The Tipsy Pub • КВИЗИУМ #828",
      roundCount: 8,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1,  team: "Завтрак у Кролика",          rounds: [5, 5, 6, 6, 4, 12, 6, 19],  total: 63 },
        { place: 2,  team: "Не айтишники",               rounds: [6, 4, 6, 5, 3, 10, 6, 17],  total: 57 },
        { place: 3,  team: "А нам всё равно",            rounds: [6, 5, 6, 3, 2.5, 9, 6, 13], total: 50.5 },
        { place: 4,  team: "Работнички",                 rounds: [6, 5, 2, 4, 2.5, 8, 2, 17], total: 46.5 },
        { place: 5,  team: "Тупик Развития",             rounds: [5, 4, 6, 4, 2.5, 7, 6, 12], total: 46.5 },
        { place: 6,  team: "Непостоянная переменная",    rounds: [6, 4, 6, 3, 3, 9, 4, 11],   total: 46 },
        { place: 7,  team: "Всей жизни",                 rounds: [6, 4, 6, 3, 3.5, 7, 4, 12], total: 45.5 },
        { place: 8,  team: "TopModel",                   rounds: [6, 3, 6, 3, 3, 4, 6, 14],   total: 45 },
        { place: 9,  team: "Генератор неслучайных ответов", rounds: [6, 6, 2, 1, 2.5, 10, 4, 13], total: 44.5 },
        { place: 10, team: "WinRAR",                     rounds: [6, 3, 4, 1, 2, 3, 2, 15],   total: 36 },
        { place: 11, team: "Без Б",                      rounds: [5, 3, 2, 1, 1.5, 9, 2, 12], total: 35.5 },
        { place: 12, team: "Колени Газманова",           rounds: [6, 2, 0, 5, 3.5, 2, 2, 13], total: 33.5 },
        { place: 13, team: "Не 18 мне уже)",             rounds: [6, 0, 0, 4, 1.5, 2, 0, 9],  total: 22.5 },
        { place: 14, team: "Be Sirius",                  rounds: [4, 1, 4, 5, 1, 2, 2, 11],   total: 30 }
      ]
    }
  },
  {
    date: "2025-05-19", organizer: "Мозгва", title: "Зачетная 931 День 2",
    venue: "Коктейль Холл", place: 16,
    photoUrl: "https://findquiz.ru/event/mozgva/photo/302078-zachetnaya-931-den-2",
    photoThumb: "https://sun9-53.userapi.com/s/v1/ig2/D2wc_zGlQpPQL6XVndpqEhWt6odz3ykw6ZIWtp8UnDzde7p_H8cF5edsGfSxIQKGLFXt_VHI0dGR9WugO1YKh2oq.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=640x0",
    results: {
      note: "19 мая 2025, понедельник • Коктейль Холл (Тверская 6с2) • Мозгва, Зачетная 931 День 2",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Привет, Олимпийский!", rounds: [6, 6, 6, 9, 6, 6, 10], total: 49 },
        { place: 2, team: "Немолодые ветра", rounds: [6, 5, 6, 9, 6, 6, 8], total: 46 },
        { place: 3, team: "Кремень монолита", rounds: [6, 5, 6, 6, 6, 6, 8], total: 43 },
        { place: 4, team: "Метод_Тыка", rounds: [6, 5, 6, 3, 6, 6, 10], total: 42 },
        { place: 5, team: "Нострадамус Предсказамус", rounds: [6, 5, 6, 0, 6, 6, 11], total: 40 },
        { place: 6, team: "Два каштана", rounds: [6, 5, 5, 3, 6, 6, 8], total: 39 },
        { place: 7, team: "Сады Мельдония", rounds: [6, 4, 5, 1, 4, 6, 10], total: 36 },
        { place: 8, team: "Можно не надо", rounds: [5, 6, 5, 3, 4, 6, 7], total: 36 },
        { place: 9, team: "Танчики и кабанчики", rounds: [6, 3, 5, 4, 6, 2, 8], total: 34 },
        { place: 10, team: "Музыкалити", rounds: [6, 4, 5, 3, 3, 5, 8], total: 34 },
        { place: 11, team: "Жмых моей совести", rounds: [6, 4, 5, 0, 5, 3, 10], total: 33 },
        { place: 12, team: "Tea and chairs", rounds: [5, 6, 5, 0, 4, 4, 9], total: 33 },
        { place: 13, team: "69 корочек от пиццы", rounds: [6, 3, 5, 6, 3, 5, 4], total: 32 },
        { place: 14, team: "Жены Пикассо", rounds: [6, 5, 3, 6, 4, 3, 3], total: 30 },
        { place: 15, team: "Слуби_Ду", rounds: [3, 5, 5, 4, 4, 1, 7], total: 29 },
        { place: 16, team: "Генератор неслучайных ответов", rounds: [6, 5, 5, 0, 4, 3, 6], total: 29 },
        { place: 17, team: "Трим и шасси", rounds: [4, 3, 6, 0, 4, 3, 6], total: 26 },
        { place: 18, team: "Вокруг Светы", rounds: [3, 3, 4, -2, 4, 4, 6], total: 22 },
        { place: 19, team: "Дети шпионов 3D", rounds: [5, 4, 5, 0, 4, 3, 0], total: 21 },
        { place: 20, team: "СВЕТАголики", rounds: [3, 2, 4, -4, 3, 2, 8], total: 18 },
        { place: 21, team: "Дугг", rounds: [2, 1, 4, 0, 4, 1, 6], total: 18 },
        { place: 22, team: "Рыба-дракон", rounds: [5, 2, 0, 0, 4, 3, 4], total: 18 },
        { place: 23, team: "Бубнилы", rounds: [2, 2, 3, 0, 2, 3, 4], total: 16 }
      ]
    }
  },
  {
    date: "2025-12-11", organizer: "BelkinQuiz", title: "БелкинКвиз #401",
    venue: "Пражка", place: null, photoUrl: "", photoThumb: ""
  },

  /* ================= 2025 (ноябрь) ================= */
  {
    date: "2025-11-22", organizer: "Эйнштейн Party", title: "FUN #334_4",
    venue: "Metafora Bar", place: 4, score: 50.5, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-11-22 • Эйнштейн Party — FUN #334_4 (источник: albertparty.ru/game/23841)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Хитрый Кртек", rounds: [4, 5, 6, 4, 6, 12, 12, 5], total: 54 },
      { place: 2, team: "Дети хоронят коня", rounds: [5, 6, 6, 4.5, 5, 12, 10, 5], total: 53.5 },
      { place: 3, team: "Мама сказала, что я умный", rounds: [4, 5, 6, 4.5, 5, 12, 11, 4], total: 51.5 },
      { place: 4, team: "Генератор неслучайных ответов", rounds: [3, 5, 5, 4, 5, 12, 12, 4.5], total: 50.5 },
      { place: 5, team: "Ни к чему не обязанные", rounds: [4, 6, 3, 2.5, 6, 12, 6, 4.5], total: 44 },
      { place: 6, team: "Рогатые трупоеды", rounds: [3, 5, 6, 3.5, 3, 12, 6, 4], total: 42.5 },
      { place: 7, team: "635 причин моей ненависти", rounds: [5, 4, 6, 5, 5, 6, 8, 3.5], total: 42.5 },
      { place: 8, team: "Какая ты собака?", rounds: [5, 5, 5, 4.5, 3, 6, 8, 4], total: 40.5 },
      { place: 9, team: "Болельщики ТС и Уми", rounds: [3, 5, 3, 4, 5, 12, 4, 3.5], total: 39.5 },
      { place: 10, team: "Гвоздь & Соболь", rounds: [3, 5, 4, 3.5, 6, 6, 8, 2.5], total: 38 },
      { place: 11, team: "Деревенский движ", rounds: [6, 5, 4, 4, 5, 6, 2, 4.5], total: 36.5 },
      { place: 12, team: "Феминисты", rounds: [6, 3, 3, 3, 6, 11, 0, 3.5], total: 35.5 },
      { place: 13, team: "Виталясина", rounds: [5, 5, 2, 3.5, 6, 4, 4, 1.5], total: 31 },
      { place: 14, team: "Лучше звоните Гуглу", rounds: [3, 3, 3, 3, 4, 10, 1, 3.5], total: 30.5 },
      { place: 15, team: "спокусливки", rounds: [5, 5, 4, 4, 6, -4, 8, 2.5], total: 30.5 },
      { place: 16, team: "Креативная безнадега", rounds: [3, 3, 6, 4, 5, 4, 4, 1.5], total: 30.5 },
      { place: 17, team: "¡Vamos a la playa!", rounds: [5, 3, 6, 4, 4, -1, 6, 2.5], total: 29.5 },
      { place: 18, team: "Инна, мы душним", rounds: [4, 4, 5, 3.5, 5, 0, 4, 3], total: 28.5 },
      { place: 19, team: "Эрудиты в законе", rounds: [4, 4, 2, 3, 5, 6, 2, 2.5], total: 28.5 },
      { place: 20, team: "50 % интуиция, 50 % паника", rounds: [3, 4, 6, 1.5, 4, 2, 6, 1], total: 27.5 },
      { place: 21, team: "Мастера БТ Новинский", rounds: [4, 3, 2, 3, 5, 5, 0, 1.5], total: 23.5 },
      { place: 22, team: "Выпивающие спортсмены", rounds: [2, 1, 3, 4.5, 3, 4, 4, 0.5], total: 22 },
      { place: 23, team: "Гуру йони", rounds: [3, 4, 4, 2, 5, 1, 0, 2.5], total: 21.5 },
      { place: 24, team: "Два пива и лимонад", rounds: [4, 1, 4, 2, 3, 5, 1, 1.5], total: 21.5 },
      { place: 25, team: "Мегакрипы", rounds: [4, 4, 3, 1.5, 5, 0, 1, 2.5], total: 21 },
      { place: 26, team: "01ка", rounds: [3, 3, 3, 2, 4, 1, 0, 2], total: 18 },
      { place: 27, team: "самое время", rounds: [3, 2, 2, 3, 2, 6, -4, 2], total: 16 },
      { place: 28, team: "Попокатепетль", rounds: [0, 0, 0, 0, 2, 2, 0, 1.5], total: 5.5 }
      ]
    }
  },
  {
    date: "2025-11-30", organizer: "Squiz", title: "#930.3",
    venue: "Москва", place: 4, photoUrl: "", photoThumb: "",
    results: {
      note: "30 ноября 2025, воскресенье • Москва • Squiz #930.3",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Завтрак у Кролика", rounds: [7, 12, 7, 5.5, 9, 8, 18], total: 66.5 },
        { place: 2, team: "Екатерина Михайловна", rounds: [6, 12, 5, 5.5, 7.5, 7, 15], total: 58 },
        { place: 3, team: "без подшерстка", rounds: [7, 10, 6, 5, 9, 7, 12], total: 56 },
        { place: 4, team: "Генератор неслучайных ответов", rounds: [6, 8, 6, 4.5, 4.5, 7, 18], total: 54 },
        { place: 5, team: "Адекваты", rounds: [7, 8, 4, 5, 9, 8, 9], total: 50 },
        { place: 6, team: "Без некоторых друзей", rounds: [7, 12, 4, 4, 9, 7, 7], total: 50 },
        { place: 7, team: "Уканеевы", rounds: [6, 3, 3, 5.5, 7.5, 8, 15], total: 48 },
        { place: 8, team: "Изо всех сил", rounds: [6, 8, 4, 5.5, 7.5, 9, 3], total: 43 },
        { place: 9, team: "Пермский государственный ордена Трудового Красного Знамени академический театр оперы и балета им. Петра Ильича Чайковского", rounds: [7, 4, 4, 5, 7.5, 8, 6], total: 41.5 },
        { place: 10, team: "Тони Лимони", rounds: [7, 6, 4, 6, 9, 8, 0], total: 40 },
        { place: 11, team: "Фрезерный гамбит", rounds: [6, 5, 2, 5, 6, 7, 7], total: 38 },
        { place: 12, team: "Корпоративные Капибары", rounds: [6, 7, 5, 3.5, 4.5, 7, 4], total: 37 },
        { place: 13, team: "3ума", rounds: [7, 8, 5, 5, 4.5, 3, 4], total: 36.5 },
        { place: 14, team: "Романовские", rounds: [7, 5, 5, 5, 6, 7, -1], total: 34 },
        { place: 15, team: "Bestii", rounds: [5, 6, 4, 3.5, 3, 6, 5], total: 32.5 },
        { place: 16, team: "M&M's", rounds: [5, 4, 3, 3.5, 6, 3, 5], total: 29.5 },
        { place: 17, team: "Взрывные котята", rounds: [6, 5, 4, 4.5, 3, 7, 0], total: 29.5 },
        { place: 18, team: "Части мозга", rounds: [7, 3, 3, 4.5, 3, 6, 2], total: 28.5 },
        { place: 19, team: "Эффект бабочки", rounds: [7, 7, 2, 3.5, 3, 6, 0], total: 28.5 },
        { place: 20, team: "Манькина любовь", rounds: [6, 3, 3, 4.5, 4.5, 4, 3], total: 28 },
        { place: 21, team: "Мозгомыш", rounds: [6, 3, 4, 5, 3, 4, 3], total: 28 },
        { place: 22, team: "Налётчики", rounds: [7, 3, 4, 4, 4.5, 2, 3], total: 27.5 },
        { place: 23, team: "Сон Люды", rounds: [6, 1, 3, 4.5, 1.5, 4, 1], total: 21 },
        { place: null, team: "По&По и Вы", rounds: [7, 4, 5, 5.5, 6, 8, 6], total: 41.5 }
      ]
    }
  },

  /* ================= 2025 (ноябрь, далее) ================= */
  {
    date: "2025-11-21", organizer: "Квизиум", title: "«Обо всем» [Новички] #819",
    venue: "Ibis Kitchen", place: null, photoUrl: "", photoThumb: ""
  },

  /* ================= 2025 (октябрь) ================= */
  {
    date: "2025-10-29", organizer: "Эйнштейн Party", title: "Классика №494_3",
    venue: "Metafora Bar", place: 15, score: 32, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-10-29 • Эйнштейн Party — Классика №494_3 (источник: albertparty.ru/game/23400)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Компост Мэлоун", rounds: [10, 6, 12, 10, 18, 12, 6, 4], total: 78 },
      { place: 2, team: "Алиса, позови Сири!", rounds: [10, 4, 12, 10, 12, 12, 4, 4], total: 68 },
      { place: 3, team: "ПсиКотики", rounds: [9, 6, 12, 10, 15, 8, 4, 4], total: 68 },
      { place: 4, team: "Вопросом на вопрос", rounds: [9, 5, 10, 9, 15, 4, 4, 6], total: 62 },
      { place: 5, team: "Хитрый Кртек", rounds: [8, 5, 8, 8, 16, 8, 4, 4], total: 61 },
      { place: 6, team: "Mortal Combat", rounds: [9, 6, 8, 7, 12, 4, 2, 4], total: 52 },
      { place: 7, team: "Торо Руссо", rounds: [9, 5, 8, 9, 7, 4, 2, 4], total: 48 },
      { place: 8, team: "А, точно!", rounds: [9, 5, 7, 9, 6, 4, 2, 4], total: 46 },
      { place: 9, team: "Кафедра КИС", rounds: [9, 5, 5, 9, 9, 4, 2, 2], total: 45 },
      { place: 10, team: "Слюни слона", rounds: [10, 4, 10, 7, 4, 0, 4, 4], total: 43 },
      { place: 11, team: "Пролетая над гнездом чекушки", rounds: [7, 3, 3, 6, 7, 6, 2, 2], total: 36 },
      { place: 12, team: "Ума палата", rounds: [8, 4, 5, 5, 6, 6, 0, 2], total: 36 },
      { place: 13, team: "Из лифта налево", rounds: [8, 4, 4, 9, 6, 0, 2, 2], total: 35 },
      { place: 14, team: "Мы в курсе", rounds: [7, 4, 8, 9, 1, 4, 0, 2], total: 35 },
      { place: 15, team: "Генератор неслучайных ответов", rounds: [10, 2, 5, 6, 7, 0, 0, 2], total: 32 },
      { place: 16, team: "Атака Метана", rounds: [10, 4, 4, 5, 3, 2, 0, 2], total: 30 },
      { place: 17, team: "Недержание мочи: стрессовая форма", rounds: [8, 4, 2, 7, 12, -6, 2, 0], total: 29 },
      { place: 18, team: "Макаки в атаке", rounds: [7, 2, 5, 5, 6, 3, 0, 0], total: 28 },
      { place: 19, team: "ЖуСи/ДуСи", rounds: [6, 2, 2, 6, 3, 2, 0, 4], total: 25 },
      { place: 20, team: "Змеищи", rounds: [3, 4, 2, 4, 6, 2, 0, 0], total: 21 },
      { place: 21, team: "Улыбаемся и Маша)", rounds: [7, 3, 2, 3, 3, 1, 0, 0], total: 19 },
      { place: 22, team: "купавинские псы", rounds: [6, 0, 2, 5, 1, 3, 0, 0], total: 17 },
      { place: 23, team: "«Первоцветы»", rounds: [2, 1, 3, 5, 1, 0, 0, 0], total: 12 }
      ]
    }
  },
  {
    date: "2025-10-25", organizer: "Квизиум", title: "«Обо всём» #811",
    venue: "The Tipsy Pub", place: null, photoUrl: "", photoThumb: ""
  },
  {
    date: "2025-10-25", organizer: "BUBO-КВИЗ", title: "Искусство и культура",
    venue: "Travel Рестобар", place: null, photoUrl: "", photoThumb: ""
  },

  /* ================= 2025 (сентябрь) ================= */
  // Примечание: фотографий с этой игры нет
  {
    date: "2025-09-20", organizer: "GO!Квиз", title: "329.2",
    venue: "Пражка", place: 3, photoUrl: "", photoThumb: ""
  },
  {
    date: "2025-09-20", organizer: "Squiz", title: "Игра 910.2",
    venue: "Coin hall", place: 7, photoUrl: "", photoThumb: "",
    results: {
      note: "20 сентября 2025, суббота • Coin hall • Squiz #910.2",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Киски, тлен, видеоигры", rounds: [7, 10, 7, 5.5, 9, 10, 18], total: 66.5 },
        { place: 2, team: "Тот самый Лев", rounds: [7, 12, 6, 5.5, 9, 9, 18], total: 66.5 },
        { place: 3, team: "Сковородка", rounds: [7, 10, 7, 5, 9, 10, 18], total: 66 },
        { place: 4, team: "Здесь - это вам не тут", rounds: [7, 10, 7, 5.5, 9, 9, 18], total: 65.5 },
        { place: 5, team: "Q&J", rounds: [7, 8, 6, 6, 9, 10, 18], total: 64 },
        { place: 6, team: "Kentucky Fried Popugi", rounds: [7, 9, 6, 6, 7.5, 9, 15], total: 59.5 },
        { place: 7, team: "Генератор неслучайных ответов", rounds: [7, 7, 6, 4.5, 9, 8, 13], total: 54.5 },
        { place: 8, team: "Беседка", rounds: [6, 4, 7, 5.5, 7.5, 8, 14], total: 52 },
        { place: 9, team: "Синяя яма", rounds: [6, 6, 5, 5, 4.5, 9, 15], total: 50.5 },
        { place: 10, team: "Вторая страница Гугла", rounds: [7, 3, 5, 5.5, 6, 8, 15], total: 49.5 },
        { place: 11, team: "Лапки Живоглота с чаем", rounds: [7, 6, 3, 3.5, 6, 9, 12], total: 46.5 },
        { place: 12, team: "Шампанский обряд", rounds: [7, 7, 6, 5, 7.5, 9, 5], total: 46.5 },
        { place: 13, team: "По нам и не скажешь", rounds: [5, 4, 6, 4.5, 6, 8, 12], total: 45.5 },
        { place: 14, team: "Второй пилот Дринкинс", rounds: [5, 6, 3, 5.5, 4.5, 9, 6], total: 39 },
        { place: 15, team: "Каюта мистера Данзигера", rounds: [7, 2, 5, 5, 7.5, 9, 1], total: 36.5 },
        { place: 16, team: "Полководцы", rounds: [4, 4, 5, 3.5, 7.5, 7, 4], total: 35 },
        { place: 17, team: "3ума", rounds: [6, 3, 4, 4, 1.5, 8, 4], total: 30.5 },
        { place: 18, team: "МариУлья", rounds: [6, 1, 4, 4, 1.5, 5, 6], total: 27.5 },
        { place: 19, team: "Смешарики 2.0", rounds: [4, 3, 6, 5.5, 0, 9, 0], total: 27.5 },
        { place: 20, team: "Ваш рейс в дурку прибыл", rounds: [6, 2, 2, 3.5, 3, 8, 1], total: 25.5 },
        { place: 21, team: "Откройте форточку", rounds: [4, 3, 2, 4.5, 1.5, 9, 0], total: 24 },
        { place: 22, team: "Британские психологи", rounds: [2, 1, 2, 4.5, 4.5, 8, 1], total: 23 },
        { place: 23, team: "Голубино Шпиониро", rounds: [6, 1, 5, 3, 1.5, 4, 0], total: 20.5 }
      ]
    }
  },
  {
    date: "2025-09-13", organizer: "Эйнштейн Party", title: "FUN #324_4",
    venue: "Nebar Moscow", place: 7, score: 41.5, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-09-13 • Эйнштейн Party — FUN #324_4 (источник: albertparty.ru/game/22870)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Заюши", rounds: [4, 6, 4, 2.5, 4, 12, 10, 4.5], total: 47 },
      { place: 2, team: "Последняя извилина", rounds: [5, 5, 6, 3, 5, 9, 10, 4], total: 47 },
      { place: 3, team: "NE ABBA", rounds: [3, 5, 4, 3.5, 5, 9, 9, 5], total: 43.5 },
      { place: 4, team: "Карты, деньги, два кота", rounds: [5, 4, 4, 2.5, 6, 9, 8, 5], total: 43.5 },
      { place: 5, team: "Мы от Эммануила Гедеоновича!", rounds: [3, 4, 5, 3, 5, 8, 11, 4], total: 43 },
      { place: 6, team: "3 разряд по квизу", rounds: [4, 3, 4, 2.5, 5, 12, 7, 5], total: 42.5 },
      { place: 7, team: "Генератор неслучайных ответов", rounds: [4, 5, 2, 2.5, 6, 9, 8, 5], total: 41.5 },
      { place: 8, team: "Бордель ромашка", rounds: [2, 5, 4, 2.5, 3, 11, 7, 4.5], total: 39 },
      { place: 9, team: "Красные Пингвины", rounds: [3, 4, 4, 3.5, 5, 9, 6, 4.5], total: 39 },
      { place: 10, team: "ОБИП", rounds: [2, 3, 4, 4, 5, 9, 5, 4.5], total: 36.5 },
      { place: 11, team: "Дважды три", rounds: [2, 4, 5, 2.5, 5, 9, 6, 3], total: 36.5 },
      { place: 12, team: "Голожаберные", rounds: [4, 2, 2, 3.5, 6, 12, 4, 2.5], total: 36 },
      { place: 13, team: "спокусливки", rounds: [4, 6, 4, 3.5, 3, 1, 8, 3.5], total: 33 },
      { place: 14, team: "Оба на!", rounds: [4, 5, 3, 3.5, 3, 10, 2, 2.5], total: 33 },
      { place: 15, team: "Сибирский стыд", rounds: [2, 4, 3, 2.5, 4, 8, 4, 5], total: 32.5 },
      { place: 16, team: "Гуру йони", rounds: [3, 5, 5, 3, 4, 5, 3, 4.5], total: 32.5 },
      { place: 17, team: "NaRaz", rounds: [1, 5, 4, 1.5, 2, 8, 3, 3], total: 27.5 }
      ]
    }
  },

  /* ================= 2025 (август) ================= */
  {
    date: "2025-08-20", organizer: "Squiz", title: "Сезон 27. Полуфинал #1",
    venue: "Москва", place: 23, photoUrl: "", photoThumb: "",
    results: {
      note: "20 августа 2025, среда • Москва • Squiz Сезон 27. Полуфинал #1",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Завтрак у Кролика", rounds: [4, 10, 4, 3.5, 9, 6.5, 15], total: 52 },
        { place: 2, team: "Здесь - это вам не тут", rounds: [2, 7, 3, 3, 9, 8, 15], total: 47 },
        { place: 3, team: "Анаграмма искусства", rounds: [3, 10, 2, 3, 7.5, 4.5, 15], total: 45 },
        { place: 4, team: "Шампанский обряд", rounds: [1, 7, 3, 1, 9, 6, 15], total: 42 },
        { place: 5, team: "Тоттенхэм", rounds: [2, 6, 1, 1, 9, 6, 15], total: 40 },
        { place: 6, team: "Q&J", rounds: [1, 8, 4, 2, 4.5, 7, 12], total: 38.5 },
        { place: 7, team: "The Wassermans", rounds: [3, 5, 1, 2.5, 6, 5.5, 13], total: 36 },
        { place: 7, team: "Сустапитация", rounds: [1, 8, 1, 2, 7.5, 3.5, 13], total: 36 },
        { place: 9, team: "Иван-не-дурак", rounds: [2, 6, 3, 1, 1.5, 7.5, 12], total: 33 },
        { place: 10, team: "Кешмар на улице квизов", rounds: [2, 7, 1, 2, 4.5, 5, 10], total: 31.5 },
        { place: 11, team: "Джем из топинамбура", rounds: [5, 4, 4, 0.5, 1.5, 8, 7], total: 30 },
        { place: 12, team: "Атомный паяльник", rounds: [1, 6, 2, 2, 1.5, 7, 10], total: 29.5 },
        { place: 13, team: "Злобные Хомяки", rounds: [1, 8, 2, 2, 3, 4.5, 7], total: 27.5 },
        { place: 14, team: "Atomic Fart", rounds: [1, 6, 2, 1.5, 1.5, 6.5, 6], total: 24.5 },
        { place: 15, team: "Беседка", rounds: [3, 5, 4, 2.5, 1.5, 4, 4], total: 24 },
        { place: 16, team: "Мохеровый пипидастр", rounds: [3, 7, 1, 1.5, 0, 5, 6], total: 23.5 },
        { place: 17, team: "Маги Региона", rounds: [2, 6, 2, 2, 1.5, 5, 4], total: 22.5 },
        { place: 18, team: "Свинсоны", rounds: [1, 8, 2, 1.5, 0, 4.5, 5], total: 22 },
        { place: 19, team: "IPAтерапия", rounds: [1, 5, 1, 0.5, 0, 6.5, 7], total: 21 },
        { place: 20, team: "Отдых грибника", rounds: [1, 5, 2, 0, 0, 3, 9], total: 20 },
        { place: 21, team: "Imaginary friends", rounds: [1, 6, 0, 2, 0, 5.5, 5], total: 19.5 },
        { place: 22, team: "Ретроградный и Юрий", rounds: [0, 8, 2, 1.5, 0, 5, 1], total: 17.5 },
        { place: 23, team: "Генератор неслучайных ответов", rounds: [1, 6, 0, 0, 4.5, 3.5, 2], total: 17 },
        { place: 24, team: "Мама Анархия", rounds: [0, 2, 2, 1, 1.5, 9, 1], total: 16.5 },
        { place: 24, team: "Багажник", rounds: [1, 1, 1, 2, 1.5, 7, 3], total: 16.5 },
        { place: 26, team: "Сознание ясное", rounds: [3, 4, 1, 2, 1.5, 5.5, -2], total: 15 },
        { place: 27, team: "Кокоджамба", rounds: [3, 3, 2, 0, 0, 3.5, 0], total: 11.5 },
        { place: 28, team: "Дети Анархии", rounds: [0, 2, 0, 1, 0, 6, -5], total: 4 }
      ]
    }
  },
  {
    date: "2025-04-26", organizer: "Мозгва", title: "Новички 473 День 2",
    venue: "Коктейль Холл", place: 8, photoUrl: "", photoThumb: "",
    results: {
      note: "26 апреля 2025, суббота • Коктейль Холл (Тверская 6с2) • Мозгва «Новички 473 День 2»",
      roundLabels: ["Тур 1", "Тур 2", "Тур 3", "Тур 4", "Тур 5", "Тур 6", "Тур 7"],
      team: "Генератор НЕ случайных ответов",
      standings: [
        { place: 1, team: "ПростоДушные", rounds: [6, 6, 6, 6, 5, 6, 12], total: 47 },
        { place: 2, team: "Горячие головы", rounds: [6, 6, 6, 4, 6, 5, 12], total: 45 },
        { place: 3, team: "ПРОВАЛенки", rounds: [6, 5, 6, 6, 5, 6, 10], total: 44 },
        { place: 4, team: "Свет и ко", rounds: [6, 5, 6, 3, 3, 6, 12], total: 41 },
        { place: 5, team: "Мама сказала, что я умный", rounds: [6, 5, 6, 4, 4, 6, 10], total: 41 },
        { place: 6, team: "Блонды, гламур и брюнетки", rounds: [6, 5, 3, 3, 6, 3, 11], total: 37 },
        { place: 7, team: "Плюс_31", rounds: [6, 6, 6, -2, 5, 5, 11], total: 37 },
        { place: 8, team: "Генератор НЕ случайных ответов", rounds: [6, 5, 5, 3, 5, 5, 8], total: 37 },
        { place: 9, team: "chickens", rounds: [5, 6, 4, 4, 3, 3, 10], total: 35 },
        { place: 10, team: "5oKents", rounds: [6, 5, 5, 4, 4, 2, 9], total: 35 },
        { place: 11, team: "Сомнительно, но Ок'эээй", rounds: [5, 2, 4, 9, 3, 5, 6], total: 34 },
        { place: 12, team: "Умницы и пьяницы", rounds: [6, 5, 4, 3, 4, 6, 6], total: 34 },
        { place: 13, team: "Синагога", rounds: [4, 3, 5, 5, 6, 2, 8], total: 33 },
        { place: 14, team: "Пень с глазами", rounds: [6, 6, 4, -1, 3, 3, 10], total: 31 },
        { place: 15, team: "Кулёмы", rounds: [5, 5, 4, 1, 6, 4, 6], total: 31 },
        { place: 16, team: "Вдруг прокатит", rounds: [5, 4, 2, 4, 3, 4, 8], total: 30 },
        { place: 17, team: "Кутья с бараниной", rounds: [4, 4, 3, -2, 4, 5, 11], total: 29 },
        { place: 18, team: "Натуральный интеллект", rounds: [5, 4, 2, 0, 3, 6, 8], total: 28 },
        { place: 19, team: "Клуб юных техников", rounds: [4, 5, 4, 3, 1, 3, 5], total: 25 },
        { place: 20, team: "Конь в пальто", rounds: [5, 3, 3, 0, 2, 3, 7], total: 23 },
        { place: 21, team: "Премудренькие", rounds: [5, 2, 5, -3, 2, 2, 8], total: 21 }
      ]
    }
  },
  {
    date: "2025-08-23", organizer: "Мозгва", title: "Зачетная 909",
    venue: "Коктейль Холл", place: 3,
    photoUrl: "https://findquiz.ru/event/mozgva/photo/286223-zachetnaya-909",
    photoThumb: "https://sun9-6.userapi.com/s/v1/ig2/IYz1wSBeX082NYMms_mdL1sj43kaBLHP2QqxotvX90pv3xtaW3UJhMyAVM2pkLkdbM5D02q-a2Dh1UpjAxzrhSE5.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2000x1333&from=bu&cs=640x0",
    results: {
      note: "23 августа 2025, суббота • Коктейль Холл (Тверская 6с2) • Мозгва, Зачетная 909",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Парадная жилетка Вассермана", rounds: [5, 5, 6, 9, 6, 6, 12], total: 49 },
        { place: 2, team: "Немолодые ветра", rounds: [6, 5, 6, 9, 6, 6, 10], total: 48 },
        { place: 3, team: "Генератор неслучайных ответов", rounds: [5, 6, 4, 6, 5, 5, 11], total: 42 },
        { place: 4, team: "Бобр_крута!", rounds: [4, 4, 4, 7, 5, 4, 12], total: 40 },
        { place: 5, team: "Синяя Яма", rounds: [5, 4, 5, 3, 5, 5, 12], total: 39 },
        { place: 6, team: "Лашате Ми Кантаре", rounds: [4, 5, 4, 6, 5, 5, 8], total: 37 },
        { place: 7, team: "Мыли залы", rounds: [4, 4, 4, 3, 5, 6, 8], total: 34 },
        { place: 8, team: "Жан-Клод_Вам дам", rounds: [4, 5, 4, 3, 5, 5, 4], total: 30 },
        { place: 9, team: "Лесные феи", rounds: [2, 5, 2, 1, 3, 1, 6], total: 20 },
        { place: 10, team: "ЭйтиПи", rounds: [2, 3, 2, 3, 1, 0, 5], total: 16 }
      ]
    }
  },
  {
    date: "2025-09-06", organizer: "Мозгва", title: "Зачетная 911 День 2",
    venue: "Коктейль Холл", place: 5,
    photoUrl: "https://findquiz.ru/quiz/mozgva/photo/308759816",
    photoThumb: "https://sun9-69.userapi.com/s/v1/ig2/hiZFBYvocROzJOQ7RKTmlGeAdskm2UoE1abPUMdp8V2FBKroudAl4-glJ6gVGfAcwLMXc7LodqgYcCaXPmS0ojob.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x426,720x480,1080x720,1280x853,1440x960,2560x1706&from=bu&cs=640x0",
    results: {
      note: "6 сентября 2025, суббота • Коктейль Холл (Тверская 6с2) • Мозгва, Зачетная 911 День 2",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "На удачу 2.0!", rounds: [4, 6, 5, 9, 6, 6, 12], total: 48 },
        { place: 2, team: "Метод_Тыка", rounds: [6, 4, 6, 9, 5, 6, 11], total: 47 },
        { place: 3, team: "Омерзительная Батика Восьмёрка", rounds: [5, 6, 4, 9, 6, 6, 10], total: 46 },
        { place: 4, team: "Екатерина Михайловна", rounds: [5, 6, 5, 9, 3, 6, 10], total: 44 },
        { place: 5, team: "Генератор неслучайных ответов", rounds: [5, 5, 4, 9, 4, 6, 10], total: 43 },
        { place: 6, team: "Кремень монолита", rounds: [6, 5, 6, 3, 5, 6, 11], total: 42 },
        { place: 7, team: "Бажовкан Мелалле", rounds: [2, 5, 6, 9, 5, 4, 8], total: 39 },
        { place: 8, team: "Смеркил", rounds: [5, 5, 5, 3, 5, 6, 8], total: 37 },
        { place: 9, team: "Нострадамус Предсказамус", rounds: [6, 5, 4, -3, 4, 6, 11], total: 33 },
        { place: 10, team: "Бобр_крута!", rounds: [4, 5, 4, 6, 4, 6, 4], total: 33 },
        { place: 11, team: "Под крылом Вингелота", rounds: [1, 4, 5, 6, 1, 6, 8], total: 31 },
        { place: 12, team: "Малополезные Псевдосыры", rounds: [4, 5, 4, 0, 4, 6, 8], total: 31 },
        { place: 13, team: "Белый кролик", rounds: [2, 5, 4, 0, 5, 6, 8], total: 30 },
        { place: 14, team: "Единорни", rounds: [6, 6, 4, 0, 3, 5, 6], total: 30 },
        { place: 15, team: "Шампинь_Тим", rounds: [4, 5, 4, -3, 6, 6, 6], total: 28 },
        { place: 16, team: "Леся и компания", rounds: [4, 4, 3, 1, 4, 6, 4], total: 26 },
        { place: 17, team: "И то ХЛЕБУ!", rounds: [4, 5, 4, -3, 4, 3, 6], total: 23 },
        { place: 18, team: "Редко,_но метко!!", rounds: [2, 4, 3, 1, 4, 4, 4], total: 22 },
        { place: 19, team: "Сковорода", rounds: [6, 5, 3, -3, 3, 6, 2], total: 22 },
        { place: 20, team: "Малополезные Псевдоколабсы", rounds: [4, 5, 3, -3, 3, 5, 4], total: 21 },
        { place: 21, team: "42в хромасома", rounds: [2, 5, 3, 0, 3, 3, 2], total: 18 }
      ]
    }
  },

  /* ================= 2025 (июль) ================= */
  {
    date: "2025-07-25", organizer: "Squiz", title: "Игра #894.1",
    venue: "Москва", place: 9, photoUrl: "", photoThumb: "",
    results: {
      note: "25 июля 2025, пятница • Москва • Squiz #894.1 (показаны топ-20 и наша команда)",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Шампанский обряд", rounds: [6, 12, 6, 4.5, 9, 9, 18], total: 64.5 },
        { place: 2, team: "Я поймал снитч", rounds: [6, 10, 7, 4.5, 9, 9, 18], total: 63.5 },
        { place: 3, team: "Ближневосточный гектар", rounds: [6, 10, 7, 5.5, 9, 6, 18], total: 61.5 },
        { place: 4, team: "Меньше думаем", rounds: [5, 10, 6, 6, 9, 6, 18], total: 60 },
        { place: 5, team: "Ретроградный и Юрий", rounds: [7, 10, 5, 3.5, 9, 5, 18], total: 57.5 },
        { place: 6, team: "Маги Региона", rounds: [6, 10, 5, 4.5, 9, 4, 18], total: 56.5 },
        { place: 7, team: "Невинные Инвесторы", rounds: [4, 10, 6, 5, 7.5, 3, 18], total: 53.5 },
        { place: 8, team: "Цыганские ученые", rounds: [6, 8, 5, 5.5, 9, 5, 15], total: 53.5 },
        { place: 9, team: "Генератор неслучайных ответов", rounds: [3, 8, 5, 4, 9, 8, 15], total: 52 },
        { place: 10, team: "Доллар по 30", rounds: [6, 6, 5, 5, 9, 4, 15], total: 50 },
        { place: 11, team: "ББББЕЕЕЕБББСССС ВАТИКЮЮЮЮ", rounds: [5, 8, 6, 4.5, 9, 6, 10], total: 48.5 },
        { place: 12, team: "Театр Мимики и Жести", rounds: [6, 6, 7, 4.5, 9, 5, 9], total: 46.5 },
        { place: 13, team: "Ахринектурный отдел", rounds: [5, 8, 4, 5, 9, 7, 7], total: 45 },
        { place: 14, team: "Worms", rounds: [4, 5, 5, 2.5, 9, 6, 13], total: 44.5 },
        { place: 15, team: "Парижские шпроты", rounds: [4, 5, 6, 5, 7.5, 6, 10], total: 43.5 },
        { place: 16, team: "Цыпочки поставок", rounds: [4, 8, 3, 3, 7.5, 7, 10], total: 42.5 },
        { place: 17, team: "Поклонники Вагина", rounds: [5, 7, 5, 4.5, 7.5, 5, 7], total: 41 },
        { place: 18, team: "Юморыстки", rounds: [7, 7, 6, 5.5, 6, 3, 6], total: 40.5 },
        { place: 19, team: "18 голов Уилсона", rounds: [5, 5, 5, 5.5, 7.5, 4, 8], total: 40 },
        { place: 20, team: "DataStorm", rounds: [3, 6, 3, 3.5, 9, 4, 11], total: 39.5 }
      ]
    }
  },
  {
    date: "2025-07-26", organizer: "Squiz", title: "Лига новичков. Игра 177.2",
    venue: "Liberty", place: 7, photoUrl: "", photoThumb: "",
    results: {
      note: "26 июля 2025, суббота • Liberty • Squiz Лига новичков #177.2",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Филиное куре", rounds: [5, 10, 7, 5.5, 9, 8, 18], total: 62.5 },
        { place: 2, team: "Чертяги Разума", rounds: [6, 7, 7, 5.5, 9, 9, 14], total: 57.5 },
        { place: 3, team: "SQUIZанутые", rounds: [5, 7, 5, 5, 9, 8, 18], total: 57 },
        { place: 4, team: "Кешмар на улице квизов", rounds: [6, 8, 7, 4, 9, 10, 12], total: 56 },
        { place: 5, team: "Отчаянные дачники", rounds: [5, 5, 6, 4.5, 9, 10, 15], total: 54.5 },
        { place: 6, team: "Правый и Левый", rounds: [5, 8, 7, 6, 9, 8, 9], total: 52 },
        { place: 7, team: "Генератор неслучайных ответов", rounds: [4, 7, 5, 4, 9, 9, 12], total: 50 },
        { place: 8, team: "Тайная ложа Восхождения", rounds: [6, 5, 7, 5.5, 9, 8, 9], total: 49.5 },
        { place: 9, team: "Сидите, мы откроем", rounds: [4, 5, 7, 5.5, 9, 8, 10], total: 48.5 },
        { place: 10, team: "3ума", rounds: [4, 8, 5, 4, 9, 6, 9], total: 45 },
        { place: 11, team: "Анатомия ежа", rounds: [5, 8, 5, 4.5, 4.5, 7, 10], total: 44 },
        { place: 12, team: "Клан Серых Псов", rounds: [4, 5, 4, 5.5, 9, 6, 9], total: 42.5 },
        { place: 13, team: "Шабаш на выезде", rounds: [5, 7, 6, 4.5, 9, 7, 4], total: 42.5 },
        { place: 14, team: "LAAMAA", rounds: [4, 8, 6, 5, 9, 6, 4], total: 42 },
        { place: 15, team: "FAMale", rounds: [6, 3, 5, 5.5, 7.5, 5, 6], total: 38 },
        { place: 16, team: "Триумвират", rounds: [6, 3, 4, 5, 7.5, 9, 3], total: 37.5 },
        { place: 17, team: "Продам гараж", rounds: [6, 4, 5, 4.5, 9, 8, 1], total: 37.5 },
        { place: 18, team: "Хромой Джонни", rounds: [5, 5, 5, 3, 9, 4, 3], total: 34 },
        { place: 19, team: "Близнецы и скорпионы", rounds: [7, 4, 4, 3.5, 7.5, 6, 0], total: 32 },
        { place: 20, team: "Прожорливый кролик", rounds: [5, 4, 4, 3, 6, 6, 3], total: 31 },
        { place: 21, team: "Больше, чем три казака", rounds: [4, 6, 4, 4.5, 7.5, 7, -4], total: 29 }
      ]
    }
  },
  /* ================= 2025 (июнь) ================= */
  {
    date: "2025-06-28", organizer: "Squiz", title: "Лига новичков #173.2",
    venue: "Metafora Bar", place: 4,
    photoUrl: "https://vk.ru/album-140791428_307696618",
    photoThumb: "https://sun9-54.vkuserphoto.ru/s/v1/ig2/KLbjuJnX7mHP_dl-d07yQ9g3bKHPpmAXPyDT-z98ndKraS06hhfimgGYJBNPH_dKpqXy2fOMVUw6nKmjGhpEH23W.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1920x1280&from=bu&cs=1920x0",
    results: {
      note: "28 июня 2025, суббота • Metafora Bar • Squiz Лига новичков #173.2",
      roundCount: 7,
      team: "Генератор неслучайных ответов",
      standings: [
        { place: 1, team: "Черешни", rounds: [6, 10, 5, 6, 7.5, 9, 18], total: 61.5 },
        { place: 2, team: "Krakenwagen", rounds: [7, 10, 4, 5, 7.5, 9, 16], total: 58.5 },
        { place: 3, team: "Alien brain", rounds: [6, 10, 5, 4, 9, 8, 16], total: 58 },
        { place: 4, team: "Генератор неслучайных ответов", rounds: [7, 12, 4, 4, 6, 9, 15], total: 57 },
        { place: 5, team: "Чат всратых мемасиков", rounds: [6, 9, 4, 4, 7.5, 9, 11], total: 50.5 },
        { place: 6, team: "7яЛетоМолодцы", rounds: [6, 4, 4, 5, 6, 9, 15], total: 49 },
        { place: 7, team: "Шкодники", rounds: [5, 6, 5, 4.5, 7.5, 8, 12], total: 48 },
        { place: 8, team: "Страшные сказки", rounds: [6, 10, 4, 4.5, 3, 10, 9], total: 46.5 },
        { place: 9, team: "Без макияжа", rounds: [6, 8, 4, 5, 6, 8, 9], total: 46 },
        { place: 10, team: "69 корочек от пиццы", rounds: [7, 10, 2, 4, 6, 7, 6], total: 42 },
        { place: 11, team: "Не факт, но уверены", rounds: [6, 8, 3, 4.5, 4.5, 8, 4], total: 38 },
        { place: 12, team: "Свиноногий бандикут", rounds: [5, 5, 4, 3.5, 4.5, 9, 6], total: 37 },
        { place: 13, team: "Домовые", rounds: [5, 7, 1, 4.5, 6, 6, 7], total: 36.5 },
        { place: 14, team: "Батрахоспермы", rounds: [5, 5, 3, 3.5, 3, 10, 6], total: 35.5 },
        { place: 15, team: "Щука под шубой", rounds: [4, 5, 4, 4.5, 4.5, 6, 7], total: 35 },
        { place: 16, team: "Ничего не знаем, но угадаем", rounds: [7, 9, 5, 2.5, 6, 7, -2], total: 34.5 },
        { place: 17, team: "FAMale", rounds: [3, 7, 4, 3, 1.5, 7, 4], total: 29.5 },
        { place: 18, team: "Случайно занесло", rounds: [4, 3, 4, 2.5, 0, 8, 5], total: 26.5 },
        { place: 19, team: "Огонь НЕ знаний", rounds: [5, 4, 4, 3.5, 4.5, 9, -4], total: 26 },
        { place: 20, team: "Подкидыши", rounds: [6, 4, 4, 4, 3, 6, -4], total: 23 },
        { place: 21, team: "Team Beer", rounds: [6, 2, 4, 3.5, 3, 4, 0], total: 22.5 },
        { place: 22, team: "Гуси-пофигуси", rounds: [3, 1, 5, 3.5, 4.5, 6, -1], total: 22 },
        { place: 23, team: "Сомнительно, но окэй", rounds: [3, 4, 2, 2.5, 0, 6, 1], total: 18.5 }
      ]
    }
  },
  {
    // 3 место подтверждено пользователем (фото на сцене + сертификат); полной таблицы нет.
    date: "2025-07-05", organizer: "Мозгва", title: "Новички 493 День 2",
    venue: "Коктейль Холл", place: 3,
    photoUrl: "https://findquiz.ru/event/mozgva/photo/282712-novichki-493-den-2",
    photoThumb: "https://sun9-56.userapi.com/s/v1/ig2/dSsC1V3rBvBie53QK0mM8iscbtk7WfkL4BEjzeyD83MNILpcDm6G8sEi3UwQd8jKLM6lv68EbEVlIXwh1PggBnxJ.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2000x1333&from=bu&cs=640x0"
  },

  /* ================= Эйнштейн Party (источник: albertparty.ru/team/78854) =================
     Полные протоколы по турам для этих игр недоступны — добавлены только место и балл. */
  {
    date: "2026-10-28", organizer: "Эйнштейн Party", title: "Классика №546_3",
    venue: "Old School Pub Маяковская", place: 5, score: 57, photoUrl: "", photoThumb: "",
    results: {
      note: "2026-10-28 • Эйнштейн Party — Классика №546_3 (источник: albertparty.ru/game/28935)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Квантовая запутанность", rounds: [10, 5, 12, 9, 18, 12, 4, 6], total: 76 },
      { place: 2, team: "ПсиКотики", rounds: [10, 5, 12, 9, 18, 12, 0, 4], total: 70 },
      { place: 3, team: "Алиса, позови Сири!", rounds: [9, 5, 8, 7, 18, 12, 4, 6], total: 69 },
      { place: 4, team: "блёстки", rounds: [8, 5, 10, 8, 15, 12, 0, 4], total: 62 },
      { place: 5, team: "Генератор неслучайных ответов", rounds: [10, 3, 12, 6, 12, 8, 2, 4], total: 57 },
      { place: 5, team: "Полусухарик", rounds: [9, 3, 12, 5, 12, 8, 2, 6], total: 57 },
      { place: 7, team: "Красиво шарим", rounds: [10, 1, 8, 6, 9, 6, 4, 2], total: 46 },
      { place: 8, team: "Лена Головач", rounds: [7, 3, 5, 5, 7, 4, 0, 6], total: 37 },
      { place: 9, team: "Мачка пасла", rounds: [8, 1, 3, 3, 7, 4, 0, 4], total: 30 },
      { place: 10, team: "Prosecco", rounds: [6, 3, 1, 7, 4, 3, 0, 4], total: 28 },
      { place: 11, team: "Кевин и компания", rounds: [5, 1, 2, 7, 6, 4, 0, 2], total: 27 },
      { place: 12, team: "Маргиналы", rounds: [3, 1, 2, 3, 4, 2, 2, 2], total: 19 },
      { place: 13, team: "Текущий контроль", rounds: [2, 0, 1, 4, 1, -6, 2, 2], total: 6 },
      { place: 14, team: "Мозговой резерв", rounds: [2, 0, 1, 4, -2, -6, 0, 2], total: 1 }
      ]
    }
  },
  {
    date: "2026-01-06", organizer: "Эйнштейн Party", title: "18+ №23_1",
    venue: "Old School Pub Маяковская", place: 6, score: 58.5, photoUrl: "", photoThumb: "",
    results: {
      note: "2026-01-06 • Эйнштейн Party — 18+ №23_1 (источник: albertparty.ru/game/24673)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Множественные сарказмы", rounds: [4, 6, 4, 5, 5, 12, 12, 19], total: 67 },
      { place: 2, team: "Коридор", rounds: [5, 4, 3, 3, 5, 12, 12, 18], total: 62 },
      { place: 3, team: "Падла Эскобар", rounds: [5, 5, 2, 2.5, 5, 12, 12, 18], total: 61.5 },
      { place: 4, team: "Алконяшки", rounds: [4, 5, 4, 3, 5, 12, 12, 15], total: 60 },
      { place: 5, team: "Сами своего рода знатоки", rounds: [5, 3, 3, 3.5, 4, 12, 10, 18], total: 58.5 },
      { place: 6, team: "Генератор неслучайных ответов", rounds: [5, 5, 3, 4.5, 4, 11, 8, 18], total: 58.5 },
      { place: 7, team: "Серийные упийцы", rounds: [5, 5, 2, 2.5, 4, 9, 12, 18], total: 57.5 },
      { place: 8, team: "The Wassermans", rounds: [4, 5, 2, 3.5, 3, 12, 10, 18], total: 57.5 },
      { place: 9, team: "Немолодые ветра", rounds: [5, 5, 3, 4, 4, 12, 8, 16], total: 57 },
      { place: 10, team: "Bang-cock", rounds: [5, 5, 3, 3, 5, 11, 4, 17], total: 53 },
      { place: 11, team: "Батино сало", rounds: [5, 5, 3, 4.5, 5, 8, 8, 12], total: 50.5 },
      { place: 12, team: "Направо левее", rounds: [3, 3, 2, 3.5, 3, 5, 11, 18], total: 48.5 },
      { place: 13, team: "6 чувство", rounds: [5, 5, 1, 3.5, 3, 5, 9, 16], total: 47.5 },
      { place: 14, team: "Период полураспада", rounds: [5, 4, 2, 3, 5, 8, 10, 10], total: 47 },
      { place: 15, team: "Коламбия Пикчерз не представляет", rounds: [2, 3, 2, 2.5, 3, 8, 6, 17], total: 43.5 },
      { place: 16, team: "Том и Джерри", rounds: [3, 3, 2, 2, 2, 6, 8, 16], total: 42 },
      { place: 17, team: "ЖЖ", rounds: [2, 4, 0, 3, 2, 6, 9, 9], total: 35 },
      { place: 18, team: "Мари в ванне", rounds: [3, 2, 1, 2.5, 2, 6, 6, 11], total: 33.5 },
      { place: 19, team: "Мы далеки от одеяла", rounds: [4, 5, 2, 2, 4, 4, 6, 6], total: 33 },
      { place: 20, team: "Сосискины", rounds: [2, 3, 1, 1.5, 2, 3, 6, 12], total: 30.5 },
      { place: 21, team: "Что то там это", rounds: [3, 2, 0, 2.5, 3, 4, 4, 4], total: 22.5 },
      { place: 22, team: "Голодные игры", rounds: [0, 2, 0, 1, 1, 3, 6, 4], total: 17 },
      { place: 23, team: "Зато Красивые", rounds: [2, 0, 0, 1, 2, 5, 2, 4], total: 16 },
      { place: 24, team: "Незнайки", rounds: [1, 2, 0, 0.5, 3, 1, 4, 1], total: 12.5 }
      ]
    }
  },
  {
    date: "2025-10-11", organizer: "Эйнштейн Party", title: "Классика №491_4",
    venue: "Metafora Bar", place: 6, score: 53, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-10-11 • Эйнштейн Party — Классика №491_4 (источник: albertparty.ru/game/23389)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Первое деепричастие", rounds: [8, 3, 12, 7, 18, 12, 6, 6], total: 72 },
      { place: 2, team: "Ближневосточный гектар", rounds: [9, 4, 12, 7, 18, 12, 4, 6], total: 72 },
      { place: 3, team: "Тот самый Лев", rounds: [9, 5, 10, 7, 18, 12, 4, 6], total: 71 },
      { place: 4, team: "Тайна третьей котлеты", rounds: [8, 3, 10, 8, 18, 8, 6, 6], total: 67 },
      { place: 5, team: "В гостях у сказки", rounds: [9, 3, 8, 5, 16, 8, 4, 4], total: 57 },
      { place: 6, team: "Генератор неслучайных ответов", rounds: [6, 3, 10, 6, 10, 8, 4, 6], total: 53 },
      { place: 7, team: "Да по фиг!", rounds: [8, 2, 7, 5, 16, 4, 4, 6], total: 52 },
      { place: 8, team: "Мяу и Фыр", rounds: [9, 3, 8, 4, 12, 8, 2, 6], total: 52 },
      { place: 9, team: "Как улитки", rounds: [8, 1, 4, 6, 12, 8, 4, 6], total: 49 },
      { place: 10, team: "Странные сны о Леониде Викторовиче Слуцком", rounds: [6, 2, 5, 4, 15, 8, 4, 4], total: 48 },
      { place: 11, team: "Касьянс посынка", rounds: [7, 0, 8, 3, 12, 5, 4, 4], total: 43 },
      { place: 12, team: "Запись дубля 2.0", rounds: [10, 3, 5, 7, 6, 0, 4, 6], total: 41 },
      { place: 13, team: "Рой душнил", rounds: [9, 3, 5, 7, 0, 0, 6, 6], total: 36 },
      { place: 14, team: "Недоразвитые гении", rounds: [7, 2, 1, 5, 12, 1, 0, 4], total: 32 },
      { place: 15, team: "Курс рубля", rounds: [5, 3, 1, 6, 0, 8, 2, 2], total: 27 },
      { place: 16, team: "Высокий IQ", rounds: [5, 2, 1, 4, 3, 3, 4, 4], total: 26 },
      { place: 17, team: "Артем, харе сливаться", rounds: [5, 2, 6, 5, 3, 0, 2, 2], total: 25 },
      { place: 18, team: "Double V", rounds: [6, 0, 5, 3, -3, 0, 2, 6], total: 19 },
      { place: 19, team: "Не Москва", rounds: [6, 1, 1, 2, 0, 1, 2, 4], total: 17 },
      { place: 20, team: "Глаз коррекции", rounds: [5, 1, 4, 5, -5, 1, 4, 2], total: 17 },
      { place: 21, team: "Голова два уха", rounds: [3, 1, 2, 3, 1, 0, 0, 4], total: 14 },
      { place: 22, team: "Крошка Марти", rounds: [6, 1, 4, 0, 0, 1, 0, 2], total: 14 },
      { place: 23, team: "Классные ребята", rounds: [2, 1, 1, 3, 0, 0, 2, 2], total: 11 },
      { place: 24, team: "Victory", rounds: [6, 0, 3, 7, -5, -6, 0, 4], total: 9 },
      { place: 25, team: "Слушаем и не осуждаем", rounds: [2, 0, 1, 3, 0, 1, 2, 0], total: 9 },
      { place: 26, team: "Прохоровы", rounds: [5, 1, 4, 2, -6, -4, 2, 4], total: 8 },
      { place: 27, team: "Монополисты", rounds: [4, 2, 2, 4, -2, -6, 0, 0], total: 4 }
      ]
    }
  },
  {
    date: "2025-10-04", organizer: "Эйнштейн Party", title: "Поп-культура: 00-е",
    venue: "Metafora Bar", place: 12, score: 27.5, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-10-04 • Эйнштейн Party — Поп-культура: 00-е (источник: albertparty.ru/game/23284)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Компост Мэлоун", rounds: [5, 6, 5, 4.5, 4, 12, 10, 18], total: 64.5 },
      { place: 2, team: "11 друзей Аюши", rounds: [3, 6, 3, 3.5, 5, 12, 9, 19], total: 60.5 },
      { place: 3, team: "Нас гуглят уфологи", rounds: [2, 5, 1, 2.5, 4, 10, 9, 16], total: 49.5 },
      { place: 4, team: "Низкий IQ", rounds: [5, 6, 1, 3.5, 3, 10, 7, 12], total: 47.5 },
      { place: 5, team: "ИИИИгааарь", rounds: [1, 6, 0, 3, 3, 8, 8, 16], total: 45 },
      { place: 6, team: "Эхо поколений", rounds: [3, 5, 2, 2, 3, 6, 11, 13], total: 45 },
      { place: 7, team: "Те еще штучки", rounds: [4, 4, 2, 2, 3, 10, 4, 14], total: 43 },
      { place: 8, team: "Экс-коллеги", rounds: [5, 5, 1, 2.5, 3, 10, 6, 9], total: 41.5 },
      { place: 9, team: "Козий комитет", rounds: [2, 4, 1, 1, 4, 4, 4, 11], total: 31 },
      { place: 10, team: "Поездка в Воронеж", rounds: [3, 3, 2, 2.5, 1, 6, 6, 7], total: 30.5 },
      { place: 11, team: "Притяжения больше нет", rounds: [2, 5, 0, 1.5, 4, 3, 5, 9], total: 29.5 },
      { place: 12, team: "Генератор неслучайных ответов", rounds: [6, 3, 1, 0.5, 1, 7, 6, 3], total: 27.5 },
      { place: 13, team: "Тюбики - Выжмем все, что сможем.", rounds: [3, 3, 0, 2, 3, 2, 4, 6], total: 23 },
      { place: 14, team: "Трулалейла трулала", rounds: [3, 2, 1, 1.5, 1, 4, 7, 3], total: 22.5 },
      { place: 15, team: "Flatbar", rounds: [3, 3, 1, 1, 1, 0, 2, 6], total: 17 },
      { place: 16, team: "Пешки", rounds: [2, 3, 0, 4, 1, 2, 3, 2], total: 17 },
      { place: 17, team: "1+1", rounds: [2, 4, 0, 0, 1, 2, 0, -1], total: 8 }
      ]
    }
  },
  {
    date: "2025-09-26", organizer: "Эйнштейн Party", title: "FUN #326_3",
    venue: "Nebar Moscow", place: 4, score: 53.5, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-09-26 • Эйнштейн Party — FUN #326_3 (источник: albertparty.ru/game/22877)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Дети хоронят коня", rounds: [6, 6, 6, 4, 6, 12, 12, 5], total: 57 },
      { place: 2, team: "Вопросом на вопрос", rounds: [5, 6, 6, 4.5, 6, 12, 12, 5], total: 56.5 },
      { place: 3, team: "Не ори на мать!", rounds: [6, 5, 6, 4.5, 6, 12, 12, 3], total: 54.5 },
      { place: 4, team: "Генератор неслучайных ответов", rounds: [4, 6, 4, 4.5, 6, 12, 12, 5], total: 53.5 },
      { place: 5, team: "Мишки Вани", rounds: [5, 6, 4, 4, 6, 12, 12, 3], total: 52 },
      { place: 6, team: "Послица, министерский советник и банкир", rounds: [5, 4, 6, 3, 6, 10, 10, 4.5], total: 48.5 },
      { place: 7, team: "Big babies", rounds: [5, 5, 6, 4.5, 6, 12, 8, 1.5], total: 48 },
      { place: 8, team: "USB здесь, а к Никите вопросики", rounds: [4, 5, 6, 3.5, 6, 12, 8, 3], total: 47.5 },
      { place: 9, team: "Играем как умеем", rounds: [6, 4, 5, 4, 6, 12, 6, 4], total: 47 },
      { place: 10, team: "Ни к чему не обязанные", rounds: [6, 3, 4, 3, 4, 12, 10, 3.5], total: 45.5 },
      { place: 11, team: "Рогатые трупоеды", rounds: [5, 4, 4, 2.5, 6, 8, 9, 3.5], total: 42 },
      { place: 12, team: "Щукинские маневры", rounds: [5, 4, 5, 3.5, 5, 12, 4, 3.5], total: 42 },
      { place: 13, team: "КорваЛОЛ и текила", rounds: [5, 3, 5, 4, 6, 9, 6, 3.5], total: 41.5 },
      { place: 14, team: "Лебедь, рак и мухи", rounds: [5, 3, 5, 2.5, 6, 11, 7, 1.5], total: 41 },
      { place: 15, team: "Леру и Бали", rounds: [3, 5, 2, 3.5, 4, 10, 8, 2], total: 37.5 },
      { place: 16, team: "Все пошло по Канту", rounds: [5, 5, 4, 3.5, 4, 8, 4, 1.5], total: 35 },
      { place: 17, team: "Space mushrooms", rounds: [4, 3, 5, 2, 5, 10, 4, 1.5], total: 34.5 },
      { place: 18, team: "Бесконечность", rounds: [3, 2, 5, 3, 5, 11, 1, 2.5], total: 32.5 },
      { place: 19, team: "СУП ИЗ СЕМИ ЛАБУБ", rounds: [5, 3, 5, 4, 4, 8, 2, 1.5], total: 32.5 },
      { place: 20, team: "Сальвадор в дали", rounds: [4, 4, 5, 3, 5, 10, 0, 0.5], total: 31.5 },
      { place: 21, team: "Чайник для инструкции", rounds: [2, 4, 4, 3, 5, 8, 4, 1], total: 31 },
      { place: 22, team: "Жены миллионеров", rounds: [3, 2, 4, 0.5, 3, 10, 2, 3], total: 27.5 },
      { place: 23, team: "а ь и Ъ", rounds: [4, 4, 4, 2.5, 4, 4, 1, 3], total: 26.5 },
      { place: 24, team: "Связь без брака", rounds: [2, 3, 4, 3.5, 4, 6, 3, 1], total: 26.5 },
      { place: 25, team: "Тугие извилины", rounds: [4, 3, 2, 3.5, 3, 10, -2, 1], total: 24.5 },
      { place: 26, team: "Наталья", rounds: [3, 3, 5, 2, 2, 7, 0, 2], total: 24 }
      ]
    }
  },
  {
    date: "2025-08-17", organizer: "Эйнштейн Party", title: "Классика №484_1",
    venue: "Metafora Bar", place: 7, score: 45, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-08-17 • Эйнштейн Party — Классика №484_1 (источник: albertparty.ru/game/22501)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "OnlyFuns", rounds: [10, 6, 12, 10, 18, 12, 2, 4], total: 74 },
      { place: 2, team: "Алибидерчи", rounds: [8, 5, 12, 8, 18, 12, 4, 6], total: 73 },
      { place: 3, team: "Легионеры из Нью Джерси", rounds: [10, 5, 10, 6, 12, 12, 4, 2], total: 61 },
      { place: 4, team: "Сибирский стыд", rounds: [10, 4, 5, 4, 13, 12, 6, 6], total: 60 },
      { place: 5, team: "Булочки в животе", rounds: [9, 4, 7, 7, 12, 8, 6, 2], total: 55 },
      { place: 6, team: "Просто посмотрим", rounds: [7, 3, 6, 7, 7, 8, 6, 4], total: 48 },
      { place: 7, team: "Генератор неслучайных ответов", rounds: [8, 6, 7, 4, 6, 8, 2, 4], total: 45 },
      { place: 8, team: "Сквончеры", rounds: [9, 2, 0, 7, 10, 6, 4, 6], total: 44 },
      { place: 9, team: "Настин день", rounds: [4, 4, 2, 8, 3, 3, 0, 0], total: 24 },
      { place: 10, team: "Starпёрс", rounds: [4, 2, 1, 2, 4, 3, 0, 2], total: 18 },
      { place: 11, team: "trofim419@gmail.com", rounds: [2, 3, 1, 3, 5, 2, 0, 2], total: 18 },
      { place: 12, team: "Туда Сюда", rounds: [2, 2, 1, 2, 0, 0, 0, 2], total: 9 }
      ]
    }
  },
  {
    date: "2025-07-01", organizer: "Эйнштейн Party", title: "Пой. Танцуй. Люби: 90 vs. 00 №28_1",
    venue: "O'Donoghue's Pub", place: 15, score: 52, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-07-01 • Эйнштейн Party — Пой. Танцуй. Люби: 90 vs. 00 №28_1 (источник: albertparty.ru/game/22082)",
      roundCount: 7,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Мы шли в караоке", rounds: [10, 4, 8, 18, 17, 18, 18], total: 93 },
      { place: 2, team: "The Who не спросят", rounds: [10, 5, 8, 18, 18, 18, 16], total: 93 },
      { place: 3, team: "Полли хочет пряник", rounds: [10, 4, 8, 17, 18, 18, 15], total: 90 },
      { place: 4, team: "Водочка с селедочкой", rounds: [8, 1, 8, 13, 14, 18, 14], total: 76 },
      { place: 5, team: "Prosecco", rounds: [10, 3, 7, 17, 17, 4, 14], total: 72 },
      { place: 6, team: "отчаянная инКВИЗиция", rounds: [7, 3, 8, 16, 12, 15, 11], total: 72 },
      { place: 7, team: "Ты меня называлаааааа!", rounds: [8, 1, 8, 15, 14, 18, 8], total: 72 },
      { place: 8, team: "Не знаем, но угадаем", rounds: [6, 3, 6, 16, 13, 18, 8], total: 70 },
      { place: 9, team: "Тичеры", rounds: [10, 4, 8, 15, 11, 16, 2], total: 66 },
      { place: 10, team: "Музы конфуза", rounds: [6, 2, 8, 12, 11, 14, 12], total: 65 },
      { place: 11, team: "Скрыжапель", rounds: [8, 5, 6, 16, 14, 12, 3], total: 64 },
      { place: 12, team: "Святые МОТОугодники", rounds: [8, 1, 7, 12, 10, 18, 5], total: 61 },
      { place: 13, team: "ВИА Мармеладзе", rounds: [6, 2, 7, 10, 11, 18, 5], total: 59 },
      { place: 14, team: "42", rounds: [7, 2, 6, 13, 12, 12, 1], total: 53 },
      { place: 15, team: "Генератор неслучайных ответов", rounds: [8, 2, 6, 12, 10, 12, 2], total: 52 },
      { place: 16, team: "Танцуй, детка!", rounds: [9, 2, 5, 12, 10, 5, 2], total: 45 },
      { place: 17, team: "Изо всех сил", rounds: [5, 2, 4, 13, 8, 6, 4], total: 42 },
      { place: 18, team: "Капибарчики", rounds: [8, 2, 4, 9, 9, 5, 3], total: 40 },
      { place: 19, team: "Умный и блондинки", rounds: [3, 2, 4, 8, 11, 12, -2], total: 38 },
      { place: 20, team: "ХХХ и звёзды", rounds: [3, 2, 5, 9, 9, 9, -1], total: 36 },
      { place: 21, team: "Двое в лодке не считая ВИА Гры", rounds: [2, 1, 5, 9, 6, 5, 5], total: 33 },
      { place: 22, team: "РэпТоп", rounds: [6, 1, 5, 8, 7, 7, -1], total: 33 },
      { place: 23, team: "Магистры", rounds: [3, 1, 2, 12, 7, -1, 4], total: 28 },
      { place: 24, team: "Сиииильные индейки", rounds: [1, 1, 2, 3, 4, 3, 0], total: 14 },
      { place: 25, team: "Electric Vibes", rounds: [0, 1, 1, 5, 4, 1, 1], total: 13 },
      { place: 26, team: "Котята", rounds: [1, 0, 2, 2, 2, 5, 0], total: 12 }
      ]
    }
  },
  {
    date: "2025-06-21", organizer: "Эйнштейн Party", title: "FUN #312_4",
    venue: "Nebar Moscow", place: 3, score: 49.5, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-06-21 • Эйнштейн Party — FUN #312_4 (источник: albertparty.ru/game/21674)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "Голый Сева", rounds: [4, 6, 4, 4, 5, 12, 12, 5], total: 52 },
      { place: 2, team: "Чиж&Ки", rounds: [6, 4, 4, 3.5, 5, 12, 12, 4.5], total: 51 },
      { place: 3, team: "Генератор неслучайных ответов", rounds: [4, 5, 5, 3.5, 5, 12, 12, 3], total: 49.5 },
      { place: 4, team: "кОРелия", rounds: [5, 5, 5, 4.5, 5, 10, 8, 4], total: 46.5 },
      { place: 5, team: "Споры Грибов", rounds: [5, 4, 5, 4, 5, 12, 7, 3.5], total: 45.5 },
      { place: 6, team: "Экспериментальный полёт астронавта Семёнова", rounds: [5, 3, 5, 4.5, 4, 8, 12, 3], total: 44.5 },
      { place: 7, team: "Немолодые ветра", rounds: [5, 6, 4, 4, 6, 8, 8, 2.5], total: 43.5 },
      { place: 8, team: "Лебедь, рак и мухи", rounds: [5, 4, 6, 5, 4, 8, 8, 3], total: 43 },
      { place: 9, team: "Еле собрались", rounds: [6, 6, 4, 4.5, 4, 10, 0, 3.5], total: 38 },
      { place: 10, team: "ТРИКО!", rounds: [6, 5, 4, 4, 4, 3, 8, 3], total: 37 },
      { place: 11, team: "Соевый союз", rounds: [4, 3, 2, 4.5, 3, 4, 6, 1.5], total: 28 },
      { place: 12, team: "Пупуни", rounds: [4, 4, 2, 2, 3, 2, 6, 2.5], total: 25.5 },
      { place: 13, team: "Папа, я покушала", rounds: [5, 4, 2, 3.5, 5, 3, 0, 2], total: 24.5 },
      { place: 14, team: "Слоны", rounds: [3, 1, 2, 3.5, 3, 3, 2, 3], total: 20.5 },
      { place: 15, team: "Скоро отпуск!", rounds: [2, 3, 3, 2.5, 2, 3, 3, 1.5], total: 20 },
      { place: 16, team: "4+1", rounds: [2, 1, 3, 3, 3, 4, -2, 2.5], total: 16.5 }
      ]
    }
  },
  {
    date: "2025-06-07", organizer: "Эйнштейн Party", title: "Верните мой 2007-ой №2_2",
    venue: "Metafora Bar", place: 5, score: 53.5, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-06-07 • Эйнштейн Party — Верните мой 2007-ой №2_2 (источник: albertparty.ru/game/21620)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "И Сережи тоже", rounds: [5, 6, 5, 4, 6, 12, 12, 19], total: 69 },
      { place: 2, team: "The Wassermans", rounds: [5, 6, 5, 3, 4, 10, 12, 18], total: 63 },
      { place: 3, team: "Tea party muting", rounds: [5, 6, 5, 3.5, 4, 12, 12, 14], total: 61.5 },
      { place: 4, team: "Назло рекордам", rounds: [6, 6, 6, 2.5, 4, 12, 10, 12], total: 58.5 },
      { place: 5, team: "Генератор неслучайных ответов", rounds: [4, 3, 5, 2.5, 3, 12, 12, 12], total: 53.5 },
      { place: 6, team: "За знакомство", rounds: [1, 6, 5, 3, 2, 10, 12, 12], total: 51 },
      { place: 7, team: "Не конкретный вопрос", rounds: [5, 6, 5, 3, 1, 6, 6, 16], total: 48 },
      { place: 8, team: "Странные сны о Леониде Викторовиче Слуцком", rounds: [4, 5, 4, 2.5, 2, 10, 6, 14], total: 47.5 },
      { place: 9, team: "###Темнота Внутри###", rounds: [5, 6, 5, 4.5, 2, 4, 8, 13], total: 47.5 },
      { place: 10, team: "Вобла и Ко", rounds: [2, 5, 3, 2, 1, 5, 8, 19], total: 45 },
      { place: 11, team: "Чунга-Чанга", rounds: [5, 5, 3, 1.5, 3, 5, 8, 14], total: 44.5 },
      { place: 12, team: "Огненные драконы", rounds: [2, 5, 3, 1.5, 2, 10, 3, 13], total: 39.5 },
      { place: 13, team: "Рики-тики-твари", rounds: [3, 4, 2, 2.5, 3, 10, 3, 4], total: 31.5 },
      { place: 14, team: "Я же говорила!", rounds: [3, 4, 1, 2, 0, 1, 2, 5], total: 18 },
      { place: 15, team: "Пивозавры", rounds: [3, 4, 2, 1, 2, 1, 3, 1], total: 17 },
      { place: 16, team: "В шортах с лонгом", rounds: [1, 3, 2, 2, 1, -4, 2, 7], total: 14 },
      { place: 17, team: "Пивопузики", rounds: [3, 1, 1, 1, 2, 0, 0, 2], total: 10 }
      ]
    }
  },
  {
    date: "2025-06-01", organizer: "Эйнштейн Party", title: "Классика №473_1",
    venue: "Metafora Bar", place: 10, score: 55, photoUrl: "", photoThumb: "",
    results: {
      note: "2025-06-01 • Эйнштейн Party — Классика №473_1 (источник: albertparty.ru/game/21377)",
      roundCount: 8,
      teamName: "Генератор неслучайных ответов",
      standings: [
      { place: 1, team: "OnlyFuns", rounds: [10, 5, 12, 9, 18, 12, 6, 6], total: 78 },
      { place: 2, team: "Внутренняя интеллигентность", rounds: [10, 5, 10, 8, 18, 12, 6, 4], total: 73 },
      { place: 3, team: "Кокошин эль", rounds: [10, 4, 10, 8, 15, 12, 6, 6], total: 71 },
      { place: 4, team: "Старушки Лопес", rounds: [10, 5, 10, 8, 18, 8, 6, 6], total: 71 },
      { place: 5, team: "Томные лошадки", rounds: [9, 5, 12, 9, 15, 8, 6, 4], total: 68 },
      { place: 6, team: "Метод Тыка", rounds: [10, 4, 12, 6, 15, 8, 6, 6], total: 67 },
      { place: 7, team: "Затмение", rounds: [9, 4, 10, 7, 15, 8, 4, 6], total: 63 },
      { place: 8, team: "Отдых грибника", rounds: [8, 4, 8, 7, 15, 4, 4, 6], total: 56 },
      { place: 9, team: "Мы далеки от одеяла", rounds: [9, 3, 10, 8, 12, 4, 6, 4], total: 56 },
      { place: 10, team: "Генератор неслучайных ответов", rounds: [8, 5, 10, 9, 15, -4, 6, 6], total: 55 },
      { place: 11, team: "Сами своего рода знатоки", rounds: [9, 4, 9, 8, 7, 8, 2, 4], total: 51 },
      { place: 12, team: "Уналашка Холдингс", rounds: [7, 5, 10, 8, 12, -4, 4, 6], total: 48 },
      { place: 13, team: "Genius", rounds: [7, 3, 12, 7, 12, -4, 4, 6], total: 47 },
      { place: 14, team: "USB здесь, а к Никите вопросики", rounds: [6, 3, 4, 8, 9, 8, 2, 6], total: 46 },
      { place: 15, team: "Пятизвездочный теремок", rounds: [9, 4, 8, 5, 3, 4, 6, 6], total: 45 },
      { place: 16, team: "Гарри", rounds: [6, 2, 4, 6, 10, 1, 4, 4], total: 37 },
      { place: 17, team: "Может договоримся?", rounds: [4, 3, 6, 7, 9, 0, 4, 4], total: 37 },
      { place: 18, team: "неКюри", rounds: [4, 3, 4, 6, 7, 4, 2, 4], total: 34 },
      { place: 19, team: "Серебро", rounds: [5, 3, 8, 5, 7, 2, 0, 0], total: 30 },
      { place: 20, team: "Скрытый потенциал", rounds: [6, 1, 4, 6, 0, 4, 0, 2], total: 23 }
      ]
    }
  }
];
