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
    }
  }
});

const app = createApp(App);

app.use(i18n);
app.mount('#app');