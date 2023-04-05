module.exports = {
    presets: [
      require('./TailwindBase.js')
    ],
    theme: {
      extend: {
        colors: {
          paydar: {
            color1: '#DE0039',
            color2: '#F8F8F8',
            color21: '#C6C6C6',
            color22: '#8F8F8F',
            color3: '#383838',
            color31: '#333333',
          }
        }
      },
      fontFamily: {
        IRANSans: ["IRANSans"],
      },
    },
    plugins: [],
    important: true
  }
