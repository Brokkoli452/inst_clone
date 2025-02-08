function formatPostDate(date) {
    const now = new Date(); // Текущая дата и время
    const diffInSeconds = Math.floor((now - date) / 1000); // Разница в секундах

    // Форматируем дату в зависимости от разницы
    if (diffInSeconds < 60) {
        return 'Только что';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} ${getPlural(minutes, [
            'минуту',
            'минуты',
            'минут',
        ])} назад`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} ${getPlural(hours, ['час', 'часа', 'часов'])} назад`;
    } else if (isYesterday(date)) {
        return `Вчера в ${formatTime(date)}`;
    } else {
        return `${formatDayMonth(date)} ${formatTime(date)}`;
    }
}

// Вспомогательная функция для склонения слов
function getPlural(number, words) {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[
        number % 100 > 4 && number % 100 < 20
            ? 2
            : cases[Math.min(number % 10, 5)]
        ];
}

// Проверка, была ли дата вчера
function isYesterday(date) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
        date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear()
    );
}

// Форматирование времени (часы:минуты)
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Форматирование дня и месяца (день месяц)
function formatDayMonth(date) {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${day} ${month}`;
}

export default formatPostDate