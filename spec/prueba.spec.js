// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });

const { JSDOM } = require('jsdom');
const { document } = (new JSDOM('')).window;
global.document = document;

const{ Repository , Activity }  =require("../scripts/index");
console.log(Repository);

describe("Testing de las Clases",()=>{

  it("test de que son funciones",()=>{
    expect(typeof(Repository)).toBe("function");
    expect(typeof(Activity)).toBe("function");
  })

  it("test de que tiene clases constructoras",()=>{
    expect(Repository.prototype.constructor).toBeDefined();
    expect(Activity.prototype.constructor).toBeDefined();
  })
  it("test para el constructor de Activity ",()=>{
    const acti=new Activity("nadar", "es muy refrescantes en días calientes","assets\img\csslogo.png");
    expect(typeof(acti)).toEqual("object");
    expect(acti.title).toEqual("nadar");
    expect(acti.description).toEqual("es muy refrescantes en días calientes");
    expect(acti.imgUrl).toEqual("assets\img\csslogo.png");
  })
  


})
