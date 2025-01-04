/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production"; // 本番環境かどうかを判定

const nextConfig = {
  // 本番環境のみ basePath と assetPrefix を適用
  basePath: isProduction ? "/taisei" : "",
  assetPrefix: isProduction ? "/taisei" : "",
  images: {
    unoptimized: isProduction, // 本番環境では画像最適化を無効化
  },
};

module.exports = nextConfig;
