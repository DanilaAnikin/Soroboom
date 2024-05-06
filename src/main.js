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
          what_is_soroboom: 'Что такое Соробан?',
          blog: 'Блог',
          gallery: 'Галерея',
        },
        text: {
          menthal_arithmetic: 'Ментальная арифметика',
          improves: 'Улучшим',
          speed_of_decision_making: 'Скорость принятия решений',
          concentration_of_attention: 'Концентрация внимания',
          speed_of_reactions: 'Быстроту реакций',
          memory: 'Память',
          your_child_according_to_the_method_of_soroboom: 'вашего ребёнка по методике',
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
          trained_all_over_the_world: 'обучили по всему миру',
          countries: 'стран',
          online_and_offline_education: 'онлайн и офлайн обучение',
        }
      },
      second: {
        give_your_child: 'Подарите своему ребёнку',
        modules: {
          valuable: 'Ценные',
          skills: 'навыки',
          speed_of_reactions: 'Быстрота реакции',
          logical_thinking: 'Логическое мышление',
          self_confidence: 'Уверенность в себе',
          absorb_more_information: 'Усваивать большие объемы информации',
          improved_concentration: 'Улучшение концентрации внимания',
          exact_sciences_are_easy: 'Точные науки даются легко',
          increased_school_performance_by: 'Повышение успеваемости в школе на',
          extension: 'Развитие',
          both_hemispheres_of_the_brain_left_logical_right_imaginative: 'Обоих полушарий мозга левое ( логическое ) правое ( образное )',
          cognitive_functions: 'Когнитивных функций',
          brain_efficiency: 'КПД головного мозга',
          for: 'Для',
          preshoolers: 'дошколят',
          let_us_help_you_cope_with_your_workload_at_school: 'Поможем справиться с нагрузкой в школе',
          let_us_teach_the_basics_of_mental_arithmetic: 'Научим основам счета в уме',
          increase_your_childs_self_confidence: 'Повысим уверенность ребёнка в своих силах',
          developing_fine_motor_skills: 'Развиваем мелкую моторику',
        }
      },
      third: {
        the_soroboom_technique_helps_create_and_strengthen: 'Методика Soroboom®, способствует созданию и укреплению',
        new_neural_connections_in_the_childs_brain: 'новых нейронных связей головного мозга ребенка',
        results_already: 'результаты уже',
        after_first_month: 'после 1-го месяца',
      },
      mobile_pink_page: {
        only: 'Ребёнок во время тренировок в Soroboom увеличивает КПД мозга многократно, благодаря чему формируются и укрепляются новые нейронные связи.',
      },
      formats: {
        formats: 'Форматы',
        of_education: 'обучения',
        online_offline: {
          online: 'Онлайн',
          the_class_is_held: 'Занятие проводится',
          once_a_week: 'один раз в неделю',
          and_consists_of: 'и состоит из',
          two_classes_by_thirty_five_to_fourty_five_minutes: 'двух уроков по 35-45 мин',
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
          you_will_need_two_gadgets_and_internet_access: 'Понадобится 2 гаджета и доступ в интернет',
          thanks_to_our_own_online_learning_platform_the_student_learns_with_the_same_efficiency_as_in_the_classroom: 'Благодаря собственной онлайн платформе обучения, ученик обучается с той же эффективностью что и в классе.',
          home_workouts_are_based_on_methodological_algorithms_using_ai: 'Домашние тренировки основаны на методических алгоритмах с использованием ИИ.',
          in_school: 'в Школе',
          children_are_supervised_by_a_qualified_trainer_throughout_their_entire_stay_at_school: 'Дети находятся под наблюдением квалифицированного тренера в течение всего времени пребывания в школе',
          during_the_lesson_the_trainer_uses_various_forms_of_tasks_active_and_at_the_desk: 'Во время урока, тренер использует различные формы заданий, активные и за партой',
          thanks_to_small_groups_of_up_to_ten_people_the_trainer_ensures_maximum_attention_to_each_child: 'Благодаря небольшим группам до 10 человек, тренер обеспечивает максимальное внимание к каждому ребенку',
        },
      },
      slide_images: {
        how_are_the_classes: 'Как проходят',
        conducted: 'занятия',
        texts: {
          tv_with_a_large_diagonal_on_which_the_trainer_launches_the_training_simulator: 'TV с большой диагональю на котором тренер запускает тренажёр для тренировок',
          large_training_wall_and_floor_abacuses: 'Большие тренировочные настенные и напольные абакусы',
          a_sofa_where_children_can_relax_during_a_break: 'Диванчик на котором дети могут отдохнуть во время перерыва',
          showcase_of_a_store_where_children_can_buy_prizes_for_Soroboom_coins: 'Витрина магазина в котором дети могут приобрести призы за монетки Soroboom',
          spacious_bright_classrooms_with_the_necessary_school_equipment_and_demonstration_materials: 'Просторные светлые кабинеты с необходимым школьным оборудованием и демонстрационными материалами',
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
          increases_by_sixty_five_percent: 'повышается на 65%',
          individual_approach: 'Индивидуальный подход',
          to_the_student: 'к ученику',
          patented: 'Запатентованнная',
          technology_no_one_on_the_market: 'технология No1 на рынке',
          childrens_education: 'детского образования',
        }
      }
    }
  }
});

const app = createApp(App);

app.use(i18n);
app.mount('#app');