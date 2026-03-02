// src/services/bookService.js
import axios from 'axios'

const BASE_URL = 'https://openlibrary.org'

export const searchBooks = async (query) => {
    const response = await axios.get(`${BASE_URL}/search.json`, {
        params: {
            q: query,
            limit: 20
        }
    })

    return response.data.docs.map(book => ({
        titulo: book.title,
        autor: book.author_name?.[0] ?? 'Autor desconhecido',
        descricao: book.first_sentence?.[0] ?? 'Descrição não disponível',
        capa: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : null
    }))
}