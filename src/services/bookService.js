import axios from 'axios'

const BASE_URL = 'https://openlibrary.org'

export const searchBooks = async (query, limit = 20) => {
    const response = await axios.get(`${BASE_URL}/search.json`, {
        params: {
            q: query,
            limit: limit * 2,
            sort: 'readinglog'
        }
    })

    const livros = response.data.docs.map(book => ({
        titulo: book.title,
        autor: book.author_name?.[0] ?? 'Autor desconhecido',
        descricao: book.first_sentence?.[0] ?? 'Descrição não disponível',
        capa: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : null,
        leituras: book.readinglog_count ?? 0
    }))

    return livros
        .sort((a, b) => b.leituras - a.leituras)
        .slice(0, limit)
}