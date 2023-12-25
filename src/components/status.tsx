export function Status(props: { status: 'online' | 'offline' }){
    const bgColor = props.status === 'online' ? 'bg-green-500' : 'bg-red-500'

    return (
        <div className={`${bgColor} w-4 h-4 rounded-full `} />
    )
}