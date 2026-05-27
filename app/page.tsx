const speakers = [
  {
    name: 'Георгий Зуйков',
    role: 'Амбассадор SME',
    text: '25 лет в бизнесе, инвестор, практик системного подхода к капиталу.',
  },
  {
    name: 'Максим Еремин',
    role: 'Гранд Амбассадор SME',
    text: 'Предприниматель, финансовый консультант, криптоинвестор с большим опытом.',
  },
  {
    name: 'Максим Бумарсков',
    role: 'Сооснователь SoulMate',
    text: 'Инвестиции, цифровые активы, международный опыт и предпринимательское мышление.',
  },
  {
    name: 'Владислав Бычков',
    role: 'CEO AI ROBO MAKERS',
    text: 'Алгоритмическая торговля, управление капиталом и системный контроль риска.',
  },
  {
    name: 'Андрей Коковин',
    role: 'Эксперт по цифровым экосистемам',
    text: 'Криптовалютный рынок, продажи, игровые форматы и практические кейсы.',
  },
  {
    name: 'Приглашённые эксперты',
    role: 'Финансы, недвижимость, ИИ',
    text: 'Практики из бизнеса, инвестиций и цифровых инструментов для роста капитала.',
  },
];

const program = [
  ['11:30', 'Сбор гостей и регистрация'],
  ['12:00 – 13:00', 'Цифровая экосистема и новые возможности дохода'],
  ['13:00 – 14:00', 'Инвестиции, капитал и системное мышление'],
  ['14:00 – 14:30', 'Перерыв и нетворкинг'],
  ['14:30 – 15:00', 'ИИ-инструменты для бизнеса, жизни и личного бренда'],
  ['15:00 – 15:30', 'Финансовая безопасность и работа с рисками'],
  ['15:30 – 16:00', 'Перерыв'],
  ['16:00 – 16:40', 'Практические кейсы: капитал, рынок, недвижимость, digital'],
  ['16:40 – 17:30', 'Панельная дискуссия, вопросы и завершение'],
  ['18:30', 'Закрытый ужин со спикерами для участников бизнес-формата'],
];

const benefits = [
  'Цифровая финансовая грамотность без сложных терминов',
  'Современные модели пассивного и полуавтоматического дохода',
  'ИИ как инструмент усиления бизнеса, контента и продаж',
  'Личный бренд как актив, который помогает привлекать доверие',
  'Нетворкинг с предпринимателями, инвесторами и экспертами Екатеринбурга',
  'Практические разборы и понятные шаги после мероприятия',
];

const audience = [
  ['Предпринимателям', 'Систематизировать финансы, усилить личный бренд и найти новые точки роста.'],
  ['Инвесторам и трейдерам', 'Сверить подход, увидеть новые инструменты и глубже понять цифровые рынки.'],
  ['Экспертам', 'Упаковать знания, усилить доверие и внедрить ИИ в работу.'],
  ['Тем, кто ищет доход', 'Разобраться в возможностях, рисках и подходах к капиталу в 2026 году.'],
];

export default function Page() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">Цифровой капитал</a>
        <nav>
          <a href="#about">О событии</a>
          <a href="#speakers">Спикеры</a>
          <a href="#program">Программа</a>
          <a href="#tickets">Формат участия</a>
        </nav>
        <a className="navButton" href="#register">Принять участие</a>
      </header>

      <section id="top" className="hero section">
        <div className="heroText">
          <p className="eyebrow">13 июня · Екатеринбург · 12:00–17:30</p>
          <h1>Цифровой капитал: куда инвестировать в 2026 году и как внедрить ИИ в свою жизнь</h1>
          <p className="lead">
            Деловая конференция для тех, кто формирует капитал, развивает личный бренд,
            ищет сильное окружение и хочет использовать цифровые инструменты осознанно.
          </p>
          <div className="heroActions">
            <a className="primary" href="#register">Зарегистрироваться</a>
            <a className="secondary" href="#program">Смотреть программу</a>
          </div>
          <div className="heroFacts">
            <span>100+ участников</span>
            <span>2 формата участия</span>
            <span>спикеры-практики</span>
          </div>
        </div>
        <div className="heroCard">
          <div className="orb" />
          <p>Ваш капитал в цифровой реальности</p>
          <h2>от стратегии до первого результата</h2>
          <div className="dateBox">
            <b>13 июня</b>
            <span>Екатеринбург</span>
          </div>
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="eyebrow">О событии</p>
          <h2>Конференция для людей, которые хотят расти через капитал, технологии и окружение</h2>
        </div>
        <div className="copy">
          <p>
            Финансовая среда меняется быстрее, чем привычные подходы к заработку. Сегодня выигрывают те,
            кто мыслит системно, понимает риски, умеет работать с цифровыми инструментами и развивает доверие вокруг себя.
          </p>
          <p>
            На конференции разберём финансовую грамотность нового уровня, инвестиционное мышление,
            модели дохода, искусственный интеллект, личный бренд и реальные кейсы участников рынка.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Что вас ждёт</p>
        <h2>Темы, которые дают практическую пользу</h2>
        <div className="grid benefits">
          {benefits.map((item) => (
            <article className="card" key={item}>
              <span className="check">✓</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="tickets" className="section tickets">
        <p className="eyebrow">Формат участия</p>
        <h2>Выберите подходящий формат</h2>
        <div className="ticketGrid">
          <article className="ticket">
            <div className="ticketTop">
              <p>Тариф «Промо»</p>
              <h3>Бесплатно</h3>
            </div>
            <ul>
              <li>Участие в конференции</li>
              <li>Доступ к основной программе</li>
              <li>Чат участников</li>
              <li>Нетворкинг</li>
            </ul>
            <a className="primary full" href="#register">Забронировать место</a>
          </article>
          <article className="ticket featured">
            <div className="badge">Ограничено</div>
            <div className="ticketTop">
              <p>Тариф «Стандарт»</p>
              <h3>2 500 ₽</h3>
            </div>
            <ul>
              <li>Участие в конференции</li>
              <li>Приоритетная рассадка</li>
              <li>Чат участников</li>
              <li>Закрытый ужин со спикерами</li>
              <li>Подарки от партнёров</li>
            </ul>
            <a className="primary full" href="#register">Выбрать стандарт</a>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Кому полезно</p>
        <h2>Для тех, кто хочет не просто информацию, а понятное направление действий</h2>
        <div className="grid audience">
          {audience.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#register">Принять участие →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="speakers" className="section speakers">
        <p className="eyebrow">Спикеры мероприятия</p>
        <h2>Практики из инвестиций, бизнеса, ИИ и цифровых рынков</h2>
        <div className="speakerGrid">
          {speakers.map((speaker) => (
            <article className="speaker" key={speaker.name}>
              <div className="avatar">{speaker.name.split(' ').map((p) => p[0]).join('').slice(0, 2)}</div>
              <h3>{speaker.name}</h3>
              <b>{speaker.role}</b>
              <p>{speaker.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section ctaBand">
        <h2>Забронируйте билет сейчас</h2>
        <p>Вас ждут сильные знакомства, рабочие идеи, партнёрские взаимодействия и атмосфера людей, которые действуют.</p>
        <a className="primary" href="#register">Подтвердить участие</a>
      </section>

      <section id="program" className="section program">
        <p className="eyebrow">Программа конференции</p>
        <h2>13 июня · Екатеринбург</h2>
        <div className="timeline">
          {program.map(([time, title]) => (
            <div className="timelineItem" key={`${time}-${title}`}>
              <time>{time}</time>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section location">
        <div>
          <p className="eyebrow">Место проведения</p>
          <h2>Екатеринбург</h2>
          <p>
            Адрес площадки можно заменить в коде после финального согласования зала.
            Блок уже готов под карту, описание входа и детали регистрации.
          </p>
        </div>
        <div className="mapMock">
          <span>Карта / адрес площадки</span>
        </div>
      </section>

      <section id="register" className="section register">
        <div>
          <p className="eyebrow">Регистрация</p>
          <h2>Заполните форму, чтобы закрепить за собой участие</h2>
          <p>Количество мест на каждый тариф ограничено. После заявки участник получает подтверждение и ссылку на чат мероприятия.</p>
        </div>
        <form className="form" action="https://formspree.io/f/your-form-id" method="POST">
          <input name="name" placeholder="Ваше имя" required />
          <input name="phone" placeholder="Телефон / Telegram" required />
          <input name="email" type="email" placeholder="Email" />
          <select name="ticket" defaultValue="">
            <option value="" disabled>Выберите тариф</option>
            <option value="promo">Промо — бесплатно</option>
            <option value="standard">Стандарт — 2 500 ₽</option>
          </select>
          <label className="agree">
            <input type="checkbox" required />
            <span>Даю согласие на обработку персональных данных и получение информации по мероприятию.</span>
          </label>
          <button className="primary" type="submit">Принять участие</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 · Цифровой капитал · Екатеринбург</p>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
