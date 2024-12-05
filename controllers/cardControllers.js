import mongoose from 'mongoose';
import CardModel from '../models/cardModel.js';

export const saveCard = async (req, res) => {

  let newCard = new CardModel({ cardData: req.body })

  try {
    await newCard.save();
    res.status(201).json({ message: 'success' });;
  } catch (error) {
    res.status(409).json({ message: 'error' });
  }
}