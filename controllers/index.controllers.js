import Questions from "../models/Questions.js";

export const getItems = async (req, res) => {
  try {
    const items = await Questions.find().lean();
    return res.send(items);
  } catch (error) {
    return res.status(400).send("No hay items que mostrar");
  }
};

export const createItem = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const newItem = new Questions({ title, description, category });
    await newItem.save();
    return res.send(newItem);
  } catch (error) {
    return res.status(400).send("No se pudo crear el item");
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const itemUpdated = await Questions.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.send(itemUpdated);
  } catch (error) {
    return res.status(400).send("No se pudo editar el item");
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Questions.findByIdAndDelete(id);
    return res.send("Item eliminado");
  } catch (error) {
    return res.status(400).send("No se pudo borrar el item");
  }
};
