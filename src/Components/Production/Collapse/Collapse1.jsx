import './Collapse.css';
import React from 'react';
import CollapsTitle from './CollapsTitle';
const data = [
  {
    title: 'Пассажирские лифты',
    subTitle:
      'Пассажирский лифт – это подъемный механизм, без которого почти невозможно представить себе высотное здание, а первый такой подъемник был установлен в Нью-Йорке еще в 1857 году. Устройство безопасности для лифтов Э.Г. Отиса, в сочетании с использованием стальных каркасов зданий, дало возможность строить высотные здания. С тех пор лифты постоянно совершенствуются и улучшаются, но для регулярных тестов требуются специальные высотные сооружения. Одним из таких сооружений является испытательная башня OSTEN.',
  },
  {
    title: 'Пассажирский лифт-профиль',
    subTitle:
      'В небольшом машинном отделении, пассажирский лифт Osten имеет только около 65% - 70% от традиционного машинного отделения. Это значи- тельно экономит строительное пространство и материал. Шкаф управления в машинном отделении выполнен в однослойной компоновке. Основная опорная балка может также использоваться в качестве сцепной пластины, что в значительной степени экономит пространство машинного отделения. По сравнению с традиционными лифтами, при условии обеспечения рабочего пространства, предусмотренного национальным стандартом, он эффективно контролирует высоту машинного отделения. Интенсивный эффект пространства дает больше свободы для архитекто- ров. Это предоставляет более широкое использова- ние пространства для строительства. Прекрасно сочетается с архитектурным стилем.',
  },
];
const data2 = [
  {
    title: 'Меньше занимаемого места, более устойчивая конструкция',
    subTitle:
      'По сравнению с лифтом с машинным отделением от Osten, машинное отделение является лишь продол- жением лифта. Это обеспечивает более удобную установку, а также более низкую стоимость.',
  },
  {
    title: 'Впечатляющая экономия энергии',
    subTitle:
      'По сравнению с традиционной тяговой машиной, небольшой машинный лифт Osten потребляет мень- ше энергии и меньше потерь тепловой энергии.',
  },
];
const Collapse1 = (props) => {
  return (
    <div className={`Collapse1 ${props.className}`}>
      {data.map((v,i) => (
        <div key={i}><CollapsTitle  title={v.title} subTitle={v.subTitle} /></div>
      ))}
      <img src="https://osten.vercel.app/images/diff/img.jpg" alt="" />
      {data2.map((v,i) => (
        <div key={i}><CollapsTitle  title={v.title} subTitle={v.subTitle} /></div>
      ))}
      <img src="https://osten.vercel.app/images/diff/img2.jpg" alt="" />
    </div>
  );
};

export default Collapse1;