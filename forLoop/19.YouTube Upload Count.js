function uploadCount(dates, targetMonth) {
    let result = 0;
    for (let i = 0; i < dates.length; i++) {
        const dateParts = dates[i].split(' ');
        const month = dateParts[0];
        if (month === targetMonth) {
            result++;
        };
    };
    return result;
};
console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept"));
console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct"));

// ➞ 2
// ➞ 1