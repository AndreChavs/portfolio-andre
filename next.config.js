/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true
}

module.exports = nextConfig

const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'
/*Se tiver uma variavelemproducao, ele esta em isProd*/

module.exports = withPWA({
	pwa: {
		dest: 'public',
		disable: !isProd
	}
})
