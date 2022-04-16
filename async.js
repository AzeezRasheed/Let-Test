async function Async() {
    const url = fetch("https://jsonplaceholder.typecode.com/todos/1")
    const res = await(url)
    const data = res.json()
    console.log(data)

}

Async()