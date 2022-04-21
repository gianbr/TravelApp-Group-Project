require("../connections/mongo");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const User = require("../models/User");

const sendMail = async (req, res, next) => {
  const { username, email } = req.body;
  let mail = "";
  if (!email) {
    mail = req.email;
  } else {
    mail = email;
  }
  let user = "";
  if (!username) {
    user = req.username;
  } else {
    user = username;
  }

  const contentHtml = `
      <h1>Hola ${user}!</h1>
      <p>Bienvenido a TravelApp</p>
      `;

  const GOOGLE_CLIENT_ID =
    "720796673981-us7jgj5e8ospme3qt22432hiedcni3vt.apps.googleusercontent.com";
  const GOOGLE_CLIENT_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN =
    "1//04Hu7Mmwq_Z0gCgYIARAAGAQSNwF-L9IrIDR-8uKa9dM0oQOIzoOt1r8HfEVH7LQJejAdVqpOucWktjWb_9I2zVmiuP98nKv6zYU";

  const oAuth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  async function envMail() {
    try {
      const accesToken = await oAuth2Client.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "travelapp10@gmail.com",
          clientId: GOOGLE_CLIENT_ID,
          clientSecret: GOOGLE_CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accesToken,
        },
      });
      const mailOptions = {
        from: "Travel App <travelapp10@gmail.com>",
        to: `${mail}`,
        subject: "Welcome to Travel App",
        html: contentHtml,
      };
      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  envMail()
    .then((result) => {
      if (req.token) {
        res.status(200).json({
          token: req.token,
          username: req.username,
          id: req.id,
        });
      }
      res.status(200).send("Email enviado");
    })
    .catch((error) => console.log(error.message));
};

const sendMailBuy = async (req, res, next) => {
  const { userId } = req.body;

  const user = await User.findById(userId);

  // let mail = "";
  // if (!email) {
  //   mail = req.email;
  // } else {
  //   mail = email;
  // }
  // let user = "";
  // if (!username) {
  //   user = req.username;
  // } else {
  //   user = username;
  // }

  const contentHtml = `
      <h1>Hola ${user.username}!</h1>
      <p>Gracias por adquirir tu aventura en Travel App</p>
      `;

  const GOOGLE_CLIENT_ID =
    "720796673981-us7jgj5e8ospme3qt22432hiedcni3vt.apps.googleusercontent.com";
  const GOOGLE_CLIENT_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN =
    "1//04Hu7Mmwq_Z0gCgYIARAAGAQSNwF-L9IrIDR-8uKa9dM0oQOIzoOt1r8HfEVH7LQJejAdVqpOucWktjWb_9I2zVmiuP98nKv6zYU";

  const oAuth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  async function envMail() {
    try {
      const accesToken = await oAuth2Client.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "travelapp10@gmail.com",
          clientId: GOOGLE_CLIENT_ID,
          clientSecret: GOOGLE_CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accesToken,
        },
      });
      const mailOptions = {
        from: "Travel App <travelapp10@gmail.com>",
        to: `${user.email}`,
        subject: "Welcome to Travel App",
        html: contentHtml,
      };
      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  envMail()
    .then((result) => {
      if (req.token) {
        res.status(200).json({
          token: req.token,
          username: req.username,
          id: req.id,
        });
      }
      res.status(200).send("Email enviado");
    })
    .catch((error) => console.log(error.message));
};

module.exports = { sendMail, sendMailBuy };
