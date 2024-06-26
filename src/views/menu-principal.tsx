import { Button, Image, Stack } from "@chakra-ui/react";

export default function MenuPrincipal() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl">Bem Vindo, Fulano!</h1>
            <Stack>
                <Image src="/menu.png" width={300} className="my-10" />
                <Button colorScheme="blue" size="lg" variant="outline">
                    Carteirinha Virtual
                </Button>

                <Button colorScheme="blue" size="lg" variant="outline">
                    Consultar Médicos
                </Button>

                <Button colorScheme="blue" size="lg" variant="outline">
                    Consultar Unidades do Plano
                </Button>
            </Stack>
        </div>
    );
}
