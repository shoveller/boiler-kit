const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  // static file 압축 활성화
  compress: true,
  // react.js의 strict모드 활성화
  ignoreDuringBuilds: false,
  // eslint의 경고를 무시하지 않음
  reactStrictMode: true,
  // 타입스크립트 빌드 에러를 무시하지 않음
  ignoreBuildErrors: false,
  // build indicator 표시 위치를 지정
  buildActivityPosition: 'bottom-right',
}

module.exports = nextConfig
