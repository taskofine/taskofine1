import "../styles/globals.css";
import Nav from  "../components/Nav";
import Provider from '../components/Provider';


export const metadata = {
  title: "Taskofine",
  description: "Manage your tasks in one place"  
}

const RootLayout = ({ children }) => {
 
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className='main'>
            <div className='gradiant'/>    
           </div>
          <main className='app'>
            <Nav/>
            {children}      
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout