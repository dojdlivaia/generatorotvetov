/**
 * Данные об играх квизовой команды «Генератор неслучайных ответов» (Москва).
 * Чтобы добавить новую игру — допишите объект в массив GAMES.
 * date — в формате ГГГГ-ММ-ДД (если год не указан в источнике, считается текущий — 2026).
 * organizer — организатор игры; поле host заполняется автоматически из ссылки photoUrl.
 * photoUrl может быть пустой строкой, если ссылки на альбом нет.
 * photoThumb — необязательное поле: ссылка на превью фотоальбома.
 */
const TEAM_NAME = "Генератор неслучайных ответов";
const TEAM_CITY = "Москва";

const GAMES = [
  {
    date: "2026-10-21",
    organizer: "Squiz",
    title: "#1018.2",
    venue: "Золберг",
    place: 1,
    photoUrl: ""
  },
  {
    date: "2026-10-19",
    organizer: "Squiz",
    title: "#451 (онлайн)",
    venue: "Савеловская (Online)",
    place: 34,
    photoUrl: ""
  },
  {
    date: "2026-10-18",
    organizer: "Квизиум",
    title: "«Обо всём» #915",
    venue: "Lions Head Pub",
    place: 7,
    photoUrl: "https://findquiz.ru/event/quizium/photo/352210-obo-vsem-915",
    photoThumb: "https://sun9-71.userapi.com/s/v1/ig2/L79hcsnQIDPmYbnmHBzgJEmjzTc343DoWHZQv2ekm8iN4ujAT550w5eOTqJDFAUORiAr1IeuVx3Wv2ocgqmR3SoN.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=640x0"
  },
  {
    date: "2026-10-12",
    organizer: "Squiz",
    title: "#448 (онлайн)",
    venue: "Савеловская (Online)",
    place: 56,
    photoUrl: ""
  },
  {
    date: "2026-10-11",
    organizer: "Квизиум",
    title: "«Обо всём» #913",
    venue: "The Tipsy Pub",
    place: 8,
    photoUrl: "https://findquiz.ru/event/quizium/photo/351058-obo-vsem-913",
    photoThumb: "https://sun9-54.userapi.com/s/v1/ig2/XEOcWYEk3oRwi_x_-C6UH_MbN9kDI8oYU7SXayFTzE4aL7aEw3-q1gw7Vh2GUjG7sTTFKcBuefkpQw_vrUEr8anT.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x854,1440x961,2400x1601&from=bu&cs=640x0"
  },
  {
    date: "2026-09-23",
    organizer: "Squiz",
    title: "#1010.3",
    venue: "Summer Punch",
    place: 2,
    photoUrl: "https://squiz.ru/photos/260923-rxf",
    photoThumb: "https://squiz.ru/storage/v1/object/public/game-photos/113818e3-c08e-46c2-ac73-5efe7bc1abe9/0e9bcdd5-edb0-46e9-8578-1b6c20f5efa4_thumb.jpg"
  },
  {
    date: "2026-09-20",
    organizer: "Эйнштейн Party",
    title: "Классика №541_1",
    venue: "OldSchool Pub Маяковская",
    place: 8,
    photoUrl: "https://findquiz.ru/event/einstein-party/photo/344258-klassika-541-1"
  },
  {
    date: "2026-08-27",
    organizer: "Квизиум",
    title: "Азартный #50",
    venue: "O'Donoghue's Pub",
    place: 3,
    photoUrl: "https://findquiz.ru/event/quizium/photo/343222-azartnyy-50"
  },
  {
    date: "2026-08-22",
    organizer: "GOИКвиз",
    title: "Назад в СССР (повтор от 12.08)",
    venue: "Пражка",
    place: 3,
    photoUrl: "https://findquiz.ru/event/go-quiz/photo/341498-nazad-v-sssr-povtor-ot-12-08",
    photoThumb: "https://sun9-83.userapi.com/s/v1/ig2/g0qXCGfGH_zeXza8Mlt-_vMTRnl4L5dr6iba1ipdkqkC5BF6V1DxJxX3JReHwXE0hFXKAGVEWjSfWhUhcLOm_6gE.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x854,1440x960,2402x1602&from=bu&cs=640x0"
  },
  {
    date: "2026-08-22",
    organizer: "Squiz",
    title: "Игра 1004.1",
    venue: "Liberty",
    place: 6,
    photoUrl: "https://findquiz.ru/event/squiz/photo/339351-igra-1004-1",
    photoThumb: "https://squiz.ru/storage/v1/object/public/game-photos/f31ee4f4-2019-4485-b080-bb0038d559ca/3488f224-0346-4c46-b00a-923484a95255_thumb.jpg"
  },
  {
    date: "2026-07-23",
    organizer: "Squiz",
    title: "#996.3",
    venue: "Summer Punch",
    place: 3,
    photoUrl: ""
  },
  {
    date: "2026-07-18",
    organizer: "Квизиум",
    title: "«Обо всём» #889",
    venue: "Lions Head Pub",
    place: 5,
    photoUrl: "https://findquiz.ru/event/quizium/photo/337161-obo-vsem-889"
  },
  {
    date: "2026-06-26",
    organizer: "Квизиум",
    title: "«Обо всём» #882",
    venue: "Lions Head Pub",
    place: 2,
    photoUrl: "https://findquiz.ru/event/quizium/photo/334020-obo-vsem-882"
  },
  {
    date: "2026-06-20",
    organizer: "Квизиум",
    title: "«Обо всём» #881",
    venue: "The Tipsy Pub",
    place: 2,
    photoUrl: "https://findquiz.ru/event/quizium/photo/333524-obo-vsem-881"
  },
  {
    date: "2026-06-07",
    organizer: "Эйнштейн Party",
    title: "Классика №526_1",
    venue: "OldSchool Pub Маяковская",
    place: 11,
    photoUrl: "https://findquiz.ru/event/einstein-party/photo/330755-klassika-526-1"
  },
  {
    date: "2026-05-23",
    organizer: "Квизиум",
    title: "«Обо всём» [Новички] #873",
    venue: "Lions Head Pub",
    place: 4,
    photoUrl: "https://findquiz.ru/event/quizium/photo/329374-obo-vsem-novichki-873"
  },
  {
    date: "2026-05-16",
    organizer: "GOИКвиз",
    title: "Классика_353.1",
    venue: "Пражка",
    place: 3,
    photoUrl: "https://findquiz.ru/event/go-quiz/photo/326584-klassika-353-1"
  },
  {
    date: "2026-05-01",
    organizer: "Квизиум",
    title: "«Обо всём» #866",
    venue: "The Tipsy Pub",
    place: 6,
    photoUrl: ""
  },
  {
    date: "2026-04-30",
    organizer: "Эйнштейн Party",
    title: "FUN #359_2",
    venue: "Lions Head Pub",
    place: 13,
    photoUrl: ""
  },
  {
    date: "2026-04-18",
    organizer: "Квизиум",
    title: "«Обо всём» #863",
    venue: "Lions Head Pub",
    place: 4,
    photoUrl: ""
  },
  {
    date: "2026-04-12",
    organizer: "Квизиум",
    title: "«Обо всём» #861",
    venue: "Lions Head Pub",
    place: 3,
    photoUrl: ""
  },
  {
    date: "2026-03-26",
    organizer: "ИГРА",
    title: "ИГРА #45",
    venue: "Temple Bar",
    place: 8,
    photoUrl: ""
  },
  {
    date: "2026-03-14",
    organizer: "Квизиум",
    title: "Азартный [Новички] #46",
    venue: "Lions Head Pub",
    place: 4,
    photoUrl: ""
  },
  {
    date: "2026-02-23",
    organizer: "Квизиум",
    title: "«Обо всём» #847",
    venue: "The Tipsy Pub",
    place: 5,
    photoUrl: ""
  },
  {
    date: "2026-02-14",
    organizer: "Квизиум",
    title: "«Обо всём» #845",
    venue: "Lions Head Pub",
    place: 5,
    photoUrl: ""
  },
  {
    date: "2026-01-31",
    organizer: "Квизиум",
    title: "«Обо всём» #841",
    venue: "The Tipsy Pub",
    place: 3,
    photoUrl: ""
  },
  {
    date: "2026-01-31",
    organizer: "Квизиум",
    title: "«Обо всём» [Новички] #841",
    venue: "Жажда",
    place: 3,
    photoUrl: ""
  },
  {
    date: "2025-12-30",
    organizer: "Эйнштейн Party",
    title: "Классика №503_3",
    venue: "Lions Head Pub",
    place: 2,
    photoUrl: ""
  },
  {
    date: "2025-12-18",
    organizer: "Квизиум",
    title: "«Обо всём» #828",
    venue: "The Tipsy Pub",
    place: 4,
    photoUrl: "https://findquiz.ru/event/quizium/photo/305260-obo-vsem-828"
  },
  {
    date: "2025-12-13",
    organizer: "Мозгва",
    title: "Зачётная 931 (День 2)",
    venue: "Коктейль Холл",
    place: 16,
    photoUrl: ""
  },
  {
    date: "2025-12-11",
    organizer: "BelkinQuiz",
    title: "БелкинКвиз #401",
    venue: "Пражка",
    place: 13,
    photoUrl: ""
  },
  {
    date: "2025-11-30",
    organizer: "Squiz",
    title: "#930.3",
    venue: "Москва",
    place: 4,
    photoUrl: ""
  },
  {
    date: "2025-11-22",
    organizer: "Эйнштейн Party",
    title: "FUN #334_4",
    venue: "Metafora Bar",
    place: 4,
    photoUrl: ""
  }
];

/* Автоматическое определение хоста фотоальбома (findquiz.ru / squiz.ru) по ссылке */
GAMES.forEach((g) => {
  if (g.photoUrl && !g.host) {
    try { g.host = new URL(g.photoUrl).hostname.replace("www.", ""); } catch (e) { /* noop */ }
  }
});
