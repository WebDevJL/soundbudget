define([
    'durandal/http'
    ],
    function (http) {
        var dataservice = {
            getJson: getJson,
            remove: remove,
            add: add,
            update: update
        };

        return dataservice;

        function getJson(action) {
            return http.get('rq/Process_request2/'+action, {});
        }
        function remove(action,data) {
            return http.get('rq/Process_request2/'+action, data);
        }
        function add(action,data) {
            return http.get('rq/Process_request2/'+action, data);
        }
        function update(action,data) {
            return http.get('rq/Process_request2/'+action, data);
        }
    }
);
