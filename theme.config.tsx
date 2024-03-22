import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Ensemble Docs</span>,
  project: {
    link: 'https://github.com/ensembleui/',
  },
  chat: {
    link: 'https://discord.gg/cEHkJTmn75',
  },
  docsRepositoryBase: 'https://github.com/EnsembleUI/ensemble_docs/blob/main',
  footer: {
    text: 'Ensemble',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}

export default config
