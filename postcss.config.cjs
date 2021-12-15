const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    plugins: {
        autoprefixer: {
            cascade: true
        },
        tailwindcss: {},
        ...(isProd
            ? {
                  cssnano: {
                      preset: 'advanced'
                  }
              }
            : {})
    }
}
