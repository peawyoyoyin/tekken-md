/// <reference types="vite/client" />
/// <reference types="peggy" />

declare module '*.pegjs' {
  const parse: import('peggy').Parser['parse']
  export {
    parse
  }
}