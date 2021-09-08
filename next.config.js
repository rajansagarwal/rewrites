module.exports = {
  async rewrites() {
    return {
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: '/g/:path*',
          destination: `https://github.com/itsrajan/:path*`,
        },
      ],
    }
  },
}