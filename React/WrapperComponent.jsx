// A Card Component takes an inner component as a prop and renders it by adding border to it

export function WrapperComponent() {

    return (
        <div>
            <CardWrapper innerComponent={<TextComponent />} />
        </div>

    )
}


function CardWrapper({ innerComponent }) {
    return (
        <div style={{ border: "2px solid black" }}>
            {innerComponent}
        </div>
    )
}

function TextComponent() {
    return (
        <div>
            <h1>Hi there !</h1>
        </div>
    )
}

