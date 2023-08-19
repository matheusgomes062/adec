import ColorSchemeToggleButton from '@/components/color-scheme-toggle-button'

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Adec em Cristo</h1>
        {/* <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav> */}
        <div className="flex items-center justify-center mt-3">
          <ColorSchemeToggleButton></ColorSchemeToggleButton>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  )
}