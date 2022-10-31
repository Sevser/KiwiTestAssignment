import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Keyboard = ({ onInput }) => {
    const onInputHandler = (value: number) => {
        if (onInput) {
            onInput(value);
        }
    };

    return (<Container className="m-4">
        <Row
            className="mb-2">
            <Col xs={4}>
                <Button
                    className="w-100"
                    disabled
                    variant="outline-primary">
                    1
                </Button>
            </Col>
            <Col xs={4}>
                <Button
                    className="w-100"
                    onClick={() => onInputHandler(2)}
                    variant="outline-primary">
                    2 | a b c
                </Button>
            </Col>
            <Col xs={4}>
                <Button
                    className="w-100"
                    onClick={() => onInputHandler(3)}
                    variant="outline-primary">
                    3 | d e f
                </Button>
            </Col>
        </Row>
        <Row
            className="mb-2">
            <Col xs={4}>
                <Button
                    className="w-100"
                    onClick={() => onInputHandler(4)}
                    variant="outline-primary">
                    4 | g h i
                </Button>
            </Col>
            <Col xs={4}>
                <Button
                    className="w-100"
                    onClick={() => onInputHandler(5)}
                    variant="outline-primary">
                    5 | j k l
                </Button>
            </Col>
            <Col xs={4}>
                <Button
                    className="w-100"
                    onClick={() => onInputHandler(6)}
                    variant="outline-primary">
                    6 | m n o
                </Button>
            </Col>
        </Row>
        <Row>
            <Col xs={4}>
                <Button
                    className="w-100"
                    onClick={() => onInputHandler(7)}
                    variant="outline-primary">
                    7 | p q r s
                </Button>
            </Col>
            <Col xs={4}>
                <Button
                    className="w-100"
                    onClick={() => onInputHandler(8)}
                    variant="outline-primary">
                    8 | t u v
                </Button>
            </Col>
            <Col xs={4}>
                <Button
                    className="w-100"
                    onClick={() => onInputHandler(9)}
                    variant="outline-primary">
                    9 | w x y z
                </Button>
            </Col>
        </Row>
    </Container>)
};

export default Keyboard;