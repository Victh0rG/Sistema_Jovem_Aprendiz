import Image from 'next/image';
import Link from 'next/link';
import PiauiImage from './components/PiauiImage.js';

export default function Home() {
    return (
        <>
            {/* Header ocupando a parte superior da tela */}
            <div className="relative w-full h-screen bg-green-700 flex flex-col items-center justify-center text-white">
                {/* Imagem da bandeira do Piauí */}
                <div className=" absolute top-8 left-8">
                    <PiauiImage/>

                    <p className="text-5xl md:text-6xl font-bold mb-12 text-center">
                        SISTEMA DE MONITORAMENTE DOS JOVEM APRENDIZES
                    </p>
                </div>

                {/* Mensagem de boas-vindas */}
                <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">
                    Bem Vindo Servidor
                </h1>

                {/* Link para login */}
                <Link href="./login"
                    className="px-8 py-4 bg-white text-green-700 font-semibold text-xl rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
                    Acessar Login
                </Link>

            </div>

            {/* Conteúdo abaixo do header (opcional, caso queira adicionar mais seções) */}
            {/*<main className="min-h-screen bg-gray-100 flex items-center justify-center">*/}
            {/*    <p className="text-2xl text-gray-700">*/}
            {/*        Aqui você pode adicionar o restante do conteúdo da página home...*/}
            {/*    </p>*/}
            {/*</main>*/}
        </>
    );
}