import Carteirinha from "./views/carteirinha";
import FormularioAdesao from "./views/formulario";
import Login from "./views/login";
import MenuPrincipal from "./views/menu-principal";
import Medicos from "./views/medicos";
import Unidades from "./views/unidades";
import Acceptances from "./admin-views/acceptances";
import CadastroMedicos from "./admin-views/cadastro-medicos";
import CadastroUnidades from "./admin-views/cadastro-unidades";

function App() {
    return (
        <>
            <section className="w-max-[360px] flex snap-x snap-proximity flex-col items-center justify-center gap-10 p-10">
                <div className="mb-10 block h-[800px] snap-center">
                    <Login />
                </div>
                <div className="mb-10 h-[800px] snap-center">
                    <FormularioAdesao />
                </div>
                <div className="mb-10 h-[800px] snap-center">
                    <MenuPrincipal />
                </div>
                <div className="mb-10 h-[800px] snap-center">
                    <Carteirinha />
                </div>
                <div className="mb-10 block h-[1000px] snap-center">
                    <Medicos />
                </div>
                <div className="mb-10 block h-[800px] snap-center">
                    <Unidades />
                </div>
            </section>
            <section className="flex w-full flex-col items-center justify-center gap-20 p-10">
                <Acceptances />
                <CadastroMedicos />
                <CadastroUnidades />
            </section>
        </>
    );
}

export default App;
