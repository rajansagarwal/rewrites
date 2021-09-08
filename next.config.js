module.exports = {
  async redirects() {
    return [
      {
        source: '/g/:path*',
        destination: `https://github.com/itsrajan/:path*`,
				permanent: true,
      },
    ]
  },
}

