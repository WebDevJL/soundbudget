define([
    'durandal/http'
    ],
    function (http) {
        var dataservice = {
            getJson: getJson,
            submit: submit
        };

        return dataservice;

        function getJson(action) {
            return http.get('rq/Process_request2/'+action, {});
        }
        function submit(action,data) {
            return http.get('rq/Process_request2/'+action, data);
        }
    }
);
