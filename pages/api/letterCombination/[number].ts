const dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}
function letterCombinations(digits: string) {
    const digitArray = digits.split('');
    let ret = new Array<string>();
    while (digitArray.length) {
        const number: string = digitArray.shift() as string;
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

export default async function hello(req, res) {
    try {
        if (req.query.number) {
            res.status(200).json({ data: letterCombinations(req.query.number) })
        } else {
            throw ('number was not provided');
        }
    } catch (e) {
        res.status(400).json({ error: e.toString() })
    }
}