import Link from '../src/componentes/Link';

export default function Homepage(){
    return (
        (<div>
            <h1>Alura - Home</h1>
            <Link href="/faq">
                Ir para a pagina do FAQ
            </Link>
        </div>)
    );
}