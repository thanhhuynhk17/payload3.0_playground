
export default async function TextBlock({ key, content, subContent}) {
    return (
        <>
            <div>key{key}</div>
            <div>content{content}</div>
            <div>subContent{subContent}</div>
        </>
    )
}
