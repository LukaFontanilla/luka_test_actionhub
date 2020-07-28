import * as Hub from "../../hub"
import * as winston from "winston"

export class LukaAction extends Hub.Action {
    name = "luka_action"
    label = "Luka Action"
    description = "This is my test action"
    iconName = "google/drive/google_drive.svg"
    params =[{
        name: "test_key",
        label: "Test this key",
        required: true,
        sensitive: true,
        description: "this is a test"
    }]
    supportedActionTypes = [Hub.ActionType.Query]
    supportedFormats = [Hub.ActionFormat.Csv, Hub.ActionFormat.Html]
    usesStreaming = false
    minimumSupportedLookerVersion = "7.10.8"

    async execute(request: Hub.ActionRequest) {
        //
        winston.info(JSON.stringify(request.attachment))
        return new Hub.ActionResponse({success:true, message: "hahaha"})
    }
}

Hub.addAction(new LukaAction())

