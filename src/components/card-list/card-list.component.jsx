function CardItem(props){
    return (
    <li className="col-span-1 flex flex-col text-center bg-gray-100 rounded-lg shadow divide-y divide-gray-200 m-2">
        <div className="flex-1 flex flex-col p-8">
          <img className="w-24 h-24 flex-shrink-0 mx-auto rounded-full" src={`https://robohash.org/${props.item.id}/?set=set3`} alt="" />
          <h2 className="mt-6 text-gray-900 text-xl font-medium">{props.item.name}</h2>
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-gray-500 text-sm">{props.item.title}</dd>
            <dt className="sr-only">Email</dt>
            <dd className="text-gray-500 text-sm">{props.item.email}</dd>
          </dl>
        </div>
      </li>
    );
}

export default function CardList(props) {
    return (
        <ul className="flex-grow px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {props.items.map((item) => <CardItem key={item.email} item={item} />)}
        </ul>
    );
}