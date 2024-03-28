import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function FormularioAdesao() {
    return (
        <div className="flex flex-col gap-4">
            <div className="mb-6">
                <h1 className="text-3xl">Formulário de Adesão</h1>
            </div>
            <FormControl isRequired>
                <FormLabel>CPF</FormLabel>
                <Input></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email"></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Telefone</FormLabel>
                <Input></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Endereco completo</FormLabel>
                <Input></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Data de Nascimento</FormLabel>
                <Input type="date"></Input>
            </FormControl>
            <FormControl className="mt-6 flex flex-col gap-2">
                <Button colorScheme="blue" size="lg" className="w-full">
                    Enviar
                </Button>
                <Button
                    colorScheme="blue"
                    size="lg"
                    className="w-full"
                    variant="outline"
                >
                    Voltar
                </Button>
            </FormControl>
        </div>
    );
}
