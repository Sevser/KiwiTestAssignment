const dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

type dictKey = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const letterCombinations = (digits: string) => {
    const digitArray = digits.split('');
    let ret = new Array<string>();
    while (digitArray.length) {
        const number: dictKey = digitArray.shift() as unknown as dictKey;
        if (dict[number] === undefined) {
            throw `Symbol '${number}' are not valid`;
        }
        const current = dict[number].slice();
        if (ret.length) {
            ret = ret.reduce((acc, item) => {
                return [...acc, ...current.map(c => item + c)];
            }, new Array<string>());
        } else {
            ret = current;
        }
    }
    return ret;
};

export default letterCombinations;