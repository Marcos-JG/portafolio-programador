import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes'

export default function App() {
  return (
    <div className="mx-auto flex min-h-svh w-[1126px] max-w-full flex-col border-x border-gray-200 box-border dark:border-gray-700">
      <Header />
      <main className="flex flex-1 flex-col">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
