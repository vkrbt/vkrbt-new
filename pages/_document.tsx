import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          <link
              href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap"
              rel="stylesheet"
          />
          <title key="title">Влад Корбут | Разработчик интерфейсов</title>
          <meta key="og:title" property="og:title" content="Влад Корбут"/>
          <meta key="description" name="description" content="Мои мысли в заметках"/>
          <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon-new.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
