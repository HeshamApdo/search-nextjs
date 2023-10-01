// This Page To Improve The Shape Of Data

import Link from "next/link"

type Props = {
    result: Result,
}

export default function Item({ result }: Props) {
    // this will appear if the image not found
    const itemTextCol = (
        <main className="flex flex-col gap-5">
            <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank"
            className="text-xl font-bold underline"
            >
            {result.title}
            </Link>
            {/* extract === about */}
            <p>{result.extract}</p> 
        </main>
    )
        // The main page
    const content = result?.thumbnail?.source // if founded image with text
    ? (
        <article className="m-4 max-w-lg">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col justify-center">
                    <img
                        src={result.thumbnail.source}
                        alt={result.title}
                        width={result.thumbnail.width}
                        height={result.thumbnail.height}
                        loading="lazy"
                    />
                </div>
                {itemTextCol}
            </div>
        </article>

    )
    : (
        <article className="m-4 max-w-lg">
            {itemTextCol}
        </article>
    )

    return content
}