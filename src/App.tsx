import {useRef, useEffect} from 'react';
import './App.css'

function useScrollReveal(selector: string) {
useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const reveal = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    };
    reveal();
    window.addEventListener('scroll', reveal);
    return () => window.removeEventListener('scroll', reveal);
}, [selector]);

}

function App() {


    const dialogRef = useRef<HTMLDialogElement>(null);

    const footerMenu1: string[] = [
        "Explore",
        "Home",
        "About",
        "Code Editor"
    ];

    const footerMenu2: string[] = [
        "Birthday Fun",
        "Birthday Card",
        "Confetti",
        "Gallery"
    ];

    const openModal = () => {
        dialogRef.current?.showModal();
    };

    // Función para cerrar el modal
    const closeModal = () => {
        dialogRef.current?.close();
    };

    useScrollReveal('.scroll-reveal');

    return (
        <div className="container">
            <header>
                <nav>
                    <div className="logo-section">
                        <span><i className="fa-brands fa-react"></i></span>
                    </div>
                    <div className="button-section">
                        <button>See Code</button>
                    </div>
                </nav>
            </header>
            <main>
                <div className="main-information">
                    <div className="info">
                        <h2 style={{fontSize: "2.5rem"}}>Happy Birthday, Vianka!</h2>
                        <h2 style={{fontSize: "2.5rem", color: "#999999"}}>React code. Confetti y Torta.</h2>
                    </div>
                </div>
                <div className="image-section image-section-1">
                    <div className="image-element"></div>
                </div>
                <div className="image-section image-section-2">
                    <div className="image-element"></div>
                </div>
                <section>
                    <div className="section-part section-part-1">
                        <div className="text-part">
                            <h3>Who is Chaeyoung?</h3>
                            <p>
                                채영은 1999년 4월 23일 대한민국 서울에서 태어났습니다. 그녀는 어렸을 때부터 공연 예술에 관심이 많았고 어린이 잡지의 모델로 활동했습니다.</p>
                        </div>
                        <div className="image-part">
                            <div className="image-element"></div>
                        </div>
                    </div>
                    <div className="section-part section-part-2">
                        <div className="text-part">
                            <h3>Confetti effect.</h3>
                            <p>
                                채영은 그림 그리기, 음악 듣기, 농구를 좋아합니다. 스타일은 어두운 색 옷과 반지 같은 액세서리를 선호하지만, 파스텔 색상에도 끌립니다.</p>
                        </div>
                        <div className="image-part">
                            <div className="image-element"></div>
                        </div>
                    </div>
                    <div className="section-part section-part-3">
                        <div className="text-part">
                            <h3>Typescript and React</h3>
                            <p>First webpage with Typescript and React such as Vianka's gift</p>
                        </div>
                        <div className="image-part">
                            <div className="image-element"></div>
                        </div>
                    </div>
                    <div className="birthday-section">
                        <div className="information-section">
                            <h3>Open the Birthday Card.</h3>
                            <p>Share the celebration with Chaeyoung!</p>
                            <button onClick={openModal}>Open GiftCard</button>
                        </div>
                    </div>
                </section>
                <dialog ref={dialogRef}>
                    <h3>FELIZ CUMPLE AMIGA!!!</h3>
                    <p>Feliz cumpleaños amiga, espero que la hayas pasado bien en este dia tan especial para ti, eres
                        una persona muy divertida y chistosa aparte de inteligente, de igual forma, quiero que sepas lo
                        especial que eres. A pesar del poco tiempo que pasamos juntos, eres una amiga increible para mi,
                        siempre tratando de sacar chiste a todo lo que hago y sacandome una sonrisa. Siento mucho no
                        tener
                        mucho que decir pero espero que esta página exclusivamente para ti sea suficiente para demostrar
                        mi felicitación hacia ti.</p>
                    <button onClick={closeModal}>Cerrar</button>
                </dialog>
            </main>
            <footer>
                <div className="logo-section">
                    <span><i className="fa-brands fa-react"></i></span>
                </div>
                <div className="menus-section">
                    <ul className="menu-1">
                        {footerMenu1.map((item, i) => {
                            return <li key={i}>{item}</li>;
                        })}
                    </ul>
                    <ul className="menu-2">
                        {footerMenu2.map((item, i) => {
                            return <li key={i}>{item}</li>;
                        })}
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default App
