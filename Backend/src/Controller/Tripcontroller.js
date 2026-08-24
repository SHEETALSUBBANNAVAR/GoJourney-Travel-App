import Note from "../module/Note.js";

// GET all trips / search trips
export const getAllCity = async (req, res) => {
    try {
        const { from, destination } = req.query;

        const filter = {};

        if (from) filter.from = from;
        if (destination) filter.destination = destination;

        const trips = await Note.find(filter);

        res.status(200).json({
            success: true,
            count: trips.length,
            trips
        });

    } catch (error) {
        console.error("Error fetching trips:", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
export const getCityById = async (req, res) => {
  try {
    const { id } = req.params;

    const trip = await Note.findById(id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      trip,
    });
  } catch (error) {
    console.error("Error fetching trip:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// CREATE a new trip
export const addNewCity = async (req, res) => {
    try {
        const trip = await Note.create(req.body);

        res.status(201).json({
            success: true,
            message: "Trip created successfully",
            trip
        });

    } catch (error) {
        console.error("Error creating trip:", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};


// UPDATE a trip
export const editCity = async (req, res) => {
    try {
        const { id } = req.params;

        const trip = await Note.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trip updated successfully",
            trip
        });

    } catch (error) {
        console.error("Error updating trip:", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};


// DELETE a trip
export const deleteCity = async (req, res) => {
    try {
        const { id } = req.params;

        const trip = await Note.findByIdAndDelete(id);

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trip deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting trip:", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};