import Joi from "joi";

const productSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
});

export {
    productSchema
}