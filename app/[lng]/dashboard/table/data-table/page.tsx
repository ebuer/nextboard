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
            // value: (item: any) => {return `${item.name} ${item.surname}`},
            value: "name",
        },
        {
            label: "Surname",
            // value: (item: any) => {return `${item.name} ${item.surname}`},
            value: "surname",
            type: "custom",
            template: (item: any) => {
                return (
                    <div className="text-green-600">customized field {item.surname}</div>
                )
            }
        },
    ],
    items: [
        {
            id: 1,
            name: "test",
            surname: "asd"
        },
        {
            id: 2,
            name: "test 2",
            surname: "asd"
        }
    ],
    onClick: (item: any) => {
        alert('item id ' + item.id)
    }
}


const DataTablePage: React.FC = () => {

    return (
        <div className="mt-10 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <NDTable
                type="data"
                headers={tableData.headers}
                items={tableData.items}
                onClickRow={tableData.onClick}
            />
        </div>
    )
}

export default DataTablePage