define([
    'durandal/http'
    ],
    function (http) {
        var dataservice = {
            getJson: getJson,
            post: post
        };

        return dataservice;

        function getJson(action) {
            return http.get('rq/Get_json/'+action, {});
        }
        function post(action,data) {
            return http.post('rq/Get_json/'+action, data);
        }
    }
);