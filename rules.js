/*
Fractal Tree: (F -> FF+[+F-F-F]-[-F+F+F] 25°),
Hilbert: (A -> (-BF+AFA+FB-), B -> (+AF-BFB-FA+) 90°)
Sierpinski triangle: (F -> (G-F-G), G -> (F+G+F), 60°)
Koch curve: (F -> (F-F++F-F), 60°)
Dragon: (X -> (X+YF+) , Y -> (-FX-Y) 90° )
Quadratic: (F -> (F+F-F) 90°)
32-segment curve (F -> (-F+F-F-F+F+FF-F+F+FF+F-F-FF+FF-FF+F+F-FF-F-F+FF-F-F+F+F-F+) 90°)
Arrowhead curve (X -> (YF+XF+Y), Y -> (XF-YF-X) 60°)
Peano-Gosper curve (X -> (X+YF++YF-FX--FXFX-YF+), Y -> (-FX+YFYF++YF+FX--FX-Y), 60°)
Peano curve (F -> (F+F-F-F-F+F+F+F-F), 90° )
*/


var rules={
  "Tree": {
    "system":[
      {
        a: "F", b: "FF+[+F-F-F]-[-F+F+F]"
      }
    ],
    angle: 25,
    axiom: "F",
    len: 100,
    transX:w/2,
    transY:h,
    scl:0.5

  },
  "Hilbert": {
    "system" :[
      {
        a: "A", b:	"-BF+AFA+FB-"
      },
      {
        a: "B", b: "+AF-BFB-FA+"
      }
    ],
    angle: 90,
    axiom: "A",
    len: 10,
    transX:w,
    transY:h,
    scl:1
  },
  "Sierpinski": {
    "system" :[
      {
        a: "F",  b:	"G-F-G"
      },
      {
        a: "G", b: "F+G+F"
      }
    ],
    angle: 60,
    axiom: "F",
    len: 10,
    transX:w/2,
    transY:h,
    scl:0.9
  },
  "Koch": {
    "system" :[
      {
        a: "F",  b:	"F-F++F-F"
      }
    ],
    angle: 60,
    axiom: "F++F++F",
    len: 40,
    transX:w/2,
    transY:h,
    scl:0.6
  },
  "Dragon": {
    "system" :[
      {
        a: "X", b:	"X+YF+"
      },
      {
        a: "Y", b:	"-FX-Y"
      }
    ],
    angle: 90,
    axiom: "FX",
    len: 10,
    transX:w/4,
    transY:(1*h)/4,
    scl:1
  },
  "Quadratic": {
    "system" :[
      {
        a: "F", b:	"F+F-F"
      }
    ],
    angle: 90,
    axiom: "F+F+F+F",
    len: 10,
    transX:0,
    transY:0,
    scl:1
  },
  "32-Segment": {
    "system" :[
      {
        a: "F", b:	"-F+F-F-F+F+FF-F+F+FF+F-F-FF+FF-FF+F+F-FF-F-F+FF-F-F+F+F-F+"
      }
    ],
    angle: 90,
    axiom: "F",
    len: 10,
    transX:w/2,
    transY:h,
    scl:0.9
  },
  "Arrowhead": {
    "system" :[
      {
        a: "X", b:	"YF+XF+Y"
      },{
        a: "Y", b:	"XF-YF-X"
      }
    ],
    angle: 60,
    axiom: "X",
    len: 10,
    transX:w/2,
    transY:h,
    scl:0.9
  },
  "Peano-Gosper": {
    "system" :[
      {
        a: "X", b:	"X+YF++YF-FX--FXFX-YF+"
      },{
        a: "Y", b:	"-FX+YFYF++YF+FX--FX-Y"
      }
    ],
    angle: 60,
    axiom: "X",
    len: 10,
    transX:0,
    transY:0,
    scl:0.9
  },
  "Peano": {
    "system" :[
      {
        a: "F", b:	"F+F-F-F-F+F+F+F-F"
      }
    ],
    angle: 90,
    axiom: "F",
    len: 5,
    transX:w/2,
    transY:h,
    scl:1
  }
}
