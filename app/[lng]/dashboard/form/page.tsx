import Form from "@/components/form"




const FormExample = {
    endpoint: "test",
    items: {
        testInput: {
            type: "input",
            label: "input clasic field",
            name: "testInput"
        },
        testTextarea: {
            type: "textarea",
            label: "textarea field",
            col: "12",
            name: "testTextarea"
        }
    },
    // onSuccess: () => {}, // Add this line
    // onItemChange: () => {}
}


const FormPage: React.FC = () => {






    return (
        <div>
            <Form {...FormExample} />
        </div>
    )
}

export default FormPage