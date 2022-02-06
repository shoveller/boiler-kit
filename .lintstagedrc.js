module.exports = {
  '**/*.{ts,tsx}': [
    // 타입 체크
    () => 'tsc --skipLibCheck --noEmit',
    // 코딩 컨벤션 체크
    () => 'npm run lint',
    // 코드 포매팅
    () => 'npm run prettier',
  ],
  '**/*.{js,jsx,json}': [
    // 코딩 컨벤션 체크
    () => 'npm run lint',
    // 코드 포매팅
    () => 'npm run prettier',
  ],
}
