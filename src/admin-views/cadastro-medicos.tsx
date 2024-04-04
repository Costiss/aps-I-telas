import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";

export default function CadastroMedicos() {
    return (
        <div className="flex flex-col gap-4">
            <div className="mb-6 w-[400px]">
                <h1 className="text-3xl">Cadastro de Medico</h1>
            </div>
            <FormControl isRequired>
                <FormLabel>CPF/CNPJ</FormLabel>
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
                <FormLabel>Endereço do consultório</FormLabel>
                <Input></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Especialidade</FormLabel>
                <Select>
                    <option>Selecione uma especialidade...</option>
                    <option>Dermatologista</option>
                    <option>Urologista</option>
                </Select>
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
