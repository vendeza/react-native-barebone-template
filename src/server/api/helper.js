const CurrentMonthBound = (initialMonth) => {
    let date = initialMonth ? new Date(initialMonth) : new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const format = (date) => {
        return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(
            -2,
        )}-${("0" + date.getDate()).slice(-2)}`;
    };
    return [format(firstDay), format(lastDay)];
};

const CurrentDayBound = (initialDay) => {
    const date = initialDay ? new Date(initialDay) : new Date();
    const month = ("0" + (date.getMonth() + 1)).slice("-2");
    const day = ("0" + date.getDate()).slice(-2);
    const dayEnd = ("0" + (date.getDate() + 1)).slice(-2);
    const year = date.getFullYear();

    return [
        `${year}-${month}-${day} 00:00:00`,
        `${year}-${month}-${day} 23:59:00`,
    ];
};

const CurrentYear = () => {
    const date = new Date();
    const year = date.getFullYear();

    return year;
};

const CurrentMonth = () => {
    const date = new Date();
    const month = date.getMonth() + 1;

    return month;
};

const CurrentDay = () => {
    const date = new Date();
    const month = ("0" + (date.getMonth() + 1)).slice("-2");
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();
    //console.log(`CURRENT DAY ${year}-${month}-${day} 00:00:00`);
    return [`${year}-${month}-${day} 00:00:00`];
};
export {
    CurrentMonthBound,
    CurrentDayBound,
    CurrentYear,
    CurrentMonth,
    CurrentDay,
};
