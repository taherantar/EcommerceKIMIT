import { Col, Container, Row } from "react-bootstrap";
import SiteNav from "../layout/SiteNav";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { createRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { ThemeContext } from "../contaxt/ThemeContext";
import { useContext } from "react";




export default function Todo() {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext);

    const [tasks, setTasks] = useState(["one", "two", "three"]);
    const [task, setTask] = useState("")
    let inputRef = createRef();

    let handleTask = (event) => {
        setTask(event.target.value)
    }

    let addNewTask = () => {
        let newTasks = [...tasks, task];
        setTasks(newTasks)
        setTask("")
        inputRef.current.focus()
    }
    return (
        <div className={`mainContent text-center ${i18n.language === "ar" && "rtl"} ${theme.theme === "dark" && "dark"}`}>
            <SiteNav />
            <h2 className="text-center m-4">{t('todo')}</h2>

            <Container className="text-center m-4">
                <Row>
                    <Col sm={9}>
                        <Form.Control type="text" value={task} onChange={handleTask} ref={inputRef} placeholder="Enter email" />
                    </Col>
                    <Col sm={3}>
                        <Button variant="primary" onClick={addNewTask}>
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <ListGroup className="my-4">
                            {
                                tasks.map((task, index) =>
                                    <ListGroup.Item key={index}>{task}</ListGroup.Item>
                                )
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
