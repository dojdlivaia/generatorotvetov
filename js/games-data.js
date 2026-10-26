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
    venue: "Савеловская (Online)", place: 34, photoUrl: "", photoThumb: ""
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
    date: "2026-10-12", organizer: "Squiz", title: "#448 (онлайн)",
    venue: "Савеловская (Online)", place: 56, photoUrl: "", photoThumb: ""
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
    venue: "OldSchool Pub Маяковская", place: 8,
    photoUrl: "https://findquiz.ru/event/einstein-party/photo/344258-klassika-541-1",
    photoThumb: "https://sun9-65.userapi.com/s/v1/ig2/2LY8Yp1VAwZiwokRxVohfoEyjXUBp_MW8g75CXsYUt3Z2OWq4ULmoI11t6wfLVeF3VW6_-eU5sM4SniSepalDBPW.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=640x0"
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
    photoThumb: "https://squiz.ru/storage/v1/object/public/game-photos/f31ee4f4-2019-4485-b080-bb0038d559ca/3488f224-0346-4c46-b00a-923484a95255_thumb.jpg"
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
    venue: "Summer Punch", place: 3, photoUrl: "", photoThumb: ""
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
    photoThumb: ""
  },
  {
    date: "2026-06-20", organizer: "Квизиум", title: "«Обо всём» #881",
    venue: "The Tipsy Pub", place: 2,
    photoUrl: "https://findquiz.ru/event/quizium/photo/333524-obo-vsem-881",
    photoThumb: ""
  },
  {
    date: "2026-06-07", organizer: "Эйнштейн Party", title: "Классика №526_1",
    venue: "OldSchool Pub Маяковская", place: 11,
    photoUrl: "https://findquiz.ru/event/einstein-party/photo/330755-klassika-526-1",
    photoThumb: ""
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
    photoThumb: ""
  },
  {
    date: "2026-05-01", organizer: "Квизиум", title: "«Обо всём» #866",
    venue: "The Tipsy Pub", place: 6,
    photoUrl: "https://findquiz.ru/event/quizium/photo/325356-obo-vsem-866",
    photoThumb: "https://sun9-8.userapi.com/s/v1/ig2/oj9_YALzQQB0Pxbl3eGrsx_l1qAl8NJS7UM99yDQUtZE6yaAVGEqpAS_xsqqWrQynicH97BcUNahK5smSmWJdM2k.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=640x0"
  },

  /* ================= 2026 (апрель) ================= */
  {
    date: "2026-04-30", organizer: "Эйнштейн Party", title: "FUN #359_2",
    venue: "Lions Head Pub", place: 13,
    photoUrl: "https://findquiz.ru/event/einstein-party/photo/320190-fun-359-2",
    photoThumb: "https://sun9-84.userapi.com/s/v1/ig2/PhJ-CAgJpLLUvRtkCpC_eflADByktQpB4y-ZcPKz81PlkxqVqcWOrhj2YoB9Y4URnrGaxcfOr7HpFt8PqF5rBms9.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920&from=bu&cs=640x0"
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

  /* ================= 2025 (декабрь) ================= */
  {
    date: "2025-12-30", organizer: "Эйнштейн Party", title: "Классика №503_3",
    venue: "Lions Head Pub", place: 2, photoUrl: "", photoThumb: ""
  },
  {
    date: "2025-12-18", organizer: "Квизиум", title: "«Обо всём» #828",
    venue: "The Tipsy Pub", place: null,
    photoUrl: "https://findquiz.ru/event/quizium/photo/305260-obo-vsem-828",
    photoThumb: ""
  },
  {
    date: "2025-12-13", organizer: "Мозгва", title: "Зачетная 931 День 2",
    venue: "Коктейль Холл", place: 16, photoUrl: "", photoThumb: ""
  },
  {
    date: "2025-12-11", organizer: "BelkinQuiz", title: "БелкинКвиз #401",
    venue: "Пражка", place: null, photoUrl: "", photoThumb: ""
  },

  /* ================= 2025 (ноябрь) ================= */
  {
    date: "2025-11-22", organizer: "Эйнштейн Party", title: "FUN #334_4",
    venue: "Metafora Bar", place: 4, photoUrl: "", photoThumb: ""
  },
  {
    date: "2025-11-30", organizer: "Squiz", title: "#930.3",
    venue: "Москва", place: 4, photoUrl: "", photoThumb: ""
  },

  /* ================= 2025 (ноябрь, далее) ================= */
  {
    date: "2025-11-21", organizer: "Квизиум", title: "«Обо всем» [Новички] #819",
    venue: "Ibis Kitchen", place: null, photoUrl: "", photoThumb: ""
  },

  /* ================= 2025 (октябрь) ================= */
  {
    date: "2025-10-29", organizer: "Эйнштейн Party", title: "Классика №494_3",
    venue: "Metafora Bar", place: 15, photoUrl: "", photoThumb: ""
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
    venue: "Coin hall", place: 7, photoUrl: "", photoThumb: ""
  },
  {
    date: "2025-09-13", organizer: "Эйнштейн Party", title: "FUN #324_4",
    venue: "Nebar Moscow", place: 7, photoUrl: "", photoThumb: ""
  },

  /* ================= 2025 (август) ================= */
  {
    date: "2025-08-23", organizer: "Мозгва", title: "Зачетная 909",
    venue: "Коктейль Холл", place: 3, photoUrl: "", photoThumb: ""
  },
  {
    date: "2025-08-02", organizer: "Эйнштейн Party", title: "Классика №481_5",
    venue: "Metafora Bar", place: null, photoUrl: "", photoThumb: ""
  },

  /* ================= 2025 (июль) ================= */
  {
    date: "2025-07-26", organizer: "Squiz", title: "Лига новичков. Игра 177.2",
    venue: "Liberty", place: 7, photoUrl: "", photoThumb: ""
  },
  /* ================= 2025 (июнь) ================= */
  {
    date: "2025-06-28", organizer: "Squiz", title: "Лига новичков #173.2",
    venue: "Metafora Bar", place: 4,
    photoUrl: "https://vk.ru/album-140791428_307696618",
    photoThumb: "https://sun9-54.vkuserphoto.ru/s/v1/ig2/KLbjuJnX7mHP_dl-d07yQ9g3bKHPpmAXPyDT-z98ndKraS06hhfimgGYJBNPH_dKpqXy2fOMVUw6nKmjGhpEH23W.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,1920x1280&from=bu&cs=1920x0"
  },
  {
    date: "2025-07-05", organizer: "Мозгва", title: "Новички 493 День 2",
    venue: "Коктейль Холл", place: null,
    photoUrl: "https://findquiz.ru/event/mozgva/photo/282712-novichki-493-den-2",
    photoThumb: "https://sun9-51.userapi.com/s/v1/ig2/Lm7jRjatsUKFTLOp5vqCwalyusPEd-nhzVDWeNUtwrcZ9aJu3SBFzQk3TXnUImcM_UoMBsE8L0JaWQ9wq5S079M-.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2000x1333&from=bu&cs=640x0"
  }
];
