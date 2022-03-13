import * as React from "react";
import { Upload } from "@progress/kendo-react-upload"



export default function SuggestionUpload() {


    const [file, setFile] = React.useState()


    const onAdd = event => {
        console.log(event.newState);
        // setState({
        //     files: event.newState
        // });
    };

    const onRemove = event => {
        // setState({
        //     files: event.newState
        // });
    };

    const onProgress = event => {
        // setState({
        //     files: event.newState
        // });
    };

    const onStatusChange = event => {
        // setState({
        //     files: event.newState
        // });
    };

    const handlePaste = e => {
        if (e.clipboardData.files.length) {
            const fileObject = e.clipboardData.files[0];
            const file = {
                getRawFile: () => fileObject,
                name: fileObject.name,
                size: fileObject.size,
                status: 2,
                progress: 0
            };

            // const filesState = files.map(f => ({ ...f }));
            // filesState.push(file);

            console.log(file)
        } else {
            alert('No image data was found in your clipboard. Copy an image first or take a screenshot.');
        }
    };


    return (

        <div
            onPaste={handlePaste}
        >
            <Upload
                autoUpload={false}
                batch={false}
                multiple={true}
                file={file}
                onAdd={onAdd}
                onRemove={onRemove}
                onProgress={onProgress}
                onStatusChange={onStatusChange}
                withCredentials={false}
                saveUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/save"}
                removeUrl={
                    "https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
                }
            />
            <div style={{ marginTop: 5, padding: 10, fontStyle: 'italic', color: 'red', border: '1px solid red', height: 500 }}>Paste Area</div>
        </div>

    )
}

