exports.handler = function(event, context, callback) {
  // your server-side functionality
  const questionData = [
    {
      text:
        "A helicopter is rising vertically at 8.0ms<sup>-1</sup>. An object is fired from the helicopter and lands 3.0s later. What is it's velocity as it hits the ground?",

      values:
        "v &=\\ {?}\\\\ u &=\\ {8.0ms^{-1}}\\\\ a &=\\ {-9.8ms^{-2}}\\\\ t &=\\ {3.0s}\\\\",

      working:
        "v &=\\ {u + at}\\\\ &=\\ {8.0 + (-9.8) \\times 3.0}\\\\ &=\\ {-21.4ms^{-1}}\\\\",

      ans: -21.4
    },

    {
      text:
        "A helicopter is rising vertically at 5.2ms<sup>-1</sup>. An object is fired from the helicopter and lands 4.0s later. What is it's velocity as it hits the ground?",

      values:
        "v &=\\ {?}\\\\ u &=\\ {5.2ms^{-1}}\\\\ a &=\\ {-9.8ms^{-2}}\\\\ t &=\\ {4.0s}\\\\",

      working:
        "v &=\\ {u + at}\\\\ &=\\ {5.2 + (-9.8) \\times 4.0}\\\\ &=\\ {-34.0ms^{-1}}\\\\",

      ans: -34.0
    },

    {
      text:
        "A helicopter is rising vertically at 4.5ms<sup>-1</sup>. An object is fired from the helicopter and lands 2.6s later. What is it's velocity as it hits the ground?",

      values:
        "v &=\\ {?}\\\\ u &=\\ {4.5ms^{-1}}\\\\ a &=\\ {-9.8ms^{-2}}\\\\ t &=\\ {2.6s}\\\\",

      working:
        "v &=\\ {u + at}\\\\ &=\\ {4.5 + (-9.8) \\times 2.6}\\\\ &=\\ {-21.0ms^{-1}}\\\\",

      ans: -21.0
    },

    {
      text:
        "A helicopter is rising vertically at 7.3ms<sup>-1</sup>. An object is fired from the helicopter and lands 5.0s later. How high was the helicopter when the object was released?",

      values:
        "s &=\\ {?}\\\\ u &=\\ {7.3ms^{-1}}\\\\ a &=\\ {-9.8ms^{-2}}\\\\ t &=\\ {5.0s}\\\\",

      working:
        "s &=\\ {ut + \\dfrac{1}{2}at^2}\\\\ &=\\ {7.3 \\times 5.0 + \\dfrac{1}{2} (-9.8) \\times (5.0)^2}\\\\ &=\\ {86.0m}\\\\",

      ans: 86.0
    },

    {
      text:
        "A helicopter is rising vertically at 4.1ms<sup>-1</sup>. An object is fired from the helicopter and lands 3.8s later. How high was the helicopter when the object was released?",

      values:
        "s &=\\ {?}\\\\ u &=\\ {4.1ms^{-1}}\\\\ a &=\\ {-9.8ms^{-2}}\\\\ t &=\\ {3.8s}\\\\",

      working:
        "s &=\\ {ut + \\dfrac{1}{2}at^2}\\\\ &=\\ {4.1 \\times 3.8 + \\dfrac{1}{2} (-9.8) \\times (3.8)^2}\\\\ &=\\ {55.2m}\\\\",

      ans: 55.2
    },

    {
      text:
        "A helicopter is rising vertically at 9.0ms<sup>-1</sup>. An object is fired from the helicopter and lands 4.3s later. How high was the helicopter when the object was released?",

      values:
        "s &=\\ {?}\\\\ u &=\\ {9.0ms^{-1}}\\\\ a &=\\ {-9.8ms^{-2}}\\\\ t &=\\ {4.3s}\\\\",

      working:
        "s &=\\ {ut + \\dfrac{1}{2}at^2}\\\\ &=\\ {9.0 \\times 4.3 + \\dfrac{1}{2} (-9.8) \\times (4.3)^2}\\\\ &=\\ {51.9m}\\\\",

      ans: 51.9
    }
  ];

  var random = Math.floor(Math.random() * questionData.length);

  var question = questionData[random];

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(question)
  });
};
