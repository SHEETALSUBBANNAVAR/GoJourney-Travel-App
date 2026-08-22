import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    from: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    transport: {
      type: String,
      enum: ["Bus", "Train", "Flight", "Car"],
      required: true,
    },

    budget: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Planned", "Ongoing", "Completed", "Cancelled"],
      default: "Planned",
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Trip", noteSchema);

export default Note;