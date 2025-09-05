export default function App1() {

    function handleClick(e) {
        console.log("button clicked")
        console.log('e', e)
    }

    const sayHii = (e) => {
        console.log('e', e)

    }

    const sayHello = (e) => {
        console.log('helooooooooo')

    }
    return (
        <>
            {/* <button onClick={(handleClick)}>click me</button> */}

            <button onClick={(e) => console.log('e', e)}>click me</button>
            <button onClick={(e) => sayHii()}>click me</button>

            <button onClick={() => sayHii(e)}>click me!!</button>
            <br />  <br />
            <CustomButton onClick={sayHello} />
        </>

    )
}
