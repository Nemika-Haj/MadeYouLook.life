import { Flex } from "@chakra-ui/react"
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

export type BaseLayoutProps = {
    title?: string
    children?: React.ReactNode
}

export default function BaseLayout(props: BaseLayoutProps) {

    return (
        <>
            <Head>
                <title>{props.title ? `${props.title} - Made You Look` : "Made You Look :D"}</title>
            </Head>
            
            <Flex
                className="main"
                direction="column"
                width="100vw"
                minHeight="100vh"
                wrap="wrap"
            >
                <Header />

                {props.children}

                <Footer />
            </Flex>
        </>
    )

}