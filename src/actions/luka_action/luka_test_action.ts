import * as Hub from "../../hub"
import * as winston from "winston"

// const WEATHER_API_URL = ""

export class LukaAction extends Hub.Action {

    name = "luka_action"
    label = "Luka Action"
    description = "This is my test action"
    iconName = "google/drive/google_drive.svg"
    params =[
        {
            name: "weather_api_email",
            label: "weather api email",
            required: true,
            sensitive: false,
            description: "This is the email you use for rapid api"
        }, {
            name: "weather_api_key",
            label: "daily weather api key",
            required: true,
            sensitive: true,
            description: "Get your API key from Rapid API"
        }
    ]
    supportedActionTypes = [Hub.ActionType.Query]
    supportedFormats = [Hub.ActionFormat.Csv, Hub.ActionFormat.Html]
    usesStreaming = false
    // minimumSupportedLookerVersion = "7.10.8"

    async execute(request: Hub.ActionRequest) {
        //
        winston.info(JSON.stringify(request.attachment))
        return new Hub.ActionResponse({message: "haha", success:true})
    }
}

Hub.addAction(new LukaAction())
