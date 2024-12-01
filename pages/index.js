import Link from 'next/link'

export default function Homepage(){
    return(
        <div>
             <h1>Alura - Home</h1>
             <Link href="/faq">
                <a>Ir para o FAQ</a>
             </Link>
        </div>
    )
}