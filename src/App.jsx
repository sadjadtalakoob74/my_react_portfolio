import {CORE_CONCEPTS} from './data.js';
import {EXAMPLES} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButtons.jsx';
import {useState} from 'react';


function App() {
    const [selectedJob, setSelectedJob] = useState('Yallow');

    function handleClick(selectedButton) {
        setSelectedJob(selectedButton);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id='core-concepts'>
                    <h2>Work Experience</h2>
                    <ul>
                        <CoreConcepts {...CORE_CONCEPTS[0]} />
                        <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description}
                                      image={CORE_CONCEPTS[1].image}/>
                        <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description}
                                      image={CORE_CONCEPTS[2].image}/>
                        <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}
                                      image={CORE_CONCEPTS[3].image}/>
                    </ul>
                </section>
                <section id='examples'>
                    <h2>
                        Projects
                    </h2>

                    <menu>
                        <TabButton label='Yallow' onSelect={() => handleClick('Yallow')}></TabButton>
                        <TabButton label='Dartil' onSelect={() => handleClick('Dartil')}></TabButton>
                        <TabButton label='TOK' onSelect={() => handleClick('TOK')}></TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedJob].title}</h3>
                        <p>{EXAMPLES[selectedJob].description}</p>
                        <pre>
              <code>{EXAMPLES[selectedJob].code}</code>
            </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;