# Server

## api created using ExpressJS framework, firebase database
#There are 3 working endpoints in this api

#GET /api/ducks_report
#this api will return a list of reports object:
##
{
        "id": "syxDH9X5CYS7luxN9764",
        "report_owner_name": "Roberta",
        "ducks_time": "15:30",
        "ducks_food": "Rice",
        "ducks_where": "in the lake",
        "ducks_how_many": 15,
        "ducks_how_much_food": "11 pounds",
        "created_timestamp": "28/01/2022 23:22"
    },
    {
        "id": "QL1uwYETq9V0hct5hxNt",
        "report_owner_name": "Vitor",
        "ducks_time": "16:30",
        "ducks_food": "Beans",
        "ducks_where": "lake again",
        "ducks_how_many": 15,
        "ducks_how_much_food": "11 pounds",
        "created_timestamp": "28/01/2022 23:23"
    }
]
#if there isn't any report in the database, the api will return a 404 with the json body response:
{
    "Error": "No reports where found!"
}

#GET /api/duck/:id
#this api will return a single report object:
##
{
    "id": "xvVlFjKkNdtulqarhm99",
    "report_owner_name": "Caleb",
    "ducks_time": "16:30",
    "ducks_food": "Beans",
    "ducks_where": "lake again",
    "ducks_how_many": 15,
    "ducks_how_much_food": "11 pounds",
    "created_timestamp": "31/01/2022 17:22"
}
#if there is no report with that id, the api will return a 404 with the json body response:
{
    "Error": "Report with the given ID not found"
}

#POST /api/duck
#this is the api to create new reports, the body must be a json type, with the following fields:
##
{
    "report_owner_name": "Test",
    "ducks_time": "16:30",
    "ducks_food": "Beans",
    "ducks_where": "lake again",
    "ducks_how_many": 15,
    "ducks_how_much_food": "11 pounds"
}
#if the report was successfuly created the api will return a 200 with the following msg:
##
{
    "MSG": "Report Created"
}