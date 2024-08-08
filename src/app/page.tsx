import NavBar from '../components/common/nav-bar'
import Hero from '../components/index/hero'
import Card from '../components/index/card'
import Footer from '../components/common/footer'

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className='flex flex-col items-center'>
        <Hero />
        <Card />
        <Footer />
      </div>
    </main>
  );
}
