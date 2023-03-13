button.addEventListener('click', () => alert('1'));

button.removeEventListener('click', () => alert('1'));

button.onclick = () => alert(2);

// 1 и 2, т.к. первый слушатель не удалится - чтобы он удалился, нужно дать ссылку на ту же функцию, что была добавлена. В этом случае функции не равны друг другу. Второй слушатель независим от addEventListener.
