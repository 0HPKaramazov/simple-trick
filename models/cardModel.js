import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    cardData: {type: Object},
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const CardModel = mongoose.model('Card', cardSchema);

export default CardModel;
