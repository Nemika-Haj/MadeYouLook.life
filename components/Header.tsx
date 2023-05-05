import { Flex, Heading, chakra } from "@chakra-ui/react";

export default function Header() {

    return (
        <Flex
            border="2px solid red"
            height="6em"
            width="100vw"
            wrap="wrap"
            padding={5}
        >
            <Heading>
                Made You Look
                <chakra.span
                    ml={3}
                    color="lime"
                    fontWeight="bold"
                    fontSize="2xl"
                    border="2px solid lime"
                    px={2}
                    rounded="md"
                    _hover={{ background: "rgba(0, 240, 0, 0.15)" }}
                    transition="background .1s linear"
                >
                    .life
                </chakra.span>
            </Heading>
        </Flex>
    )
}