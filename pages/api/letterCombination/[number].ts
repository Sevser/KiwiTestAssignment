import { NextApiRequest, NextApiResponse } from "next/types";
import letterCombinations from '../../../utills/letterCombinations';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.query.number) {
            res.status(200).json({ data: letterCombinations(req.query.number as string) })
        } else {
            throw ('number was not provided');
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.toString() });
        }
        res.status(500).json({ error: 'server error' });
    }
}