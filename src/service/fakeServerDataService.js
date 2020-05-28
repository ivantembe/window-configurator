const DATA = {
  hersteller: [
    {
      _id: 1,
      name: "Hersteller - A",
      material: [
        {
          type: "Kunstoff",
          price: 20
        },
        {
          type: "Holz",
          price: 25
        },
        {
          type: "Alumnium",
          price: 30
        }
      ],
      bauform: [{ type: "1-Teiler-Fenster" }, { type: "2-Teiler-Fenster" }],
      verglassung: [
        {
          type: "1-Fach",
          price: 10
        },
        {
          type: "2-Fach",
          price: 15
        }
      ]
    },
    {
      _id: 2,
      name: "Hersteller - B",
      material: [
        {
          type: "Kunstoff",
          price: 23
        },
        {
          type: "Holz",
          price: 27
        },
        {
          type: "Alumnium",
          price: 33
        }
      ],
      bauform: [{ type: "1-Teiler-Fenster" }, { type: "2-Teiler-Fenster" }],
      verglassung: [
        {
          type: "1-Fach",
          price: 13
        },
        {
          type: "2-Fach",
          price: 17
        }
      ]
    },
    {
      _id: 3,
      name: "Hersteller - C",
      material: [
        {
          type: "Kunstoff",
          price: 26
        },
        {
          type: "Holz",
          price: 30
        },
        {
          type: "Alumnium",
          price: 36
        }
      ],
      bauform: [{ type: "1-Teiler-Fenster" }, { type: "2-Teiler-Fenster" }],
      verglassung: [
        {
          type: "1-Fach",
          price: 16
        },
        {
          type: "2-Fach",
          price: 20
        }
      ]
    }
  ]
};

export function getServerDATA() {
  return DATA;
}
