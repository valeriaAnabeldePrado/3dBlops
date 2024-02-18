/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(hdr)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/",
            outputPath: "static/images/", // Puedes ajustar la ruta de salida según tu estructura de carpetas
            name: "[name].[ext]",
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
