const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles[Math.floor(styles.length / 2)] = 'Классика';

const firstElem = styles.shift();
console.log(firstElem);

styles.unshift('Рэп', 'Регги');
