import mongoose from 'mongoose';
import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
    try {
        const listingData = {
            ...req.body,
            userRef: new mongoose.Types.ObjectId(req.user.id),
        };
        const listing = await Listing.create(listingData);
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
};
