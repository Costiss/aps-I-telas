import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Heading,
    Input,
} from "@chakra-ui/react";

const aplications = [
    {
        nome: "Gabriel Costa",
        tempo: "Ha 10 minutos",
    },
    {
        nome: "Fulano de tal",
        tempo: "Ha 2 dias",
    },
    {
        nome: "Carlinhos de tal",
        tempo: "Ha 9 dias",
    },
    {
        nome: "Joaquim de tal",
        tempo: "Ha 2 semanas",
    },
];

export default function Acceptances() {
    return (
        <div className="flex flex-col gap-4">
            <div className="mb-2">
                <Heading className="text-4xl">Formularios de Adesao</Heading>
            </div>
            {aplications.map((aplication) => (
                <Acceptance {...aplication} />
            ))}
            <div className="justify-left mt-20 flex flex-col gap-4">
                <FormControl>
                    <FormLabel>CPF</FormLabel>
                    <Input
                        disabled
                        className="cursor-not-allowed"
                        value={"000.000.000-00"}
                    ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Nome</FormLabel>
                    <Input
                        disabled
                        className="cursor-not-allowed"
                        value={"Gabriel Costa"}
                    ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        disabled
                        className="cursor-not-allowed"
                        value={"gabriel@email.com"}
                    ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Telefone</FormLabel>
                    <Input
                        disabled
                        className="cursor-not-allowed"
                        value={"4199999999"}
                    ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Endereco completo</FormLabel>
                    <Input
                        disabled
                        className="cursor-not-allowed"
                        value={"Rua limoes 124 - bairro limoes"}
                    ></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Data de Nascimento</FormLabel>
                    <Input
                        disabled
                        className="cursor-not-allowed"
                        value={"05/11/2002 (21 Anos)"}
                    ></Input>
                </FormControl>
                <FormControl className="mt-6 flex flex-col gap-2">
                    <Button colorScheme="green" size="lg" className="w-full">
                        Aprovar
                    </Button>
                    <Button
                        colorScheme="red"
                        size="lg"
                        className="w-full"
                        variant="outline"
                    >
                        Rejeitar
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
        </div>
    );
}

function Acceptance({ nome, tempo }: { nome: string; tempo: string }) {
    return (
        <Card>
            <CardBody className="flex items-end gap-4 rounded-xl border-2 border-white pt-0">
                <div className="flex-1">
                    <p className="text-sm font-medium leading-none">
                        Aplicante
                    </p>
                    <h1 className="text-bold mb-2 text-lg">{nome}</h1>
                    <p className="text-sm font-medium leading-none">Criado:</p>
                    <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        {tempo}
                    </p>
                </div>
                <div className="flex-initial">
                    <Button size="md" colorScheme="blue">
                        Ver detalhes
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}
