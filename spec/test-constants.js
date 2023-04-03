module.exports = class TestConstants {
    
    testPort = '8080';

    testFileContent = '65%\n80gb';

    testResultObject = {
        port: '8080',
        cpuUsage: '65%',
        freeMemory: '80gb'
    };

    testResultJson = '{' +
        '"port":"8080",' +
        '"cpuUsage":"65%",' +
        '"freeMemory":"80gb"' +
    '}';

    testQueryString = 'port=8080';

    testLogPath = './request-log/test-log.txt';

}
