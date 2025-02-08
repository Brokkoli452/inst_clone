const formatter = new Intl.NumberFormat('ru-RU', {
    notation: 'compact', // Сокращение чисел (тысячи, миллионы и т.д.)
    maximumFractionDigits: 1, // Максимум одна цифра после запятой
});

const formatNumbersCompact = (number) => {
    return formatter.format(number)
}

export default formatNumbersCompact