import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { getRandomSections } from './random'


function App() {

    const sections = getRandomSections()

    return (
        <div className="App">
            <header className='p-3 mb-3 border-bottom'>
                <h4>Vascar Solutions <small className='text-muted'>Code Challenge</small></h4>
            </header>
            <main className='main-container'>
                <ul className="nav flex-column border-right side-menu">
                    {
                        sections.map((section) => (
                            <li className="nav-item" key={section.id}>
                                <a className="nav-link" href={"#" + section.id}>{section.title}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='p-3'>
                    {sections.map((section) => (
                        <section key={section.id} id={section.id}>
                            <h4 className='border-bottom pb-3 mb-3'>{section.title}</h4>
                            <p>{section.paragraphs}</p>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
