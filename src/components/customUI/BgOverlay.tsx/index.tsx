type TBgOverlay = {
    url: string
}

export function BgOverlay({ url }: TBgOverlay) {
    console.log(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}${url}`)
    return (
        <div className="absolute inset-0">
            <img src={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}${url}`} className="w-screen h-screen object-cover" />

            <div
                className={`
            absolute inset-0
            bg-gradient-to-t
            from-base60 to-[rgba(29,29,27,0.5)]
            h-screen w-screen
        `}
            />
        </div>
    )
}

export default BgOverlay
