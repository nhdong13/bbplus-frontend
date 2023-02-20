
interface ImportMetaEnv {
  readonly STAGING_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
