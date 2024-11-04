export default function LinkElement(props){

    return(
        <div className="flex flex-wrap">
            <a className="text-lg font-semibold hover:bg-zinc-700 hover:text-white rounded-2xl p-2 transform duration-500" href={props.link}>{props.text}</a>
        </div>
    )

}