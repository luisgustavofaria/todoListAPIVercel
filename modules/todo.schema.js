import Joi from 'joi';

import joiObjectid from 'joi-objectid';
Joi.objectId = joiObjectid(Joi);

export const createTodoSchema = Joi.object({
  titleTodoList: Joi.string().required().trim().messages({
    'string.empty': 'Favor escrever um título',
  }),
  textAreaTodoList: Joi.string().required().trim().messages({
    'string.empty': 'Favor criar uma nota',
  }),
  isFavorited: Joi.boolean().required(),
  color: Joi.string().required(),
});
