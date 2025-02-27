const { expect, assert } = require("chai");
const { testOptional } = require("../extensions/index.js");
const { calculateHanoi } = require("../src/hanoi-tower.js");

it.optional = testOptional;

Object.freeze(expect);
Object.freeze(assert);

describe("Hanoi tower", () => {
  //Presence requirement
  describe("variable presence", () => {
    it.optional("function calculateHanoi exists", () => {
      expect(calculateHanoi).to.exist;
      expect(calculateHanoi).to.be.instanceOf(Function);
    });
  });

  //Functional requirements
  describe("base requirements", () => {
    it.optional("returns correct answer", () => {
      assert.deepEqual(calculateHanoi(5, 4074), { turns: 31, seconds: 27 });
      assert.deepEqual(calculateHanoi(38, 4594), {
        turns: 274877906943,
        seconds: 215402800390,
      });
      assert.deepEqual(calculateHanoi(34, 4005), {
        turns: 17179869183,
        seconds: 15442579040,
      });
      assert.deepEqual(calculateHanoi(19, 4770), {
        turns: 524287,
        seconds: 395688,
      });
      assert.deepEqual(calculateHanoi(23, 4344), {
        turns: 8388607,
        seconds: 6951884,
      });
      assert.deepEqual(calculateHanoi(9, 4347), { turns: 511, seconds: 423 });
      assert.deepEqual(calculateHanoi(15, 4254), {
        turns: 32767,
        seconds: 27729,
      });
      assert.deepEqual(calculateHanoi(14, 4681), {
        turns: 16383,
        seconds: 12599,
      });
      assert.deepEqual(calculateHanoi(9, 4308), { turns: 511, seconds: 427 });
      assert.deepEqual(calculateHanoi(18, 4442), {
        turns: 262143,
        seconds: 212452,
      });
      assert.deepEqual(calculateHanoi(10, 4159), { turns: 1023, seconds: 885 });
      assert.deepEqual(calculateHanoi(44, 4685), {
        turns: 17592186044415,
        seconds: 13518008486636,
      });
      assert.deepEqual(calculateHanoi(39, 4936), {
        turns: 549755813887,
        seconds: 400956428280,
      });
      assert.deepEqual(calculateHanoi(49, 4797), {
        turns: 562949953421311,
        seconds: 422476512886537,
      });
      assert.deepEqual(calculateHanoi(43, 4335), {
        turns: 8796093022207,
        seconds: 7304713928476,
      });
      assert.deepEqual(calculateHanoi(20, 4091), {
        turns: 1048575,
        seconds: 922725,
      });
      assert.deepEqual(calculateHanoi(19, 4351), {
        turns: 524287,
        seconds: 433792,
      });
      assert.deepEqual(calculateHanoi(26, 4164), {
        turns: 67108863,
        seconds: 58019189,
      });
      assert.deepEqual(calculateHanoi(48, 4040), {
        turns: 281474976710655,
        seconds: 250819286177811,
      });
      assert.deepEqual(calculateHanoi(7, 4090), { turns: 127, seconds: 111 });
      assert.deepEqual(calculateHanoi(43, 4431), {
        turns: 8796093022207,
        seconds: 7146453369430,
      });
      assert.deepEqual(calculateHanoi(46, 4851), {
        turns: 70368744177663,
        seconds: 52221702543720,
      });
      assert.deepEqual(calculateHanoi(13, 4333), {
        turns: 8191,
        seconds: 6805,
      });
      assert.deepEqual(calculateHanoi(20, 4693), {
        turns: 1048575,
        seconds: 804361,
      });
      assert.deepEqual(calculateHanoi(26, 4713), {
        turns: 67108863,
        seconds: 51260748,
      });
      assert.deepEqual(calculateHanoi(31, 4540), {
        turns: 2147483647,
        seconds: 1702850468,
      });
      assert.deepEqual(calculateHanoi(9, 4128), { turns: 511, seconds: 445 });
      assert.deepEqual(calculateHanoi(3, 4941), { turns: 7, seconds: 5 });
      assert.deepEqual(calculateHanoi(39, 4005), {
        turns: 549755813887,
        seconds: 494162529336,
      });
      assert.deepEqual(calculateHanoi(12, 4071), {
        turns: 4095,
        seconds: 3621,
      });
      assert.deepEqual(calculateHanoi(4, 4504), { turns: 15, seconds: 11 });
      assert.deepEqual(calculateHanoi(10, 4050), { turns: 1023, seconds: 909 });
      assert.deepEqual(calculateHanoi(19, 4913), {
        turns: 524287,
        seconds: 384171,
      });
      assert.deepEqual(calculateHanoi(26, 4253), {
        turns: 67108863,
        seconds: 56805056,
      });
      assert.deepEqual(calculateHanoi(5, 4446), { turns: 31, seconds: 25 });
      assert.deepEqual(calculateHanoi(19, 4393), {
        turns: 524287,
        seconds: 429645,
      });
      assert.deepEqual(calculateHanoi(39, 4421), {
        turns: 549755813887,
        seconds: 447663634922,
      });
      assert.deepEqual(calculateHanoi(14, 4179), {
        turns: 16383,
        seconds: 14113,
      });
      assert.deepEqual(calculateHanoi(7, 4669), { turns: 127, seconds: 97 });
      assert.deepEqual(calculateHanoi(7, 4107), { turns: 127, seconds: 111 });
      assert.deepEqual(calculateHanoi(25, 4683), {
        turns: 33554431,
        seconds: 25794565,
      });
      assert.deepEqual(calculateHanoi(24, 4125), {
        turns: 16777215,
        seconds: 14641933,
      });
      assert.deepEqual(calculateHanoi(34, 4838), {
        turns: 17179869183,
        seconds: 12783697614,
      });
      assert.deepEqual(calculateHanoi(42, 4498), {
        turns: 4398046511103,
        seconds: 3520001654061,
      });
      assert.deepEqual(calculateHanoi(15, 4400), {
        turns: 32767,
        seconds: 26809,
      });
      assert.deepEqual(calculateHanoi(34, 4951), {
        turns: 17179869183,
        seconds: 12491926693,
      });
      assert.deepEqual(calculateHanoi(29, 4808), {
        turns: 536870911,
        seconds: 401983211,
      });
      assert.deepEqual(calculateHanoi(46, 4938), {
        turns: 70368744177663,
        seconds: 51301636095501,
      });
      assert.deepEqual(calculateHanoi(8, 4734), { turns: 255, seconds: 193 });
      assert.deepEqual(calculateHanoi(14, 4004), {
        turns: 16383,
        seconds: 14729,
      });
      assert.deepEqual(calculateHanoi(21, 4581), {
        turns: 2097151,
        seconds: 1648055,
      });
      assert.deepEqual(calculateHanoi(19, 4832), {
        turns: 524287,
        seconds: 390611,
      });
      assert.deepEqual(calculateHanoi(2, 4840), { turns: 3, seconds: 2 });
      assert.deepEqual(calculateHanoi(21, 4892), {
        turns: 2097151,
        seconds: 1543283,
      });
      assert.deepEqual(calculateHanoi(11, 4769), {
        turns: 2047,
        seconds: 1545,
      });
      assert.deepEqual(calculateHanoi(23, 4714), {
        turns: 8388607,
        seconds: 6406233,
      });
      assert.deepEqual(calculateHanoi(38, 4801), {
        turns: 274877906943,
        seconds: 206115489480,
      });
      assert.deepEqual(calculateHanoi(3, 4616), { turns: 7, seconds: 5 });
      assert.deepEqual(calculateHanoi(36, 4381), {
        turns: 68719476735,
        seconds: 56468869264,
      });
      assert.deepEqual(calculateHanoi(34, 4103), {
        turns: 17179869183,
        seconds: 15073733623,
      });
      assert.deepEqual(calculateHanoi(7, 4153), { turns: 127, seconds: 110 });
      assert.deepEqual(calculateHanoi(15, 4789), {
        turns: 32767,
        seconds: 24631,
      });
      assert.deepEqual(calculateHanoi(45, 4245), {
        turns: 35184372088831,
        seconds: 29838336753778,
      });
      assert.deepEqual(calculateHanoi(41, 4880), {
        turns: 2199023255551,
        seconds: 1622230270488,
      });
      assert.deepEqual(calculateHanoi(46, 4495), {
        turns: 70368744177663,
        seconds: 56357614914257,
      });
      assert.deepEqual(calculateHanoi(20, 4116), {
        turns: 1048575,
        seconds: 917120,
      });
      assert.deepEqual(calculateHanoi(47, 4399), {
        turns: 140737488355327,
        seconds: 115175030252143,
      });
      assert.deepEqual(calculateHanoi(24, 4710), {
        turns: 16777215,
        seconds: 12823349,
      });
      assert.deepEqual(calculateHanoi(21, 4393), {
        turns: 2097151,
        seconds: 1718584,
      });
      assert.deepEqual(calculateHanoi(17, 4195), {
        turns: 131071,
        seconds: 112480,
      });
      assert.deepEqual(calculateHanoi(24, 4897), {
        turns: 16777215,
        seconds: 12333668,
      });
      assert.deepEqual(calculateHanoi(17, 4571), {
        turns: 131071,
        seconds: 103228,
      });
      assert.deepEqual(calculateHanoi(19, 4999), {
        turns: 524287,
        seconds: 377562,
      });
      assert.deepEqual(calculateHanoi(18, 4807), {
        turns: 262143,
        seconds: 196320,
      });
      assert.deepEqual(calculateHanoi(14, 4833), {
        turns: 16383,
        seconds: 12203,
      });
      assert.deepEqual(calculateHanoi(5, 4216), { turns: 31, seconds: 26 });
      assert.deepEqual(calculateHanoi(22, 4886), {
        turns: 4194303,
        seconds: 3090358,
      });
      assert.deepEqual(calculateHanoi(30, 4698), {
        turns: 1073741823,
        seconds: 822790668,
      });
      assert.deepEqual(calculateHanoi(20, 4036), {
        turns: 1048575,
        seconds: 935299,
      });
      assert.deepEqual(calculateHanoi(6, 4604), { turns: 63, seconds: 49 });
      assert.deepEqual(calculateHanoi(25, 4534), {
        turns: 33554431,
        seconds: 26642247,
      });
      assert.deepEqual(calculateHanoi(7, 4023), { turns: 127, seconds: 113 });
      assert.deepEqual(calculateHanoi(47, 4983), {
        turns: 140737488355327,
        seconds: 101676692369893,
      });
      assert.deepEqual(calculateHanoi(12, 4122), {
        turns: 4095,
        seconds: 3576,
      });
      assert.deepEqual(calculateHanoi(47, 4930), {
        turns: 140737488355327,
        seconds: 102769768373058,
      });
      assert.deepEqual(calculateHanoi(49, 4533), {
        turns: 562949953421311,
        seconds: 447081366052662,
      });
      assert.deepEqual(calculateHanoi(27, 4296), {
        turns: 134217727,
        seconds: 112472955,
      });
      assert.deepEqual(calculateHanoi(7, 4516), { turns: 127, seconds: 101 });
      assert.deepEqual(calculateHanoi(36, 4750), {
        turns: 68719476735,
        seconds: 52082129736,
      });
      assert.deepEqual(calculateHanoi(8, 4694), { turns: 255, seconds: 195 });
      assert.deepEqual(calculateHanoi(26, 4884), {
        turns: 67108863,
        seconds: 49465992,
      });
      assert.deepEqual(calculateHanoi(4, 4999), { turns: 15, seconds: 10 });
      assert.deepEqual(calculateHanoi(38, 4971), {
        turns: 274877906943,
        seconds: 199066679741,
      });
      assert.deepEqual(calculateHanoi(18, 4808), {
        turns: 262143,
        seconds: 196280,
      });
      assert.deepEqual(calculateHanoi(18, 4760), {
        turns: 262143,
        seconds: 198259,
      });
      assert.deepEqual(calculateHanoi(29, 4364), {
        turns: 536870911,
        seconds: 442881594,
      });
      assert.deepEqual(calculateHanoi(44, 4468), {
        turns: 17592186044415,
        seconds: 14174545604273,
      });
      assert.deepEqual(calculateHanoi(46, 4236), {
        turns: 70368744177663,
        seconds: 59803465306795,
      });
      assert.deepEqual(calculateHanoi(15, 4522), {
        turns: 32767,
        seconds: 26086,
      });
    });
  });
});
