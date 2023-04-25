import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
            <h2 className='mt-3'>Clientes</h2>
            <Row className='mt-3'>
                <Col sm="12" md="2" className='text-center'>
                    <img src="../image/anderson.jpg" alt="Foto do depoimento" className='rounded' class="img-thumbnail" />
                </Col>
                <Col sm="12" md="10">
                    <strong>Anderson Assum</strong>
                    <p id='fcol'>
                        Com a API Tech Jogos News, posso incorporar facilmente as últimas notícias e análises de jogos em meu aplicativo móvel.<br />
                        É muito eficiente e o suporte técnico é excelente. Estou muito feliz com o resultado final e recomendo essa API para quem procura uma solução fácil para integrar notícias de jogos em seu aplicativo.  "
                    </p>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col sm="12" md="2" className='text-center'>
                    <img src="../image/eliseu.enc" alt="Foto do depoimento 2" className='rounded' class="img-thumbnail" />
                </Col>
                <Col sm="12" md="10">
                    <strong>Eliseu Machado</strong>
                    <p id='fcol'>
                        A Tech Jogos News me permitiu integrar facilmente as últimas notícias e análises de jogos em meu aplicativo móvel. <br/>
                        É incrivelmente eficiente e o suporte técnico foi excelente. Estou muito feliz com o resultado final e recomendo esta API para quem procura uma solução fácil para integrar notícias de jogos em seus aplicativos.
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default Depoimentos