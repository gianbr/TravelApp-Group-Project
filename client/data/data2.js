const schema = {
  title: "Demo for countries",
  type: "object",
  properties: {
    country: {
      type: "string",
      title: "Provincia",
      enum: ["Buenos Aires", "Río Negro", "Misiones", "Mendoza"],
    },
  },
  dependencies: {
    country: {
      oneOf: [
        {
          properties: {
            country: {
              enum: ["Buenos Aires"],
            },
            province: {
              type: "string",
              title: "Ciudad",
              enum: ["Tandíl", "Mar del Plata", "Tigre", "Nuñez", "CABA"],
            },
          },
        },
        {
          properties: {
            country: {
              enum: ["Río Negro"],
            },
            province: {
              type: "string",
              title: "State",
              enum: [
                "San Carlos de Bariloche",
                "Viedma",
                "Cipolletti",
                "El Bolsón",
              ],
            },
          },
        },
        {
          properties: {
            country: {
              enum: ["Misiones"],
            },
            province: {
              type: "string",
              title: "State",
              enum: ["Puerto Iguazú", "San Ignacio", "Posadas", "Oberá"],
            },
          },
        },
        {
          properties: {
            country: {
              enum: ["Mendoza"],
            },
            province: {
              type: "string",
              title: "State",
              enum: ["Mendoza", "Rivadavia", "Las Heras", "Godoy Cruz"],
            },
          },
        },
      ],
    },
  },
};

export default schema;
