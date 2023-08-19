import CopyButton from './components/copy-button'
export default function Home() {
  const textToCopy = '(45) 99965-9813'

  return (
    <>
      <div className="mx-2 flex flex-col flex-wrap items-center justify-between max-w-3xl mx-auto">
        <h2 className="text-2xl my-5 font-bold">Chave Pix:</h2>
        <div className="flex flex-wrap items-center justify-between rounded-md border px-3 py-2 min-w-[300px]">
          <p className="mr-3 font-medium">{textToCopy}</p>
          <CopyButton textToCopy={textToCopy} />
        </div>
      </div>
    </>
  )
}
