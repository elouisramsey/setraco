module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        pri: '#008349',
        sec: '#CDCE00',
        sublinks: '#56581E',
        ft: '#0DD969'
      },
      fontSize: {
        three: '1.3rem',
        tiny: '0.6rem'
      },
      width: {
        '4/7': '46.1428571%'
      }
    },
    inset: {
      move: '80vh'
    },
    height: {
      twenty: '28rem'
    }
  }
}
