import CopyButton from '../../components/copy-button'

export default function Pix() {
  const textToCopy = '(45) 99965-9813'

  return (
    <>
      <div className="mx-auto h-screen flex flex-col flex-wrap items-center justify-center max-w-3xl">
        <h2 className="text-2xl my-5 font-bold">Chave Pix:</h2>
        <div className="flex flex-wrap items-center justify-between rounded-md border px-3 py-2 min-w-[300px]">
          <p className="mr-3 font-medium">{textToCopy}</p>
          <CopyButton textToCopy={textToCopy} />
        </div>
        <p className="whitespace-normal pt-5 font-medium text-center">
          Copie a chave pix e cole no aplicativo do seu banco.
        </p>
      </div>
    </>
  )
}
