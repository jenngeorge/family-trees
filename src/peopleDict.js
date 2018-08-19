import db from './db';

// const makeDict = () => {
//   const dict = {
//   };
//   db.forEach(person => {
//
//     dict[person["id"]] = person
//   })
//
//   let data = JSON.stringify(dict);
//   return data
// }

const peopleDict =
{
  "nJETn61OzL": {
    "id":"nJETn61OzL",
    "parentIds":["sE1fH2YznN","XLMybpvVSO"],
    "childrenIds":[],
    "siblingIds":[],
    "firstName":"Iluminada",
    "lastName":"Arvie"
  },
  "cSrIpmrrid":{
    "id":"cSrIpmrrid",
    "parentIds":["80FlNEY6fi","Xi38znDO8c"],
    "childrenIds":[],
    "siblingIds":[],
    "firstName":"Hilde",
    "lastName":"Morehead"
  },
  "8Et57W1kag":{
    "id":"8Et57W1kag",
    "parentIds":["f4PcRMVcWB","WglRMHamO0"],
    "childrenIds":[],
    "siblingIds":["PVeBFDW6Jo","i0rOdH0ww0","R7eg2xIzUJ"],
    "firstName":"Hilde",
    "lastName":"Arvie"
  },
  "PVeBFDW6Jo":{
    "id":"PVeBFDW6Jo",
    "parentIds":["f4PcRMVcWB","WglRMHamO0"],
    "childrenIds":[],
    "siblingIds":["8Et57W1kag","i0rOdH0ww0","R7eg2xIzUJ"],
    "firstName":"Alan",
    "lastName":"Arvie"
  },
  "i0rOdH0ww0":{
    "id":"i0rOdH0ww0",
    "parentIds":["f4PcRMVcWB","WglRMHamO0"],
    "childrenIds":[],
    "siblingIds":["8Et57W1kag","PVeBFDW6Jo","R7eg2xIzUJ"],
    "firstName":"Harriette",
    "lastName":"Arvie"
  },
  "R7eg2xIzUJ":{
    "id":"R7eg2xIzUJ",
    "parentIds":["f4PcRMVcWB","WglRMHamO0"],
    "childrenIds":[],
    "siblingIds":["8Et57W1kag","PVeBFDW6Jo","i0rOdH0ww0"],
    "firstName":"Annabell",
    "lastName":"Arvie"
  },
  "sE1fH2YznN":{
    "id":"sE1fH2YznN",
    "parentIds":["KPYwxEacy2","5fJpKT6UrN"],
    "childrenIds":["nJETn61OzL"],
    "siblingIds":["Xi38znDO8c","WglRMHamO0"],
    "firstName":"Qiana",
    "lastName":"Arvie"
  },
  "XLMybpvVSO":{
    "id":"XLMybpvVSO",
    "parentIds":["4GQe5I5fxz","BlGBH58Cwo"],
    "childrenIds":["nJETn61OzL"],
    "siblingIds":["OCHN0yJ7D7","80FlNEY6fi","sDaEmbCLEu","f4PcRMVcWB"],
    "firstName":"Mellisa",
    "lastName":"Morehead"
  },
  "80FlNEY6fi":{
      "id":"80FlNEY6fi",
      "parentIds":["4GQe5I5fxz","BlGBH58Cwo"],
      "childrenIds":["cSrIpmrrid"],
      "siblingIds":["OCHN0yJ7D7","XLMybpvVSO","sDaEmbCLEu","f4PcRMVcWB"],
      "firstName":"Marquitta",
      "lastName":"Morehead"
    },
      "Xi38znDO8c":{
          "id":"Xi38znDO8c",
          "parentIds":["KPYwxEacy2","5fJpKT6UrN"],
          "childrenIds":["cSrIpmrrid"],
          "siblingIds":["sE1fH2YznN","WglRMHamO0"],
          "firstName":"Leonarda",
          "lastName":"Arvie"
        },
        "f4PcRMVcWB":{
            "id":"f4PcRMVcWB",
            "parentIds":["4GQe5I5fxz","BlGBH58Cwo"],
            "childrenIds":["8Et57W1kag","PVeBFDW6Jo","i0rOdH0ww0","R7eg2xIzUJ"],
            "siblingIds":["OCHN0yJ7D7","XLMybpvVSO","80FlNEY6fi","sDaEmbCLEu"],
            "firstName":"Marcus",
            "lastName":"Morehead"
          },
          "WglRMHamO0":{
              "id":"WglRMHamO0",
              "parentIds":["KPYwxEacy2","5fJpKT6UrN"],
              "childrenIds":["8Et57W1kag","PVeBFDW6Jo","i0rOdH0ww0","R7eg2xIzUJ"],
              "siblingIds":["sE1fH2YznN","Xi38znDO8c"],
              "firstName":"Kirby",
              "lastName":"Arvie"
            },
            "sDaEmbCLEu":{
                "id":"sDaEmbCLEu",
                "parentIds":["4GQe5I5fxz","BlGBH58Cwo"],
                "childrenIds":[],
                "siblingIds":["OCHN0yJ7D7","XLMybpvVSO","80FlNEY6fi","f4PcRMVcWB"],
                "firstName":"Michaela",
                "lastName":"Morehead"
              },
              "OCHN0yJ7D7":{
                  "id":"OCHN0yJ7D7",
                  "parentIds":["4GQe5I5fxz","BlGBH58Cwo"],
                  "childrenIds":[],
                  "siblingIds":["XLMybpvVSO","80FlNEY6fi","sDaEmbCLEu","f4PcRMVcWB"],
                  "firstName":"Edris",
                  "lastName":"Morehead"
                },
                "KPYwxEacy2":{
                    "id":"KPYwxEacy2",
                    "parentIds":["6FUUEnPSe3","KDsvYWwT2r"],
                    "childrenIds":["sE1fH2YznN","Xi38znDO8c","WglRMHamO0"],
                    "siblingIds":["4GQe5I5fxz","hal4cCziID","eoHVNFMF5U","KxYy1KPUM1"],
                    "firstName":"Mellisa",
                    "lastName":"Grijalva"
                  },
                  "5fJpKT6UrN":{
                      "id":"5fJpKT6UrN",
                      "parentIds":["l8EdTqwSfU","1SR7L0DsaO"],
                      "childrenIds":["sE1fH2YznN","Xi38znDO8c","WglRMHamO0"],
                      "siblingIds":[],
                      "firstName":"Erick",
                      "lastName":"Arvie"
                    },
                    "4GQe5I5fxz":{
                        "id":"4GQe5I5fxz",
                        "parentIds":["6FUUEnPSe3","KDsvYWwT2r"],
                        "childrenIds":["OCHN0yJ7D7","XLMybpvVSO","80FlNEY6fi","sDaEmbCLEu","f4PcRMVcWB"],
                        "siblingIds":["hal4cCziID","eoHVNFMF5U","KPYwxEacy2","KxYy1KPUM1"],
                        "firstName":"Rivka",
                        "lastName":"Grijalva"
                      },
                      "BlGBH58Cwo":{
                          "id":"BlGBH58Cwo",
                          "parentIds":["Mwm9yxhJqC","lTgfPRwMkN"],
                          "childrenIds":["OCHN0yJ7D7","XLMybpvVSO","80FlNEY6fi","sDaEmbCLEu","f4PcRMVcWB"],
                          "siblingIds":[],
                          "firstName":"Cortez",
                          "lastName":"Morehead"
                        },
                        "KxYy1KPUM1":{
                            "id":"KxYy1KPUM1",
                            "parentIds":["6FUUEnPSe3","KDsvYWwT2r"],
                            "childrenIds":[],
                            "siblingIds":["4GQe5I5fxz","hal4cCziID","eoHVNFMF5U","KPYwxEacy2"],
                            "firstName":"Monroe",
                            "lastName":"Grijalva"
                          },
                          "eoHVNFMF5U":{
                              "id":"eoHVNFMF5U",
                              "parentIds":["6FUUEnPSe3","KDsvYWwT2r"],
                              "childrenIds":[],
                              "siblingIds":["4GQe5I5fxz","hal4cCziID","KPYwxEacy2","KxYy1KPUM1"],
                              "firstName":"Lynelle",
                              "lastName":"Grijalva"
                            },
                            "hal4cCziID":{
                                "id":"hal4cCziID",
                                "parentIds":["6FUUEnPSe3","KDsvYWwT2r"],
                                "childrenIds":[],
                                "siblingIds":["4GQe5I5fxz","eoHVNFMF5U","KPYwxEacy2","KxYy1KPUM1"],
                                "firstName":"Keena",
                                "lastName":"Grijalva"
                              },
                              "6FUUEnPSe3":{
                                  "id":"6FUUEnPSe3",
                                  "parentIds":[],
                                  "childrenIds":["4GQe5I5fxz","hal4cCziID","eoHVNFMF5U","KPYwxEacy2","KxYy1KPUM1"],
                                  "siblingIds":[],
                                  "firstName":"Markus",
                                  "lastName":"Grijalva"
                                },
                                "KDsvYWwT2r":{
                                    "id":"KDsvYWwT2r",
                                    "parentIds":[],
                                    "childrenIds":["4GQe5I5fxz","hal4cCziID","eoHVNFMF5U","KPYwxEacy2","KxYy1KPUM1"],
                                    "siblingIds":[],
                                    "firstName":"Cortez",
                                    "lastName":"Gourd"
                                  },
                                  "Mwm9yxhJqC":{
                                      "id":"Mwm9yxhJqC",
                                      "parentIds":[],
                                      "childrenIds":["BlGBH58Cwo"],
                                      "siblingIds":[],
                                      "firstName":"Vivienne",
                                      "lastName":"Morehead"
                                    },
                                    "lTgfPRwMkN":{
                                        "id":"lTgfPRwMkN",
                                        "parentIds":[],
                                        "childrenIds":["BlGBH58Cwo"],
                                        "siblingIds":[],
                                        "firstName":"Rubie",
                                        "lastName":"Stefan"
                                      },
                                      "l8EdTqwSfU":{
                                          "id":"l8EdTqwSfU",
                                          "parentIds":[],
                                          "childrenIds":["5fJpKT6UrN"],
                                          "siblingIds":[],
                                          "firstName":"Merlin",
                                          "lastName":"Rowse"
                                        },
                                        "1SR7L0DsaO":{
                                            "id":"1SR7L0DsaO",
                                            "parentIds":[],
                                            "childrenIds":["5fJpKT6UrN"],
                                            "siblingIds":[],
                                            "firstName":"Domenica",
                                            "lastName":"Arvie"
                                          },
                                          "aNasH8D21j":{
                                              "id":"aNasH8D21j",
                                              "parentIds":[],
                                              "childrenIds":[],
                                              "siblingIds":[],
                                              "firstName":"Ruthe",
                                              "lastName":"Boros"
                                            },
                                            "u5KibtHsGm":{
                                                "id":"u5KibtHsGm",
                                                "parentIds":[],
                                                "childrenIds":[],
                                                "siblingIds":[],
                                                "firstName":"Lynetta",
                                                "lastName":"Rowse"
                                              }
                                            };

export default peopleDict;
