import Image from "next/image";


export default function PiauiImage() {
    return (
        <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piau%C3%AD.svg"
            alt="Bandeira do Piauí"
            width={100}
            height={134}
            priority
            className="drop-shadow-lg"
        />
    )
}