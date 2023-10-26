import { SECRET_PASS } from "../config.js";
import Questions from "../models/Questions.js"
import nodemailer from 'nodemailer'

export const getItems = async (req, res) => {
  try {
    const items = await Questions.find({email_owner:"public"}).lean();
    return res.send(items);
  } catch (error) {
    return res.status(400).send("No hay items que mostrar");
  }
};

export const getItemsByEmail = async (req, res) => {
  try {
    const {mail} = req.body;
    const items = await Questions.find({email_owner: mail}).lean();
    return res.send(items);
  } catch (error) {
    return res.status(400).send("No hay items que mostrar");
  }
};

export const createItem = async (req, res) => {
  try {
    const { title, description, category, id_owner, email_owner, like, dislike } = req.body;
    const newItem = new Questions({ title, description, category, id_owner, email_owner, like, dislike });
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


export const sendMail = async (req, res) => {
  const {data} = req.body;
  const message = {
      from: 'feergui997@gmail.com',
      to: "feergui997@gmail.com",
      subject: 'Mensaje desde EstudioTopia',
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>EstudioTopia</title>
      </head>
      <body>
          <div style:"width: 1000;">
              <h1 style="color: #bb00bb; text-align: center; font-size:33px;">EstudioTopia</h1>
              <p style="color: black; text-align: center; font-size:18px;">${data}</p>
          </div>
      </body>
      </html>`
  };

  const config = {
      service : "gmail",
      host: 'smtp.gmail.com',
      port : 587,
      auth : {
          user: "feergui997@gmail.com",
          pass: SECRET_PASS
      }
  };

  const transport = nodemailer.createTransport(config);
  const mailInfo = await transport.sendMail(message);

  if(mailInfo.messageId){
      return res.send(mailInfo);
  } else {
      return res.status(400).send("No se pudo enviar el mail correctamente");
  }
}