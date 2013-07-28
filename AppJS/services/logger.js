define(['durandal/system'],
    function (system) {
        var logger = {
            info: info,
            error: error,
            success: success
        };

        return logger;

        function info(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'info');
        }
        
        function success(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'success');
        }

        function error(message, data, source, showToast) {
            logIt(message, data, source, showToast, 'error');
        }

        function logIt(message, data, source, showToast, toastType) {
            source = source ? '[' + source + '] ' : '';
            if (data) {
                system.log(source, message, data);
            } else {
                system.log(source, message);
            }
            if (showToast) {
                if (toastType === 'error') {
                    toastr.error(message);
                } else if (toastType === 'success') {
                    toastr.success(message);
                } else {
                    toastr.info(message);
                }

            }

        }
    }
);