import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="h-full">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Red+Hat+Text&family=MuseoModerno:wght@700&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body className="h-full bg-stone-900 text-stone-50 text-lg">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
