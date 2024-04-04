import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";

export default function CadastroUnidades() {
    return (
        <div className="flex flex-col gap-4">
            <div className="mb-6 w-[400px]">
                <h1 className="text-3xl">Cadastro de Unidade</h1>
            </div>
            <FormControl isRequired>
                <FormLabel>CNPJ</FormLabel>
                <Input></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Nome do estabelecimento</FormLabel>
                <Input></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Contato para atendimentos</FormLabel>
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
                <FormLabel>Endereço</FormLabel>
                <Input></Input>
            </FormControl>
            <FormControl className="mt-6 flex flex-col gap-2">
                <Button colorScheme="blue" size="lg" className="w-full">
                    Cadastrar
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
