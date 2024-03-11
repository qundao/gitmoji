import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
// import { Analytics } from '@vercel/analytics/react'
import { LanguageProvider } from 'src/contexts/LanguageContext';

import Layout from 'src/components/Layout'
import 'src/utils/theme/theme.css'

const App = (props: AppProps) => (
  <LanguageProvider>
  <ThemeProvider>
    <Layout>
      <props.Component {...props.pageProps} />
      {/* <Analytics /> */}
    </Layout>
  </ThemeProvider>
  </LanguageProvider>
)

export default App
