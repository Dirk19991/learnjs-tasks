alert((1.35).toFixed(1)); // 1.4

alert((6.35).toFixed(1)); // 6.3

// происходит это по той же причине, по которой в известной задаче 0.1 + 0.2 === 0.3 выведет false - 1.35 и 6.35 представлены как числа с плавающей точкой, и 6.35 на самом деле 6.349999...
// В этом случае можно умножить число на 10, округлить, а потом разделить на 10

console.log(Math.round(6.35 * 10) / 10);
