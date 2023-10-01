import getInfoFromWikipedia from "@/lib/getInfoFromWikipedia"
import Item from "./component/Item"

type Props = {
    params:{
        searchTerm: string,
    }
}
// To improve the show and appear your name searched in the title
export async function generateMetadata({params: {searchTerm}}: Props){
  const wikiData: Promise<SearchResult> = getInfoFromWikipedia(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll("20%", " ")

  if (!data.query?.pages){
    return{
      title: `${displayTerm} Not Found`
    }
  }

  return{
    title: displayTerm.toUpperCase(), // To Change The Name Title To Capital
    description: `This Page Of ${displayTerm}`
  }
}

export default async function searchResult({params: {searchTerm}}: Props) {
  const wikiData: Promise<SearchResult> = getInfoFromWikipedia(searchTerm)
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages // results is object contain information

  const content = (
    <main className="bg-slate-300 min-h-screen max-w-3xl mx-auto py-5">
      {results
      ? Object.values(results).map(result =>(
        // <div>{JSON.stringify(result)}</div> // JSON.stringify() ==> covert javascript object To Data
        <Item key={result.pageid} result={result} />
      ))
    :
    <h1 className="flex justify-center items-center text-3xl text-red-600">{`${searchTerm} Not Found`}</h1>
    }
    </main>
  )
  return content
}