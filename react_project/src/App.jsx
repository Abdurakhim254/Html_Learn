import { Header } from './header/header'
import { About } from './about/about'
import { Customers } from './customers/customers'
import { Contact } from './contact/contact'
import { Footer } from './footer/footer'


function App() {

  return (
    <>
    <div>
     <Header/>
     <About/>
     <Customers/>
     <Contact />
     <Footer/>
    </div>
    </>
  )
}

export default App
