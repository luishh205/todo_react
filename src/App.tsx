import Footer from "./Components/Footer";
import Header from "./Components/Header";
import styles from "./App.module.css"
function App() {
  return (
   <div>
      <Header/>
        <main className={styles.main}><h1>Conteúdo...</h1></main>
      <Footer/>
   </div>
  );
}

export default App;
