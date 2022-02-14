import { Button, Container, Form, Input } from '../../components/AddBooksComponents/index';
import api from '../../service/api';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function AddBook(){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ cover: '', title: '', tag: '', price: ''});

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const promise = api.addBook({
        ...formData
        });

        promise.then(() => {
        navigate("/");
        });
        promise.catch(() => {
        alert('Erro, tente novamente');
        });
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Capa"
                    name="cover"
                    onChange={handleChange}
                    value={formData.cover}
                    required
                />
                <Input
                    type="text"
                    placeholder="Título"
                    name="title"
                    onChange={handleChange}
                    value={formData.title}
                    required
                />
                <Input
                    type="text"
                    placeholder="Categoria"
                    name="tag"
                    onChange={handleChange}
                    value={formData.tag}
                    required
                />
                <Input
                    type="number"
                    placeholder="Valor"
                    name="price"
                    onChange={handleChange}
                    value={formData.price}
                    required
                />

                <Button type='submit'>Adicionar</Button>
            </Form>

        </Container>
    )
}