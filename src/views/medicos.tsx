import { Search2Icon } from "@chakra-ui/icons";
import {
    Avatar,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
} from "@chakra-ui/react";
const medicos = [
    {
        name: "Kleber Santos",
        src: "https://bit.ly/dan-abramov",
        especialidade: "Dermatologista",
        localidade: "Curitiba, PR - Jardim Das Américas",
    },
    {
        name: "Aleson Rodrigues",
        src: "https://bit.ly/tom-cook",
        especialidade: "Dermatologista",
        localidade: "Londrina, PR - Centro",
    },
    {
        name: "Roberto Cooper",
        src: "https://bit.ly/wade-cooper",
        especialidade: "Dermatologista",
        localidade: "Maringa, PR - Zona 01",
    },
    {
        name: "João Da Silva",
        src: "https://bit.ly/jenny-wilson",
        especialidade: "Dermatologista",
        localidade: "Curitiba, PR - Água Verde",
    },
];

export default function Medicos() {
    return (
        <div>
            <div className="flex w-[400px] flex-col gap-4">
                <FormControl>
                    <InputGroup>
                        <InputLeftAddon>
                            <Search2Icon />
                        </InputLeftAddon>
                        <Input placeholder="Pesquisar por nome..." />
                    </InputGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Especialidade</FormLabel>
                    <Select>
                        <option>Dermatologista</option>
                        <option>Urologista</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Estado</FormLabel>
                    <Select>
                        <option>Paraná</option>
                        <option>São Paulo</option>
                        <option>Santa Catarina</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Cidade</FormLabel>
                    <Select disabled>
                        <option>Selecione uma cidade...</option>
                        <option>Curitiba</option>
                        <option>Londrina</option>
                    </Select>
                </FormControl>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4">
                {medicos.map((medico) => (
                    <Medico
                        name={medico.name}
                        src={medico.src}
                        especialidade={medico.especialidade}
                        localidade={medico.localidade}
                    />
                ))}
            </div>
            <Button
                colorScheme="blue"
                size="lg"
                className="mt-10 w-full"
                variant="outline"
            >
                Voltar
            </Button>
        </div>
    );
}

const Medico = ({
    name,
    src,
    especialidade,
    localidade,
}: {
    name: string;
    src: string;
    especialidade: string;
    localidade: string;
}) => {
    return (
        <div className="grid w-[400px] grid-cols-4 items-center rounded-xl border-2 p-4">
            <Avatar size="lg" className="col-span-1" name={name} src={src} />
            <div className="col-span-3 flex w-full flex-col">
                <div className="font-bold">{name}</div>
                <div>{especialidade}</div>
                <div className="italic">{localidade}</div>
            </div>
        </div>
    );
};
