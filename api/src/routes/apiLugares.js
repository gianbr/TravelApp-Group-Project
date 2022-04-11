const { Router } = require("express");
const axios = require("axios");
const apiLugares = Router();

const provincias = async () => {
  try {
    const urlApi = await axios.get(
      "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre"
    );

    let urlData = await urlApi.data;
    console.log(urlData);
    urlData = {
      id: urlData.provincias.map((e) => e.id),
      name: urlData.provincias.map((p) => p.nombre),
    };
    return urlData;
  } catch (error) {
    console.log(error);
  }
};

apiLugares.get("/provincias", async (req, res, next) => {
  const { name } = req.query;
  try {
    const info = await provincias(name);
    return res.status(200).json(info);
  } catch (error) {
    console.log(error);
  }
});

const municipios = async (id) => {
  try {
    const urlMuni = await axios.get(
      `https://apis.datos.gob.ar/georef/api/municipios?provincia=${id}&campos=id,nombre&max=100`
    );

    let info = await urlMuni.data;
    console.log(info);
    info = {
      id: info.municipios.map((p) => p.id),
      municipio: info.municipios.map((m) => m.nombre),
      provincia: info.parametros.provincia,
    };

    return info;
  } catch (error) {
    console.log(error);
  }
};

apiLugares.get("/ciudades/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await municipios(id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = apiLugares;
