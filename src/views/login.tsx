import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Login() {
    return (
        <>
            <div className="flex h-screen w-[400px] flex-col items-center justify-center gap-4">
                <div className="mb-4">
                    <h1>JamesCare</h1>
                </div>
                <FormControl isRequired>
                    <FormLabel>CPF</FormLabel>
                    <Input></Input>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Senha</FormLabel>
                    <Input type="password"></Input>
                </FormControl>
                <FormControl className="mt-2 flex flex-col gap-4">
                    <Button colorScheme="blue" size="lg" className="w-full">
                        Login
                    </Button>
                    <Button
                        colorScheme="blue"
                        size="lg"
                        variant="outline"
                        className="w-full"
                    >
                        Esqueci Minha Senha
                    </Button>
                </FormControl>
                <div className="mt-10 flex flex-col gap-3 text-center">
                    <h2>Quer ser um Associado?</h2>
                    <Button colorScheme="teal" size="lg" className="w-full">
                        Formulario de Adesão
                    </Button>
                </div>
            </div>
        </>
    );
}
