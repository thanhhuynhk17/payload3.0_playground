
export default function ArrayTextBlock({ key, array }) {
    return (
        <>
            <div>key{key}</div>
            <div>array{JSON.stringify(array)}</div>
        </>
    )
}