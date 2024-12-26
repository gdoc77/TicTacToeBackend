import { body } from 'express-validator';

export const PlayRequest = [
    body('player').isInt({ min: 0, max: 1 }).exists(),
    body('xpos').isInt({ min: 0, max: 2}).exists(),
    body('ypos').isInt({ min: 0, max: 2}).exists()
];