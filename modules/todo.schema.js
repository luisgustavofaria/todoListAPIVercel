import Joi from 'joi';

import joiObjectid from 'joi-objectid';
Joi.objectid = joiObjectid(Joi);

export const createTodoSchema = Joi.object({
  titleTodoList: Joi.string().required().max(20),
  textAreaTodoList: Joi.string().required().min(5),
  isFavorited: Joi.boolean().required(),
  color: Joi.string().required(),
});

export const deleteTodoSchema = Joi.object({
  id: Joi.objectid().required(),
});
