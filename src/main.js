import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'ru',
  fallbackFormat: 'en',
  messages: {
    ru: {
      language: 'RU',
      first: {
        navbar: {
          prague: 'ПРАГА',
          get_call: 'ЗАКАЗАТЬ ЗВОНОК',
        },
        navigation: {
          timetable: 'Расписание',
          what_is_soroboom: 'Что такое Соробан',
          blog: 'Блог',
          gallery: 'Галерея',
        },
        text: {
          menthal_arithmetic: 'Ментальная арифметика',
          development_of_intelligence: 'Развитие интеллекта',
          improves: 'Улучшим',
          speed_of_decision_making: 'Скорость принятия решений',
          concentration_of_attention: 'Концентрация внимания',
          speed_of_reactions: 'Быстроту реакций',
          memory: 'Память',
          your_child: 'вашего ребёнка по методике',
        },
        contact: {
          join: 'ЗАПИСАТЬСЯ НА',
          free_trial_lesson: 'БЕСПЛАТНОЕ ПРОБНОЕ ЗАНЯТИЕ',
          contact_form: {
            your_name: 'ВАШЕ ИМЯ',
            your_phone_number: 'ВАШ ТЕЛЕФОН',
            join: 'ЗАПИСАТЬСЯ'
          }
        },
        flex: {
          years_of_experience: 'лет опыта',
          in_child_development: 'В развитии детей',
          children: 'детей',
          trained: 'обучили по всему миру',
          countries: 'стран',
          online: 'онлайн и офлайн обучение',
        }
      },
      second: {
        give_your_child: 'Подарите своему ребёнку',
        start: 'лучший старт в жизни',
        modules: {
          valuable: 'Ценные',
          skills: 'навыки',
          speed_of_reactions: 'Быстрота реакции',
          logical_thinking: 'Логическое мышление',
          self_confidence: 'Уверенность в себе',
          absorb: 'Усваивать большие объемы информации',
          benefits: 'Преимущества',
          improved_concentration: 'Улучшение концентрации внимания',
          exact_sciences: 'Точные науки даются легко',
          increased_school: 'Повышение успеваемости в школе на',
          extension: 'Развитие',
          both_hemispheres: 'Обоих полушарий мозга левое ( логическое ) правое ( образное )',
          cognitive_functions: 'Когнитивных функций',
          brain_efficiency: 'КПД головного мозга',
          for: 'Для',
          preschoolers: 'дошколят',
          let_us_help: 'Поможем справиться с нагрузкой в школе',
          let_us_teach: 'Научим основам счета в уме',
          increase: 'Повысим уверенность ребёнка в своих силах',
          developing: 'Развиваем мелкую моторику',
        }
      },
      thanking: {
        thanks: 'Благодаря',
        method: 'методике',
        child_trains: 'ребенок тренирует',
        unique: 'Уникальная методика активизирует работу обоих полушарий мозга ребенка',
        while: 'Во время тренировок ребенок использует японские счеты соробан как средство для решения задач, вовлекая в это свое воображение',
      },
      third: {
        the_soroboom_technique: 'Методика Soroboom®, способствует созданию и укреплению',
        new_neural_connections: 'новых нейронных связей головного мозга ребенка',
        results_already: 'результаты уже',
        after_first_month: 'после 1-го месяца',
        of_training: 'тренировок',
      },
      mobile_pink_page: {
        only: 'Ребёнок во время тренировок в Soroboom увеличивает КПД мозга многократно, благодаря чему формируются и укрепляются новые нейронные связи',
      },
      formats: {
        formats: 'Форматы',
        of_education: 'обучения',
        online_offline: {
          online: 'Онлайн',
          the_class_is_held: 'Занятие проводится',
          once_a_week: 'один раз в неделю',
          and_consists_of: 'и состоит из',
          two_classes: 'двух уроков по 35-45 мин',
          with_proffesional_trainer: 'с профессиональным тренером',
          in_groups_up_to_six_people: 'В группах до 6-ти чел',
          in_school: 'В школе',
          in_groups_up_to_ten_people: 'В группах до 10-ти чел',
        },
      },
      sixth: {
        how_the_training_works: 'Как проходит обучение',
        in_soroboom: 'в Soroboom®?',
        visit: 'посещать',
        soroboom: 'Soroboom',
        at_least_once_a_week: 'достаточно раз в неделю',
        modules: {
          online: 'Онлайн',
          classes: 'занятия',
          you_will_need: 'Понадобится 2 гаджета и доступ в интернет',
          thanks: 'Благодаря собственной онлайн платформе обучения, ученик обучается с той же эффективностью что и в классе',
          home_workouts: 'Домашние тренировки основаны на методических алгоритмах с использованием ИИ',
          in_school: 'в Школе',
          children_are_supervised: 'Дети находятся под наблюдением квалифицированного тренера в течение всего времени пребывания в школе',
          during_the_lesson: 'Во время урока, тренер использует различные формы заданий, активные и за партой',
          thanks_to_small_groups: 'Благодаря небольшим группам до 10 человек, тренер обеспечивает максимальное внимание к каждому ребенку',
        },
      },
      slide_images: {
        how_are_the_classes: 'Как проходят',
        conducted: 'занятия',
        texts: {
          tv_with_a_large_diagonal: 'TV с большой диагональю на котором тренер запускает тренажёр для тренировок',
          large_training: 'Большие тренировочные настенные и напольные абакусы',
          a_sofa: 'Диванчик на котором дети могут отдохнуть во время перерыва',
          showcase_of_a_store: 'Витрина магазина в котором дети могут приобрести призы за монетки Soroboom',
          spacious_bright: 'Просторные светлые кабинеты с необходимым школьным оборудованием и демонстрационными материалами',
        }
      },
      eight: {
        calculator: {
          electronic: 'Электронные',
          abacus_e_soroboom: 'счёты Абакус “E soroboom“',
          innovative_teaching_method: 'Инновационный метод обучения',
        },
        cards: {
          progress_tracking: 'Отслеживание прогресса',
          in_two_clicks: 'в 2 клика',
          training_effectiveness: 'Эффективность обучения',
          increases: 'повышается на 65%',
          individual_approach: 'Индивидуальный подход',
          to_the_student: 'к ученику',
          patented: 'Запатентованнная',
          technology_one: 'технология No1 на рынке',
          childrens_education: 'детского образования',
        }
      },
      apps: {
        header: {
          try_our: 'Попробуйте наши',
          apps: 'приложения',
        },
        content: {
          soroboom_ar: 'Soroboom AR',
          soroboom_lite: 'Soroboom Lite',
        }
      },
      system_working: {
        our_system_helps: 'Наша система помогает',
        formation: 'формированию и укреплению новых нейронных связей головного мозга',
        child_thanks: 'ребенка благодаря системным тренировкам. Мы помогаем ребёнку максимально развить интеллект и логическое мышление, что поможет ему во всех сферах жизни',
        innovative_teaching: 'Инновационная методика обучения разработана нашими специалистами в области развития интеллекта у детей',
        implementation: 'Внедрение искусственного интеллекта',
        helps_individualy: 'помогает индивидуально адаптировать нагрузку для каждого ребёнка',
        unique_system: 'Уникальная система мотивации обучения Soroboom',
        helps_child: 'помогает ребёнку',
        self_confidence: '1. Повысить уверенность в себе и самооценку',
        increase_motivation: '2. Увеличить мотивацию к обучению',
        love_math: '3. Полюбить математику'
      },
      we_are_cool: {
        header: {
          said: 'Говорят',
          we_are_cool: 'что мы классные',
        },
        content: {
          marina: 'Марина Ткач',
          date1: '12.02.24',
          thanks_trainer: 'Спасибо тренеру Soroboom.  Сын приходит домой веселый и счастливый. Очень приятно когда работа с детьми – это выбор души, а не обстоятельств 🙏',
          oksana: 'Оксана Лысенко',
          happy: 'Мы невероятно рады, что выбрали Soroboom для нашего ребенка.  Видимый результат увидели через несколько занятий. Ребёнок идет на уроки с радостью и вдохновением',
        }
      },
      kid_like: {
        ten_years: 'За десять лет нашей работы в Украине методика была проверена и усовершенствована',
        results: 'Результаты',
        our_trainings: 'наших тренировок подтверждены успехами наших учеников'
      },
      last: {
        left: {
          copyright: '©Copyright 2013-2024 by Iurii Novosolov',
          rights: 'Все права защищены',
          copies: 'Запрещено любое копирование материалов ресурса без письменного согласия владельца'
        },
        center: {
          menu: 'МЕНЮ',
          franchise: 'Франшиза',
        },
        right: {
          countries: 'СОРОБАН® В ДРУГИХ СТРАНАХ',
        }
      }
    },
    cz: {
      language: 'CZ',
      first: {
        navbar: {
          prague: 'Praha',
          get_call: 'OBJEDNAT HOVOR',
        },
        navigation: {
          timetable: 'plán',
          what_is_soroboom: 'Co je Soroboom',
          blog: 'Blog',
          gallery: 'Galerie',
        },
        text: {
          menthal_arithmetic: 'Mentální aritmetika',
          development_of_intelligence: 'Rozvoj inteligence',
          improves: 'Vylepšíme',
          speed_of_decision_making: 'Rychlost rozhodování',
          concentration_of_attention: 'Koncentraci pozorování',
          speed_of_reactions: 'Rychlost reakcí',
          memory: 'Paměť',
          your_child: 'vašeho dítěte metodou',
        },
        contact: {
          join: 'ZAPSAT SE NA',
          free_trial_lesson: 'ZKUŠEBNÍ LEKCI ZDARMA',
          contact_form: {
            your_name: 'VAŠE JMÉNO',
            your_phone_number: 'VÁŠ TELEFON',
            join: 'ZAPSAT SE'
          }
        },
        flex: {
          years_of_experience: 'let zkušeností',
          in_child_development: 'Ve vývoji dětí',
          children: 'dětí',
          trained: 'vyškoleni po celém světě',
          countries: 'států',
          online: 'online i offline vzdělávání',
        }
      },
      second: {
        give_your_child: 'Dejte svému dítěti',
        start: 'nejlepší start v životě',
        modules: {
          valuable: 'Cenné',
          skills: 'schopnosti',
          speed_of_reactions: 'Rychlost reakcí',
          logical_thinking: 'Logické myšlení',
          self_confidence: 'Sebejistota',
          absorb: 'Vstřebávat velké množství informací',
          benefits: 'Výhody',
          improved_concentration: 'Vylepšení koncentrace vnímání',
          exact_sciences: 'Přesné vědy se dávají lehce',
          increased_school: 'Zvýšení školního výkonu o',
          extension: 'Vývoj',
          both_hemispheres: 'Obou hemisfér mozku levá ( logická ) pravá ( obrazná )',
          cognitive_functions: 'Kognitivních funkcí',
          brain_efficiency: 'Účinnost mozku',
          for: 'Pro',
          preschoolers: 'předškoláky',
          let_us_help: 'Pomůžeme s námahou ve škole',
          let_us_teach: 'Naučíme základy mentální aritmetiky',
          increase: 'Povýšíme sebejistotu dítěte ve svých silách',
          developing: 'Rozvíjíme jemnou motoriku',
        }
      },
      thanking: {
        thanks: 'Díky',
        method: 'metodě',
        child_trains: 'dítě trénuje',
        unique: 'Unikátní metoda aktivuje práci obou hemisfér mozku dítěte',
        while: 'Během tréninků dítě využívá japonské počítadlo Soroboom jako prostředek k řešení úloh, používá při tom svou fantazii',
      },
      third: {
        the_soroboom_technique: 'Metoda Soroboom® přispívá k tvorbě a posilování',
        new_neural_connections: 'nových nervových vláken mozku dítěte',
        results_already: 'výsledky už',
        after_first_month: 'po 1. měsíci',
        of_training: 'tréninků',
      },
      mobile_pink_page: {
        only: 'Dítě během tréninků v Soroboom zvyšuje produktivitu mozku několikrát, díky čemu se formují a posilují nová nervová vlákna',
      },
      formats: {
        formats: 'Typy',
        of_education: 'výuky',
        online_offline: {
          online: 'Online',
          the_class_is_held: 'Lekce se konají',
          once_a_week: 'jednou týdně',
          and_consists_of: 'a skládají se ze',
          two_classes: 'dvou lekcí po 35-45 min',
          with_proffesional_trainer: 's profesionálním trenérem',
          in_groups_up_to_six_people: 'Ve skupinách do 6 lidí',
          in_school: 'Ve škole',
          in_groups_up_to_ten_people: 'Ve skupinách do 10 lidí',
        },
      },
      sixth: {
        how_the_training_works: 'Jak se koná výuka',
        in_soroboom: 'v Soroboom®?',
        visit: 'navštěvovat',
        soroboom: 'Soroboom',
        at_least_once_a_week: 'stačí jednou týdně',
        modules: {
          online: 'Online',
          classes: 'lekce',
          you_will_need: 'Bude potřeba 2 elektronická zařízení a přístup k internetu',
          thanks: 'Díky vlastní online platformě lekcí se žák učí se stejnou efektivností jako ve škole',
          home_workouts: 'Domácí tréninky vytvořeny pomocí metodických algoritmů s využitím AI',
          in_school: 've škole',
          children_are_supervised: 'Děti jsou pod dohledem kvalifikovaného trenéra po dobu času ve škole',
          during_the_lesson: 'Během výuky trenér používá různé formy úkolů, aktivní i u stolu',
          thanks_to_small_groups: 'Díky menším skupinám do 10 lidí trenér věnuje maximální pozornost každému dítěti',
        },
      },
      slide_images: {
        how_are_the_classes: 'Jak se provádí',
        conducted: 'lekce',
        texts: {
          tv_with_a_large_diagonal: 'Velká televize na které se pouští trenažér pro trénink',
          large_training: 'Velké trénovací nástěnné i podlahové počítadla',
          a_sofa: 'Pohovka, na které si mohou děti odpočinout během pauzy',
          showcase_of_a_store: 'Vitrína obchodu, ve kterém mohou děti získat odměny za mince Soroboom',
          spacious_bright: 'Prostorové světlé kabinety  Просторные светлые кабинеты s potřebným školním vybavením a demonstračnými materiály',
        }
      },
      eight: {
        calculator: {
          electronic: 'Elektronické',
          abacus_e_soroboom: 'počítadlo Abakus “E Soroboom“',
          innovative_teaching_method: 'Inovativní metoda výuky',
        },
        cards: {
          progress_tracking: 'Sledování pokroku',
          in_two_clicks: 'na 2 kliknutí',
          training_effectiveness: 'Efektivnost výuky',
          increases: 'se zvyšuje o 65%',
          individual_approach: 'Individualní přístup',
          to_the_student: 'k žákovi',
          patented: 'Patentovaná',
          technology_one: 'technologie No1 v',
          childrens_education: 'dětském vzdělání',
        }
      },
      apps: {
        header: {
          try_our: 'Vyzkoušejte naše',
          apps: 'aplikace',
        },
        content: {
          soroboom_ar: 'Soroboom AR',
          soroboom_lite: 'Soroboom Lite',
        }
      },
      system_working: {
        our_system_helps: 'Náš systém pomáha',
        formation: 'formování a posilování nových nervových vláken mozku',
        child_thanks: 'dítěte díky systematickým tréninkům. Pomáháme dítěti maximálně rozvít intelekt a logické myšlení, což mu pomůže ve všech sférách života',
        innovative_teaching: 'Inovativní metoda výuky vyvinutá našimi specialisty v oblasti vývoje intelektu u dětí',
        implementation: 'Implementace umělé inteligence',
        helps_individualy: 'pomáhá individuálně adaptovat zátěž pro každé dítě',
        unique_system: 'Unikátní systém motivace výuky Soroboom',
        helps_child: 'pomáhá dítěti',
        self_confidence: '1. Zvýšit sebejistotu i ego',
        increase_motivation: '2. Povýšit motivaci se učit',
        love_math: '3. Oblíbit si matematiku'
      },
      we_are_cool: {
        header: {
          said: 'Říká se',
          we_are_cool: 'že jsme dobří',
        },
        content: {
          marina: 'Marina Tkač',
          date1: '12.02.24',
          thanks_trainer: 'Díky trenéru Soroboom. Syn přichází domů vždy veselý a šťastný. Je velmi příjemné, když práce s dětmi je výběr duše, ne okolnností 🙏',
          oksana: 'Oksana Lysenko',
          happy: 'Jsme velmi rádi, že jsme si vybrali Soroboom pro naše dítě. Vizuální pokrok hned po několika lekcích. Dítě chodí na lekce s radostí a inspirací',
        }
      },
      kid_like: {
        ten_years: 'Za 10 let naší práce na Ukrajině byla metoda vyzkoušena a zdokonalena',
        results: 'Výsledky',
        our_trainings: 'našich tréninků jsou potvrzeny úspěchy našich žáků'
      },
      last: {
        left: {
          copyright: '©Copyright 2013-2024 by Iurii Novosolov',
          rights: 'Všechna práva jsou chráněna',
          copies: 'Jakékoli kopírování materiálů bez písemného souhlasu vlastníka je zakázáno'
        },
        center: {
          menu: 'Menu',
          franchise: 'Franšíza',
        },
        right: {
          countries: 'SOROBOOM® V JINÝCH ZEMÍCH',
        }
      }
    },
  }
});

const app = createApp(App);

app.use(i18n);
app.mount('#app');