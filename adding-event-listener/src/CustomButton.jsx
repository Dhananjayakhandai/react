export default function CustomButton({ onclick }) {
    return (
        <>
            <button style={
                {
                    backgroundColor: 'red',
                    padding: '10px 20px 30px',
                    borderRadius: '5px'
                }
            }
                onclick={onclick}
            >
                CustomButton
            </button>
        </>
    )
}