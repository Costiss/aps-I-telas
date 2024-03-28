import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Carteirinha() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4">
                <h1>Carteirinha</h1>
                <FormControl>
                    <FormLabel>N°Associado</FormLabel>
                    <Input
                        fontWeight="bold"
                        type="number"
                        value="123456"
                        disabled
                    ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>CPF</FormLabel>
                    <Input
                        fontWeight="bold"
                        value="123.456.789-00"
                        disabled
                    ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Nome</FormLabel>
                    <Input
                        fontWeight="bold"
                        value="Fulano da Silva"
                        disabled
                    ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Data Nascimento</FormLabel>
                    <Input
                        fontWeight="bold"
                        value="01/01/2000"
                        disabled
                    ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Nivel do Plano</FormLabel>
                    <Input
                        fontWeight="bold"
                        value="Plano Básico"
                        disabled
                    ></Input>
                </FormControl>
                <Button
                    colorScheme="blue"
                    size="lg"
                    className="w-full"
                    variant="outline"
                >
                    Voltar
                </Button>
            </div>
        </div>
    );
}
