const DATA = [
  {
    _id: 1,
    hersteller: "Hersteller - A",
    material: [
      {
        _id: "01",
        type: "Kunstoff",
        price: 20
      },
      {
        _id: "02",
        type: "Holz",
        price: 25
      },
      {
        _id: "03",
        type: "Alumnium",
        price: 30
      }
    ],
    bauform: [
      { _id: "001", type: "1-Teiler-Fenster" },
      { _id: "002", type: "2-Teiler-Fenster" }
    ],
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
  }
];

export function getUserInterfaceDATA() {
  return DATA;
}
