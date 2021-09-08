module.exports = {
  async redirects() {
    return [
      {
        source: '/g/:path*',
        destination: `https://github.com/itsrajan/:path*`,
				permanent: true,
      },
			{
        source: '/i/:path*',
        destination: `https://www.youtube.com/watch?v=cGw-8FrRT1E`,
				permanent: true,
      },
    ]
  },
}

