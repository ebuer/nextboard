"use client"
import NDTable from "@/components/table"

const tableData = {
    headers: [
        {
            label: "ID",
            value: "id",
        },
        {
            label: "Name",
            value: "name",
        },
        {
            label: "Surname",
            value: "surname",
        },
        {
            label: "Fullname",
            value: (item: any) => { return `${item.name} ${item.surname}` },
        },
        {
            label: "Actions",
            value: "surname",
            type: "custom",
            template: (item: any) => {
                return (
                    <button
                        type="button"
                        onClick={(e: any) => {
                            e.stopPropagation();
                            alert(`Clicked Custom Field ${item.id}`)
                        }}
                        className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Click {item.id}
                    </button>
                )
            }
        },

    ],
    items: [
        { "id": 1, "name": "John", "surname": "Doe" },
        { "id": 2, "name": "Jane", "surname": "Smith" },
        { "id": 3, "name": "Alice", "surname": "Johnson" },
        { "id": 4, "name": "Bob", "surname": "Williams" },
        { "id": 5, "name": "Charlie", "surname": "Brown" },
        { "id": 6, "name": "Diana", "surname": "Jones" },
        { "id": 7, "name": "Edward", "surname": "Miller" },
        { "id": 8, "name": "Fiona", "surname": "Davis" },
        { "id": 9, "name": "George", "surname": "Garcia" },
        { "id": 10, "name": "Helen", "surname": "Martinez" }
    ],
    onClick: (item: any) => {
        alert('Clicked Row ID ' + item.id)
    }
}


const SimpleTablePage: React.FC = () => {

    return (
        <div className="mt-10 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <NDTable
                headers={tableData.headers}
                items={tableData.items}
                onClickRow={tableData.onClick}
            />
        </div>
    )
}

export default SimpleTablePage