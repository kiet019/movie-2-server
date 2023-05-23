import { model, Schema } from 'mongoose';

const newsSchema = new Schema({
    img: String,
    title: String,
    by: String,
    description: String,
});

export const NewsModel = model('News', newsSchema);
