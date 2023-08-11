import Todo from "../models/todoModel.js";
import { getRandomId } from "../utils/randomId.js";

//Get first 10 todos in the database
export const getTodos = async (req, res) => {
  try {
    const response = await Todo.find({}, { _id: 0, __v: 0 })
      .sort({ createdAt: -1 })
      .limit(10);
    res.status(200).json({ data: response });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Post a todo to the database
export const postTodo = async (req, res) => {
  var id = getRandomId();
  try {
    const { title, description } = req.body;
    await Todo.create({
      id,
      title,
      description,
      isComplete: false,
      createdAt: new Date().toISOString(),
      lastUpdate: new Date().toISOString(),
    });
    res.status(201).json({
      httpStatus: "created successfully",
      statusCode: 201,
      status: "created",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get a single todo by its custom ID
export const getTodo = async (req, res) => {
  const id = String(req?.params?.id);
  try {
    const existingTodo = await Todo.findOne({ id });
    if (!existingTodo)
      return res.status(404).json({ message: "This todo is not Found" });
    res.status(200).json({ todo: existingTodo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const id = req?.params?.id;
  try {
    const isAvailable = await Todo.findOne({ id });
    if (!isAvailable) {
      return res
        .status(404)
        .json({ message: `Can't find a todo with id - {${id}} to delete` });
    }
    const response = await Todo.findOneAndDelete({ id });
    console.log(response);
    if (response) {
      return res
        .status(200)
        .json({ httpCode: 200, message: "Deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Update a todo
export const updateTodo = async (req, res) => {
  const id = req?.params?.id;
  try {
    const { isComplete, description, title } = req?.body;
    const isAvailable = await Todo.findOne({ id });
    if (!isAvailable)
      return res.status(404).json({ message: "Todo not available" });
    const data = await Todo.findOneAndUpdate(
      { id },
      {
        description,
        title,
        isComplete,
        createdAt: isAvailable?.createdAt,
        lastUpdate: new Date().toISOString(),
      }
    );
    return res
      .status(200)
      .json({ httpCode: 200, httpStatus: "OK", message: "updated successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
