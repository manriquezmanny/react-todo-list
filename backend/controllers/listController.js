const List = require("../models/listModel");

// @desc Gets all Lists
// @route GET /lists
// @access Private
const getLists = async (req, res) => {
  try {
    // Empty object as arg means it will get all lists.
    const lists = await List.find({});
    // Responding with 200 "OK" status and sending lists as json objcet.
    res.status(200).json(lists);
  } catch (e) {
    // If error, sending 500 "Internal Server Error" status and sending error message.
    res.status(500).json({ message: e.message });
  }
};

// @desc Gets specified List by Id
// @route GET /lists/:id
// @access Private
const getList = async (req, res) => {
  try {
    // Getting URL id Parameter with object destructuring.
    const { id } = req.params;
    // Using findById method and passing id parameter to find specific list.
    const list = await List.findById(id);
    // Responding with found list.
    res.status(200).json(list);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// @desc Creates a list
// @route POST /lists/:id
// @access Private
const createList = async (req, res) => {
  try {
    const list = await List.create(req.body);
    res.status(200).json(list);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error.message });
  }
};

// @desc Updates a list
// @route PUT /lists/:id
// @access Private
const updateList = async (req, res) => {
  try {
    const { id } = req.params;
    // Finds and updates item, but returns the object that was found before updating.
    const list = await List.findByIdAndUpdate(id, req.body);
    // Finding object by id now that it has been updated, to return that object.
    const updatedList = await List.findById(id);
    // Checking if we couldn't find list in database.
    if (!list) {
      return res.status(404).json({ message: `Can't find list with id ${id}` });
    }
    // If list was found and updated with the client's sent body. responding with status 200.
    res.status(200).json(updatedList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// @desc Deletes a list by Id
// @route DELETE /lists/:id
// @access Private.
const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await List.findByIdAndDelete(id);
    // Checking if list was not found.
    if (!list) {
      return res
        .status(404)
        .json({ message: `Could not find list with id: ${id}` });
    }
    // If list was found and deleted.
    res.status(200).json(list);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getLists,
  getList,
  createList,
  updateList,
  deleteList,
};
