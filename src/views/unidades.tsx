import { Button } from "@chakra-ui/react";

const unidades = [
    {
        nome: "Hospital Marelino Chapmpagnat",
        endereco: "Av. Presidente Affonso Camargo",
        distancia: 5,
    },
    {
        nome: "Clinica Joao e Maria",
        endereco: "Rua João Paulo",
        distancia: 2,
    },
    {
        nome: "Voce feliz Odontologia",
        endereco: "Rua Doze de Maio",
        distancia: 15,
    },
    {
        nome: "Hospital das Clinicas",
        endereco: "R. Gen. Carneiro",
        distancia: 20,
    },
];

export default function Unidades() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4">
                <h1>Unidades Próximas</h1>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4">
                {unidades.map((unidade) => (
                    <Unidade
                        nome={unidade.nome}
                        endereco={unidade.endereco}
                        distancia={unidade.distancia}
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

const Unidade = (data: {
    nome: string;
    endereco: string;
    distancia: number;
}) => {
    return (
        <div className="w-[400px] rounded-xl border-2 border-gray-100 p-4">
            <div className="font-bold">{data.nome}</div>
            <div>
                Endereço: <b>{data.endereco}</b>
            </div>
            <div>
                Distância: <b>{data.distancia} km</b>
            </div>
        </div>
    );
};
