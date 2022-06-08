//[CRUD] JS BASICO

const minTwitter = {
    usuarios: [
        {
            username: 'bedibrian'
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'bedibrian',
            content: 'Meu primeiro tweet'
        }
    ],
};

//CREATE
function criaPost(dados) {
    minTwitter.posts.push({
        id: minTwitter.posts.length + 1, //aumentar o número do ID
        owner: dados.owner,
        content: dados.content
    });
}
criaPost( {owner: 'bedibrian', content: 'Segundo post' });
criaPost( {owner: 'bedibrian', content: 'Terceiro Tweet' });
//console.log(minTwitter.posts)

//READ
function verPost() {
    return minTwitter.posts;
}
console.log(verPost())

//UPDATE
function atualizaContPost(id, novoConteudo) {
    const postAtualizado = verPost().find((post) => {
        return post.id === id;
    });
    console.log(postAtualizado)
    postAtualizado.content = novoConteudo
}
atualizaContPost(1, 'Novo conteúdo do post')

//DELETE
function apagaPost (id) {
    const listaPostAtualizada = verPost().filter((postAtual) => {
        return postAtual.id !== id;
    })
    minTwitter.posts = listaPostAtualizada;
}
apagaPost(3);
console.log(verPost());