import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */

	images: {
		remotePatterns: [
			{
				protocol: "http", // If you need to allow http images
				hostname: "**", // Matches any hostname
				port: "", // Leave empty or specify if needed
				pathname: "/**", // Matches any path
			},
			{
				protocol: "https", // If you need to allow https images
				hostname: "**", // Matches any hostname
				port: "", // Leave empty or specify if needed
				pathname: "/**", // Matches any path
			},
		],
	},
	devIndicators: false,
};

import bundleAnLyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnLyzer({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
