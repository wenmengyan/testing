module.exports = {
  add: (...args) => {/* 加法 */
    return args.reduce((prev, curr) => {
      return prev + curr;
    })
  },
  mul: (...args) => {/* 乘法 */
    return args.reduce((prev, curr) => {
      return prev * curr;
    });
  }
};